import { newSpecPage } from '@stencil/core/testing';
import { FileInputComponent } from './file-input';

let id = 0;

describe('file-input', () => {
  it('renders', async () => {
    id++;
    const page = await newSpecPage({
      components: [FileInputComponent],
      html: `<admiralty-file-input></admiralty-file-input>`,
    });
    expect(page.root).toEqualHtml(`
      <admiralty-file-input>
        <div class="admiralty-file-input">
          <input aria-describedby="" aria-label="Upload a file" class="admiralty-form-field" id="admiralty-file-input-${id}-input" type="file">
          <label htmlfor="admiralty-file-input-${id}-input">
            <admiralty-icon class="upload-icon" icon-name="upload"></admiralty-icon>
            <span>
              Click to choose a file or drag it
            </span>
          </label>
        </div>
        <admiralty-input-invalid id="admiralty-file-input-${id}-error" style="display: none;"></admiralty-input-invalid>
      </admiralty-file-input>
    `);
  });

  it('renders multiple selection', async () => {
    id++;
    const page = await newSpecPage({
      components: [FileInputComponent],
      html: `<admiralty-file-input multiple="true"></admiralty-file-input>`,
    });
    expect(page.root).toEqualHtml(`
      <admiralty-file-input multiple="true">
        <div class="admiralty-file-input">
          <input aria-describedby="" aria-label="Upload a file" class="admiralty-form-field" id="admiralty-file-input-${id}-input" multiple="" type="file">
          <label htmlfor="admiralty-file-input-${id}-input">
            <admiralty-icon class="upload-icon" icon-name="upload"></admiralty-icon>
            <span>
              Click to choose a file or drag it
            </span>
          </label>
        </div>
        <admiralty-input-invalid id="admiralty-file-input-${id}-error" style="display: none;"></admiralty-input-invalid>
      </admiralty-file-input>
    `);
  });

  it('renders single selection', async () => {
    id++;
    const page = await newSpecPage({
      components: [FileInputComponent],
      html: `<admiralty-file-input multiple="false"></admiralty-file-input>`,
    });
    expect(page.root).toEqualHtml(`
      <admiralty-file-input multiple="false">
        <div class="admiralty-file-input">
          <input aria-describedby="" aria-label="Upload a file" class="admiralty-form-field" id="admiralty-file-input-${id}-input" type="file">
          <label htmlfor="admiralty-file-input-${id}-input">
            <admiralty-icon class="upload-icon" icon-name="upload"></admiralty-icon>
            <span>
              Click to choose a file or drag it
            </span>
          </label>
        </div>
        <admiralty-input-invalid id="admiralty-file-input-${id}-error" style="display: none;"></admiralty-input-invalid>
      </admiralty-file-input>
    `);
  });

  it('renders different label', async () => {
    id++;
    const page = await newSpecPage({
      components: [FileInputComponent],
      html: `<admiralty-file-input label="My other label"></admiralty-file-input>`,
    });
    expect(page.root).toEqualHtml(`
      <admiralty-file-input label="My other label">
        <div class="admiralty-file-input">
          <input aria-describedby="" aria-label="Upload a file" class="admiralty-form-field" id="admiralty-file-input-${id}-input" type="file">
          <label htmlfor="admiralty-file-input-${id}-input">
            <admiralty-icon class="upload-icon" icon-name="upload"></admiralty-icon>
            <span>
              My other label
            </span>
          </label>
        </div>
        <admiralty-input-invalid id="admiralty-file-input-${id}-error" style="display: none;"></admiralty-input-invalid>
      </admiralty-file-input>
    `);
  });

  it('renders invalid even without invalidMessage', async () => {
    id++;
    const page = await newSpecPage({
      components: [FileInputComponent],
      html: `<admiralty-file-input invalid="true"></admiralty-file-input>`,
    });
    expect(page.root).toEqualHtml(`
      <admiralty-file-input invalid="true">
        <div class="admiralty-file-input invalid">
          <input aria-describedby="admiralty-file-input-${id}-error" aria-label="Upload a file" class="admiralty-form-field" id="admiralty-file-input-${id}-input" type="file">
          <label htmlfor="admiralty-file-input-${id}-input">
            <admiralty-icon class="upload-icon" icon-name="upload"></admiralty-icon>
            <span>
              Click to choose a file or drag it
            </span>
          </label>
        </div>
        <admiralty-input-invalid id="admiralty-file-input-${id}-error" style="display: none;"></admiralty-input-invalid>
      </admiralty-file-input>
    `);
  });

  it('renders invalid with invalidMessage', async () => {
    id++;
    const page = await newSpecPage({
      components: [FileInputComponent],
      html: `<admiralty-file-input invalid="true" invalid-message="This is invalid!"></admiralty-file-input>`,
    });
    expect(page.root).toEqualHtml(`
      <admiralty-file-input invalid="true" invalid-message="This is invalid!">
        <div class="admiralty-file-input invalid">
          <input aria-describedby="admiralty-file-input-${id}-error" aria-label="Upload a file" class="admiralty-form-field" id="admiralty-file-input-${id}-input" type="file">
          <label htmlfor="admiralty-file-input-${id}-input">
            <admiralty-icon class="upload-icon" icon-name="upload"></admiralty-icon>
            <span>
              Click to choose a file or drag it
            </span>
          </label>
        </div>
        <admiralty-input-invalid id="admiralty-file-input-${id}-error">
          This is invalid!
        </admiralty-input-invalid>
      </admiralty-file-input>
    `);
  });

  it('renders with a custom ID', async () => {
    const id = 'custom';
    const page = await newSpecPage({
      components: [FileInputComponent],
      html: `<admiralty-file-input id="${id}"></admiralty-file-input>`,
    });
    expect(page.root).toEqualHtml(`
      <admiralty-file-input id="${id}">
        <div class="admiralty-file-input">
          <input aria-describedby="" aria-label="Upload a file" class="admiralty-form-field" id="${id}-input" type="file">
          <label htmlfor="${id}-input">
            <admiralty-icon class="upload-icon" icon-name="upload"></admiralty-icon>
            <span>
              Click to choose a file or drag it
            </span>
          </label>
        </div>
        <admiralty-input-invalid id="${id}-error" style="display: none;"></admiralty-input-invalid>
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
