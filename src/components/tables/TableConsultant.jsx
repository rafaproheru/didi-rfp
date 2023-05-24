import { styled } from "styled-components";
import downloadBlackIcon from "../../assets/download-black.svg";
import consultTableData from "../../shared/constants";

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TablePagination } from "@mui/material";

function createData(rfc, name, id, state, address, period, date) {
  return { rfc, name, id, state, address, period, date };
}

const rows = [
  createData(
    "CACJ980423MA5",
    "Jorge Alberto Calata Castillo",
    32321,
    "Jalisco",
    "Naranjo 1126",
    10,
    "2022-11-02"
  ),
  createData(
    "CACJ980423MA5",
    "Jorge Alberto Calata Castillo",
    32321,
    "Jalisco",
    "Naranjo 1126",
    10,
    "2022-11-02"
  ),
  createData(
    "CACJ980423MA5",
    "Jorge Alberto Calata Castillo",
    32321,
    "Jalisco",
    "Naranjo 1126",
    10,
    "2022-11-02"
  ),
  createData(
    "CACJ980423MA5",
    "Jorge Alberto Calata Castillo",
    32321,
    "Jalisco",
    "Naranjo 1126",
    10,
    "2022-11-02"
  ),
  createData(
    "CACJ980423MA5",
    "Jorge Alberto Calata Castillo",
    32321,
    "Jalisco",
    "Naranjo 1126",
    10,
    "2022-11-02"
  ),
  createData(
    "CACJ980423MA5",
    "Jorge Alberto Calata Castillo",
    32321,
    "Jalisco",
    "Naranjo 1126",
    10,
    "2022-11-02"
  ),
  createData(
    "CACJ980423MA5",
    "Jorge Alberto Calata Castillo",
    32321,
    "Jalisco",
    "Naranjo 1126",
    10,
    "2022-11-02"
  ),
  createData(
    "CACJ980423MA5",
    "Jorge Alberto Calata Castillo",
    32321,
    "Jalisco",
    "Naranjo 1126",
    10,
    "2022-11-02"
  ),
];

const TableConsultant = () => {
  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell align="left">ID</TableCell>
              <TableCell align="left">Estado</TableCell>
              <TableCell align="left">Dirección</TableCell>
              <TableCell align="left">Periodo </TableCell>
              <TableCell align="left">Emisión </TableCell>
              <TableCell
                align="left"
                sx={{ display: "flex", gap: 2, alignItems: "center" }}
              >
                Descargar <img src={downloadBlackIcon} />{" "}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  sx={{ display: "flex", flexDirection: "column" }}
                  component="th"
                  scope="row"
                >
                  <b style={{ fontWeight: 600 }}>{row.rfc}</b>
                  <span style={{ color: "var(--font-100)" }}>{row.name}</span>
                </TableCell>
                <TableCell align="left"> <b> {row.id}</b></TableCell>
                <TableCell align="left"> <b> {row.state}</b></TableCell>
                <TableCell align="left"> <b> {row.address}</b></TableCell>
                <TableCell align="left"> <b> {row.period}</b></TableCell>
                <TableCell align="left"> <b> {row.date}</b></TableCell>
                <TableCell
                  align="left"
                  sx={{
                    color: "var(--font-100)",
                    fontWeight: 400,
                  }}
                >
                  XML - PDF - ZIP
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default TableConsultant;

const Container = styled.div`
  position: relative;
  font-size: 14px;
  padding: 12px;
  & > .divider {
    width: 97%;
    margin: 0 auto;
  }
  b {
    font-weight: 500;
  }
  .MuiTableCell-head {
    color: #757575;
  }
`;
