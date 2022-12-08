This is a minimal Astro project using the adapter [astro-fastify](https://github.com/matthewp/astro-fastify) created with the purpose of reproducing a problem with Fastify logger serializers in production builds.

Steps to reproduce:

1. Use NodeJS version 16.x
2. Install dependencies with `npm ci`
3. Generate a production build with `npm run build`
4. Run the production build with `node dist/server/entry.mjs`
5. Visit http://localhost:8080
6. Verify that, in the logs, the request object is logged **without** the `browser` key

If the project is run with `npm start` and accessed through http://localhost:3000, the `browser` key is registered in logs as expected, so the problem seems exclusively related to production builds.
