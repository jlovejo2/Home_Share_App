import stripe from "stripe";

const client = new stripe(`${process.env.S_SECRET_KEY}`, {
  /*eslint-disable @typescript-eslint/ban-ts-ignore */
  //@ts-ignore
  apiVersion: "2019-12-03",
  /*eslint-enable @typescript-eslint/ban-ts-ignore */
});

export const Stripe = {
  connect: async (code: string) => {
    const response = await client.oauth.token({
      /*eslint-disable @typescript-eslint/camelcase */
      grant_type: "authorization_code",
      code,
      /* eslint-enable @typescript-eslint/camelcase */
    });

    if (!response) {
      throw new Error("failed to connect with Stripe");
    }

    return response;
  },
  charge: async (amount: number, source: string, stripeAccount: string) => {
    /*eslint-disable @typescript-eslint/camelcase */
    const res = await client.charges.create(
      {
        amount,
        currency: "usd",
        source,
        application_fee_amount: Math.round(amount * 0.05),
      },
      {
        stripeAccount: stripeAccount,
      }
    );
    /*eslint-enable @typescript-eslint/camelcase */

    if (res.status !== "succeeded") {
      throw new Error("Failed to create charge with Stripe.");
    }
  },
};
