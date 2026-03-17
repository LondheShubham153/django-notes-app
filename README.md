# Django Notes App

A Docker project with three containers:

- **nginx** - reverse proxy
- **django** - Django REST API + React frontend
- **db** - MySQL

## How to run

1. Ensure a `.env` file exists in the project root with your DB settings (`DB_NAME`, `DB_USER`, `DB_PASSWORD`, `DB_PORT`, `DB_HOST=db_cont`). An example is already in the repo for local development.
2. From the project root, run:
   ```bash
   docker compose up
   ```
3. In your browser, go to **http://localhost** or **http://localhost:8000**.

## NoteThe `.env` file is present in the repository by choice. It only holds database config for local development and does not include sensitive personal credentials.
