import MoreInfo from "../../assets/images/svg/more-info.svg";
import Eye from "../../assets/images/svg/eye.svg";

const InputGroup = (props) => {
  const { label, type, rcComponent, infoText, moreInfo, placeHolder, va } =
    props;

  return (
    <div className="flex flex-col">
      <div className="flex items-center">
        <label
          className="text-[13px] 2xl:text-lg text-[#232164] mb-[10px] 2xl:mb-[15px]"
          htmlFor={label}
        >
          {label}
        </label>

        {moreInfo && (
          <img src={MoreInfo} alt="more" className="ml-2 mt-[-7px]" />
        )}
      </div>
      <div className="relative">
        <input
          type={type}
          id={label}
          placeholder={placeHolder && placeHolder}
          className={`border-[0.5px] w-full ${
            rcComponent && "h-[35px]"
          } border-[#D5D8DA] h-[30px] 2xl:h-[40px] rounded-[5px] focus:outline-none px-[15px] 2xl:text-lg py-2 placeholder:2xl:text-xl text-[13px] placeholder:text-[12px] placeholder:text-[#8E8E8E]`}
        />
        {type === "password" && (
          <img
            src={Eye}
            alt="view"
            className="absolute right-[17px] cursor-pointer top-1/2 -translate-y-1/2"
          />
        )}
      </div>

      {infoText && <span className="text-center text-[10px]">{infoText}</span>}
    </div>
  );
};

export default InputGroup;
