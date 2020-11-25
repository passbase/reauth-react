import Link from "next/link";
import styled from "styled-components";
import Countdown from "react-countdown";
import Lottie from "react-lottie";
import Wrapper from "../components/Wrapper";
import rocket from "../public/rocket.json";
import { FaArrowRight } from "react-icons/fa";

const Description = styled.p`
  text-align: center;
  line-height: 1.5;
  font-size: 1.2rem;
  margin-bottom: 3rem;
  padding-left: 20px;
  padding-right: 20px;
`;

const GoToReauthButton = styled.div`
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

const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: rocket,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return (
        <Link href="/reauth">
          <GoToReauthButton>
            Try Reauth {" "}
            <FaArrowRight />
          </GoToReauthButton>
        </Link>
      );
    } else {
      return (
        <span>
          {minutes}:{seconds}
        </span>
      );
    }
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
      <h1>
        <Countdown date={Date.now() + 299000} renderer={renderer} />
      </h1>
      <Description>
        It usually takes less than 5 minutes to process an authentication &
        create a new root identity.
      </Description>
    </Wrapper>
  );
};

export default Loading;
