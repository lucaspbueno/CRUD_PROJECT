import { TableHead, TableRow } from "./ui/table"

function TableRowHeaderComponent() {
  return (
    <TableRow>
      <TableHead className="text-center">#</TableHead>
      <TableHead className="w-[100px] text-center">Tipo</TableHead>
      <TableHead className="text-center">Fabricante</TableHead>
      <TableHead className="text-center">Modelo</TableHead>
      <TableHead className="text-center">Número de série</TableHead>
      <TableHead className="text-center">Data de compra</TableHead>
      <TableHead className="text-center">Valor de compra</TableHead>
    </TableRow>
  )
}

export default TableRowHeaderComponent