import { styled } from "styled-components";
import didiLogo from "../assets/didi-logo.svg";
import ArrowRight from "../assets/arrow-right-white.svg";

const BannerDidi = ({ login = false }) => {
  return (
    <Container>
      <img src={didiLogo} alt="didi-logo" />
      {!login && (
        <Logout>
          Cerrar Sesión
          <img src={ArrowRight} alt="didi-logo" />
        </Logout>
      )}
    </Container>
  );
};

export default BannerDidi;

const Container = styled.div`
  background-color: var(--orange-300);
  display: flex;
  justify-content: space-between;
  padding: 12px 32px;
  color: #fff;
`;

const Logout = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  font-weight: 500;
`;
