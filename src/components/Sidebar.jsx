import { styled } from "styled-components";
import consultIcon from "../assets/consult-black.svg";
import staticsIcon from "../assets/statics-black.svg";
import fileIcon from "../assets/file-gray.svg";
import fileSettingsIcon from "../assets/file-settings.svg";
import userIcon from "../assets/user.svg";
import dotsIcon from "../assets/dots.svg";
import arrowRightIcon from "../assets/right-black.svg";
import arrowRightGrayIcon from "../assets/right-gray.svg";

const Sidebar = () => {
  return (
    <Container>
      <Top>
        <h4>Páginas</h4>
        <Categories>
          <Category>
            <span>
              <img src={consultIcon} alt="icon" />
              <b>Consulta</b>
            </span>
            <img src={arrowRightIcon} alt="icon" />
          </Category>
          <Category>
            <span>
              <img src={staticsIcon} alt="icon" />
              Estadísticas
            </span>
            <img src={arrowRightGrayIcon} alt="icon" />
          </Category>
          <Category>
            <span>
              <img src={fileIcon} alt="icon" />
              Reportes
            </span>
            <img src={arrowRightGrayIcon} alt="icon" />
          </Category>
          <Category>
            <span>
              <img src={fileSettingsIcon} alt="icon" />
              Generar certificados
            </span>
            <img src={arrowRightGrayIcon} alt="icon" />
          </Category>
        </Categories>
      </Top>
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  width: 250px;
  height: calc(100vh - 60px);
  position: sticky;
  top: 60px;
  border-right: 1px solid #e5e5e5;
`;

const Top = styled.div`
  padding: 46px 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  & > h4 {
    color: var(--font-100);
  }
`;

const Categories = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Category = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--font-100);

  & > span > img {
    width: 16px;
    height: 16px;
  }

  & > span > b {
    font-weight: 600;
    color: #000;
  }

  & > span {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;
