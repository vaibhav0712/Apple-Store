import { urlFor } from "@/sanity";
import React from "react";
import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
interface Props {
  items: Product[];
  id: string;
}

function CheckoutProduct({ id, items }: Props) {
  return (
    <div>
      <div className="h-44 w-44">
        <img alt="product" src={urlFor(items[0].image[0]).url()} />
      </div>
      <div className="felx-1 flex items-end lg:items-center">
        <div className="flex-1 space-y-4">
          <div className="flex flex-col gap-x-8 text-xl lg:flex-row">
            <h4 className="font-semibold lg:w-96">{items[0].title}</h4>
            <p className="flex items-end gap-x-1 font-semibold">
              {items.length}
              <ChevronDownIcon className="h-5 w-6 text-blue-500" />
            </p>
          </div>

          <p className="flex cursor-pointer items-end text-blue-500 hover:underline">
            Show product details
            <ChevronDownIcon className="h-6 w-5" />
          </p>
        </div>

        <div>
          <h4>//? working on this</h4>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
