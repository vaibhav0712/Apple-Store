import React from "react";
import Button from "./Button";
function Landing() {
  return (
    <section className="sticky top-0 mx-auto flex h-screen  max-w-[1350px] items-center justify-around px-8">
      <div className="space-y-8">
        <h1 className="space-y-3 text-5xl font-semibold tracking-wide lg:text-6xl">
          <span className="block bg-gradient-to-r from-pink-600 to-violet-600 bg-clip-text text-transparent">
            Powerd
          </span>
          <span className="block">By Intellect</span>
          <span className="block">Driven By Value</span>
        </h1>
        <div className="space-x-8">
          <Button title="Buy Now" />
          <a className="Link">Learn More</a>
        </div>
      </div>
      <div className="relative hidden  h-auto w-auto transition-all duration-500 md:inline lg:h-[650px] lg:w-[650px] ">
        <img
          src="https://ivenus.in/wp-content/uploads/2022/09/iphone-14-pro-Max-finish-unselect-gallery-2-202209.png"
          className="object-contain"
          alt=""
        />
      </div>
    </section>
  );
}

export default Landing;
