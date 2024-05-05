import { createContext, useContext } from "react";
import { ICol } from "../types/DataTable";
/**
 * This context provider, named DataTableContext, establishes a React context to manage column information for data tables. 
 * It utilizes createContext from React to create a context object with an initial value of undefined, specifying that the context will hold an array of column objects (ICol) eventually.
 * The useDataTableCtx custom hook is also defined, utilizing the useContext hook from React to access the context value within components. 
 * It throws an error if used outside the DataTableContext, ensuring that components using this hook are always wrapped within the corresponding context provider.
 * Overall, this context provider and hook combination enables components to access and consume column data for data tables within their tree, 
 * ensuring a robust and predictable data flow for rendering tables.
 */
interface DataTableContextType {
  columns: ICol[]
}
export const DataTableContext = createContext<DataTableContextType | undefined>(
  undefined
);

export const useDataTableCtx = () => {
  const dataTableCtx = useContext(DataTableContext);
  if (dataTableCtx === undefined) {
    throw new Error("useDataTableCtx must be in DataTableContext");
  }
  return dataTableCtx;
};
