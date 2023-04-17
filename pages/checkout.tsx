import React from "react";
import Header from "@/components/Header";
import Head from "next/head";
import { useSelector } from "react-redux";
import { selectBasketItems } from "@/redux/basketSlice";
import Button from "@/components/Button";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import CheckoutProduct from "@/components/CheckoutProduct";
function Checkout() {
  const items = useSelector(selectBasketItems);
  const router = useRouter();
  const [groupeItemsInBasket, setGroupeItemsInBasket] = useState(
    {} as { [key: string]: Product[] }
  );

  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item._id] = results[item._id] || []).push(item);
      return results;
    }, {} as { [key: string]: Product[] });
    console.log("grou[edItems", groupedItems);
    setGroupeItemsInBasket(groupedItems);
  }, [items]);

  return (
    <div>
      <Head>
        <title>Checkout</title>
      </Head>
      <Header />
      <main>
        <div>
          <h1 className="lg:tex-4xl my-4 text-3xl font-semibold">
            {items.length > 0 ? "Review your bag." : "Your bag is empty."}
          </h1>
          <p className="my-4">Free delivery and free returns.</p>
          {items.length === 0 && (
            <Button
              title="Continue Shopping"
              onClick={() => router.push("/")}
            />
          )}
        </div>
        {items.length > 0 && (
          <div>
            {Object.entries(groupeItemsInBasket).map(([key, items]) => (
              <CheckoutProduct key={key} items={items} id={key} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default Checkout;
