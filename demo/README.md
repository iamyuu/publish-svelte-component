# svelte-component-template

A base for building shareable Svelte components written in TypeScript.

This is based on [sveltejs/component-template](https://github.com/sveltejs/component-template) and allows consumers to import the .svelte components without requiring TypeScript (see ["Consuming Components"](#consuming-components) below).

```bash
npx degit iamyuu/svelte-component-template my-component
cd my-component
npm install # or yarn
```

Your component's source code lives in `src/Component.svelte`.

You can create a package that exports multiple components by adding them to the `src` directory and editing `src/index.ts` to reexport them as named exports.

## Setting Up

- Run `npm init` (or `yarn init`)
- Replace this README with your own

## Consuming Components

Your package.json has a `"svelte"` field pointing to `src/index.js`, which allows Svelte apps to import the source code directly, if they are using a bundler plugin like [rollup-plugin-svelte](https://github.com/sveltejs/rollup-plugin-svelte) or [svelte-loader](https://github.com/sveltejs/svelte-loader) (where [`resolve.mainFields`](https://webpack.js.org/configuration/resolve/#resolve-mainfields) in your webpack config includes `"svelte"`). **This is recommended.**

For everyone else, `npm run build` will bundle your component's source code into a plain JavaScript module (`dist/index.mjs`) and a UMD script (`dist/index.js`). This will happen automatically when you publish your component to npm, courtesy of the `prepublishOnly` hook in package.json.

## Publishing to [npm](https://www.npmjs.com)

- [Creating and publishing scoped public packages](https://docs.npmjs.com/creating-and-publishing-scoped-public-packages)
- [Creating and publishing unscoped public packages](https://docs.npmjs.com/creating-and-publishing-unscoped-public-packages)
