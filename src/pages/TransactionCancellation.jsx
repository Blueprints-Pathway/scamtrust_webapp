import Layout from "../components/Layout/Layout";
import BackArrow from "../assets/images/back-arrow.svg";

const TransactionCancellation = () => {
  return (
    <Layout>
      <img
        src={BackArrow}
        alt="back_arrow"
        className="w-[15.94px] cursor-pointer h-[25.07px] mt-[75px] 2xl:mt-[100px] mb-[101.25px] 2xl:mb-[135px] ml-[31.5px] 2xl:ml-[42px]"
      />

      <form className="w-[1080.5px] shadow-md 2xl:w-[1506px] bg-white rounded-[25px] ml-[31.5px] 2xl:ml-[42px] mr-[66.75px] 2xl:mr-[89px] pb-9 mb-[411px] 2xl:mb-[549px] px-[39.75px] 2xl:px-[53px] pt-[37.5px] 2xl:pt-[50px]">
        <h2 className="text-3xl font-semibold text-colorPrimary mb-[37.5px] 2xl:mb-[50px]">
          Choose your cancellation reason
        </h2>

        <input
          className="border border-[#02489F] placeholder:text-xl placeholder:text-colorPrimary px-[53.25px] 2xl:px-[71px] h-12 2xl:h-16 w-full rounded-[5px]"
          placeholder="Product Unavailability"
        />

        <button className="bg-gradient-to-r from-colorPrimary to-[#0357BF] text-white w-[234px] 2xl:w-[312px] h-[54px] 2xl:h-[72px] font-medium rounded-[5px] mx-auto block mt-[37.5px] 2xl:mt-[50px] mb-[75px] 2xl:mb-[100px] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 delay-100">
          Confirm Cancellation
        </button>
      </form>
    </Layout>
  );
};

export default TransactionCancellation;
