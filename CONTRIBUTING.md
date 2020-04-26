# Contributing to Sherl SDK

### Reporting Bugs

- **Do not open a GitHub issue if the bug is a security vulnerability issue**, instead please contact us at support@winzana.com
- **Ensure that the bug has not already been reported**, by searching in GitHub Issues.
- If you didn't find an open issue related to your problem, open a new one. Be sure to add **a title and a clear description** with as much relevant informations as possible.

### Suggesting Enhancements

All enhancements must be associated to a GitHub issue.

#### Local development

##### Installation

Clone the project:

```
git clone https://github.com/Winzana/sherl-sdk-js.git
```

In the project folder, install the dependencies:

```
npm install
```

##### Build

Build the project using the `build` script:

```
npm run build
```

This command will build for all targets. For a specific target, use the following commands:

- `build:commonjs`: CommonJS
- `build:esm`: ES6+
- `build:bundle`: Browser

For watch mode, use the `watch` command:

```
npm run watch
```

Again, for specific targets, use the following commands:

- `build:commonjs:watch`
- `build:esm:watch`
- `build:bundle:watch`

##### Linters

To check code with linters, run:

```
npm run lint
```

To fix linters errors, run:

```
npm run fix
```

##### Link

To install your local package on a local project, run the following command in the project folder:

```
npm link /path-to/sherl-sdk-js
```

For browser testing, you can create a symbolic link to the builded file:

```
ln -s /path-to/sherl-sdk-js/_bundles/sherl-sdk.min.js ./
```

### Pull Requests

## Styleguides

### Project structure

Sherl APIs are developped following multiple patterns including CQRS and DDD.

To follow the idea behind those patterns, the Sherl SDK for JavaScript is structured per domains.

Here is an example for the Product domain:

```
src/product
├── actions
│   ├── get-product.action.ts
│   ├── get-products.action.ts
│   └── index.ts
├── api
│   ├── client.ts
│   └── endpoints.ts
├── index.ts
├── provider.ts
└── types.ts
```

`index.ts` will export the provider to the end user by a method with the name of the domain.

`provider.ts` is the entrypoint of the domain. This file contains a class which will provide methods for domain features and an instance of error factory to manage domains error.

`types.ts` contains types declarations associated to the domain.

The `api` folder contains two files :

- `client.ts` contains a single class with static methods for each API calls.
- `endpoints.ts` contains an object describing API routes.

The `actions` folder contains one file per actions/features and an `index.ts` that will export methods of all files. An action is a method that will:

- Call the API through the client (see `api` folder)
- Transform and return the result

Actions are called by the provider.

### Git Commit Messages

Guidelines for commit messages are based on [Angular contributors guidelines](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-guidelines).

A commit message should be structured as follow:

```
<type>(<scope>): <subject>
```

`<type>`:

- Should be lowercase
- Values:
  - **build**: Changes to build system or external dependencies
  - **ci**: Changes to CI configuration
  - **docs**: Documentation changes
  - **feat**: A new feature
  - **fix**: A bug fix
  - **refactor**: Not a new feature or a bug fix
  - **style**: Changes to code format

`<scope>`:

- Should be lowercase
- "kebab-case"

`<subject>`:

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Reference issues at the end of the line
