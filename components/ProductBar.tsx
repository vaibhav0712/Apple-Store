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
          className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[#f8d6ff] shadow-md active:shadow-none"
          onClick={addToBasketHandler}
        >
          <button className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductBar;
