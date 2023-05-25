import { styled } from "styled-components";
import Layout from "../components/Layout";
import fileIcon from "../assets/file-black.svg";
import downIcon from "../assets/down-black.svg";
import downGrayIcon from "../assets/down-gray.svg";
import downloadIcon from "../assets/download-white.svg";
import calendarIcon from "../assets/calendar-black.svg";
import Report from "../components/Report";
import ButtonFilter from "../components/ButtonFilter";
import ButtonDownload from "../components/ButtonDownload";

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
              <ButtonFilter text="Buscar" />
              <ButtonFilter text="Filtrar por emisor" />
              <ButtonFilter
                text="Filtrar por periodo"
                icon={<img src={calendarIcon} alt="icon" />}
              />
            </div>
            <div>
              <ButtonDownload title="Descargar reportes" />
            </div>
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
  @media (max-width: 1028px) {
    flex-direction: column;
    gap: 8px;
    & > div {
      flex-direction: column;
      align-items: flex-start;
      gap: 8px;
    }
  }
`;

const ReportsWrapper = styled.div`
  margin: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
