import { styled } from "styled-components";
import didiLogo from "../assets/didi-logo.svg";
import ArrowRight from "../assets/arrow-right-white.svg";
import menuIcon from "../assets/menu.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const BannerDidi = ({ login = false }) => {
  return (
    <Container>
      <Link to="/consulta">
        <img src={didiLogo} alt="didi-logo" />
      </Link>
      {!login && (
        <>
          <Logout className="logout">
            <Link to="/">Cerrar Sesión</Link>
            <img src={ArrowRight} alt="didi-logo" />
          </Logout>
          <MenuMobile className="menu-mobile">
            <img src={menuIcon} alt="didi-logo" />
            <Dropdown className="show">
              <Link to="/consulta">Consulta</Link>
              <Link to="/estadisticas">Estadísticas</Link>
              <Link to="/reportes">Reportes</Link>
              <Link to="/generar-certificados">Generar certificados</Link>
              <Link to="/admin">Ajustes</Link>
              <Link to="/">Cerrar sesión</Link>
            </Dropdown>
          </MenuMobile>
        </>
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
  &:hover .show {
    display: flex;
  }
  @media (max-width: 1028px) {
    .logout {
      display: none;
    }
  }
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

const MenuMobile = styled.div`
  display: none;
  padding: 8px;
  cursor: pointer;
  @media (max-width: 1028px) {
    display: block;
  }
`;

const Dropdown = styled.div`
  position: absolute;
  background-color: #fff;
  color: #000;
  padding: 16px;
  width: 100%;
  top: 60px;
  left: 0;
  flex-direction: column;
  border-bottom: 1px solid #e5e5e5;
  gap: 8px;
  display: none;
  &:hover {
    display: flex;
  }
`;