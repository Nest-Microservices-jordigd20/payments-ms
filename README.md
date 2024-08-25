# Payments Microservice

## Development environment

1. Clonate the repository
2. Install the dependencies
3. Create a `.env` based on the `.env.template` file.
4. I'm using hookdeck to manage the stripe webhooks in the local environment.

```bash
hookdeck login
hookdeck listen <port> <source-name>
```

5. Run the application


## Installation

```bash
$ pnpm install
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```