# css-flex-wrap 0.0.7

Css module of single purpose classes for flex wrap

#### Stats

205 | 16 | 16
---|---|---
bytes | selectors | declarations

## Installation

#### With [npm](https://npmjs.com)

```
npm install --save-dev css-flex-wrap
```

#### With Git

```
git clone https://github.com/tachyons-css/css-flex-wrap
```

## Usage

#### Using with [PostCSS](https://github.com/postcss/postcss)

Import the css module

```css
@import "css-flex-wrap";
```

Then process the CSS using the [`tachyons-cli`](https://github.com/tachyons-css/tachyons-cli)

```sh
$ npm i -g tachyons-cli
$ tachyons-cli path/to/css-file.css > dist/t.css
```

#### Using the CSS

The built CSS is located in the `css` directory. It contains an unminified and minified version.
You can either cut and paste that css or link to it directly in your html.

```html
<link rel="stylesheet" href="path/to/module/css/css-flex-wrap">
```

#### Development

The source CSS files can be found in the `src` directory.
Running `$ npm start` will process the source CSS and place the built CSS in the `css` directory.

## The CSS

```css
/*
   FLEX WRAP
*/
.fw-no { flex-wrap: nowrap; }
.fw-wrap { flex-wrap: wrap; }
.fw-wraprev { flex-wrap: wrap-reverse; }
.fw-i { flex-wrap: inherit; }
@media screen and (min-width: 48em) {
 .fw-no-ns { flex-wrap: nowrap; }
 .fw-wrap-ns { flex-wrap: wrap; }
 .fw-wraprev-ns { flex-wrap: wrap-reverse; }
 .fw-i-ns { flex-wrap: inherit; }
}
@media screen and (min-width:48em) and (max-width: 64em) {
 .fw-no-m { flex-wrap: nowrap; }
 .fw-wrap-m { flex-wrap: wrap; }
 .fw-wraprev-m { flex-wrap: wrap-reverse; }
 .fw-i-m { flex-wrap: inherit; }
}
@media screen and (min-width: 64em) {
 .fw-no-l { flex-wrap: nowrap; }
 .fw-wrap-l { flex-wrap: wrap; }
 .fw-wraprev-l { flex-wrap: wrap-reverse; }
 .fw-i-l { flex-wrap: inherit; }
}
```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## Authors

* [mrmrs](http://mrmrs.io)
* [johno](http://johnotander.com)

## License

MIT

