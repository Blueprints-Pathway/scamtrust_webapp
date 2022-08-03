import MoreDots from "../../assets/images/svg/more-dots.svg";

const TransactionType = (props) => {
  const { transactions } = props;

  return (
    <ul className="mb-[84.75px] 2xl:mb-[113px]">
      {transactions.map((transaction) => {
        const {
          amount,
          buyer,
          date,
          icon,
          id,
          transactionItem,
          transactionStatus,
        } = transaction;
        const transactionStatusBgColor =
          transactionStatus === "Awaiting approval"
            ? "bg-[#2321644A]"
            : transactionStatus === "Completed"
            ? "bg-[#89D39D61]"
            : transactionStatus === "Cancelled"
            ? "bg-[#FF989E78]"
            : transactionStatus === "On-going" && "bg-[#FEF28B66]";
        return (
          <li
            key={id}
            className="w-[927.75px] cursor-pointer hover:shadow-md transition-all duration-500 delay-150 2xl:w-[1237px] mb-5 flex justify-between items-center border border-[#D9D8D8] rounded-[15px] px-[6px] 2xl:px-[10px] py-3 2xl:py-4"
          >
            <div className="flex items-center w-[250px] 2xl:w-[300px]">
              <div
                className={`w-[37px] grid place-content-center ${transactionStatusBgColor} mr-[6px] h-[37px] overflow-hidden object-cover rounded-[5px]`}
              >
                <img
                  src={icon}
                  alt={transactionStatus}
                  className="w-[19px] h-[19px]"
                />
              </div>
              <div className="flex flex-col">
                <p className="font-medium">{transactionItem}</p>
                <span className="font-bold text-xs">{transactionStatus}</span>
              </div>
            </div>

            <div className="font-medium text-colorPrimary">{buyer}</div>

            <div className="font-medium text-colorPrimary">₦ {amount}</div>

            <div className="font-medium text-colorPrimary">{date}</div>

            <img src={MoreDots} alt="More info" className="cursor-pointer" />
          </li>
        );
      })}
    </ul>
  );
};

export default TransactionType;
