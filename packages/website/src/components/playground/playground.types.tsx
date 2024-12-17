import { ReactElement } from "react";

export enum UsageTarget {
  JavaScript = "javascript",
  Angular = "angular",
  React = "react",
  Vue = "vue",
  HTML = "html",
}

export type CodeSnippets = { [key: string]: ReactElement };
