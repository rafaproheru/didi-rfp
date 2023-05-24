import { styled } from "styled-components";
import Layout from "../components/Layout";
import fileIcon from "../assets/file-black.svg";
import calendarIcon from "../assets/calendar-black.svg";
import downIcon from "../assets/down-black.svg";
import downGrayIcon from "../assets/down-gray.svg";
import downloadIcon from "../assets/download-white.svg";
import searchIcon from "../assets/search.svg";
import TableConsultant from "../components/tables/TableConsultant";

const Consulta = () => {
  return (
    <Layout>
      <Container>
        <Header>
          <SectionName>
            <span>Certificados</span>
          </SectionName>
          <Filters>
            <div>
              <Filter>
                <img src={fileIcon} alt="icon" />
                Filtrar por emisor
                <img src={downIcon} alt="icon" />
              </Filter>
              <Filter>
                <img src={fileIcon} alt="icon" />
                Filtrar por periodo
                <img src={downIcon} alt="icon" />
              </Filter>
            </div>
            <FilterAll>
              <span>
                Descargar Todos <img src={downloadIcon} alt="icon" />
              </span>
              <img src={downGrayIcon} alt="icon" />
            </FilterAll>
          </Filters>
        </Header>
        <TableWrapper>
          <HeaderTable>
            <Searchbar>
              <div>
                Nombre
                <img src={downIcon} alt="icon" />
              </div>
              <input placeholder="Buscar usuario" />
              <img src={searchIcon} alt="icon" />
            </Searchbar>
            <span>
              Todos los certificados <b>(1,232,021)</b>
            </span>
          </HeaderTable>
          <TableConsultant />
          <ByHeru>
            Powered by <span>Heru</span>
          </ByHeru>
        </TableWrapper>
      </Container>
    </Layout>
  );
};

export default Consulta;

const Container = styled.div`
  width: 100%;
  background-color: var(--neutral-200);
`;

const Header = styled.div`
  background-color: #fff;
`;

const SectionName = styled.div`
  border-bottom: 1px solid #e5e5e5;
  padding: 20px 32px;
  & > span {
    position: relative;
    color: var(--orange-300);
    font-weight: 600;
    font-size: 14px;
  }
  & > span::before {
    content: "";
    width: 100%;
    height: 2px;
    background-color: var(--orange-300);
    position: absolute;
    bottom: -21px;
    border-radius: 12px;
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
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--neutral-100);
  padding: 8px 16px;
  gap: 12px;
  border-radius: 8px;
  font-weight: 500;
  font-size: 14px;
  & > img {
    width: 12px;
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
  }
`;

const TableWrapper = styled.div`
  border-radius: 8px;
  background-color: #fff;
  margin: 14px;
  height: 780px;
  position: relative;
`;

const HeaderTable = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  border-bottom: 1px solid #e5e5e5;
  & > span {
    font-weight: 600;
  }
  & > span > b {
    font-weight: 600;
    color: var(--orange-300);
  }
`;

const Searchbar = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  background-color: var(--neutral-100);
  padding: 4px 16px 4px 4px;
  border-radius: 8px;
  & > div {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 4px 16px;
    background-color: #fff;
    border-radius: 6px;
  }
  & > input {
    border: none;
    outline: none;
    background-color: transparent;
    font-size: 15px;
    min-width: 250px;
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
