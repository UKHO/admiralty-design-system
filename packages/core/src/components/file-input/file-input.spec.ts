import { newSpecPage } from '@stencil/core/testing';
import { FileInputComponent } from './file-input';

describe('file-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FileInputComponent],
      html: `<admiralty-file-input></ukhho-file-input>`,
    });
    expect(page.root).toEqualHtml(`
      <admiralty-file-input>
        <div class="admiralty-file-input">
          <label htmlfor="admiralty-file-input-1">
            <admiralty-icon class="upload-icon" icon-name="upload"></admiralty-icon>
            <span class="instructions">
              Click to choose a file or drag it
            </span>
          </label>
          <input aria-hidden="true" aria-label="File Upload" class="admiralty-form-field" id="admiralty-file-input-1" type="file">
        </div>
      </admiralty-file-input>
    `);
  });

  it('renders multiple selection', async () => {
    const page = await newSpecPage({
      components: [FileInputComponent],
      html: `<admiralty-file-input multiple="true"></ukhho-file-input>`,
    });
    expect(page.root).toEqualHtml(`
      <admiralty-file-input multiple="true">
        <div class="admiralty-file-input">
          <label htmlfor="admiralty-file-input-2">
            <admiralty-icon class="upload-icon" icon-name="upload"></admiralty-icon>
            <span class="instructions">
              Click to choose a file or drag it
            </span>
          </label>
          <input aria-hidden="true" aria-label="File Upload" class="admiralty-form-field" id="admiralty-file-input-2" multiple="" type="file">
        </div>
      </admiralty-file-input>
    `);
  });

  it('renders single selection', async () => {
    const page = await newSpecPage({
      components: [FileInputComponent],
      html: `<admiralty-file-input multiple="false"></ukhho-file-input>`,
    });
    expect(page.root).toEqualHtml(`
      <admiralty-file-input multiple="false">
        <div class="admiralty-file-input">
          <label htmlfor="admiralty-file-input-3">
            <admiralty-icon class="upload-icon" icon-name="upload"></admiralty-icon>
            <span class="instructions">
              Click to choose a file or drag it
            </span>
          </label>
          <input aria-hidden="true" aria-label="File Upload" class="admiralty-form-field" id="admiralty-file-input-3" type="file">
        </div>
      </admiralty-file-input>
    `);
  });

  it('renders different label', async () => {
    const page = await newSpecPage({
      components: [FileInputComponent],
      html: `<admiralty-file-input label="My other label"></ukhho-file-input>`,
    });
    expect(page.root).toEqualHtml(`
      <admiralty-file-input label="My other label">
        <div class="admiralty-file-input">
          <label htmlfor="admiralty-file-input-4">
            <admiralty-icon class="upload-icon" icon-name="upload"></admiralty-icon>
            <span class="instructions">
              My other label
            </span>
          </label>
          <input aria-hidden="true" aria-label="File Upload" class="admiralty-form-field" id="admiralty-file-input-4" type="file">
        </div>
      </admiralty-file-input>
    `);
  });

  const mockFileList = (file: File): FileList => {
    const fileList = {
      length: 1,
      item: (_index: number) => file,
      0: file,
    };
    return fileList as FileList;
  };

  it('emits fileInputChange event', async () => {
    const comp = new FileInputComponent();

    const eventSpy = jest.spyOn(comp.fileInputChange, 'emit');

    const file = { name: 'file1.txt' } as File;

    let event = {
      preventDefault: jest.fn(),
      target: {
        files: mockFileList(file),
      },
    };

    comp.changeHandler(event as unknown as Event);

    expect(eventSpy).toBeCalledWith([file]);
  });
});