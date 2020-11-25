import styled from "styled-components";
import Navbar from "../NavBar";

const Container = styled.div`
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div`
  padding: 2rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrapper = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Container>
        <ContentWrapper>{children}</ContentWrapper>
      </Container>
    </div>
  );
};

export default Wrapper;
