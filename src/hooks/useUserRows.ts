import { useState } from "react"
import { mockUserList } from "../__mocks__/MockUserList"
import { IUserRow } from "../types/User"
import { DEFAULT_PAGE, DEFAULT_ROWS } from "../utils/Constants"
import { getUserFullName } from "../utils/Format"
/**
 * useUserRows
 *  -  hook designed to manage user data for a paginated table. It initializes states for loading status, total pages, total rows per page, current page, and the user rows themselves. 
 * It also includes a function to fetch user rows based on the current page and total rows per page. 
 * Note: This implementation utilizes mock data and a placeholder API call that logs the page and totalRows values to the console. 
 * 
 * @returns {isLoading userRows, totalRows, totalPages, page, handleGetUserRow }
 */
export function useUserRows() {
  const [isLoading] = useState(false)
  //change totalPages value here to see the pagination
  const [totalPages] = useState(12)
  const [totalRows] = useState(DEFAULT_ROWS);
  const [page, setPage] = useState(DEFAULT_PAGE)
  const [userRows] = useState<IUserRow[]>(mockUserList.map((user) => ({
    id: String(user.id),
    fullName: getUserFullName(user.firstName, user.lastName),
    email: user.emailAddress
  })))

  const fetchUsers = (page: number, totalRows: number) => {
    //-----NOTE----------
    // API CALL here to pass page, totalRows
    // fetch('API_URL?page=page&total=totalRows')
    console.log(page, totalRows)
  }
  const handleGetUserRow = (page: number, totalRows = DEFAULT_ROWS) => {
    setPage(page)
    fetchUsers(page, totalRows)
  }
  return {
    /* isLoading: loading state*/
    isLoading,
    /* userRows: rows of type DataRow that are used in the rows of DataTable */
    userRows,
    /* totalRows: total rows per page */
    totalRows,
    /* totalPages: total pages */
    totalPages,
    /* page: current page */
    page,
    /* handleGetUserRow: fetch new rows of users if page state changes */
    handleGetUserRow,
  };

}