## Setup

Make sure to install the dependencies:

```bash
npm ci
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

When using Docker

```bash
docker-compose -f docker-compose.dev.yml up
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

## Unit tests

```bash
npm run test:unit
```

## E2e tests

Spin up dev server locally or in Docker. And start Cypress tests

```bash
npm run test:e2e
```

Or open Cypress UI

```bash
npm run cypress:open
```

Running e2e tests in Docker

```bash
docker-compose -f docker-compose.e2e.yml up --exit-code-from cypress
```
