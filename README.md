# css-flex-wrap

Functional CSS for flex-wrap

## Filesize

| File | Size |
|------|------|
| `dist/flex-wrap.css` | 913 bytes |
| `dist/flex-wrap.min.css` | 681 bytes (169 Gzipped) |

## Install

```sh
npm install css-flex-wrap
```

## Usage

### Import

```css
@import "css-flex-wrap";
```

### CDN

```html
<link rel="stylesheet" href="https://unpkg.com/css-flex-wrap/dist/flex-wrap.min.css">
```

### Direct

```html
<link rel="stylesheet" href="path/to/css-flex-wrap/dist/flex-wrap.min.css">
```

## Classes

| Class   | Value                    |
|---------|--------------------------|
| `.flex-nowrap` | `flex-wrap: nowrap;` |
| `.flex-wrap` | `flex-wrap: wrap;` |
| `.flex-wrap-reverse` | `flex-wrap: wrap-reverse;` |
| `.flex-wrap-inherit` | `flex-wrap: inherit;` |
| `.flex-nowrap-s` | `flex-wrap: nowrap;` |
| `.flex-wrap-s` | `flex-wrap: wrap;` |
| `.flex-wrap-reverse-s` | `flex-wrap: wrap-reverse;` |
| `.flex-wrap-inherit-s` | `flex-wrap: inherit;` |
| `.flex-nowrap-m` | `flex-wrap: nowrap;` |
| `.flex-wrap-m` | `flex-wrap: wrap;` |
| `.flex-wrap-reverse-m` | `flex-wrap: wrap-reverse;` |
| `.flex-wrap-inherit-m` | `flex-wrap: inherit;` |
| `.flex-nowrap-l` | `flex-wrap: nowrap;` |
| `.flex-wrap-l` | `flex-wrap: wrap;` |
| `.flex-wrap-reverse-l` | `flex-wrap: wrap-reverse;` |
| `.flex-wrap-inherit-l` | `flex-wrap: inherit;` |

### Responsive

Responsive variants are available for each class with the following suffixes:

| Suffix | Media Query              |
|--------|--------------------------|
| `-s`   | `min-width: 32em`        |
| `-m`   | `min-width: 48em`        |
| `-l`   | `min-width: 96em`        |

Example: `.flex-nowrap-m` applies the property at the medium breakpoint and above.

## Building

```sh
npm run build
```

Processes `src/flex-wrap.css` with [Lightning CSS](https://lightningcss.dev) and outputs to `dist/`.

- `dist/flex-wrap.css` — formatted
- `dist/flex-wrap.min.css` — minified

## License

MIT
