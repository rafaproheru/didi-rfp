import { styled } from "styled-components";
import BannerDidi from "../components/BannerDidi";
import eyeIcon from "../assets/eye-gray.svg";

const Login = () => {
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
          <StyledButton>Ingresar</StyledButton>
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
  height: calc(100vh - 60px);
  display: grid;
  place-content: center;
`;

const FormWrapper = styled.div`
  width: 100%;
  min-width: 460px;
  background-color: #fff;
  border-radius: 8px;
  padding: 64px;
  display: flex;
  flex-direction: column;
  gap: 26px;
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

const StyledButton = styled.div`
  cursor: pointer;
  width: 100%;
  background-color: var(--orange-300);
  font-weight: 600;
  padding: 12px 0;
  border-radius: 8px;
  text-align: center;
  color: #fff;
`;

const BottomHeru = styled.div`
    position: absolute;
    bottom: 32px;
    left: 0;
    width: 100%;
    text-align: center;
    color: var(--font-100);
`