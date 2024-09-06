import { newSpecPage } from '@stencil/core/testing';
import { FileInputComponent } from './file-input';

describe('file-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FileInputComponent],
      html: `<admiralty-file-input></admiralty-file-input>`,
    });
    expect(page.root).toEqualHtml(`
      <admiralty-file-input>
        <div class="admiralty-file-input">
          <input aria-label="Upload a file" class="admiralty-form-field" id="admiralty-file-input-1" type="file">
          <label htmlfor="admiralty-file-input-1">
            <admiralty-icon class="upload-icon" icon-name="upload"></admiralty-icon>
            <span>
              Click to choose a file or drag it
            </span>
          </label>
        </div>
        <admiralty-input-invalid style="display: none;"></admiralty-input-invalid>
      </admiralty-file-input>
    `);
  });

  it('renders multiple selection', async () => {
    const page = await newSpecPage({
      components: [FileInputComponent],
      html: `<admiralty-file-input multiple="true"></admiralty-file-input>`,
    });
    expect(page.root).toEqualHtml(`
      <admiralty-file-input multiple="true">
        <div class="admiralty-file-input">
          <input aria-label="Upload a file" class="admiralty-form-field" id="admiralty-file-input-2" multiple="" type="file">
          <label htmlfor="admiralty-file-input-2">
            <admiralty-icon class="upload-icon" icon-name="upload"></admiralty-icon>
            <span>
              Click to choose a file or drag it
            </span>
          </label>
        </div>
        <admiralty-input-invalid style="display: none;"></admiralty-input-invalid>
      </admiralty-file-input>
    `);
  });

  it('renders single selection', async () => {
    const page = await newSpecPage({
      components: [FileInputComponent],
      html: `<admiralty-file-input multiple="false"></admiralty-file-input>`,
    });
    expect(page.root).toEqualHtml(`
      <admiralty-file-input multiple="false">
        <div class="admiralty-file-input">
          <input aria-label="Upload a file" class="admiralty-form-field" id="admiralty-file-input-3" type="file">
          <label htmlfor="admiralty-file-input-3">
            <admiralty-icon class="upload-icon" icon-name="upload"></admiralty-icon>
            <span>
              Click to choose a file or drag it
            </span>
          </label>
        </div>
        <admiralty-input-invalid style="display: none;"></admiralty-input-invalid>
      </admiralty-file-input>
    `);
  });

  it('renders different label', async () => {
    const page = await newSpecPage({
      components: [FileInputComponent],
      html: `<admiralty-file-input label="My other label"></admiralty-file-input>`,
    });
    expect(page.root).toEqualHtml(`
      <admiralty-file-input label="My other label">
        <div class="admiralty-file-input">
          <input aria-label="Upload a file" class="admiralty-form-field" id="admiralty-file-input-4" type="file">
          <label htmlfor="admiralty-file-input-4">
            <admiralty-icon class="upload-icon" icon-name="upload"></admiralty-icon>
            <span>
              My other label
            </span>
          </label>
        </div>
        <admiralty-input-invalid style="display: none;"></admiralty-input-invalid>
      </admiralty-file-input>
    `);
  });

  it('renders invalid even without invalidMessage', async () => {
    const page = await newSpecPage({
      components: [FileInputComponent],
      html: `<admiralty-file-input invalid="true"></admiralty-file-input>`,
    });
    expect(page.root).toEqualHtml(`
      <admiralty-file-input invalid="true">
        <div class="admiralty-file-input invalid">
          <input aria-label="Upload a file" class="admiralty-form-field" id="admiralty-file-input-5" type="file">
          <label htmlfor="admiralty-file-input-5">
            <admiralty-icon class="upload-icon" icon-name="upload"></admiralty-icon>
            <span>
              Click to choose a file or drag it
            </span>
          </label>
        </div>
        <admiralty-input-invalid style="display: none;"></admiralty-input-invalid>
      </admiralty-file-input>
    `);
  });

  it('renders invalid with invalidMessage', async () => {
    const page = await newSpecPage({
      components: [FileInputComponent],
      html: `<admiralty-file-input invalid="true" invalid-message="This is invalid!"></admiralty-file-input>`,
    });
    expect(page.root).toEqualHtml(`
      <admiralty-file-input invalid="true" invalid-message="This is invalid!">
        <div class="admiralty-file-input invalid">
          <input aria-label="Upload a file" class="admiralty-form-field" id="admiralty-file-input-6" type="file">
          <label htmlfor="admiralty-file-input-6">
            <admiralty-icon class="upload-icon" icon-name="upload"></admiralty-icon>
            <span>
              Click to choose a file or drag it
            </span>
          </label>
        </div>
        <admiralty-input-invalid>
          This is invalid!
        </admiralty-input-invalid>
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

    expect(eventSpy).toBeCalledWith({ files: [file] });
  });

  it('emits fileInputChange event with empty file list', async () => {
    const comp = new FileInputComponent();

    const eventSpy = jest.spyOn(comp.fileInputChange, 'emit');

    let event = {
      preventDefault: jest.fn(),
      target: {
        files: [],
      },
    };

    comp.changeHandler(event as unknown as Event);

    expect(eventSpy).toBeCalledWith({ files: [] });
  });
});
