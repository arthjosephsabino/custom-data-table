import { mockColumns } from './__mocks__/MockDataTable';
import CustomDataTable from './components/data-table/CustomDataTable';
import { useUserRows } from './hooks/useUserRows';
import { IUserRow } from './types/User';
function App() {
  const { userRows, totalRows, totalPages, handleGetUserRow, page } = useUserRows()
  return (
    <CustomDataTable<IUserRow>
      columns={mockColumns}
      data={userRows}
      pageProps={{
        currentPage: page,
        totalPages,
        totalRows,
        onPageChange: handleGetUserRow,
      }}
    />
  );
}
export default App
