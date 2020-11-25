import dynamic from "next/dynamic";
import Link from "next/link";
import styled from "styled-components";
import Wrapper from "../components/Wrapper";
import Lottie from "react-lottie";
import idCard from "../public/idCard.json";
import { FaArrowLeft } from "react-icons/fa";

const Description = styled.p`
  text-align: center;
  line-height: 1.5;
  font-size: 1.2rem;
  margin-bottom: 3rem;
  padding-left: 20px;
  padding-right: 20px;
`;

const BackButtonWrapper = styled.div`
  margin-top: 3rem;
`;

const BackButton = styled.div`
  background-color: #fff;
  height: 30px;
  padding: 8px 15px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 12px;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
`;

const PassbaseSignup = dynamic(
  () => import("../components/PassbaseSignupButton"),
  { ssr: false }
);

const Signup = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: idCard,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Wrapper>
      <Lottie
        options={defaultOptions}
        height={150}
        width={150}
        isStopped={false}
        isPaused={false}
      />
      <h2>1. Create Root Identity</h2>
      <Description>
        Please click the button below and follow the instructions to tie your
        identity to an email + facial biometric.
      </Description>
      <PassbaseSignup />
      <BackButtonWrapper>
        <Link href="/">
          <BackButton>
            <FaArrowLeft /> Back
          </BackButton>
        </Link>
      </BackButtonWrapper>
    </Wrapper>
  );
};

export default Signup;
