# Multi Languages URL

This simple tool for creating URL links adapted to the current language of the web application.

## Installing
```js
$ npm install --save multi-languages-url
```

## Usage
```js
import MultiLanguagesURL from 'multi-languages-url';
...
const ml = new MultiLanguagesURL({languages: ['en', 'de', 'ru']});
...
<a href={ml.url('/blog', '?q=last', '#news')}>Blog</a>
or
<a href={ml.url({pathname: '/blog', search: '?q=last', hash: '#news'})}>Blog</a>
```


<a name="MultiLanguagesURL"></a>

## MultiLanguagesURL
**Kind**: global class  
**this**: <code>{MultiLanguagesURL}</code>  
**Author**: Alexander Ivannikov <a.n.ivannikov@yandex.ru> (https://github.com/an-ivannikov)  

* [MultiLanguagesURL](#MultiLanguagesURL)
    * [new MultiLanguagesURL(options)](#new_MultiLanguagesURL_new)
    * [.url(location)](#MultiLanguagesURL+url) ⇒ <code>String</code>

<a name="new_MultiLanguagesURL_new"></a>

### new MultiLanguagesURL(options)
The class of the multilanguage page location url.
Extracts from `window.location.pathname` one of the list of valid languages ​​and insertes it at the beginning of the incoming location url.

Forms the base of the path `this.rootLanguagePath` for subsequent substitution to the incoming location url.


| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | Required. Parameter object. Comprises: |
| options.languages | <code>Array</code> | Required. List of allowed languages. |
| options.pathname | <code>String</code> | Optional. The default path is `window.location.pathname`. |

<a name="MultiLanguagesURL+url"></a>

### multiLanguagesURL.url(location) ⇒ <code>String</code>
The method substitutes the created path base to the incoming location url.

**Kind**: instance method of [<code>MultiLanguagesURL</code>](#MultiLanguagesURL)  
**Returns**: <code>String</code> - A reference of the form `this.rootLanguagePath` + `/pathname` + `search` +` hash`.  
**this**: <code>{MultiLanguagesURL}</code>  

| Param | Type | Description |
| --- | --- | --- |
| location | <code>Object</code> | Required. The reference object is similar to `window.location`. Comprises: |
| location.pathname | <code>String</code> | Required. The path is similar to `window.location.pathname`. |
| location.search | <code>String</code> | Optional. The request is similar to `window.location.search`. |
| location.hash | <code>String</code> | Optional. The hash is similar to `window.location.hash`. |


### multiLanguagesURL.url(location, search, hash) ⇒ <code>String</code>
The method substitutes the created path base to the incoming location url.

**Kind**: instance method of [<code>MultiLanguagesURL</code>](#MultiLanguagesURL)  
**Returns**: <code>String</code> - A reference of the form `this.rootLanguagePath` + `/pathname` + `search` +` hash`.  
**this**: <code>{MultiLanguagesURL}</code>

| Param | Type | Description |
| --- | --- | --- |
| location | <code>String</code> | Required. The path is similar to `window.location.pathname`. |
| search | <code>String</code> | Optional. The request is similar to `window.location.search`. |
| hash | <code>String</code> | Optional. The hash is similar to `window.location.hash`. |
