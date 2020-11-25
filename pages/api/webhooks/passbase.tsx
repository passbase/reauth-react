import { NextApiRequest, NextApiResponse } from "next";
import Cors from "cors";
import initMiddleware from "../../../lib/init-middleware";
const Pusher = require("pusher");

const pusher = new Pusher({
  appId: "1107131",
  key: "431beb9cfbcdb420c0e0",
  secret: process.env.PUSHER_SECRET,
  cluster: "us2",
  useTLS: true,
});

const cors = initMiddleware(
  Cors({
    methods: ["POST"],
  })
);

const processVerificationComplete = (webhook: any) => {
  console.log(webhook);
};

const processVerificationReviewed = (webhook: any) => {
  console.log(webhook);
  pusher.trigger(webhook.key, "redirect-to-reauth", {
    status: webhook.status,
  });
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await cors(req, res);
  const webhook = req.body;

  switch (webhook.event) {
    case "VERIFICATION_COMPLETED":
      processVerificationComplete(webhook);
      break;

    case "VERIFICATION_REVIEWED":
      processVerificationReviewed(webhook);
      break;

    default:
      break;
  }

  res.status(200).send("Received");
}
