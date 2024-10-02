export interface HeaderItem {
  title: string;
  clickAction?: () => any;
  navActive?: boolean;
  subitems?: HeaderSubItem[];
  href?: string;
  suppressRedirect?: boolean;
}

export interface HeaderSubItem {
  title: string;
  clickAction: () => any;
  href?: string;
  suppressRedirect?: boolean;
}
