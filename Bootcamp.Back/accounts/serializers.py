from rest_framework import serializers
from .models import CustomUser


class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ("nome", "telefone")

    def create(self, validated_data):
        # Cria o usuário apenas com nome e telefone, sem senha
        user = CustomUser.objects.create_user(
            nome=validated_data["nome"],
            telefone=validated_data["telefone"],
        )
        user.save()
        return user


class LoginSerializer(serializers.Serializer):
    nome = serializers.CharField(required=True)
    telefone = serializers.CharField(required=True)

class UserScoreSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('nome', 'pontuacao')