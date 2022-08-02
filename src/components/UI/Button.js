import Forward from "../../assets/images/svg/forward.svg";

const Button = (props) => {
  const { children, disabled, forwardIcon, bgColor } = props;

  return (
    <Button
      disabled={disabled}
      className={`disabled:bg-[#D5D8DA] justify-center flex items-center px-[10px] w-full rounded-[5px] ${
        bgColor ? `${bgColor}` : "bg-colorPrimary"
      } py-2 text-white text-[13px] 2xl:text-lg`}
    >
      {children}
      {forwardIcon && (
        <span>
          <img src={Forward} alt="forward" className="ml-2" />
        </span>
      )}
    </Button>
  );
};

export default Button;
