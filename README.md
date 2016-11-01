# css-flex-wrap 1.0.6

Css module of single purpose classes for flex wrap

#### Stats

224 | 16 | 32
---|---|---
bytes | selectors | declarations

## Installation

#### With [npm](https://npmjs.com)

```
npm install --save-dev css-flex-wrap
```

Learn more about using css installed with npm:
* https://webpack.github.io/docs/stylesheets.html
* https://github.com/defunctzombie/npm-css

#### With Git

http:
```
git clone https://github.com/tachyons-css/css-flex-wrap
```

ssh:
```
git clone git@github.com:tachyons-css/css-flex-wrap.git
```

## Usage

#### Using with [Postcss](https://github.com/postcss/postcss)

Import the css module

```css
@import "css-flex-wrap";
```

Then process the css using the [`tachyons-cli`](https://github.com/tachyons-css/tachyons-cli)

```sh
$ npm i -g tachyons-cli
$ tachyons path/to/css-file.css > dist/t.css
```

#### Using the css

##### CDN
The easiest and most simple way to use the css is to use the cdn hosted version. Include it in the head of your html with:

```
<link rel="stylesheet" href="http://unpkg.com/css-flex-wrap@1.0.6/css/css-flex-wrap.min.css" />
```

##### Locally
The built css is located in the `css` directory. It contains an unminified and minified version.
You can either cut and paste that css or link to it directly in your html.

```html
<link rel="stylesheet" href="path/to/module/css/css-flex-wrap">
```

#### Development

The source css files can be found in the `src` directory.
Running `$ npm start` will process the source css and place the built css in the `css` directory.

## The css

```css
/*
   FLEX WRAP
*/
.fw-no { -ms-flex-wrap: nowrap; flex-wrap: nowrap; }
.fw-wrap { -ms-flex-wrap: wrap; flex-wrap: wrap; }
.fw-wraprev { -ms-flex-wrap: wrap-reverse; flex-wrap: wrap-reverse; }
.fw-i { -ms-flex-wrap: inherit; flex-wrap: inherit; }
@media screen and (min-width: 48em) {
 .fw-no-ns { -ms-flex-wrap: nowrap; flex-wrap: nowrap; }
 .fw-wrap-ns { -ms-flex-wrap: wrap; flex-wrap: wrap; }
 .fw-wraprev-ns { -ms-flex-wrap: wrap-reverse; flex-wrap: wrap-reverse; }
 .fw-i-ns { -ms-flex-wrap: inherit; flex-wrap: inherit; }
}
@media screen and (min-width:48em) and (max-width: 64em) {
 .fw-no-m { -ms-flex-wrap: nowrap; flex-wrap: nowrap; }
 .fw-wrap-m { -ms-flex-wrap: wrap; flex-wrap: wrap; }
 .fw-wraprev-m { -ms-flex-wrap: wrap-reverse; flex-wrap: wrap-reverse; }
 .fw-i-m { -ms-flex-wrap: inherit; flex-wrap: inherit; }
}
@media screen and (min-width: 64em) {
 .fw-no-l { -ms-flex-wrap: nowrap; flex-wrap: nowrap; }
 .fw-wrap-l { -ms-flex-wrap: wrap; flex-wrap: wrap; }
 .fw-wraprev-l { -ms-flex-wrap: wrap-reverse; flex-wrap: wrap-reverse; }
 .fw-i-l { -ms-flex-wrap: inherit; flex-wrap: inherit; }
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

ISC

