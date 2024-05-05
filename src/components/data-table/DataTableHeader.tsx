import { useDataTableCtx } from "../../context/DataTableContext";

/**
 * This DataTableHeader component renders the header row of the CustomDataTable. It imports the useDataTableCtx hook from a context file to access the column information provided by the DataTableContext.
 * Within the <thead> element, it maps over the columns array obtained from the context, generating a <th> (table header) element for each column. Each <th> element is uniquely identified by the column's key property and displays the column label (label).
 * Overall, this component dynamically renders the header row of the data table based on the provided column information, ensuring each column label is correctly displayed.
 * 
 */

export default function DataTableHeader() {
  const { columns } = useDataTableCtx()
  
  return (
    <thead>
      <tr>
      {
        columns.map((col) => (
          <th key={col.key}>
            {col.label}
          </th>
        ))
      }
      </tr>
    </thead>
  )
}
