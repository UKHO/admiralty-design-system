export interface HeaderItem {
  title: string;
  clickAction?: () => any;
  navActive?: boolean;
  subitems?: HeaderSubItem[];
}

export interface HeaderSubItem {
  title: string;
  clickAction: () => any;
}
