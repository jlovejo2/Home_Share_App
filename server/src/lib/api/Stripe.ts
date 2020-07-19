import stripe from "stripe";

const client = new stripe(`${process.env.S_SECRET_KEY}`, {
  /*eslint-disable @typescript-eslint/ban-ts-ignore */
  //@ts-ignore
  apiVersion: "2019-12-03",
  /*eslint-disable @typescript-eslint/ban-ts-ignore */
});

export const Stripe = {
  connect: async (code: string) => {
    const response = await client.oauth.token({
      /*eslint-disable @typescript-eslint/camelcase */
      grant_type: "authorization_code",
      code,
      /* eslint-disable @typescript-eslint/camelcase */
    });

    if (!response) {
      throw new Error("failed to connect with Stripe");
    }

    return response;
  },
};
