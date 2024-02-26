import type { MDXComponents } from "mdx/types";
import {
  AdmiraltyTable,
  AdmiraltyTableBody,
  AdmiraltyTableCell,
  AdmiraltyTableHeader,
  AdmiraltyTableHeaderCell,
  AdmiraltyTableRow,
} from "@ukho/admiralty-react";
import CopyCodeSnippet from "@/components/copy-code-snippet/copy-code-snippet";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    table: ({ children }) => <AdmiraltyTable>{children}</AdmiraltyTable>,
    thead: ({ children }) => <AdmiraltyTableHeader>{children}</AdmiraltyTableHeader>,
    tbody: ({ children }) => <AdmiraltyTableBody>{children}</AdmiraltyTableBody>,
    th: ({ children }) => <AdmiraltyTableHeaderCell>{children}</AdmiraltyTableHeaderCell>,
    tr: ({ children }) => <AdmiraltyTableRow>{children}</AdmiraltyTableRow>,
    td: ({ children }) => <AdmiraltyTableCell>{children}</AdmiraltyTableCell>,
    pre: ({ children }) => <CopyCodeSnippet>{children}</CopyCodeSnippet>,
    ...components,
  };
}
