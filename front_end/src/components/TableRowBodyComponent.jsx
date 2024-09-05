import { useEffect, useState } from "react";
import { TableCell, TableRow } from "./ui/table";

function TableRowBodyComponent({
  data: { id, tp_equipment, nm_manufacturer, nm_model, nr_serial, dt_purchase, vl_purchase },
  index,
  allSelected,
  onSelect
}) {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(allSelected);
  }, [allSelected]);

  const handleChange = ({ target: { checked } }) => {
    setChecked(checked);
    onSelect(id, checked);
  };

  const colorError = 'text-red-600';

  return (
    <TableRow id={id}>
      <TableCell className="text-center">
        <label>
          <input
            type="checkbox"
            className="checkbox"
            checked={checked}
            onChange={handleChange}
          />
        </label>
      </TableCell>
      <TableCell className="text-center">{index}</TableCell>
      <TableCell className="font-medium text-center">{tp_equipment}</TableCell>
      <TableCell className={`text-center ${!nm_manufacturer && colorError}`}>{nm_manufacturer}</TableCell>
      <TableCell className={`text-center ${!nm_model && colorError}`}>{nm_model}</TableCell>
      <TableCell className={`text-center ${!nr_serial && colorError}`}>{nr_serial}</TableCell>
      <TableCell className={`text-center ${!dt_purchase && colorError}`}>{dt_purchase ? dt_purchase : '*'}</TableCell>
      <TableCell className={`text-center ${!vl_purchase && colorError}`}>{vl_purchase ? vl_purchase : '*'}</TableCell>
    </TableRow>
  );
}

export default TableRowBodyComponent;
