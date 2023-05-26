import { styled } from "styled-components";
import Layout from "../components/Layout";
import downIcon from "../assets/down-black.svg";
import downGrayIcon from "../assets/down-gray.svg";
import downloadIcon from "../assets/download-white.svg";
import searchIcon from "../assets/search.svg";
import TableConsultant from "../components/tables/TableConsultant";
import ButtonFilter from "../components/ButtonFilter";
import ButtonDownload from "../components/ButtonDownload";

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
              <ButtonFilter
                text="Filtrar por emisor"
                options={[
                  "Didi Mobility Information Technology",
                  "Rebuilding Technology",
                ]}
              />
              <ButtonFilter text="Filtrar por periodo" options={["Diciembre 2023", "Noviembre 2023"]}/>
            </div>
            <div>
              <ButtonDownload />
            </div>
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
    bottom: -24px;
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
  @media (max-width: 1028px) {
    flex-direction: column;
    width: 100%;
    gap: 8px;
    & > div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 8px;
      width: 100%;
    }
  }
`;

const TableWrapper = styled.div`
  border-radius: 8px;
  background-color: #fff;
  margin: 14px;
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
  @media (max-width: 1028px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
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
  @media (max-width: 1028px) {
    & > input {
      min-width: 0;
    }
  }
`;

const ByHeru = styled.div`
  padding: 8px 16px;
  color: var(--font-100);
  font-size: 14px;
  & > span {
    text-decoration: underline;
  }
`;
