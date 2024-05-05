export interface ICol {
  key: string;
  label: string;
}

export declare type DataRow = {
  /** unique ID for this row */
  id: string;
  [key: string]: string;
};

export interface IPagination {
  /** current page in pagination */
  currentPage: number;
  /** total rows per page */
  totalRows: number;
  /** total pages */
  totalPages: number;
  /** API  */
  onPageChange: (page: number, totalRows?: number) => void;
} 

export interface ICustomDataTable<T extends DataRow> {
  /** pageProps for pagination in data table */
  pageProps: IPagination;
  /** columns of the table */
  columns: ICol[];
  /** data that will be displayed in rows in table */
  data: T[];
}