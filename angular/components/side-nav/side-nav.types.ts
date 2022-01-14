export interface SideNavItem {
  title: string;
  /**
   * Defines whether the user is actively navigating via this item.
   *
   * For example, if an end user selects this item, then navActive should be set to true.
   */
  navActive?: boolean;
}
