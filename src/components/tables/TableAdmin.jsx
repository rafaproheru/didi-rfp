import { styled } from "styled-components";
import downloadBlackIcon from "../../assets/download-black.svg";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link, useNavigate } from "react-router-dom";

function createData(name, date, id, number, email, permision, conection) {
  return { name, date, id, number, email, permision, conection };
}

const rows = [
  createData(
    "Miguel Angel",
    "Miembro desde 12/09/2021",
    "1234567",
    "1234567890",
    "miguel@gmail.com",
    "Admin",
    "Hace 29 minutos"
  ),
  createData(
    "Miguel Angel",
    "Miembro desde 12/09/2021",
    "1234567",
    "1234567890",
    "miguel@gmail.com",
    "Admin",
    "Hace 29 minutos"
  ),
  createData(
    "Miguel Angel",
    "Miembro desde 12/09/2021",
    "1234567",
    "1234567890",
    "miguel@gmail.com",
    "Admin",
    "Hace 29 minutos"
  ),
  createData(
    "Miguel Angel",
    "Miembro desde 12/09/2021",
    "1234567",
    "1234567890",
    "miguel@gmail.com",
    "Admin",
    "Hace 29 minutos"
  ),
];

const TableAdmin = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell align="left">User ID</TableCell>
              <TableCell align="left">Teléfono</TableCell>
              <TableCell align="left">Correo</TableCell>
              <TableCell align="left">Permisos</TableCell>
              <TableCell align="left">Última conexión</TableCell>
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
                  <b style={{ fontWeight: 600 }}>{row.name}</b>
                  <span style={{ color: "var(--font-100)" }}>{row.date}</span>
                </TableCell>
                <TableCell align="left">
                  {" "}
                  <b> {row.id}</b>
                </TableCell>
                <TableCell align="left">
                  {" "}
                  <b> {row.number}</b>
                </TableCell>
                <TableCell align="left">
                  {" "}
                  <b> {row.email}</b>
                </TableCell>
                <TableCell align="left">
                  {" "}
                  <b> {row.permision}</b>
                </TableCell>
                <TableCell align="left">
                  {" "}
                  <b> {row.conection}</b>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default TableAdmin;

const Container = styled.div`
  position: relative;
  font-size: 14px;
  padding: 16px 16px 24px 16px;
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

  .MuiTableCell-body {
    padding: 12px 16px;
  }
`;
