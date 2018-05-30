/**
 * The class of the multilanguage page location url.
 * Extracts from `window.location.pathname` one of the list of valid languages ​​and insertes it at the beginning of the incoming location url.
 *
 * Forms the base of the path `this.rootLanguagePath` for subsequent substitution to the incoming location url.
 *
 * @constructor
 * @this {MultiLanguageURL}
 *
 * @param {Object} options - Required. Parameter object. Comprises:
 * @param {Array} options.languages ​​- Required. List of allowed languages.
 * @param {String} options.pathname - Optional. The default path is `window.location.pathname`.
 */

function MultiLanguageURL(options) {
  /** @private */
  this.rootLanguagePath = '';

  if (typeof options === 'object') {
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

  let pathnameArray = this.pathname.split('/');
  pathnameArray = pathnameArray.filter(elem => elem !== "");

  if (this.languages.indexOf(pathnameArray[0]) !== -1) {
    this.rootLanguagePath = `/${pathnameArray[0]}`;
  }
}

/**
 * The method substitutes the created path base to the incoming location url.
 *
 * @this {MultiLanguageURL}
 *
 * @param {Object} location - Required. The reference object is similar to `window.location`. Comprises:
 * @param {String} location.pathname - Required. The path is similar to `window.location.pathname`.
 * @param {String} location.search - Optional. The request is similar to `window.location.search`.
 * @param {String} location.hash - Optional. The hash is similar to `window.location.hash`.
 *
 * @return {String} A reference of the form `this.rootLanguagePath` + `/pathname` + `search` +` hash`.
 */

MultiLanguageURL.prototype.url = function (location) {
  return this.rootLanguagePath + location.pathname + (location.search !== undefined ? location.search : '') + (location.hash !== undefined ? location.hash : '');
};

export default MultiLanguageURL;