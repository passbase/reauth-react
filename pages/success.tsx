import Link from "next/link";
import styled from "styled-components";
import Wrapper from "../components/Wrapper";
import Button from "@material-ui/core/Button";
import Lottie from "react-lottie";
import confetti from "../public/confetti.json";

const Description = styled.p`
  text-align: center;
  line-height: 1.5;
  font-size: 1.2rem;
  margin-bottom: 3rem;
  padding-left: 20px;
  padding-right: 20px;
`;

const HomeButton = styled.div`
  background-color: #000;
  color: #fff;
  height: 30px;
  padding: 8px 15px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 12px;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
`;

const Success = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: confetti,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Wrapper>
      <Lottie
        options={defaultOptions}
        height={300}
        width={300}
        isStopped={false}
        isPaused={false}
      />
      <h2>Congrats!</h2>
      <Description>
        You have successfully created a root identity and reauthenticated.
      </Description>

      <Link href="/">
        <HomeButton>Return Home</HomeButton>
      </Link>
    </Wrapper>
  );
};

export default Success;
