import * as React from "react";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Checkbox from "@mui/material/Checkbox";

function createData(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      {
        title: "Build with the App Framework"
      },
      {
        title: "Custom apps"
      },
      {
        title: "Marketplace apps"
      }
    ]
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow>
        <TableCell>{row.name}</TableCell>
        <TableCell />
        <TableCell />
        <TableCell align="right">
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={4} width="100%">
          <Collapse in={open} timeout="auto" unmountOnExit>
            {row.history.map((historyRow) => (
              <TableRow key={historyRow.title}>
                <TableCell align="left" style={{ width: "25%" }}>
                  {historyRow.title}
                </TableCell>
                <TableCell align="center" style={{ width: "25%" }}>
                  <Checkbox checked disabled />
                </TableCell>
                <TableCell align="center" style={{ width: "25%" }}>
                  <Checkbox checked disabled />
                </TableCell>
                <TableCell align="center" style={{ width: "25%" }}>
                  <Checkbox disabled />
                </TableCell>
              </TableRow>
            ))}
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
const rows = [createData("APPS"), createData("Space limits")];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell align="center" style={{ width: "25%" }}>
              特征和服务
            </TableCell>
            <TableCell align="center" style={{ width: "25%" }}>
              免费版
            </TableCell>
            <TableCell align="center" style={{ width: "25%" }}>
              标准服务版
            </TableCell>
            <TableCell align="center" style={{ width: "25%" }}>
              专业服务版
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
