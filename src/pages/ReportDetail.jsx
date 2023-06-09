import { styled } from "styled-components";
import Layout from "../components/Layout";
import fileIcon from "../assets/file-black.svg";
import downIcon from "../assets/down-black.svg";
import downGrayIcon from "../assets/down-gray.svg";
import downloadIcon from "../assets/download-white.svg";
import calendarIcon from "../assets/calendar-black.svg";
import circleFileIcon from "../assets/circle-file.svg";
import Report from "../components/Report";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import ButtonDownload from "../components/ButtonDownload";
import ButtonFilter from "../components/ButtonFilter";

function createData(number, rfc, result) {
  return { number, rfc, result };
}

const rows = [
  createData(
    1,
    "MAGV851010R60",
    "RFC válido, no susceptible de recibir facturas"
  ),
  createData(
    2,
    "MAGV851010R60",
    "RFC válido, no susceptible de recibir facturas"
  ),
  createData(
    3,
    "MAGV851010R60",
    "RFC válido, no susceptible de recibir facturas"
  ),
  createData(
    4,
    "MAGV851010R60",
    "RFC válido, no susceptible de recibir facturas"
  ),
  createData(
    5,
    "MAGV851010R60",
    "RFC válido, no susceptible de recibir facturas"
  ),
];

const ReportDetail = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <Container>
        <Header>
          <SectionName onClick={() => navigate("/reportes")}>
            <img
              src={downIcon}
              alt="icon"
              style={{ transform: "rotate(90deg)" }}
            />
            <span>Regresar</span>
            <DividerVertical />
            <span>Reporte de certificados</span>
            <DividerVertical />
            Diciembre 2022
          </SectionName>
          <Filters>
            <div>
              <ButtonFilter text="Filtrar por emisor" />
              <ButtonFilter
                text="Cambiar periodo"
                icon={<img src={calendarIcon} alt="icon" />}
              />
            </div>
            <div>
              <ButtonDownload title="Descargar reporte" />
            </div>
          </Filters>
        </Header>
        <ReportsWrapper>
          <Report title="Diciembre 2022.csv" />
          <div className="bottom">
            <Validation>
              <h6>Validación de RFC</h6>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table" className="rfc">
                  <TableHead>
                    <TableRow>
                      <TableCell>Número</TableCell>
                      <TableCell>RFC</TableCell>
                      <TableCell align="left">Resultado</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.number}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {row.number}
                        </TableCell>
                        <TableCell align="left">
                          {" "}
                          <b> {row.rfc}</b>
                        </TableCell>
                        <TableCell align="left">
                          {" "}
                          <b> {row.result}</b>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Validation>
            <Observations>
              <span>
                <img src={circleFileIcon} alt="icon" />
                <h6>Observaciones</h6>
              </span>
              <div className="divider" />
              <div className="note">
                El archivo con los resultados llamado
                “response_Layout_RTs_Diciembre_2021” se encuentra disponible
                para consulta a traves del SFTP, y contiene el UUID generado por
                cada certificado, url del documento PDF y url del documento XML.
              </div>
              <ul>
                <li>
                  Derivado del proceso de certificación del período anterior, se
                  realizó de forma exitosa el cambio del parámetro Tipo de Pago
                  de las retenciones aplicadas por “Pago Provisional” para ambos
                  impuestos.{" "}
                </li>
                <li>
                  Dentro de los certificados emitidos, existe un caso de
                  anomalía a considerar para el usuario con SKID=61869. Debido a
                  un error del PAC de timbrado, inicialmente se envió la
                  información para certificación de dicho usuario y se devolvió
                  un estado fallido, sin embargo, unas horas después se volvió a
                  procesar de forma automática con resultado exitoso, y después
                  de actualizar la base completa, el estatus del primer intento
                  arrojó como respuesta el certificado emitido también
                  exitosamente. La contestación de parte del PAC.
                </li>
              </ul>
            </Observations>
          </div>
        </ReportsWrapper>
      </Container>
    </Layout>
  );
};

export default ReportDetail;

const Container = styled.div`
  width: 100%;
  background-color: var(--neutral-200);
  @media (max-width: 1028px) {
    .bottom {
      flex-direction: column;
    }
  }
`;

const Header = styled.div`
  background-color: #fff;
`;

const SectionName = styled.div`
  border-bottom: 1px solid #e5e5e5;
  padding: 20px 32px;
  display: flex;
  align-items: center;
  gap: 16px;
  color: var(--font-100);
  font-size: 14px;
  cursor: pointer;
  & > span {
    position: relative;
    font-weight: 500;
    font-size: 16px;
    color: #000;
  }
`;

const Filters = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 32px;
  & > div {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  @media (max-width: 1028px) {
    flex-direction: column;
    gap: 8px;
    & > div {
      flex-direction: column;
      align-items: start;
      gap: 8px;
    }
  }
`;

const ReportsWrapper = styled.div`
  margin: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  & > .bottom {
    display: flex;
    gap: 16px;
  }
`;

const DividerVertical = styled.div`
  width: 2px;
  height: 18px;
  background-color: var(--neutral-100);
`;

const Validation = styled.div`
  background-color: #fff;
  padding: 16px;
  border-radius: 8px;
  & > h6 {
    font-weight: 500;
    font-size: 16px;
    padding: 12px 12px 16px 12px;
  }
  @media (max-width: 1028px) {
    .rfc{
      min-width: 0;
    }
  }
`;

const Observations = styled.div`
  flex: 1;
  background-color: #fff;
  padding: 16px;
  border-radius: 8px;
  font-size: 14px;
  & > span {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 6px 6px 16px 6px;
  }
  & h6 {
    font-size: 16px;
    font-weight: 500;
  }
  & .note {
    background-color: var(--neutral-200);
    padding: 16px;
    border-radius: 8px;
    margin: 16px 0;
    font-size: 14px;
  }
  & ul {
    padding: 0 24px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;
