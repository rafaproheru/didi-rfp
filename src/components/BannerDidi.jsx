import { styled } from "styled-components";
import didiLogo from "../assets/didi-logo.svg";
import ArrowRight from "../assets/arrow-right-white.svg";
import { Link } from "react-router-dom";

const BannerDidi = ({ login = false }) => {
  return (
    <Container>
      <img src={didiLogo} alt="didi-logo" />
      {!login && (
        <Logout>
          <Link to="/">Cerrar Sesión</Link>
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
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
`;

const Logout = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  font-weight: 500;
  & > a {
    font-weight: 600;
    text-decoration: none;
    color: #fff;
  }
`;
