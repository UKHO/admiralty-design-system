export interface ColumnData {
  /**
   * Name to show in UI for the heading
   */
  headerTitle?: string;
  /**
   * Property name of the data you wish to fill the column
   */
  propertyName: string;
  /**
   * Determines if a column is sortable or not
   */
  sortable?: boolean;
}
