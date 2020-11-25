import React, { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import styled from "styled-components";
import Wrapper from "../components/Wrapper";
import Lottie from "react-lottie";
import randomThings from "../public/randomThings.json";
import { FaArrowLeft } from "react-icons/fa";

const Description = styled.p`
  text-align: center;
  line-height: 1.5;
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
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

const EmailInput = styled.input`
  width: 100%;
  max-width: 300px;
  font-size: 1.2rem;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const PassbaseReauthentication = dynamic(
  () => import("../components/PassbaseReauthenticationButton"),
  { ssr: false }
);

const Reauth = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: randomThings,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const [email, setEmail] = useState("");

  const updateEmailEntered = (event) => {
    const enteredEmail = event.target.value;
    setEmail(enteredEmail);
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

      <h2>2. Reauthenticate</h2>
      <Description>
        Please use the <strong> same email that you used in step 1</strong> and
        enter it in the input field below:
      </Description>
      <EmailInput
        type="email"
        name="name"
        placeholder="Email"
        onChange={updateEmailEntered}
      />
      <Description>
        Press the button below to start the reauthentication process.
      </Description>
      <PassbaseReauthentication email={email} />
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

export default Reauth;
