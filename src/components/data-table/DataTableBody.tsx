import { DataRow } from "../../types/DataTable"
/**
 * This DataTableBody component is responsible for rendering the body of the CustomDataTable. 
 * It takes in a generic type T which extends DataRow and an array of data (data) to be displayed in the table body.
 * Within the <tbody> element, it maps over the provided data array, generating a <tr> (table row) for each data item. 
 * For each row, it iterates over the keys of the object (assuming the data is structured as key-value pairs) and 
 * generates a <td> (table data) element for each key, displaying the corresponding value. 
 * Each <td> is uniquely identified by combining the row's ID and the current key.
 * Overall, this component dynamically renders the body of the data table based on the provided data, 
 * ensuring each row and cell are appropriately populated.
 * 
 * @param data: rows to be displayed in the data table
 */
interface IDataTableBody<T> {
  data: T[]
}
export default function DataTableBody<T extends DataRow>({ data } : IDataTableBody<T>) {
  return (
    <tbody>
      {
        data.map((row) => {
          return (
            <tr key={row.id}>
              {
                Object.keys(row).map((key) => {
                  return (
                    <td key={`${row.id} - ${key}`}>{row[key]}</td>
                  )
                })
              }
            </tr>
          )
        })
      }
          
        </tbody>
  )
}