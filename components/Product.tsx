// import { ShoppingCartIcon } from "@heroicons/react/outline";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import React from "react";
import { urlFor } from "../sanity";
// import { useDispatch } from "react-redux/es/exports";
import { addToBasket } from "../redux/basketSlice";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

interface Props {
  product: Product;
}

function Product({ product }: Props) {
  const dispatch = useDispatch();

  const addToBasketHandler = () => {
    dispatch(addToBasket(product));

    toast.success(`${product.title} added to basket`, {
      position: "top-center",
    });
  };

  return (
    <div className="flex h-fit w-[320px] select-none flex-col space-y-3 rounded-xl bg-[#35383C] p-8 md:h-[500px] md:w-[400px] md:p-10">
      <div className="flex h-64  w-full justify-center md:h-72">
        <img
          src={urlFor(product.image[0]).url()}
          className="object-contain "
          alt=""
        />
      </div>

      <div className="flex flex-1 items-center justify-between space-x-3">
        <div className="space-y-2 text-xl text-white md:text-2xl">
          <p>{product.title}</p>
          <p>₹ {product.price}</p>
        </div>

        <div
          className="flex h-16 w-16 flex-shrink-0 cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 md:h-[70px] md:w-[70px]"
          onClick={addToBasketHandler}
        >
          <ShoppingCartIcon className="h-8 w-8 text-white" />
        </div>
      </div>
    </div>
  );
}
export default Product;
