import { styled } from "styled-components";
import Layout from "../components/Layout";
import notificationIcon from "../assets/notification.svg";

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
    margin-bottom: 4px;
    b {
        font-weight: 700;
    }
  }
`;
