d3.promise
==========

Make d3 data functions use promises instead of callbacks

usage

```
var promise = d3.promise.csv(...)
promise.then(function(data){}, function(error){})

var promise = d3.promise.tsv(...)
promise.then(function(data){}, function(error){})

var promise = d3.promise.json(...)
promise.then(function(data){}, function(error){})

var promise = d3.promise.xml(...)
promise.then(function(data){}, function(error){})
```
