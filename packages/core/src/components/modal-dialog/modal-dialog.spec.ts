import { newSpecPage } from '@stencil/core/testing';
import { ModalDialogComponent } from './modal-dialog';

describe('admiralty-modal-dialog', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [ModalDialogComponent],
      html: '<admiralty-modal-dialog></admiralty-modal-dialog>',
    });
    expect(root).toEqualHtml(`
      <admiralty-modal-dialog>
        <div class="modal-dialog">
          <div class="modal-content"></div>
          <div class="modal-actions" role="navigation"></div>
        </div>
      </admiralty-modal-dialog>
    `);
  });
});
