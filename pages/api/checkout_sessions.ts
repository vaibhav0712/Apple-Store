import type { NextApiRequest, NextApiResponse } from "next";

import Stripe from "stripe";
import { urlFor } from "@/sanity";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2022-11-15",
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(
    "****************** Enter to checkout_sessions.ts ****************** "
  );
  if (req.method === "POST") {
    const items: Product[] = req.body.items;
    console.log("items", items);
    // this is the shape in  which
    const transformedItems = items.map((item) => ({
      price_data: {
        currency: "inr",
        product_data: {
          name: item.title,
          images: [urlFor(item.image[0]).url()],
        },
        unit_amount: item.price * 100,
      },
      quantity: 1,
    }));
    console.log("transformedItems", transformedItems);

    // continue from here
    try {
      // checkout session from body params
      const params: Stripe.Checkout.SessionCreateParams = {
        payment_method_types: ["card"],

        // shipping_address_collection: {
        //   allowed_countries: ["US", "CA", "GB", "AU"],
        // }

        line_items: transformedItems,
        mode: "payment",
        success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/checkout`,
        metadata: {
          images: JSON.stringify(items.map((item) => item.image[0].asset.url)),
        },
      };
      const chekcoutSession: Stripe.Checkout.Session =
        await stripe.checkout.sessions.create(params);

      res.status(200).json(chekcoutSession);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Internal server error";
      res.status(500).json({ error: errorMessage });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method not allowed");
  }
}
