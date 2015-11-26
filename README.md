d3.promise
==========

Make d3 data functions use promises instead of callbacks

This library uses ES6 Promise. (http://www.html5rocks.com/en/tutorials/es6/promises/)
To bring browsers that lack a complete promises implementation up to spec compliance, or add promises to other browsers and Node.js, check out the [polyfill](https://github.com/jakearchibald/ES6-Promises#readme) (2k gzipped).

### Installation options

```
bower install d3.promise --save
```

or

```
npm install d3.promise --save
```

This library can be imported using standard `<script>` as well as CommonJS (node.js/browserify) and AMD (such as RequireJS).

Note: Since v1.0.0, the minified output was move from ```src/``` to ```dist/```.

### Example Usage

```
var promise = d3.promise.csv('test.csv');
promise.then(function(data){}, function(error){});

var promise = d3.promise.tsv('test.tsv');
promise.then(function(data){}, function(error){});

var promise = d3.promise.json('test.json')
promise.then(function(data){}, function(error){});

var promise = d3.promise.html('test.html')
promise.then(function(data){}, function(error){});

var promise = d3.promise.text('test.txt')
promise.then(function(data){}, function(error){});

var promise = d3.promise.xml('test.xml')
promise.then(function(data){}, function(error){});

```
