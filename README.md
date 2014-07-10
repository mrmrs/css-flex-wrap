# CSS FLEX WRAP

  Mobile-first classes for css-flex-wrap.
  Set the desired css-flex-wrap on any element for any breakpoint.
  Base class names are namespaced across three breakpoints:

*  -ns = not-small (covers everything larger than mobile)
*  -m  = medium
*  -l  = large

## Install
```
npm install --save-dev css-flex-wrap
```
or download the css on github and include in your project.

## File Size


## The Code
```
.fw-no {      flex-wrap: nowrap; }
.fw-wrap {    flex-wrap: wrap; }
.fw-wraprev { flex-wrap: wrap-reverse; }
.fw-i {       flex-wrap: inherit; }

@include break(not-small) {
  .fw-no-ns {      flex-wrap: nowrap; }
  .fw-wrap-ns {    flex-wrap: wrap; }
  .fw-wraprev-ns { flex-wrap: wrap-reverse; }
  .fw-i-ns {       flex-wrap: inherit; }
}

@include break(medium) {
  .fw-no-m {      flex-wrap: nowrap; }
  .fw-wrap-m {    flex-wrap: wrap; }
  .fw-wraprev-m { flex-wrap: wrap-reverse; }
  .fw-i-m {       flex-wrap: inherit; }
}

@include break(large) {
  .fw-no-l {      flex-wrap: nowrap; }
  .fw-wrap-l {    flex-wrap: wrap; }
  .fw-wraprev-l { flex-wrap: wrap-reverse; }
  .fw-i-l {       flex-wrap: inherit; }
}

```

## Author

[http://mrmrs.cc - Entire internet gateway to all things mrmrs](http://mrmrs.cc)
[http://mrmrs.io - Open source projects](http://mrmrs.io)

## License

The MIT License (MIT)

Copyright (c) 2014 @mrmrs

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
