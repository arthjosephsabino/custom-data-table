import { DataTableContext } from '../../context/DataTableContext';
import { DataRow, ICustomDataTable } from '../../types/DataTable';
import Pagination from '../pagination/TablePagination';
import './CustomDataTable.css';
import DataTableBody from './DataTableBody';
import DataTableHeader from './DataTableHeader';
/**
 * This CustomDataTable component accepts props such as columns, data, and pageProps, where columns represent the structure of the table, data contains the rows to display, and pageProps contains pagination-related props.
 * The component wraps its content within a DataTableContext.Provider, passing down the column information to its children. 
 * Inside the provider, it renders a <table> element with class "data-table", comprising a table header (DataTableHeader) and body (DataTableBody) to display the provided data.
 * Additionally, it conditionally renders a pagination component (Pagination) based on whether the current page in pageProps is greater than 0, ensuring pagination is displayed only when necessary.
 * @param columns: columns of the data table
 * @param data: rows that would be displayed in the table
 * @param pageProps: props for pagination
 */
export default function CustomDataTable<T extends DataRow = DataRow>({
  columns,
  data,
  pageProps,
}: ICustomDataTable<T>) {
  return (
    <DataTableContext.Provider
      value={{
        columns,
      }}
    >
      <table className="data-table">
        <DataTableHeader />
        <DataTableBody<T> data={data} />
      </table>
      {pageProps.currentPage > 0 ? (
        <Pagination {...pageProps}/>
      ) : null}
    </DataTableContext.Provider>
  );
}