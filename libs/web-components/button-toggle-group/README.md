# Button Toggle Group

[![See it on NPM!](https://img.shields.io/npm/v/@finastra/button-toggle-group?style=for-the-badge)](https://www.npmjs.com/package/@finastra/button-toggle-group)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@finastra/button-toggle-group?style=for-the-badge)](https://bundlephobia.com/result?p=@finastra/button-toggle-group')
[![Storybook](https://shields.io/badge/-Play%20with%20this%20web%20component-2a0481?logo=storybook&style=for-the-badge)](https://finastra.github.io/finastra-design-system/?path=/story/actions-toggle-button-toggle-group--default)


The `<fds-button-toggle-group>` is used to group `<fds-button-toggle>` or `<fds-button-toggle-filter>` items for performing certain actions.

## Usage

### Import

```
npm i @finastra/button-toggle-group
```

```ts
import '@finastra/button-toggle-group';
...
<fds-button-toggle-group style="padding-bottom: 16px">
    <fds-button-toggle icon="accessibility"></fds-button-toggle>
    <fds-button-toggle icon="exit_to_app"></fds-button-toggle>
    <fds-button-toggle icon="camera"></fds-button-toggle>
</fds-button-toggle-group>
```

### Pure HTML pages

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
<script src="https://cdn.jsdelivr.net/npm/@finastra/button-toggle-group/dist/fds-button-toggle-group.js"></script>

<fds-button-toggle-group style="padding-bottom: 16px">
    <fds-button-toggle icon="accessibility"></fds-button-toggle>
    <fds-button-toggle icon="exit_to_app"></fds-button-toggle>
    <fds-button-toggle icon="camera"></fds-button-toggle>
</fds-button-toggle-group>
```
