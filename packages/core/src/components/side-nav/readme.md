# admiralty-side-nav

## Responsive usage

To keep one navigation structure across desktop and mobile, place the side nav in the
header's `nav` slot. It renders as a left-hand column at desktop widths and moves into
the header burger menu below the desktop breakpoint (1024px).

```html
<admiralty-header header-title="HMNAO">
  <admiralty-side-nav slot="nav" label="Primary navigation">
    <admiralty-side-nav-item heading-title="NavPac and compact data"></admiralty-side-nav-item>
    <admiralty-side-nav-item heading-title="Astronomical data services"></admiralty-side-nav-item>
  </admiralty-side-nav>
  <admiralty-header-menu-link slot="items" menu-title="About" href="/about"></admiralty-header-menu-link>
</admiralty-header>
```

The side nav is a fixed left column at widths of 1024px and above. Below 1024px it is hidden
with the closed header menu and appears inside the burger panel when opened. The panel is
full-width on phones and a left-anchored dropdown on tablets (minimum width 250px); it scrolls
vertically when its contents exceed the viewport. Header `items` such as About follow the
side-nav items in the open panel. The header `profile` slot is also in the panel; the `toggle`
slot stays beside the burger.

Reserve `--admiralty-side-nav-width` for page content on desktop; the default is 240px:

```css
@media (min-width: 1024px) {
  .page-content {
    margin-left: var(--admiralty-side-nav-width, 240px);
  }
}
```

The desktop side nav uses fixed positioning, aligned by `--admiralty-side-nav-top-offset`
(default `80px`). If the header height changes, update this offset too. A transformed,
filtered, or contained ancestor can change the containing block for fixed positioning and
may require adjusting the page layout.

The burger is hidden when the header has no slotted content. When open, focus moves into the
panel; `Tab` and `Shift+Tab` stay within it, `Escape` closes it and restores focus, and
selecting a side-nav item closes the panel. Resizing to desktop while open closes the panel.

<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description                                                                                                                                                                                                                                             | Type     | Default     |
| -------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ----------- |
| `label`  | `label`   | A label for accessibility purposes to describe what this Side Nav navigation is for e.g. Product Menu, Map Tool Menu etc. Ignored when the Side Nav is slotted into an 'admiralty-header', because the header already provides the navigation landmark. | `string` | `undefined` |


## CSS Custom Properties

| Name                                     | Description                                                                                    |
| ---------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `--admiralty-side-nav-background-colour` | Background colour of the side nav                                                              |
| `--admiralty-side-nav-border-colour`     | Colour of the side nav's trailing border                                                       |
| `--admiralty-side-nav-top-offset`        | Distance from the top of the viewport to the top of the side nav when rendered inside a header |
| `--admiralty-side-nav-width`             | Width of the side nav when it is rendered as the left hand column on desktop                   |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
