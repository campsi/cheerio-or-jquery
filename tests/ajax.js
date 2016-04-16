var $ = require('../index');
var url = 'http://headers.jsontest.com/';
$.get(url).done(function (json) {
    console.log(json);
});