import {
  Table,
  TableBody,
  TableCaption,
  TableHeader,
} from "@/components/ui/table"
import TableRowHeaderComponent from "./TableRowHeaderComponent"
import TableRowBodyComponent from "./TableRowBodyComponent"
import { useEffect, useState } from "react"


function TableComponent({ data, selectedItems, setSelectedItems }) {
  const [allSelected, setAllSelected] = useState(false)
  const [deleteBtnIsDisabled, setDeleteBtnIsDisabled] = useState(true)

  const handleSelectAll = (checked) => {
    setAllSelected(checked);
    if (checked) {
      setSelectedItems(data.map((item) => item.id));
    } else {
      setSelectedItems([]);
    }
  };

  const handleItemSelect = (id, checked) => {
    if (checked) {
      setSelectedItems((prev) => [...prev, id]);
    } else {
      setSelectedItems((prev) => prev.filter((item) => item !== id));
    }
  };

  return (
    <Table>
      <TableCaption>Uma lista de todos os seus equipamentos.</TableCaption>
      <TableHeader>
        <TableRowHeaderComponent setAllSelected={handleSelectAll} />
      </TableHeader>
      <TableBody>
        {
          data?.length ?
            data.map((tablerow, index) => (
              <TableRowBodyComponent
                key={tablerow.id}
                data={tablerow}
                index={index}
                allSelected={allSelected}
                onSelect={handleItemSelect}
              />
            )) : null
        }
      </TableBody>
    </Table>
  )
}

export default TableComponent