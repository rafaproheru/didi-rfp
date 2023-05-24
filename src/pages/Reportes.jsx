import { styled } from "styled-components";
import Layout from "../components/Layout";
import fileIcon from "../assets/file-black.svg";
import downIcon from "../assets/down-black.svg";
import downGrayIcon from "../assets/down-gray.svg";
import downloadIcon from "../assets/download-white.svg";
import calendarIcon from "../assets/calendar-black.svg";
import Report from "../components/Report";

const Reportes = () => {
  
  
  return (
    <Layout>
      <Container>
        <Header>
          <SectionName>
            <span>Reporte de certificados</span>
          </SectionName>
          <Filters>
            <div>
              <Filter>
                <img src={fileIcon} alt="icon" />
                <span>Buscar</span>
                <img src={downIcon} alt="icon" />
              </Filter>
              <Filter>
                <img src={fileIcon} alt="icon" />
                Filtrar por emisor
                <img src={downIcon} alt="icon" />
              </Filter>
              <Filter>
                <img src={calendarIcon} alt="icon" />
                Filtrar por periodo
                <img src={downIcon} alt="icon" />
              </Filter>
            </div>
            <FilterAll>
              <span>
                Descargar Reporte <img src={downloadIcon} alt="icon" />
              </span>
              <img src={downGrayIcon} alt="icon" />
            </FilterAll>
          </Filters>
        </Header>
        <ReportsWrapper>
          <Report title="Diciembre 2022.csv" />
          <Report title="Septiembre 2022.csv" />
        </ReportsWrapper>
      </Container>
    </Layout>
  );
};

export default Reportes;

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
    font-weight: 500;
    font-size: 14px;
    font-size: 16px;
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
  & > span {
    margin-right: 64px;
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

const ReportsWrapper = styled.div`
  margin: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
