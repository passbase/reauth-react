import React, { useState, useEffect } from "react";
import Router from "next/router";
import VerifyButton from "@passbase/button/react";
import Pusher from "pusher-js";

const PassbaseSignupButton = () => {
  let pusher;

  useEffect(() => {
    pusher = new Pusher("431beb9cfbcdb420c0e0", {
      cluster: "us2",
    });
  }, []);

  const referenceUserWithKey = (identityAccesKey: string) => {
    const channel = pusher.subscribe(identityAccesKey);
    channel.bind("redirect-to-reauth", (data) => {
      if (data.status === "approved") {
        Router.push("/reauth");
      } else {
        Router.push("/retry");
      }
    });
  };

  return (
    <VerifyButton
      apiKey={process.env.NEXT_PUBLIC_PASSBASE_PUBLISHABLE_KEY}
      onFinish={(identityAccessKey) => {
        console.log("Verification complete with key: ", identityAccessKey);
        referenceUserWithKey(identityAccessKey);
        Router.push("/loading");
      }}
      onError={(errorCode) => {}}
      onStart={() => {}}
    />
  );
};

export default PassbaseSignupButton;
