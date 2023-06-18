import React from "react";
import { urlFor } from "../sanity";
import { addToBasket } from "../redux/basketSlice";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
function ProductBar({ product }: any) {
  const dispatch = useDispatch();
  const addToBasketHandler = () => {
    dispatch(addToBasket(product));

    toast.success(`${product.title} added to basket`, {
      position: "top-center",
    });
  };
  return (
    <div className="flex w-full items-center  gap-1 rounded-md border-b-2 border-[#2222] bg-[#e7ecee] pr-4 ">
      <div className="h-16 w-16 ">
        <img
          className="h-full w-full object-cover"
          src={urlFor(product.image[0]).url()}
          alt="IMG"
        />
      </div>
      <div className="flex w-full items-center justify-between">
        <div>
          <p>{product.title}</p>
          <p className="text-sm text-gray-500">₹{product.price}</p>
        </div>
        <div
          className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-2xl bg-white"
          onClick={addToBasketHandler}
        >
          <button className="">+</button>
        </div>
      </div>
    </div>
  );
}

export default ProductBar;
