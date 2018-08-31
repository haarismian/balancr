import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

class AssetTable extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Asset</TableCell>
            <TableCell numeric>Current Allocation</TableCell>
            <TableCell numeric>Qty.</TableCell>
            <TableCell numeric>Target Allocation</TableCell>
            <TableCell numeric>Amount to Buy</TableCell>
            <TableCell numeric>New Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow key={1}>
            <TableCell component="th" scope="row">
              Name
            </TableCell>
            <TableCell numeric>10</TableCell>
            <TableCell numeric>10</TableCell>
            <TableCell numeric>10</TableCell>
            <TableCell numeric>10</TableCell>
            <TableCell numeric>10</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
  }
}
export default AssetTable;
