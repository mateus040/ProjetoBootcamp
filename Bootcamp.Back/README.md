
## Instalação

Instale o python e o pip na sua máquina

Entre na pasta Bootcamp.Back (/ProjetoBootcamp/Bootcamp.Back)

Dentro da pasta execute (para criar o ambiente virtual e não instalar direto na sua máquina):
```bash
  python -m venv env
```

Ative o ambiente virtual:

Windows:
```bash
  .\env\Scripts\activate ou source env/Scripts/activate
```
Linux/macOS:
```bash
  source env/bin/activate
```

Com o ambiente virtual ativado, execute para instalar as dependencias:
```bash
  pip install -r requirements.txt
```

Execute o projeto com:
```bash
  python manage.py setup_project
```
## Documentação da API

#### Registrar usuário
```http
  POST /api/accounts/register/
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `nome` | `string` | **Obrigatório**. |
| `telefone` | `string` | **Obrigatório**. |

#### Login usuário

```http
  POST /api/accounts/login/
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `nome` | `string` | **Obrigatório**. |
| `telefone` | `string` | **Obrigatório**. |

#### Adiciona pontuação ao usuário

```http
  POST /api/accounts/update-score/
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `pontuacao` | `integer` | **Obrigatório**. |

só passamos o parametro "pontuacao" pois ele reconhce o usuario atraves de um ID automático e salva na sessão atual do navegador. Após 30 minutos inativo, esse usuario é desconectado e precisa realizar o login novamente ou quando ele clicar em "Sair"

#### Listar usuarios cadastrados e suas pontuações

```http
  GET /api/accounts/scores/
```

| Resposta   | Tipo       | |
| :---------- | :--------- | :------------------------------------------ |
| `nome` | `string` |
| `pontuacao` | `integer` |

#### Sair da conta

```http
  POST /api/accounts/logout/
```

