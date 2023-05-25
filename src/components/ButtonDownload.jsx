import { styled } from "styled-components";
import downloadIcon from "../assets/download-white.svg";
import downGrayIcon from "../assets/down-gray.svg";

const ButtonDownload = ({ title = "Descargar todos" }) => {
  return (
    <Container>
      <FilterAll>
        <span>
          {title} <img src={downloadIcon} alt="icon" />
        </span>
        <img src={downGrayIcon} alt="icon" />
      </FilterAll>
      <Dropdown className="dropdown">
        <li>Descargar categoría 1</li>
        <li>Descargar categoría 2</li>
      </Dropdown>
    </Container>
  );
};

export default ButtonDownload;

const Container = styled.div`
  position: relative;
  &:hover .dropdown {
    display: block;
  }
  .dropdown:hover {
    display: block;
  }
`;

const FilterAll = styled.div`
  cursor: pointer;
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
    margin-right: 12px;
  }
`;

const Dropdown = styled.ul`
  display: none;
  cursor: pointer;
  position: absolute;
  background-color: #fff;
  width: 220px;
  border-radius: 4px;
  padding: 4px 0;
  z-index: 1;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  transition: all 0.3s ease;
  & > li {
    padding: 8px 16px;
    background-color: #fff;
    transition: all 0.3s ease;
    font-weight: 500;
  }
  & > li:hover {
    background-color: var(--neutral-100);
  }
`;
