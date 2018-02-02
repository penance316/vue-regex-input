# vue-regex-input

A vue input component that only allows input based on a passing regex

## Quick start

```html
<vue-regex-input class="some-class"
               :regExp="/^\d*(\.\d{0,2})?$/g" //match alphanumerics
               @input="handleInput"
               @change="handleChange"
               v-model="val">
</vue-regex-input>
```

## Development

### npm scripts

To build the library:

```bash
npm run build
```

To build the basic demo:

```bash
npm run demo
```

To start the dev page with hot reloading

```bash
npm run dev
```

To run all tests

```bash
npm test
```

To generate doc file based on jsdoc

```bash
npm run jsdoc
```

### Coverage

coverage threashold is defined in the root package.json. Default test task will check the coverage.

