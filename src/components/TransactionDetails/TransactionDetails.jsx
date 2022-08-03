import React from "react";

const ProductItemDetails = (props) => {
  const { headingDesc, productItem } = props;
  return (
    <div className="flex justify-between mb-5 2xl:mb-[40px]">
      <h6 className="text-[#242323] font-medium 2xl:text-xl">{headingDesc}</h6>
      <p className="text-[#7D8287] font-secondary font-light 2xl:text-xl text-right w-[337px]">
        {productItem}
      </p>
    </div>
  );
};

const ActionButton = (props) => {
  const { bgClassName, textColor, children } = props;
  return (
    <button
      className={`py-5 px-[123px] ${textColor} ${bgClassName} transition-all duration-150 hover:shadow-md hover:-translate-y-1 rounded-[5px] text-lg`}
    >
      {children}
    </button>
  );
};

const TransactionDetails = () => {
  return (
    <div className="mb-[131.25px] 2xl:mb-[175px] font-secondary">
      <form className="mt-4 2xl:mt-5 shadow-md rounded-[20px] overflow-hidden">
        <h4 className="text-[#333333] bg-[#EAEAEA] h-[75px] flex items-center pl-[35px] 2xl:pl-[50px] 2xl:h-[100px] font-bold 2xl:text-xl">
          Transaction details
        </h4>

        <div className="2xl:px-[100px] px-[75px] 2xl:py-10 py-[30px]">
          <ProductItemDetails headingDesc="Product name" productItem="iPhone" />
          <ProductItemDetails
            headingDesc="Product amount"
            productItem="₦15.00"
          />
          <ProductItemDetails headingDesc="Quantity" productItem="2" />
          <ProductItemDetails
            headingDesc="Due date"
            productItem="25 - 5 -2022"
          />
          <ProductItemDetails
            headingDesc="Description"
            productItem="One pair of black female corporate heel shoes and one pair of white unbranded sneakers"
          />
        </div>
      </form>
      <div className="flex justify-around mt-[75px] 2xl:mt-[100px]">
        <ActionButton bgClassName="bg-[#EDEDED]">Decline</ActionButton>
        <ActionButton bgClassName="bg-colorSecondary" textColor="text-white">
          Accept
        </ActionButton>
      </div>
    </div>
  );
};

export default TransactionDetails;
