import { styled } from "styled-components";
import arrowOrangeIcon from "../assets/up-orange.svg";
import downloadOrangeIcon from "../assets/download-orange.svg";
import circleLoadIcon from "../assets/circle-load.svg";
import { useNavigate } from "react-router-dom";

const Report = ({ title = "Certificados generados Mayo 2023" }) => {
  const navigate = useNavigate();

  return (
    <Container onClick={() => navigate("/report-detail")}>
      <h4>{title}</h4>
      <div className="divider" />
      <Wrapper>
        <Left>
          Cargados en total
          <h2>1,131,203</h2>
          <Percent>
            <div>
              <img src={arrowOrangeIcon} />
              8.5%
            </div>
            <span>+ 67k este mes</span>
          </Percent>
          <Case>
            <div>
              <h6>Cargados con éxito</h6>
              1,123,232
            </div>
            <DownloadButton>
              Descargar CSV
              <img src={downloadOrangeIcon} alt="icon" />
            </DownloadButton>
          </Case>
          <Case>
            <div>
              <h6>Casos fallidos</h6>
              1,022
            </div>
            <DownloadButton>
              Descargar CSV
              <img src={downloadOrangeIcon} alt="icon" />
            </DownloadButton>
          </Case>
        </Left>
        <Right>
          <Stadistic>
            <h6>
              Sin impuesto <br /> gubernamental
            </h6>
            <img src={circleLoadIcon} alt="icon" />
            RFC Validados
            <div>
              <b>1,121,322</b>
              <DividerVertical />
              1,320
            </div>
          </Stadistic>
          <Stadistic>
            <h6>Sin penalización</h6>
            <img src={circleLoadIcon} alt="icon" />
            RFC Validados
            <div>
              <b>1,121,322</b>
              <DividerVertical />
              1,320
            </div>
          </Stadistic>
          <Stadistic>
            <h6>Nacionales</h6>
            <img src={circleLoadIcon} alt="icon" />
            RFC Validados
            <div>
              <b>1,121,322</b>
              <DividerVertical />
              1,320
            </div>
          </Stadistic>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Report;

const Container = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  cursor: pointer;

  b {
    color: #000;
    font-weight: 600;
  }
  & > h4 {
    font-size: 16px;
    font-weight: 500;
    margin: 22px 32px 20px 32px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 32px;
`;

const Left = styled.div`
  font-size: 14px;
  font-weight: 500;
  flex: 1;
  & > h2 {
    font-size: 32px;
    font-weight: 700;
  }
`;

const Percent = styled.div`
  display: flex;
  gap: 16px;
  span {
    color: var(--font-100);
  }
  & > div {
    display: flex;
    align-items: center;
    gap: 6px;
    color: var(--orange-300);
    font-weight: 600;
  }
`;

const Case = styled.div`
  display: flex;
  align-items: center;
  margin: 16px 0;
  font-size: 16px;
  font-weight: 500;
  color: var(--font-100);
  & > div {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  & > div > h6 {
    font-size: 14px;
    font-weight: 500;
    color: #000;
    width: 150px;
  }
`;

const DownloadButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 1px 16px;
  border-radius: 8px;
  border: 1px solid var(--orange-300);
  background-color: transparent;
  height: 28px;
  color: var(--orange-300);
  font-weight: 600;
`;

const Right = styled.div`
  display: flex;
  align-items: end;
  flex: 1;
  gap: 80px;
`;

const Stadistic = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  color: var(--font-100);
  margin-bottom: 16px;
  img {
    width: 100px;
    margin: 16px 0;
  }
  h6 {
    font-size: 14px;
    font-weight: 600;
    color: #000;
  }
  div {
    margin-top: 4px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

const DividerVertical = styled.div`
  width: 2px;
  height: 18px;
  background-color: var(--neutral-100);
`;
