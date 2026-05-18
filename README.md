# css-flex-wrap

Functional CSS for flex-wrap

## Filesize

| File | Size |
|------|------|
| `dist/flex-wrap.css` | 801 bytes |
| `dist/flex-wrap.min.css` | 569 bytes (164 Gzipped) |

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
| `.fw-no` | `flex-wrap: nowrap;` |
| `.fw-wrap` | `flex-wrap: wrap;` |
| `.fw-wraprev` | `flex-wrap: wrap-reverse;` |
| `.fw-i` | `flex-wrap: inherit;` |
| `.fw-no-s` | `flex-wrap: nowrap;` |
| `.fw-wrap-s` | `flex-wrap: wrap;` |
| `.fw-wraprev-s` | `flex-wrap: wrap-reverse;` |
| `.fw-i-s` | `flex-wrap: inherit;` |
| `.fw-no-m` | `flex-wrap: nowrap;` |
| `.fw-wrap-m` | `flex-wrap: wrap;` |
| `.fw-wraprev-m` | `flex-wrap: wrap-reverse;` |
| `.fw-i-m` | `flex-wrap: inherit;` |
| `.fw-no-l` | `flex-wrap: nowrap;` |
| `.fw-wrap-l` | `flex-wrap: wrap;` |
| `.fw-wraprev-l` | `flex-wrap: wrap-reverse;` |
| `.fw-i-l` | `flex-wrap: inherit;` |

### Responsive

Responsive variants are available for each class with the following suffixes:

| Suffix | Media Query              |
|--------|--------------------------|
| `-s`   | `min-width: 32em`        |
| `-m`   | `min-width: 48em`        |
| `-l`   | `min-width: 96em`        |

Example: `.fw-no-m` applies the property at the medium breakpoint and above.

## Building

```sh
npm run build
```

Processes `src/flex-wrap.css` with [Lightning CSS](https://lightningcss.dev) and outputs to `dist/`.

- `dist/flex-wrap.css` — formatted
- `dist/flex-wrap.min.css` — minified

## License

MIT
