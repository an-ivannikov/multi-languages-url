(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.MultiLanguagesURL = factory());
}(this, function () { 'use strict';

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

  /**
   * The class of the multilanguage page location url.
   * Extracts from `window.location.pathname` one of the list of valid languages ​​and insertes it at the beginning of the incoming location url.
   *
   * Forms the base of the path `this.rootLanguagePath` for subsequent substitution to the incoming location url.
   *
   *@author Alexander Ivannikov <a.n.ivannikov@yandex.ru> (https://github.com/an-ivannikov)
   *
   * @constructor
   * @this {MultiLanguagesURL}
   *
   * @param {Object} options - Required. Parameter object. Comprises:
   * @param {Array} options.languages - Required. List of allowed languages.
   * @param {String} options.pathname - Optional. The default path is `window.location.pathname`.
   */

  function MultiLanguagesURL(options) {
    /** @private */
    this.rootLanguagePath = '';

    if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
      if (Array.isArray(options)) {
        this.languages = options;
        if (pathname !== undefined && typeof pathname === 'string') {
          this.pathname = pathname;
        } else {
          this.pathname = window.location.pathname;
        }
      } else {
        this.languages = options.languages;
        this.pathname = options.pathname !== undefined ? options.pathname : window.location.pathname;
      }
    }

    var pathnameArray = this.pathname.split('/');
    pathnameArray = pathnameArray.filter(function (elem) {
      return elem !== "";
    });

    if (this.languages.indexOf(pathnameArray[0]) !== -1) {
      this.rootLanguagePath = '/' + pathnameArray[0];
    }
  }

  /**
   * The method substitutes the created path base to the incoming location url.
   *
   * @this {MultiLanguagesURL}
   *
   * Option 1.
   * @param {String} location - Required. The path is similar to `window.location.pathname`.
   * @param {String} search - Optional. The request is similar to `window.location.search`.
   * @param {String} hash - Optional. The hash is similar to `window.location.hash`.
   *
   * @return {String} A reference of the form `this.rootLanguagePath` + `/pathname` + `search` +` hash`.
   */

  /**
   * The method substitutes the created path base to the incoming location url.
   *
   * @this {MultiLanguagesURL}
   *
   * Option 2.
   * @param {Object} location - Required. The reference object is similar to `window.location`. Comprises:
   * @param {String} location.pathname - Required. The path is similar to `window.location.pathname`.
   * @param {String} location.search - Optional. The request is similar to `window.location.search`.
   * @param {String} location.hash - Optional. The hash is similar to `window.location.hash`.
   *
   * @return {String} A reference of the form `this.rootLanguagePath` + `/pathname` + `search` +` hash`.
   */

  MultiLanguagesURL.prototype.url = function (location, search, hash) {
    if ((typeof location === 'undefined' ? 'undefined' : _typeof(location)) === 'object') {
      return this.rootLanguagePath + location.pathname + (location.search !== undefined ? location.search : '') + (location.hash !== undefined ? location.hash : '');
    }
    return this.rootLanguagePath + location + (search !== undefined ? search : '') + (hash !== undefined ? hash : '');
  };

  return MultiLanguagesURL;

}));