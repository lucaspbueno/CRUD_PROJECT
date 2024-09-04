import {
  Table,
  TableBody,
  TableCaption,
  TableHeader,
} from "@/components/ui/table"
import TableRowHeaderComponent from "./TableRowHeaderComponent"
import TableRowBodyComponent from "./TableRowBodyComponent"


function TableComponent({ data }) {  
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRowHeaderComponent />
      </TableHeader>
      <TableBody>
        {
          data?.length &&
            data.map((tablerow, index) => <TableRowBodyComponent key={tablerow.id} data={tablerow} index={index} />)
        }
      </TableBody>
    </Table>
  )
}

export default TableComponent