# Rustify

## Project Web Stack

Rustify is a full-stack web framework combining:

- **SolidStart** (frontend): A modern, reactive JavaScript framework for building fast and interactive UIs.
- **Salvo.rs** (backend): A powerful, async Rust web server framework for building robust APIs and web services.
- **Diesel ORM** (database): A safe, efficient Rust ORM for interacting with SQL databases using compile-time checked queries.

## Project Structure
This structure separates your frontend (SolidStart) and backend (Salvo + Diesel) clearly, making it easier to manage dependencies and build pipelines.
```text
my-fullstack-app/
├── backend/                # Salvo.rs API
│   ├── src/
│   │   ├── main.rs         # Server entry point
│   │   ├── models.rs       # Diesel DB models
│   │   ├── schema.rs       # Diesel auto-generated schema
│   │   └── handlers/       # Request handlers
│   ├── Cargo.toml
│   └── .env                # Database URL and config
├── frontend/               # SolidStart
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.ts
├── docker/
│   └── Dockerfile          # Multi-stage Dockerfile
├── .gitignore
├── docker-compose.yml      # Orchestrate Database + API
└── README.md
```

## How Rustify Helps Newbies Adopt Rust for Web Development

- **Clear Structure:** The project is organized with separate folders for models, controllers, and routes, following familiar MVC patterns.
- **Modern Tooling:** Uses popular, production-ready Rust libraries and a modern frontend stack, making it easy to learn best practices.
- **.env Integration:** Environment variables are managed in a `.env` file, similar to other web frameworks, simplifying configuration.
- **Demo Code:** Includes example routes and models to help beginners understand how to build APIs and connect to databases.
- **Type Safety:** Rust’s strong type system and Diesel’s compile-time query checks help prevent common bugs and improve reliability.
- **Documentation:** The README and code comments guide new users through setup and usage, lowering the barrier to entry.

Rustify is designed to be a practical starting point for anyone new to Rust web development, making it easier to build, understand, and scale web applications with confidence.
