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

function createData(date, emisor, period, id, gob, ret, pen) {
  return { date, emisor, period, id, gob, ret, pen };
}

const rows = [
  createData("20-02-2023", "DiDi Food", 12, 23423, 0, "$323.03", "No"),
  createData("20-02-2023", "DiDi Food", 12, 23423, 0, "$323.03", "No"),
  createData("20-02-2023", "DiDi Food", 12, 23423, 0, "$323.03", "No"),
  createData("20-02-2023", "DiDi Food", 12, 23423, 0, "$323.03", "No"),
  createData("20-02-2023", "DiDi Food", 12, 23423, 0, "$323.03", "No"),
  createData("20-02-2023", "DiDi Food", 12, 23423, 0, "$323.03", "No"),
  createData("20-02-2023", "DiDi Food", 12, 23423, 0, "$323.03", "No"),
  createData("20-02-2023", "DiDi Food", 12, 23423, 0, "$323.03", "No"),
  createData("20-02-2023", "DiDi Food", 12, 23423, 0, "$323.03", "No"),
];

const TableDetailUser = () => {
  const navigate = useNavigate();

  return (
    <Container onClick={() => navigate("/detail-user")}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Emisión</TableCell>
              <TableCell>Emisor</TableCell>
              <TableCell align="left">Periodo</TableCell>
              <TableCell align="left">ID</TableCell>
              <TableCell align="left">Imp. Gub</TableCell>
              <TableCell align="left">Total Retenido </TableCell>
              <TableCell align="left">Penalizado </TableCell>
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
                key={row.date}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.date}
                </TableCell>
                <TableCell align="left">
                  {" "}
                  <b> {row.emisor}</b>
                </TableCell>
                <TableCell align="left">
                  {" "}
                  <b> {row.period}</b>
                </TableCell>
                <TableCell align="left">
                  {" "}
                  <b> {row.id}</b>
                </TableCell>
                <TableCell align="left">
                  {" "}
                  <b> {row.gob}</b>
                </TableCell>
                <TableCell align="left">
                  {" "}
                  <b> {row.ret}</b>
                </TableCell>
                <TableCell align="left">
                  {" "}
                  <b> {row.pen}</b>
                </TableCell>
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

export default TableDetailUser;

const Container = styled.div`
  cursor: pointer;
  position: relative;
  font-size: 14px;
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
