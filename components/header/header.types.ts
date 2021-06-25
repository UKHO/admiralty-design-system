export interface HeaderItem {
  title: string;
  clickAction?: () => any;
  subitems?: HeaderSubItem[];
}

export interface HeaderSubItem {
  title: string;
  clickAction: () => any;
}

/**
 * @deprecated use individual inputs for each branding option for the header
 */
export interface Branding {
  title: string;
  logoImgUrl: string;
  logoAltText: string;
  logoLinkUrl: string;
}
