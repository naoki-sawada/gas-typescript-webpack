# gas typescript webpack

## About

This is an example of writing Google Apps Script in TypeScript and building with webpack.

Please Read at this [Japanease post](https://qiita.com/nsawa/items/96c5300c811856024789).

## Requirements

* Node.js 6.10.0 or heigher
* [clasp](https://github.com/google/clasp)

## Install

### Install this project

```
$ git clone https://github.com/naoki-sawada/gas-typescript-webpack.git
```

After clone this repository,

```
$ cd gas-typescript-webpack
$ npm intall
(or yarn)
```

### Install and setup the clasp

1. Install the [clasp](https://github.com/google/clasp).

```
$ npm i @google/clasp -g
```

2. Login with your account.

```
$ clasp login
```

3. Create new Google Apps Script.

```
$ clasp create "My Script" --rootDir ./dist
```

## Usage

```
$ npm build
$ npm run push
```

## Development

If you watnt to use watch mode,

```
$ npm run watch
```

## License

[MIT](LICENSE)