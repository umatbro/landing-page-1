# Requirements

## Required software

Install [node](https://nodejs.org/en/) and **npm** (it should be installed with `node`).

## Vue CLI

Install [Vue CLI](https://cli.vuejs.org/) with 
```
npm install -g @vue/cli
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# Config file

Project needs `config.ts` file in project's root directory which is not included in source control. This is how config file should look like

```typescript
interface Config {
  mapBoxToken: string;
}

const config: Config = {
  mapBoxToken: '<access.token>',  // get this token here: https://www.mapbox.com/studio/account/tokens/
};

export default config;

```