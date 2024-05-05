import { IPagination } from "../../types/DataTable";
import { DEFAULT_BTN_COUNT } from "../../utils/Constants";
import "./TablePagination.css";
/**
 * This Pagination component renders a pagination control for navigating through pages of data. 
 * It receives props such as currentPage, totalPages, and onPageChange from the parent component.
 * Inside the component, renderPageNumbers function dynamically generates page number buttons based on the current page, total pages, and a maximum number of pages to show at a time. 
 * It adjusts the start and end page numbers to ensure that only a certain number of page buttons are visible at once, 
 * with proper handling for cases where the total number of pages is less than the maximum allowed to show.
 * The main render function returns a navigation (nav) element with a list (ul) of page number buttons. 
 * It includes buttons for navigating to the previous and next pages if applicable, 
 * with event handlers triggering the onPageChange function provided by the parent component.
 * Overall, this component provides an intuitive pagination interface for users to navigate through multiple pages of data efficiently.
 * 
 * @param currentPage: the current page
 * @param totalPages: total number of pages from the API
 * @param onPageChange: handles page change. fetches new data from API
 */
export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: IPagination) {
  const renderPageNumbers = () => {
    const pageNumbers = [];
    let startPage = Math.max(1, currentPage - Math.floor(DEFAULT_BTN_COUNT / 2));
    let endPage = Math.min(totalPages, startPage + DEFAULT_BTN_COUNT - 1);

    if (totalPages > DEFAULT_BTN_COUNT) {
      if (endPage === totalPages) {
        startPage = totalPages - DEFAULT_BTN_COUNT + 1;
      } else if (startPage === 1) {
        endPage = DEFAULT_BTN_COUNT;
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <li key={i} className={currentPage === i ? "active" : ""}>
          <button onClick={() => onPageChange(i)}>{i}</button>
        </li>
      );
    }
    return pageNumbers;
  };

  return (
    <nav className="pagination-container">
      <ul className="pagination">
        {currentPage > 1 && (
          <li>
            <button onClick={() => onPageChange(currentPage - 1)}>
              &laquo;
            </button>
          </li>
        )}
        {renderPageNumbers()}
        {currentPage < totalPages && (
          <li>
            <button onClick={() => onPageChange(currentPage + 1)}>
              &raquo;
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}
