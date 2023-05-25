import { styled } from "styled-components";
import Layout from "../components/Layout";
import notificationIcon from "../assets/notification.svg";
import { BarChartComponent } from "../components/stadistics/BarChartComponent";
import { LineChartComponent } from "../components/stadistics/LineChartComponent";

const Stadistics = () => {
  return (
    <Layout>
      <Container>
        <Header>
          <div>
            <h4>
              Bienvenida <b>Cecilia Castro</b>
            </h4>
            Esta es la información general
          </div>
          <img src={notificationIcon} alt="icon" />
        </Header>
        <ChartsWrapper>
          <BarChartComponent />
          <Bottom>
            <LineChartComponent title="Con impuesto gubernamental"/>
            <LineChartComponent title="Con penalización"/>
          </Bottom>
        </ChartsWrapper>
      </Container>
    </Layout>
  );
};

export default Stadistics;

const Container = styled.div`
  width: 100%;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  color: var(--font-100);
  h4 {
    font-size: 20px;
    font-weight: 300;
    color: #000;
    b {
      font-weight: 700;
    }
  }
`;

const ChartsWrapper = styled.div`
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: 1660px;
`;

const Bottom = styled.div`
    display: flex;
    gap: 16px;
    @media (max-width: 1028px) {
        flex-direction: column;
    }
`;
