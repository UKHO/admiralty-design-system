import { JsonDocs } from '@stencil/core/internal';
import { writeFileSync, mkdirSync } from 'fs';
export const generateDocs = (docs: JsonDocs) => {
  docs.components.forEach(comp => {
    const compTag = comp.tag.slice(10); // remove 'admiralty-' from the tag

    const props = renderProperties(comp);
    const events = renderEvents(comp);
    const methods = renderMethods(comp);
    const parts = renderParts(comp);
    const customProps = renderCustomProps(comp);
    const slots = renderSlots(comp);

    mkdirSync(`docs/${compTag}`);

    writeFileSync(`docs/${compTag}/props.mdx`, props, {});
    writeFileSync(`docs/${compTag}/events.mdx`, events);
    writeFileSync(`docs/${compTag}/methods.mdx`, methods);
    writeFileSync(`docs/${compTag}/parts.mdx`, parts);
    writeFileSync(`docs/${compTag}/customProps.mdx`, customProps);
    writeFileSync(`docs/${compTag}/slots.mdx`, slots);
    // data.push({
    //   outDir,
    //   componentTag: compTag,
    //   version,
    //   props: renderProperties(comp),
    //   events: renderEvents(comp),
    //   methods: renderMethods(comp),
    //   parts: renderParts(comp),
    //   customProps: renderCustomProps(comp),
    //   slots: renderSlots(comp),
    // });
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
