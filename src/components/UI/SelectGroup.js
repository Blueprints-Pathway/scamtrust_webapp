import React from "react";

const SelectGroup = (props) => {
  const { label, option } = props;

  return (
    <div className="flex flex-col">
      <label
        className="text-[13px] 2xl:text-lg text-[#232164] 2xl:mb-[15px] mb-[10px]"
        htmlFor={label}
      >
        {label}
      </label>
      <select className="border-[0.5px] border-[#D5D8DA] 2xl:text-base text-[12px] h-[30px] 2xl:h-[40px] rounded-[5px]">
        <option>{option}</option>
      </select>
    </div>
  );
};

export default SelectGroup;
