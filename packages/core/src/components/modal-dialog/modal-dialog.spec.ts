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
        <div>
          <div class="modal-dialog">
            <div class="modal-content"></div>
            <div class="modal-actions" role="navigation"></div>
          </div>
          <div class="modal-backdrop">
          </div>
        </div>
      </admiralty-modal-dialog>
    `);
  });
  it('renders with heading when heading is passed', async () => {
    const { root } = await newSpecPage({
      components: [ModalDialogComponent],
      html: '<admiralty-modal-dialog heading="TESTHEADING"></admiralty-modal-dialog>',
    });
    expect(root).toEqualHtml(`
      <admiralty-modal-dialog heading="TESTHEADING">
        <div>
          <div class="modal-dialog">
            <p class="modal-heading">TESTHEADING</p>
            <div class="modal-content"></div>
            <div class="modal-actions" role="navigation"></div>
          </div>
          <div class="modal-backdrop">
          </div>
        </div>
      </admiralty-modal-dialog>
    `);
  });
  it('renders with show classes when show is true', async () => {
    const { root } = await newSpecPage({
      components: [ModalDialogComponent],
      html: '<admiralty-modal-dialog show="true"></admiralty-modal-dialog>',
    });
    expect(root).toEqualHtml(`
      <admiralty-modal-dialog show="true">
        <div>
          <div class="modal-dialog show">
            <div class="modal-content"></div>
            <div class="modal-actions" role="navigation"></div>
          </div>
          <div class="modal-backdrop show">
          </div>
        </div>
      </admiralty-modal-dialog>
    `);
  });
  it('renders without show classes when show is false', async () => {
    const { root } = await newSpecPage({
      components: [ModalDialogComponent],
      html: '<admiralty-modal-dialog show="false"></admiralty-modal-dialog>',
    });
    expect(root).toEqualHtml(`
      <admiralty-modal-dialog show="false">
        <div>
          <div class="modal-dialog">
            <div class="modal-content"></div>
            <div class="modal-actions" role="navigation"></div>
          </div>
          <div class="modal-backdrop">
          </div>
        </div>
      </admiralty-modal-dialog>
    `);
  });
});
