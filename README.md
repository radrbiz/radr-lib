#radr-lib

A JavaScript API for interacting with Radr in Node.js and the browser

[![Build Status](https://travis-ci.org/radr/radr-lib.svg?branch=develop)](https://travis-ci.org/radr/radr-lib) [![Coverage Status](https://coveralls.io/repos/radr/radr-lib/badge.png?branch=develop)](https://coveralls.io/r/radr/radr-lib?branch=develop)

[![NPM](https://nodei.co/npm/radr-lib.png)](https://www.npmjs.org/package/radr-lib)

###Features

+ Connect to a radrd server in JavaScript (Node.js or browser)
+ Issue [radrd API](https://radr.biz/build/radrd-apis/) requests
+ Listen to events on the Radr network (transaction, ledger, etc.)
+ Sign and submit transactions to the Radr network

###In this file

1. [Installation](#installation)
2. [Quick start](#quick-start)
3. [Running tests](#running-tests)

###Additional documentation

1. [Guides](docs/GUIDES.md)
2. [API Reference](docs/REFERENCE.md)
3. [Wiki](https://radr.biz/wiki/Radr_JavaScript_library)

###Also see

+ [The Radr wiki](https://radr.biz/wiki)
+ [radr.biz](https://radr.biz)

##Installation

**Via npm for Node.js**

```
  $ npm install radr-lib
```

**Via bower (for browser use)**

```
  $ bower install radr
```

See the [bower-radr repo](https://github.com/radr/bower-radr) for additional bower instructions


**Building radr-lib for browser environments**

radr-lib uses Gulp to generate browser builds. These steps will generate minified and non-minified builds of radr-lib in the `build/` directory.

```
  $ git clone https://github.com/radr/radr-lib
  $ npm install
  $ npm run build
```

**Restricted browser builds**

You may generate browser builds that contain a subset of features. To do this, run `./node_modules/.bin/gulp build-<name>`

+ `build-core` Contains the functionality to make requests and listen for events such as `ledgerClose`. Only `radr.Remote` is currently exposed. Advanced features like transaction submission and orderbook tracking are excluded from this build.

##Quick start

`Remote.js` ([remote.js](https://github.com/radr/radr-lib/blob/develop/src/js/radr/remote.js)) is the point of entry for interacting with radrd

```js
/* Loading radr-lib with Node.js */
var Remote = require('radr-lib').Remote;

/* Loading radr-lib in a webpage */
// var Remote = radr.Remote;

var remote = new Remote({
  // see the API Reference for available options
  servers: [ 'wss://s1.radr.biz:443' ]
});

remote.connect(function() {
  /* remote connected */
  remote.requestServerInfo(function(err, info) {
    // process err and info
  });
});
```

##Running tests

1. Clone the repository

2. `cd` into the repository and install dependencies with `npm install`

3. `npm test`

**Generating code coverage**

radr-lib uses `istanbul` to generate code coverage. To create a code coverage report, run `npm test --coverage`. The report will be created in `coverage/lcov-report/`.
