# Express Typescript Pug Starter
Template project for express applications that uses TypeScript with Pug templates, plus a few other additions, based on [express-generator-typescript](https://github.com/seanpmaxwell/express-generator-typescript). Ideally, the customized project files in this repo would get setup as a new template that could be used by a CLI arg in a fork of express-generator-typescript.

- [Express](https://www.npmjs.com/package/express)
- [TypeScript](https://www.npmjs.com/package/typescript)
- [Pug](https://www.npmjs.com/package/pug)

## What was added?
- Pug views
- AsyncWrapper to add a default handler for uncaught exceptions in async/await route handler functions.
- CORS middleware
- Default error response and 404 middleware

## Setup

- Run: `npm run setup`.


## Available commands for the server.

- Run the server in development mode: `npm run start:dev`.
- Run all unit-tests: `npm test`.
- Run a single unit-test: `npm test -- --testFile="name of test file" (i.e. --testFile=Users)`.
- Check for linting errors: `npm run lint`.
- Build the project for production: `npm run build`.
- Run the production build: `npm start`.
- Run production build with a different env file `npm start -- --env="name of env file" (default is production)`.


## License

[MIT](LICENSE)