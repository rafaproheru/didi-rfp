import { styled } from "styled-components";
import fileIcon from "../assets/file-black.svg";
import downIcon from "../assets/down-black.svg";

const ButtonFilter = ({ text, icon, options }) => {
  return (
    <Container>
      <Filter>
        <div>
          {icon ?? <img src={fileIcon} alt="icon" />}
          {text}
        </div>

        <img src={downIcon} alt="icon" />
      </Filter>
      {!options && (
        <Dropdown className="dropdown">
          <li>Opción 1</li>
          <li>Opción 2</li>
          <li>Opción 3</li>
        </Dropdown>
      )}
      {options && (
        <Dropdown className="dropdown">
          {options.map((option, index) => (
            <>
              <li key={index}>{option}</li>
              <div className="divider" />
            </>
          ))}
        </Dropdown>
      )}
    </Container>
  );
};

export default ButtonFilter;

const Container = styled.div`
  position: relative;
  &:hover .dropdown {
    display: block;
  }
  .dropdown:hover {
    display: block;
  }
`;

const Filter = styled.div`
  cursor: pointer;
  display: flex;
  background-color: var(--neutral-100);
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 14px;
  width: 210px;
  justify-content: space-between;
  & > div {
    display: flex;
    align-items: center;
    gap: 12px;
    font-weight: 500;
  }
  & > img {
    width: 12px;
  }
`;

const Dropdown = styled.ul`
  display: none;
  cursor: pointer;
  position: absolute;
  background-color: #fff;
  width: 210px;
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
