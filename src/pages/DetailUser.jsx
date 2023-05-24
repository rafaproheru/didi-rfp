import { styled } from "styled-components";
import Layout from "../components/Layout";
import downGrayIcon from "../assets/down-black.svg";
import downloadIcon from "../assets/download-white.svg";
import { useNavigate } from "react-router-dom";
import TableDetailUser from "../components/tables/TableDetailUser";

const DetailUser = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <Container>
        <Header onClick={() => navigate("/consulta")}>
          <SectionName>
            <img
              src={downGrayIcon}
              alt="icon"
              style={{ transform: "rotate(90deg)" }}
            />
            <span>Regresar</span>
          </SectionName>
        </Header>
        <UserInfo>
          <div>
            <b>Datos personales del contribuyente</b>
            <span style={{ fontWeight: 600, fontSize: 20 }}>
              Jorge Alberto Calata Castillo
            </span>
            <span style={{ fontSize: 16, fontWeight: 400 }}>
              RFC: CACJ94322DT4
            </span>
          </div>
          <div>
            <span>Correo: jorge@gmail.com</span>
            <span>Teléfono: 3310442132</span>
          </div>
          <div>
            <span>Nacionalidad: Mexicana</span>
            <span>ID: 3310442132</span>
          </div>
          <div>
            <span>Estado: Jalisco</span>
            <span>Dirección: Naranjo 2321</span>
          </div>
        </UserInfo>
        <TableWrapper>
          <HeaderTable>
            <h4>Certificados del contribuyente</h4>
            <FilterAll>
              <span>
                Descargar Todos <img src={downloadIcon} alt="icon" />
              </span>
              <img src={downGrayIcon} alt="icon" />
            </FilterAll>
          </HeaderTable>
          <TableDetailUser />
          <ByHeru>
            Powered by <span>Heru</span>
          </ByHeru>
        </TableWrapper>
      </Container>
    </Layout>
  );
};

export default DetailUser;

const Container = styled.div`
  width: 100%;
  background-color: var(--neutral-200);
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

const UserInfo = styled.div`
  background-color: #fff;
  margin: 16px;
  padding: 24px;
  border-radius: 8px;
  display: flex;
  gap: 82px;
  align-items: end;
  & > div {
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-size: 14px;
    & > b:first-child {
      color: var(--font-100);
      font-size: 13px;
      font-weight: 500;
    }
    & > span {
      font-weight: 500;
    }
  }
`;

const TableWrapper = styled.div`
  background-color: #fff;
  margin: 16px;
  padding: 24px;
  position: relative;
  height: 716px;
`;

const HeaderTable = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
  & > h4 {
    font-size: 14px;
    font-weight: 500;
    color: var(--font-100);
  }
`;

const FilterAll = styled.div`
  display: flex;
  background-color: var(--neutral-100);
  padding-right: 16px;
  border-radius: 8px;
  & > span {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 6px 18px;
    color: #fff;
    border-radius: 8px;
    font-weight: 600;
    background-color: var(--orange-300);
    margin-right: 14px;
  }
`;

const ByHeru = styled.div`
  position: absolute;
  bottom: 16px;
  left: 16px;
  color: var(--font-100);
  font-size: 14px;
  & > span {
    text-decoration: underline;
  }
`;
