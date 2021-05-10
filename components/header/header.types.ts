export interface Navigation {
  branding: Branding;
}

export interface HeaderItem {
  title: string;
  clickAction?: () => any;
  subitems?: HeaderSubItem[];
}

export interface HeaderSubItem {
  title: string;
  clickAction: () => any;
}
export interface Branding {
  title: string;
  logoImgUrl: string;
  logoAltText: string;
  logoLinkUrl: string;
}
