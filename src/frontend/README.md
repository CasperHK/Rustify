# Frontend: SolidStart + AuthJS

A SolidJS frontend project using [SolidStart](https://start.solidjs.com) and [AuthJS](https://authjs.dev/) for authentication.

## Getting Started

1. **Install dependencies:**
   ```bash
   pnpm install
   ```

2. **Set up environment variables:**  
   Copy `.env.example` to `.env` and fill in your secrets (see below).

3. **Run the development server:**
   ```bash
   pnpm dev
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000).

4. **Build for production:**
   ```bash
   pnpm build
   pnpm preview
   ```

## AuthJS

Everything you need to build an [AuthJS](https://authjs.dev/) authenticated Solid project, powered by [`solid-start`](https://start.solidjs.com).

## Environment Variables

Create a `.env` file in the root of the frontend directory and set the following:

```
DISCORD_ID=
DISCORD_SECRET=
AUTH_SECRET=b198e07a64406260b98f06e21c457b84
AUTH_TRUST_HOST=true
AUTH_URL=http://localhost:3000
VITE_AUTH_PATH=/api/auth
```

## Useful Links

- [SolidStart Documentation](https://start.solidjs.com)
- [AuthJS Documentation](https://authjs.dev/)
- [Sponsor Create JD App](https://github.com/sponsors/OrJDev)

---

This project was created with the [Solid CLI](https://github.com/solidjs-community/solid-cli).
