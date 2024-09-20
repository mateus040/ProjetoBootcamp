from django.db import models
from django.contrib.auth.models import (
    AbstractBaseUser,
    BaseUserManager,
    PermissionsMixin,
)


class CustomUserManager(BaseUserManager):
    def create_user(self, nome, telefone, password=None, **extra_fields):
        if not nome:
            raise ValueError("O nome é obrigatório")
        if not telefone:
            raise ValueError("O telefone é obrigatório")
        user = self.model(nome=nome, telefone=telefone, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, nome, telefone, password=None, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)

        return self.create_user(nome, telefone, password, **extra_fields)


class CustomUser(AbstractBaseUser, PermissionsMixin):
    nome = models.CharField(max_length=150, unique=True)
    telefone = models.CharField(max_length=20, unique=True)
    pontuacao = models.IntegerField(default=0)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = CustomUserManager()

    USERNAME_FIELD = "nome"
    REQUIRED_FIELDS = ["telefone"]

    def __str__(self):
        return self.nome
