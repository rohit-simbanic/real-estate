import ButtonBanner from "@/components/button/button-banner";
import React from "react";

const Banner = () => {
  return (
    <section className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat text-white ">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center">
        <div className="mx-auto max-w-3xl text-center bg-black rounded-md dark:bg-[#282c38] opacity-[0.8] dark:opacity-[0.9] p-5">
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl sm:leading-[4.5rem]">
            Looking To Sell?
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            Wonder what your house is really worth? <br />I provide a
            complimentary detailed home evaluation which will help you determine
            the value of your home. Even if you are not considering selling your
            home today, home evaluation is important because it can provide a
            picture of your overall financial health.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <ButtonBanner
              text="Start Now"
              textColor="white"
              href="#"
              borderColor="blue-600"
              borderWidth={2}
              borderRadius="md"
              bgColor="blue-600"
              hoverBgColor="transparent"
              shadow={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
