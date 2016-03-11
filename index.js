var isBrowser = require('is-browser');
var extend;
var cheerio;

if (!isBrowser) {

    cheerio = require('cheerio');
    extend = require('extend');

    ['on', 'off', 'bind'].forEach(function (methodName) {
        cheerio.prototype[methodName] = new Function();
    });

    cheerio.prototype.prop = cheerio.prototype.attr;
    cheerio.prototype.extend = extend;

    cheerio.prototype.toggle = function (force) {
        this.css('display', (force === false) ? 'none' : 'inherit');
    };

    cheerio.prototype.hide = function () {
        this.toggle(false);
    };

    cheerio.prototype.show = function () {
        this.toggle(true);
    };
}

module.exports = (isBrowser) ? window.jQuery : require('cheerio').load('');