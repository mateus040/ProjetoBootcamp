from django.core.management.base import BaseCommand
from django.core.management import call_command


class Command(BaseCommand):
    help = "Configura o projeto rodando as migrações e iniciando o servidor"

    def handle(self, *args, **kwargs):
        # Roda as migrações
        self.stdout.write("Executando migrações...")
        call_command("migrate")

        self.stdout.write(self.style.SUCCESS("Setup completo!"))

        # Inicia o servidor Django automaticamente
        self.stdout.write("Iniciando o servidor...")
        call_command("runserver", "0.0.0.0:8000")
