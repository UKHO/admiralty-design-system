# admiralty-modal-dialog

The modal dialog component presents important content or actions in a centered overlay that requires user interaction before the main content becomes accessible again. The component is fully responsive and adapts automatically across viewport sizes.

## Responsive Behavior

The modal dialog component automatically adapts its layout based on the viewport size:

### Desktop and Tablet (≥ 480px)

- Modal has a constrained width with a maximum limit and is horizontally and vertically centered
- Title is left-aligned with the modal's padding
- Warning icon (if present) is inline to the left of the body text
- Action buttons are arranged horizontally in the footer band, right-aligned
- Secondary action button appears to the left of the primary action button

### Mobile (< 480px)

- Modal fills the viewport width with consistent side margins (equal on both sides)
- Does not exceed the viewport width or height
- Title remains left-aligned
- Warning icon (if present) remains inline to the left of the body text
- Action buttons stack vertically, filling the full footer band width minus horizontal padding
- Primary action button is positioned above the secondary action button
- Vertical spacing (gap) is applied between stacked buttons
- If content exceeds available height, the body area scrolls internally while title and actions remain visible

### Responsive Transitions

When resizing or rotating a device across the 480px breakpoint:

- The layout switches smoothly without loss of focus or state
- If focus is on an action button during the transition, focus is preserved on that button

## Usage

```html
<admiralty-modal-dialog
  heading="Do you want to leave this page?"
  label="Do you want to leave this page?"
  description="If you leave this page, your survey won't be saved and can't be recovered"
  show="true"
>
  <div slot="content">
    <admiralty-icon name="warning-rounded"></admiralty-icon>
    <div>If you leave this page, your survey won't be saved and can't be recovered</div>
  </div>
  <div slot="actions">
    <admiralty-button variant="secondary">Leave page</admiralty-button>
    <admiralty-button>Continue survey</admiralty-button>
  </div>
</admiralty-modal-dialog>
```

### Content Slot

The `content` slot typically contains:

- An optional icon (e.g., `admiralty-icon`)
- A text content wrapper div

Structure: `<div slot="content"><admiralty-icon name="..."></admiralty-icon><div>Content text</div></div>`

### Actions Slot

The `actions` slot contains action buttons. The component automatically:

- Reorders buttons on mobile to place the primary action first in both visual and DOM order
- Detects primary actions by the `variant="primary"` attribute (or lack of `variant` attribute, which defaults to primary)
- Adjusts button sizing and spacing for the active viewport

Structure:

```html
<div slot="actions">
  <admiralty-button variant="secondary">Secondary Action</admiralty-button>
  <admiralty-button>Primary Action</admiralty-button>
</div>
```

## Accessibility

The modal dialog component meets WCAG 2.2 AA standards:

- **Focus Trapping**: Focus is trapped within the dialog when open
- **Focus Management**: Focus automatically moves to the first interactive element when the dialog opens
- **Focus Restoration**: Focus returns to the element that triggered the modal when it closes
- **Keyboard Navigation**: Users can navigate between focusable elements using Tab/Shift+Tab; Escape closes the dialog
- **Screen Reader Support**: The dialog is announced with an accessible name (from `label` or `heading`) and description
- **Touch Targets**: On mobile, buttons are full-width, meeting WCAG 2.2 target size recommendations (44×44 CSS px)

<!-- Auto Generated Below -->

## Properties

| Property      | Attribute     | Description                          | Type      | Default     |
| ------------- | ------------- | ------------------------------------ | --------- | ----------- |
| `description` | `description` | Describe the contents of the dialog. | `string`  | `undefined` |
| `heading`     | `heading`     | The title of the modal dialog.       | `string`  | `undefined` |
| `label`       | `label`       | Label the dialog.                    | `string`  | `undefined` |
| `show`        | `show`        | Whether to show the modal dialog.    | `boolean` | `false`     |

## Slots

| Slot        | Description             |
| ----------- | ----------------------- |
| `"actions"` | Actions for the dialog. |
| `"content"` | Content of the dialog.  |

## CSS Custom Properties

| Name                                                      | Description                                              |
| --------------------------------------------------------- | -------------------------------------------------------- |
| `--admiralty-modal-dialog-content-padding`                | Padding for the modal dialog content                     |
| `--admiralty-modal-dialog-content-slotted-button-padding` | Padding for the modal dialog content button slot         |
| `--admiralty-modal-dialog-content-slotted-margin-bottom`  | Margin bottom for the modal dialog content slot          |
| `--admiralty-modal-dialog-content-slotted-padding`        | Padding for the modal dialog content slot                |
| `--admiralty-modal-dialog-heading-margin-bottom`          | Margin bottom for the modal dialog heading               |
| `--admiralty-modal-dialog-heading-padding`                | Padding for the modal dialog heading                     |
| `--admiralty-modal-dialog-margin`                         | Margin for the modal dialog.                             |
| `--admiralty-modal-heading-font-size`                     | Font size for the modal dialog heading                   |
| `--admiralty-modal-heading-font-size-mobile`              | Font size for the modal dialog heading on mobile devices |
| `--admiralty-modal-heading-font-weight`                   | Font weight for the modal dialog heading                 |
| `--admiralty-modal-slotted-icon-font-size`                | Font size for the modal dialog slotted icon              |
| `--admiralty-modal-slotted-text-font-size`                | Font size for the modal dialog slotted text              |

---

_Built with [StencilJS](https://stenciljs.com/)_
