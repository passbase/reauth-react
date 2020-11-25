import styled from "styled-components";
import Wrapper from "../components/Wrapper";
import React from "react";
import Lottie from "react-lottie";
import startAnimation from "../public/startAnimation.json";

const Description = styled.p`
  text-align: center;
  line-height: 1.5;
  font-size: 1.2rem;
  padding-left: 20px;
  padding-right: 20px;
`;

const Grid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;
  margin-top: 1rem;
`;

const Card = styled.a`
  margin: 1rem;
  min-width: 300px;
  flex-basis: 45%;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;

  :hover {
    color: #0070f3;
    border-color: #0070f3;
  }
`;

const Home = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: startAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Wrapper>
      <Lottie
        options={defaultOptions}
        height={200}
        width={200}
        isStopped={false}
        isPaused={false}
      />

      <h1>Welcome to the Passbase Reauth Demo</h1>

      <Description>
        Please enroll first by completing an Authentication. Then you can start
        reauthenticate  later.
      </Description>

      <Grid>
        <Card href="signup">
          <h3> 1. Create Root Identity &rarr;</h3>
          <p>Create a digital identity that can be reused.</p>
        </Card>

        <Card href="reauth">
          <h3>2. Reauthenticate &rarr;</h3>
          <p>Prove you are the same person from the root identity.</p>
        </Card>
      </Grid>
    </Wrapper>
  );
};

export default Home;
