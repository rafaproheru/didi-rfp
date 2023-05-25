import { styled } from "styled-components";
import Layout from "../components/Layout";
import downGrayIcon from "../assets/down-gray.svg";
import rightOrangeIcon from "../assets/right-orange.svg";
import rightWhiteIcon from "../assets/right-white.svg";
import { useNavigate } from "react-router-dom";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, date, status, notes) {
  return { name, date, status, notes };
}

const rows = [
  createData(
    "Diciembre 2022.csv",
    "12/12/2021",
    "Enviado",
    "Lorem ipsum dolor sit amet..."
  ),
  createData(
    "Noviembre 2022.csv",
    "12/12/2021",
    "Enviado",
    "Lorem ipsum dolor sit amet..."
  ),
];

const GenerateCertificates = () => {
  return (
    <Layout>
      <Container>
        <Header>
          <SectionName>
            <span>Generar certificados</span>
          </SectionName>
        </Header>
        <ContentWrapper>
          <UploadFiles>
            <h3>Carga de archivos</h3>
            <input type="text" placeholder="Nombre del CSV" />
            <Selector>
              Selecciona el tipo de archivo
              <img src={downGrayIcon} alt="down icon" />
            </Selector>
            <textarea rows="6" cols="50">
              Comentarios
            </textarea>
            <Buttons>
              <StyledButtonSecondary>
                Enviar a Heru
                <img src={rightOrangeIcon} alt="icon" />
              </StyledButtonSecondary>
              <StyledButton>
                Certificar
                <img src={rightWhiteIcon} alt="icon" />
              </StyledButton>
            </Buttons>
          </UploadFiles>
          <Historial>
            <h3>Historial</h3>
            <div className="divider" />
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Nombre</TableCell>
                    <TableCell>Fecha</TableCell>
                    <TableCell align="left">Estatus</TableCell>
                    <TableCell align="left">Notas</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="left">
                        {" "}
                        <b> {row.date}</b>
                      </TableCell>
                      <TableCell align="left">
                        {" "}
                        <b> {row.status}</b>
                      </TableCell>
                      <TableCell align="left">
                        {" "}
                        <b> {row.notes}</b>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Historial>
        </ContentWrapper>
      </Container>
    </Layout>
  );
};

export default GenerateCertificates;

const Container = styled.div`
  width: 100%;
  background-color: var(--neutral-200);
  & h3 {
    font-weight: 500;
    margin-bottom: 16px;
  }
`;

const Header = styled.div`
  background-color: #fff;
  cursor: pointer;
`;

const SectionName = styled.div`
  border-bottom: 1px solid #e5e5e5;
  padding: 20px 32px;
  display: flex;
  align-items: center;
  gap: 10px;
  & > span {
    position: relative;
    color: #000;
    font-weight: 500;
    font-size: 16px;
  }
`;

const ContentWrapper = styled.div`
  margin: 16px;
  display: flex;
  gap: 16px;
  @media (max-width: 1028px) {
    flex-direction: column;
  }
`;

const UploadFiles = styled.div`
  background-color: #fff;
  padding: 20px 32px;
  border-radius: 8px;
  min-width: 400px;
  & > input {
    width: 100%;
    height: 40px;
    padding: 0 16px;
    border: none;
    border-radius: 8px;
    background-color: var(--neutral-200);
    font-size: 16px;
    margin-bottom: 8px;
  }
  & > textarea {
    width: 100%;
    border: none;
    border-radius: 8px;
    background-color: var(--neutral-200);
    font-size: 16px;
    margin-top: 8px;
    padding: 16px;
    color: #636363;
  }
  @media (max-width: 1028px) {
    min-width: 0;
  }
`;

const Selector = styled.div`
  width: 100%;
  padding: 10px 16px;
  border-radius: 8px;
  color: #636363;
  background-color: var(--neutral-200);
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > img {
    width: 14px;
    margin-right: 4px;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;
`;

const StyledButtonSecondary = styled.div`
  width: 100%;
  height: 32px;
  border: 1px solid var(--orange-300);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 500;
  gap: 12px;
  color: var(--orange-300);
  cursor: pointer;
`;

const StyledButton = styled.div`
  cursor: pointer;
  width: 100%;
  height: 32px;
  background-color: var(--orange-300);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 500;
  gap: 12px;
`;

const Historial = styled.div`
  background-color: #fff;
  padding: 20px 16px;
  border-radius: 8px;
  width: 100%;
  b {
    font-weight: 500;
  }
  & > h3 {
    margin-left: 16px;
  }
`;
