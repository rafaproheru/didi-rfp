import { styled } from "styled-components";
import BannerDidi from "./BannerDidi";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <Container>
      <BannerDidi />
      <ContentWrapper>
        <Sidebar />
        <div className="ml-[250px] mt-[56px] w-[100%] sm:min-w-0">{children}</div>
      </ContentWrapper>
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  background-color: var(--neutral-200);
  height: 100vh;
`;

const ContentWrapper = styled.div`
  display: flex;
  background-color: var(--neutral-200);
`;
