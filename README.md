# Unsplash Source ES6
[![Build Status](https://travis-ci.org/divyanshu013/unsplash-source-es6.svg?branch=master)](https://travis-ci.org/divyanshu013/unsplash-source-es6)
[![npm](https://img.shields.io/npm/v/unsplash-source-es6.svg)]()
[![npm](https://img.shields.io/npm/dt/unsplash-source-es6.svg)]()

A minimal ES6 ready Javascript wrapper for Unsplash Source API https://source.unsplash.com/ :camera:

Just install and make use of Unsplash's powerful API without any API keys or client IDs.

## Installation

**Unsplash Source ES6** is available as a node package. Get it via `yarn` or `npm`:

```bash
yarn add unsplash-source-es6
```

-or-

```bash
npm install unsplash-source-es6
```

If using `npm`, you might want to save to your `package.json`:

```bash
npm install --save unsplash-source-es6
```

## Usage

Import the Unsplash Source ES6 library:

```javascript
import UnsplashSourceES6 from 'unsplash-source-es6';
```

Create an object:

```javascript
let unsplash = new UnsplashSourceES6();
```

This object can be used for various API calls.

## APIs

In order to **fetch** the **url** you can chain methods in any order but remember to call `fetch()` at the end of method chain. The `fetch()` call will return the **url** which you can use in your own preferred way such as by using the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) which returns a promise.

### id(photoId)
Sets the photoId to retrieve a particular image:

```javascript
unsplash.id('xyz').fetch();
```

### category(categoryName)
Get a random image url for a particular category:
-  buildings
-  food
-  nature
-  people
-  technology
-  objects

```javascript
unsplash.category('technology').fetch();
```

### user(username)
Get a random image url from a particular user:

```javascript
unsplash.user('divyanshu013').fetch();
```

### liked(username)
Get a random liked image url from a particular user:

```javascript
unsplash.liked('divyanshu013').fetch();
```

### collection(collectionId)
Get a random image url from a particular collection:

```javascript
unsplash.collection('abc').fetch();
```

### size(width, height)
Sets the image dimensions for the image url. If only width is passed, height will be defaulted to the value of width to return a 1:1 size url:

```javascript
unsplash.size(1920, 1080).fetch();
```

### frequency(freq)
Sets the image change frequency:
- daily
- weekly

```javascript
unsplash.frequency('daily').fetch();
```

### search([...tags])
Takes an array of tags as parameter and returns a url with the added tags:

```javascript
unsplash.search(['music', 'guitar']).fetch();
```

All the API calls can be chained in any interesting way to meet your needs. Just remember to call `fetch()` at the end of the chain.

## Extending functionality
The library is quite extensible and can be modified according to your needs. Feel free to clone the repo and send in pull requests.

## Contributing
Clone the project and run the following commands using `yarn` or `npm`.

Install dependencies:
```bash
yarn install
```

Build library:
```bash
yarn build:watch
```

Run tests (maybe in a new terminal window):
```bash
yarn test:watch
```

When adding new functionality to the library tests are run from `/test/library.spec.js`.
