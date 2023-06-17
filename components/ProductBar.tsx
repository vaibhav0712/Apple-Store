import React from "react";

function ProductBar() {
  return (
    <div className="flex w-full items-center justify-between bg-red-200 lg:w-4/12">
      <div className="h-16 w-16 ">
        <img
          className="h-full w-full object-cover"
          src="https://ivenus.in/wp-content/uploads/2022/09/iphone-14-finish-select-202209-6-1inch-blue.png"
          alt="IMG"
        />
      </div>
      <div>
        <p>Iphone 14 pro</p>
      </div>
    </div>
  );
}

export default ProductBar;
