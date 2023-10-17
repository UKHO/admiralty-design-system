import { JsonDocs } from '@stencil/core/internal';
import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { rimrafSync } from 'rimraf';
import * as path from 'path';
export const generateDocs = (docs: JsonDocs) => {
  const outputPath = '../docs/components';

  // Clean the outputPath
  rimrafSync(outputPath);

  docs.components.forEach(comp => {
    const compTag = comp.tag.slice(10); // remove 'admiralty-' from the tag

    const props = renderProperties(comp);
    const events = renderEvents(comp);
    const methods = renderMethods(comp);
    const parts = renderParts(comp);
    const customProps = renderCustomProps(comp);
    const slots = renderSlots(comp);

    const componentPath = path.resolve(outputPath, compTag);

    if (!existsSync(componentPath)) {
      mkdirSync(componentPath, { recursive: true });
    }

    writeFileSync(path.resolve(componentPath, 'props.mdx'), props);
    writeFileSync(path.resolve(componentPath, 'events.mdx'), events);
    writeFileSync(path.resolve(componentPath, 'methods.mdx'), methods);
    writeFileSync(path.resolve(componentPath, 'parts.mdx'), parts);
    writeFileSync(path.resolve(componentPath, 'customProps.mdx'), customProps);
    writeFileSync(path.resolve(componentPath, 'slots.mdx'), slots);
  });
};

const renderProperties = ({ props: properties }): string => {
  if (properties.length === 0) {
    return 'No properties available for this component.';
  }

  // NOTE: replaces | with U+FF5C since MDX renders \| in tables incorrectly
  return `
  | Name | Type | Default | Description |
| --- | --- | --- | --- |
${properties.map(prop => `| \`${prop.attr}\` | \`${formatType(prop.attr, prop.type)}\` | \`${prop.default}\` | ${formatMultiline(prop.docs)} |`).join('\n')}

`;
};

const renderEvents = ({ events }): string => {
  if (events.length === 0) {
    return 'No events available for this component.';
  }

  return `
| Name | Description |
| --- | --- |
${events.map(event => `| \`${event.event}\` | ${formatMultiline(event.docs)} |`).join('\n')}

`;
};

const renderMethods = ({ methods }): string => {
  if (methods.length === 0) {
    return 'No public methods available for this component.';
  }

  // NOTE: replaces | with U+FF5C since MDX renders \| in tables incorrectly
  return `
${methods
  .map(
    method => `
### ${method.name}

| | |
| --- | --- |
| **Description** | ${formatMultiline(method.docs)} |
| **Signature** | \`${method.signature.replace(/\|/g, '\uff5c')}\` |
`,
  )
  .join('\n')}

`;
};

const renderParts = ({ parts }): string => {
  if (parts.length === 0) {
    return 'No CSS shadow parts available for this component.';
  }

  return `
| Name | Description |
| --- | --- |
${parts.map(prop => `| \`${prop.name}\` | ${formatMultiline(prop.docs)} |`).join('\n')}

`;
};

const renderCustomProps = ({ styles: customProps }): string => {
  if (customProps.length === 0) {
    return 'No CSS custom properties available for this component.';
  }

  return `
| Name | Description |
| --- | --- |
${customProps.map(prop => `| \`${prop.name}\` | ${formatMultiline(prop.docs)} |`).join('\n')}

`;
};

const renderSlots = ({ slots }): string => {
  if (slots.length === 0) {
    return 'No slots available for this component.';
  }

  return `
| Name | Description |
| --- | --- |
${slots.map(slot => `| \`${slot.name}\` | ${formatMultiline(slot.docs)} |`).join('\n')}

`;
};

/**
 * Formats line breaks in a multiline string to be displayed in a table.
 * @param {*} str The string to format
 * @returns The formatted string
 */
const formatMultiline = (str: string) => {
  return str.split('\r\n').join('<br /><br />').split('\n').join(' ');
};

const formatType = (attr: string, type: string) => {
  if (attr === 'color') {
    /**
     * The `color` attribute has an additional type that we don't want to display.
     * The union type is used to allow intellisense to recommend the color names,
     * while still accepting any string value.
     */
    type = type.replace('string & Record<never, never>', 'string');
  }
  return type.replace(/\|/g, '\uff5c');
};
