from rest_framework import generics, status
from rest_framework.response import Response
from django.contrib.auth import logout
from .models import CustomUser
from .serializers import RegisterSerializer, LoginSerializer, UserScoreSerializer
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView


# Registro usuario
class RegisterView(generics.CreateAPIView):
    queryset = CustomUser.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer


# Login usuario
class LoginView(APIView):
    def post(self, request):
        nome = request.data.get("nome")
        telefone = request.data.get("telefone")

        try:
            # Verifica se o usuário existe
            user = CustomUser.objects.get(nome=nome, telefone=telefone)

            # Armazena o ID do usuário na sessão
            request.session["user_id"] = user.id

            return Response(
                {"message": "Login bem-sucedido!", "user": user.nome},
                status=status.HTTP_200_OK,
            )
        except CustomUser.DoesNotExist:
            return Response(
                {"error": "Usuário não encontrado."}, status=status.HTTP_404_NOT_FOUND
            )


# Lista de usuario - pontos
class UserScoreListView(generics.ListAPIView):
    queryset = CustomUser.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = UserScoreSerializer


# Atualizar ponto usuario
class UpdateScoreWithSessionView(APIView):
    def post(self, request):
        # Pega o ID do usuário da sessão
        user_id = request.session.get("user_id")
        new_score = request.data.get("pontuacao", None)

        if not user_id:
            return Response(
                {"error": "Usuário não autenticado."},
                status=status.HTTP_401_UNAUTHORIZED,
            )

        if new_score is None:
            return Response(
                {"error": "Pontuação não fornecida."},
                status=status.HTTP_400_BAD_REQUEST,
            )

        try:
            # Busca o usuário pelo ID armazenado na sessão
            user = CustomUser.objects.get(id=user_id)
            user.pontuacao += int(new_score)
            user.save()

            return Response(
                {
                    "message": "Pontuação atualizada com sucesso!",
                    "new_score": user.pontuacao,
                },
                status=status.HTTP_200_OK,
            )
        except CustomUser.DoesNotExist:
            return Response(
                {"error": "Usuário não encontrado."}, status=status.HTTP_404_NOT_FOUND
            )


# Sair
class LogoutView(APIView):
    def post(self, request):
        # A função logout remove as informações da sessão do usuário
        logout(request)
        return Response({"message": "Logout bem-sucedido!"}, status=status.HTTP_200_OK)
