import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  PIN: string,
  FullName: string,
  Role: string,
  Status: string,
  Action: string,
  Privilege: string[]
) {
  return { PIN, FullName, Role, Status, Action, Privilege };
}

const rows = [
  createData(
    "00204199710230",
    "Бишкекский филиал центрального азиатского банка сотрудничества и развития",
    "Руководительотдела закупок",
    "Активный",
    "All",
    [
      "CanNotAnything",
      "canAll",
      "CanNotAnything",
      "canAll",
      "canAll",
      "CanNotAnything",
      "canAll",
      "CanNotAnything",
      "canAll",
    ]
  ),
  createData(
    "00204199710230",
    "Бишкекский филиал центрального азиатского банка сотрудничества и развития",
    "Руководительотдела закупок",
    "Активный",
    "All",
    [
      "CanNotAnything",
      "canAll",
      "CanNotAnything",
      "canAll",
      "canAll",
      "CanNotAnything",
      "canAll",
    ]
  ),
];

export const AccountControl = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='caption table'>
        <TableHead>
          <TableRow>
            <TableCell>ПИН пользователя</TableCell>
            <TableCell align='left'>ФИО</TableCell>
            <TableCell align='left'>Роль</TableCell>
            <TableCell align='left'>Статус</TableCell>
            <TableCell align='left'>Действие</TableCell>
            <TableCell align='left'>Привилегии</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.PIN}>
              <TableCell component='th' scope='row'>
                {row.PIN}
              </TableCell>
              <TableCell align='left'>{row.FullName}</TableCell>
              <TableCell align='left'>{row.Role}</TableCell>
              <TableCell align='left'>{row.Status}</TableCell>
              <TableCell align='left'>{row.Action}</TableCell>
              <TableCell align='left'>
                {row.Privilege.map((el) => ` ${el}`)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
