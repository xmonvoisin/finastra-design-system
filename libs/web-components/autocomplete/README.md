# Autocomplete
[![See it on NPM!](https://img.shields.io/npm/v/@finastra/autocomplete?style=for-the-badge)](https://www.npmjs.com/package/@finastra/autocomplete)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@finastra/autocomplete?style=for-the-badge)](https://bundlephobia.com/result?p=@finastra/autocomplete)
[![Storybook](https://shields.io/badge/-Play%20with%20this%20web%20component-2a0481?logo=storybook&style=for-the-badge)](https://finastra.github.io/finastra-design-system/?path=/story/forms-autocomplete--default)

The autocomplete is a text input enhanced by a panel of suggested options.

It uses the [fds-search-input](https://finastra.github.io/finastra-design-system/?path=/story/forms-search-input--custom-icon) component, so it inherits all its properties.

## Usage

### Import

```
npm i @finastra/autocomplete
```

```ts
import '@finastra/autocomplete';
...
<fds-autocomplete name="World">
    <mwc-list-item value="One">One</mwc-list-item>
    <mwc-list-item value="Two">Two</mwc-list-item>
    <mwc-list-item value="Three">Three</mwc-list-item>
</fds-autocomplete>
```

### Pure HTML pages

```html
<script src="https://cdn.jsdelivr.net/npm/@finastra/autocomplete/dist/fds-autocomplete.js"></script>

<fds-autocomplete name="World">
    <mwc-list-item value="One">One</mwc-list-item>
    <mwc-list-item value="Two">Two</mwc-list-item>
    <mwc-list-item value="Three">Three</mwc-list-item>
</fds-autocomplete>
```
