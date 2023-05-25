import { styled } from "styled-components";
import Layout from "../components/Layout";
import userIcon from "../assets/user-black.svg";
import plusIcon from "../assets/square-plus.svg";
import securityIcon from "../assets/security.svg";
import { useNavigate } from "react-router-dom";
import TableAdmin from "../components/tables/TableAdmin";
import ButtonFilter from "../components/ButtonFilter";

const Admin = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <Container>
        <Header>
          <SectionName>
            <div>
              <h4>Cecilia Castro</h4>
              <span>Perfil de Administrador</span>
            </div>
            <ButtonGray>
              <img src={userIcon} alt="icon" />
              Solicitar Permisos
            </ButtonGray>
          </SectionName>
        </Header>
        <AdminInfo>
          <Workspace>
            <h5>Workspace</h5>
            <VerticalDivider />
            <div>
              Admins
              <b>1</b>
            </div>
            <div>
              Miembros
              <b>9</b>
            </div>
            <div>
              Contadores
              <b>2</b>
            </div>
            <div>
              Invitados
              <b>0</b>
            </div>
          </Workspace>
          <div className="divider" />
          <Buttons>
            <ButtonFilter
              text="Agregar usuarios"
              icon={<img src={plusIcon} alt="icon" />}
            />
            <ButtonFilter text="Permisos" />
            <ButtonFilter
              text="Seguridad"
              icon={<img src={securityIcon} alt="icon" />}
            />
          </Buttons>
        </AdminInfo>
        <TableWrapper>
          <HeaderTable>
            <h4>Todos los usuarios</h4>
          </HeaderTable>
          <TableAdmin />
          <ByHeru>
            Powered by <span>Heru</span>
          </ByHeru>
        </TableWrapper>
      </Container>
    </Layout>
  );
};

export default Admin;

const Container = styled.div`
  width: 100%;
  background-color: var(--neutral-200);
`;

const Header = styled.div`
  background-color: #fff;
`;

const SectionName = styled.div`
  border-bottom: 1px solid #e5e5e5;
  padding: 20px 32px;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
  & h4 {
    font-size: 20px;
    font-weight: 500;
  }
  & > div > span {
    position: relative;
    color: var(--font-100);
    font-weight: 400;
    font-size: 16px;
  }
`;

const AdminInfo = styled.div`
  background-color: #fff;
  margin: 16px;
  border-radius: 8px;
`;

const TableWrapper = styled.div`
  background-color: #fff;
  margin: 16px;
  position: relative;
  border-radius: 8px;
`;

const HeaderTable = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
  & > h4 {
    font-size: 18px;
    font-weight: 500;
    padding: 24px 16px 0 24px;
  }
  
`;

const ByHeru = styled.div`
  left: 16px;
  color: var(--font-100);
  font-size: 14px;
  padding: 16px;
  & > span {
    text-decoration: underline;
  }
`;

const ButtonGray = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: var(--neutral-200);
  padding: 8px 16px;
  border-radius: 32px;
  font-size: 14px;
  font-weight: 500;
`;

const Workspace = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  padding: 16px 24px;

  & > h5 {
    font-size: 18px;
    font-weight: 500;
  }
  div {
    display: flex;
    gap: 12px;
  }
  b {
    font-weight: 600;
    margin-right: 24px;
  }
  @media (max-width: 1028px) {
    display: block;
  }
`;

const VerticalDivider = styled.div`
  width: 2px;
  height: 24px;
  background-color: #eaeaea;
  @media (max-width: 1028px) {
    height: 0;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 16px;
  padding: 24px 24px;
  @media (max-width: 1028px) {
    flex-direction: column;
  }
`;
