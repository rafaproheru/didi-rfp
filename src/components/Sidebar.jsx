import { styled } from "styled-components";
import consultIcon from "../assets/consult-black.svg";
import staticsIcon from "../assets/statics-black.svg";
import fileIcon from "../assets/file-black.svg";
import fileSettingsIcon from "../assets/file-settings.svg";
import userIcon from "../assets/user.svg";
import dotsIcon from "../assets/dots.svg";
import arrowRightIcon from "../assets/right-black.svg";
import { NavLink, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Top>
        <h4>Páginas</h4>
        <Categories>
          <Category
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/consulta"
          >
            <div>
              <img src={consultIcon} alt="icon" />
              <span>Consulta</span>
            </div>
            <img src={arrowRightIcon} alt="icon" />
          </Category>
          <Category
            to="/estadisticas"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <div>
              <img src={staticsIcon} alt="icon" />
              <span>Estadísticas</span>
            </div>
            <img src={arrowRightIcon} alt="icon" />
          </Category>
          <Category
            to="/reportes"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <div>
              <img src={fileIcon} alt="icon" />
              <span>Reportes</span>
            </div>
            <img src={arrowRightIcon} alt="icon" />
          </Category>
          <Category
            to="/generar-certificados"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <div>
              <img src={fileSettingsIcon} alt="icon" />
              <span>Generar certificados</span>
            </div>
            <img src={arrowRightIcon} alt="icon" />
          </Category>
        </Categories>
      </Top>
      <Bottom onClick={() => navigate("/admin")}>
        <Category to="/permisos" className="text-black">
          <div>
            <img src={userIcon} alt="icon" />
            Ajustes
          </div>
          <img src={arrowRightIcon} alt="icon" />
        </Category>
        <Admin>
          <div>CC</div>
          <div className="name">
            Admin <span>Cecilia Castro</span>
          </div>
          <img src={dotsIcon} alt="icon" />
        </Admin>
      </Bottom>
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  min-width: 250px;
  height: calc(100vh - 60px);
  position: fixed;
  border-right: 1px solid #e5e5e5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #fff;
  top: 60px;
  z-index: 50;
  @media (max-width: 1028px) {
    display: none;
  }
`;

const Top = styled.div`
  /* padding: 46px 20px; */
  display: flex;
  flex-direction: column;
  gap: 24px;
  & > h4 {
    padding: 46px 20px 0 20px;
    color: var(--font-100);
  }
`;

const Bottom = styled.div`
  padding: 12px 0px 46px 0px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-top: 1px solid var(--neutral-200);
`;

const Categories = styled.div`
  display: flex;
  flex-direction: column;
  .active > div > span {
    color: #000;
    font-weight: 600;
  }
  .active img {
    opacity: 1;
  }
  .active > div > img {
    opacity: 1;
  }
`;

const Category = styled(NavLink)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--font-100);
  text-decoration: none;
  background-color: #fff;
  padding: 10px 20px;
  transition: all 0.2s ease-in-out;
  & > img {
    opacity: 0.3;
  }
  & > div > img {
    width: 16px;
    height: 16px;
    opacity: 0.3;
  }
  & > div {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  &:hover {
    background-color: var(--neutral-100);
  }
`;

const Admin = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 16px;
  background-color: var(--neutral-200);
  padding: 8px 16px;
  border-radius: 10px;
  margin: 0 12px;
  & > div:first-child {
    background-color: #afaeb1;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 600;
    color: var(--neutral-100);
  }
  & > .name {
    display: flex;
    flex-direction: column;
    font-size: 12px;
    color: var(--font-100);
    & > span {
      font-size: 15px;
      font-weight: 600;
      color: #000;
      margin-right: 32px;
    }
  }
`;
