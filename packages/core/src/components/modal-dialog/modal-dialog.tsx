import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'admiralty-modal-dialog',
  styleUrl: 'modal-dialog.scss',
  scoped: true,
})
export class ModalDialogComponent {
  /**
   * The title of the modal dialog.
   */
  @Prop() heading: string;

  render() {
    return (
      <div class="modal-dialog">
        {this.heading ? <p class="modal-heading">{this.heading}</p> : null}
        <div class="modal-content">
          <slot name="content"></slot>
        </div>
        <div role="navigation" class="modal-actions">
          <slot name="actions"></slot>
        </div>
      </div>
    );
  }
}
