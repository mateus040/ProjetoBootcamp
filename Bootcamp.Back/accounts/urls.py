from django.urls import path
from .views import RegisterView, LoginView, LogoutView, UserScoreListView, UpdateScoreWithSessionView

urlpatterns = [
    path("register/", RegisterView.as_view(), name="register"),
    path("login/", LoginView.as_view(), name="login"),
    path("scores/", UserScoreListView.as_view(), name="user-scores"),
    path('update-score/', UpdateScoreWithSessionView.as_view(), name='update-score'),
    path('logout/', LogoutView.as_view(), name='logout'),
]