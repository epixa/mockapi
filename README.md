# Strapi - Bootstrap your api

A quick and dirty API framework, strapi is best suited for rapidly building
API prototypes or mock APIs. It's built on [express](http://expressjs.com/),
but its specifically tailored for building REST APIs that return JSON.

## Installation

```js
$ npm install -g strapi
```

## Usage / Getting Started

Simply run `strapi` from within a working directory, run `npm install`, and
your api is bootstrapped and ready to go:

```
$ cd /path/to/your/strapi/project
$ strapi
$ npm install
```

## Creating your own routes

While the included "Hello World" route is crazy awesome, you're bound to want
to build in your own routes.  It is your API, after all!

You can create all of your routes in the `routes` directory. For convenience,
all routing modules in that directory are loaded by default into the `routes`
variable in `app.js`.  All you need to do is create your route definitions via
express:

**routes/myRoute.js**
```js
exports.get = function(req, res){
  res.json({ foo: "bar" });
};
```

**app.js**
```js
app.get('/my/route', routes.myRoute.get);
```

## Run the server

No surprise here, just run `app.js` through node:

```
$ node app.js
```
