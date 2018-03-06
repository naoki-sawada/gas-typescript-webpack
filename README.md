# gas typescript webpack

## About

This is an example of writing Google Apps Script in TypeScript and building with webpack.

Please Read at this [Japanease post](https://qiita.com/nsawa/items/96c5300c811856024789).

## Requirements

* Node.js 6.10.0 or heigher

## Install

### install this project

```
$ git clone https://github.com/naoki-sawada/gas-typescript-webpack.git
```

After clone this repository,

```
$ cd gas-typescript-webpack
$ npm intall
(or yarn)
```

### node google apps-script

Please install [node-google-apps-script](https://github.com/danthareja/node-google-apps-script).

```
$ npm install -g node-google-apps-script
```

After isntall `node-google-apps-script`, please read this [quick start](https://github.com/danthareja/node-google-apps-script#quickstart). And you shoud end setup to number 2 of quick start.

Finally, initialize this gapps project.

```
$ gapps init -s build <fileId>
```

## Usage

```
$ npm build
$ npm run upload
```

## Development

If you watnt to use watch mode,

```
$ npm run watch
```
