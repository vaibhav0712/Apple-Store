import React from "react";
import Header from "@/components/Header";
import Head from "next/head";
import { useSelector } from "react-redux";
import { selectBasketItems } from "@/redux/basketSlice";

function Checkout() {
  const items = useSelector(selectBasketItems);
  return (
    <div>
      <Head>
        <title>Checkout</title>
      </Head>
      <Header />
      <main>
        <h1>{items.length > 0 ? "Review your bag." : "Your bag is empty."}</h1>
      </main>
    </div>
  );
}

export default Checkout;
