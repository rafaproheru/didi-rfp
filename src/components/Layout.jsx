import { styled } from "styled-components";
import BannerDidi from "./BannerDidi";

const Layout = ({ children }) => {
    return (
        <Container>
            <BannerDidi />
            {children}
        </Container>
    )
}

export default Layout;

const Container = styled.div`
  background-color: var(--orange-300);
`