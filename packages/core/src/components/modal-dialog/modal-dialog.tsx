import { Component, Prop, h } from '@stencil/core';

/**
 * @slot content - Content of the dialog.
 * @slot actions - Actions for the dialog.
 */
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
  /**
   * Label the dialog.
   */
  @Prop() label: string;
  /**
   * Describe the contents of the dialog.
   */
  @Prop() description: string;
  /**
   * Whether to show the modal dialog.
   */
  @Prop() show: boolean = false;

  render() {
    return (
      <div>
        <div class={{ 'modal-dialog': true, 'show': this.show }} role="dialog" aria-label={this.label} aria-description={this.description}>
          {this.heading ? <p class="modal-heading">{this.heading}</p> : null}
          <div class="modal-content">
            <slot name="content"></slot>
          </div>
          <div role="navigation" class="modal-actions">
            <slot name="actions"></slot>
          </div>
        </div>
        <div class={{ 'modal-backdrop': true, 'show': this.show }}></div>
      </div>
    );
  }
}
