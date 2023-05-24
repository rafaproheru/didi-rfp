import { styled } from "styled-components";
import BannerDidi from "../components/BannerDidi";
import eyeIcon from "../assets/eye-gray.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function handleLogin() {
    setIsLoading(true);
    setTimeout(() => {
      navigate("/consulta");
    }, 800);
  }

  return (
    <>
      <BannerDidi login />
      <Container>
        <FormWrapper>
          <h1>
            Ingresa tus claves de <br /> acceso para continuar:
          </h1>
          <Inputs>
            <div>
              <input placeholder="Ingresa tu correo electrónico" />
            </div>
            <div>
              <input placeholder="Ingresa tu contraseña" />
              <img src={eyeIcon} alt="eye" />
            </div>
          </Inputs>
          <StyledButton onClick={() => handleLogin()}>
            {isLoading ? (
              <div className="w-4 m-auto prevent-select">
                <svg className="ring" viewBox="25 25 50 50" stroke-width="7">
                  <circle cx="50" cy="50" r="20" />
                </svg>
              </div>
            ) : (
              "Ingresar"
            )}
          </StyledButton>
        </FormWrapper>
        <BottomHeru>Powered by Heru</BottomHeru>
      </Container>
    </>
  );
};

export default Login;

const Container = styled.div`
  width: 100%;
  background-color: var(--neutral-200);
  height: calc(100vh);
  display: grid;
  place-content: center;
`;

const FormWrapper = styled.div`
  width: 100%;
  min-width: 460px;
  background-color: #fff;
  border-radius: 8px;
  padding: 64px 48px;
  display: flex;
  flex-direction: column;
  gap: 26px;
  margin-top: -32px;
  & > h1 {
    font-size: 24px;
    font-weight: 600;
  }
`;
const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  & > div {
    width: 100%;
    border-radius: 8px;
    background-color: var(--neutral-200);
    height: 46px;
    padding: 0 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > input {
      width: 100%;
      font-size: 16px;
      border: none;
      outline: none;
      background-color: transparent;
    }
  }
`;

const StyledButton = styled(Link)`
  cursor: pointer;
  width: 100%;
  background-color: var(--orange-300);
  padding: 12px 0;
  border-radius: 8px;
  text-align: center;
  color: #fff;
  font-weight: 600;
  text-decoration: none;
`;

const BottomHeru = styled.div`
  position: absolute;
  bottom: 32px;
  left: 0;
  width: 100%;
  text-align: center;
  color: var(--font-100);
`;
