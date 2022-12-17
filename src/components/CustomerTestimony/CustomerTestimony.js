import React from "react";

const CustomerTestimony = () => {
  return (
    <div className="font-primary absolute left-1/2 -translate-x-1/2 top-[40%] -translate-y-[40%]">
      <div className="relative">
        <div className="text-colorPrimaryDark bg-white font-black text-[30.75] 2xl:text-[41px] flex justify-center h-[33.75px] w-[33.75px] 2xl:h-[45px] 2xl:w-[45px] rounded-full border-[1.5px] border-[#CFD7DE] text-4xl pt-1">
          “
        </div>
        <h3 className="mb-[40.5px] 2xl:mb-[54px] min-w-[497px] max-w-[663px] font-extrabold text-[20px] 2xl:text-3xl text-colorPrimaryDark">
          As a vendor I am able to improve the services I render to my customers
          because ScamTrust provides me with monthly analysis report on how my
          business is performing.
        </h3>

        <div className="flex items-center">
          <div className="2xl:w-[70px] w-[52.5px] h-[52.5px] 2xl:h-[70px] rounded-full overflow-hidden object-cover mr-[28.5px] 2xl:mr-[38px]">
            <img
              src="https://images.unsplash.com/photo-1657468477493-a86fc4f36b14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="customer_img"
              className="w-full h-full"
            />
          </div>

          <div>
            <p className="font-medium text-[18px] 2xl:text-2xl">
              Fadekemi Folalu
            </p>
            <p className="text-[13px] 2xl:text-lg text-[#8D8D8D]">Vendor</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerTestimony;
