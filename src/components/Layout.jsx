import { styled } from "styled-components";
import BannerDidi from "./BannerDidi";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <Container>
      <BannerDidi />
      <ContentWrapper>
        <Sidebar />
        {children}
      </ContentWrapper>
    </Container>
  );
};

export default Layout;

const Container = styled.div``;

const ContentWrapper = styled.div`
  display: flex;
`;
