import { defineConfig } from 'astro/config';
import fastify from '@matthewp/astro-fastify';

// https://astro.build/config
export default defineConfig({
	output: 'server',
	adapter: fastify({
	  entry: new URL('./api/index.js', import.meta.url),
	  logger: {
		serializers: {
		  req: (req) => {
			return {
			  method: req.method,
			  url: req.url,
			  browser: req.headers['user-agent']
			};
		  },
		},
	  },
	}),
  });
