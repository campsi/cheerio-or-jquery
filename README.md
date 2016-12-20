# Isomorphic jQuery

Returns a jQuery instance in the browser and a compatible Cheerio instance on the server.

## Usage

```javascript
var $ = require('cheerio-or-jquery');

$('<div>').append($('<h1>').text('Hello World')).html();
```
