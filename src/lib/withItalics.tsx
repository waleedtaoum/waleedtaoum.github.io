// Renders *text* segments in italics, e.g. journal names in content strings.
export const withItalics = (text: string) =>
  text.split(/(\*[^*]+\*)/).map((part, index) =>
    part.startsWith("*") && part.endsWith("*") ? <em key={index}>{part.slice(1, -1)}</em> : part
  );
