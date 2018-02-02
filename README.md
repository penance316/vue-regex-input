# vue-regex-input

A vue input component that only allows input based on a passing regex

## Install

```bash
npm install vue-regex-input
```

## Quick start

```html
<vue-regex-input class="some-class"
               :regExp="/^\d*(\.\d{0,2})?$/g" //match alphanumerics
               @input="handleInput"
               @change="handleChange"
               v-model="val">
</vue-regex-input>
```

### Add to build

As this project uses the newer vue-loader v13+ you need to import the module in a slightly different way.
https://github.com/vuejs/vue-loader/releases/tag/v13.0.0

```javascript
// before
const Foo = require('./Foo.vue')

// after
const Foo = require('./Foo.vue').default

// alternatively just use the ES6 module style

import vSelect from 'vue-regex-input';
Vue.component( 'vue-regex-input', vSelect );

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

