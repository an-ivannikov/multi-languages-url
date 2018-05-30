# MultiLanguage URL

This simple tool for creating URL links adapted to the current language of the web application.

## Installing
```js
$ npm install --save multi-language-url
```

## Usage
```js
import MultiLanguageURL from 'multi-language-url';
...
const ml = new MultiLanguageURL({languages: ['en', 'de', 'ru']});
<a href={ml.url('/blog')}>Blog</a>
```



<a name="MultiLanguageURL"></a>

## MultiLanguageURL
**Kind**: global class  
**this**: <code>{MultiLanguageURL}</code>  

* [MultiLanguageURL](#MultiLanguageURL)
    * [new MultiLanguageURL(options)](#new_MultiLanguageURL_new)
    * [.url(location)](#MultiLanguageURL+url) ⇒ <code>String</code>

<a name="new_MultiLanguageURL_new"></a>

### new MultiLanguageURL(options)
The class of the multilanguage page location url.
Extracts from `window.location.pathname` one of the list of valid languages ​​and insertes it at the beginning of the incoming location url.

Forms the base of the path `this.rootLanguagePath` for subsequent substitution to the incoming location url.


| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | Required. Parameter object. Comprises: |
| options.languages | <code>Array</code> | ​​Required. List of allowed languages. |
| options.pathname | <code>String</code> | Optional. The default path is `window.location.pathname`. |

<a name="MultiLanguageURL+url"></a>

### multiLanguageURL.url(location) ⇒ <code>String</code>
The method substitutes the created path base to the incoming location url.

**Kind**: instance method of [<code>MultiLanguageURL</code>](#MultiLanguageURL)  
**Returns**: <code>String</code> - A reference of the form `this.rootLanguagePath` + `/pathname` + `search` +` hash`.  
**this**: <code>{MultiLanguageURL}</code>  

| Param | Type | Description |
| --- | --- | --- |
| location | <code>Object</code> | Required. The reference object is similar to `window.location`. Comprises: |
| location.pathname | <code>String</code> | Required. The path is similar to `window.location.pathname`. |
| location.search | <code>String</code> | Optional. The request is similar to `window.location.search`. |
| location.hash | <code>String</code> | Optional. The hash is similar to `window.location.hash`. |
