import Router from "next/router";
import VerifyButton from "@passbase/button/react";

const PassbaseReauthenticationButton = (props) => {
  return (
    <VerifyButton
      apiKey={process.env.NEXT_PUBLIC_PASSBASE_PUBLISHABLE_KEY}
      prefillAttributes={{
        email: props.email,
      }}
      onFinish={(identityAccessKey) => {
        console.log("Verification complete with key: ", identityAccessKey);
        Router.push("/success");
      }}
      onError={(errorCode) => {}}
      onStart={() => {}}
    />
  );
};

export default PassbaseReauthenticationButton;
