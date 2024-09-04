import { TableCell, TableRow } from "./ui/table"

function TableRowBodyComponent({
    data: { id, tp_equipment, nm_manufacturer, nm_model, nr_serial, dt_purchase, vlr_purchase },
    index
  }) {
  console.log(index);
  
  return (
    <TableRow id={id}>
      <TableCell className="text-center">{ index }</TableCell>
      <TableCell className="font-medium">{ tp_equipment }</TableCell>
      <TableCell className={`text-center ${!nm_manufacturer && "text-red-600"}`}>{ nm_manufacturer }</TableCell>
      <TableCell className={`text-center ${!nm_model && "text-red-600"}`}>{ nm_model }</TableCell>
      <TableCell className={`text-center ${!nr_serial && "text-red-600"}`}>{ nr_serial }</TableCell>
      <TableCell className={`text-center ${!dt_purchase && "text-red-600"}`}>{ dt_purchase ? dt_purchase : '*' }</TableCell>
      <TableCell className={`text-center ${!vlr_purchase && "text-red-600"}`}>{ vlr_purchase ? vlr_purchase : '*' }</TableCell>
    </TableRow>
  )
}

export default TableRowBodyComponent