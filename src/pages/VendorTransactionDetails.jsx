import Layout from "../components/Layout/Layout";
import BackArrow from "../assets/images/back-arrow.svg";
import TransactionDetails from "../components/TransactionDetails/TransactionDetails";
import Logo from "../components/branding/Logo/Logo";

const VendorTransactionDetails = () => {
  return (
    <Layout>
      <div className="w-[1080.5px] my-[35px] 2xl:my-[50px] relative 2xl:w-[1506px] bg-white rounded-[25px] ml-[31.5px] 2xl:ml-[42px] mr-[66.75px] 2xl:mr-[89px] pb-9 px-[51.75px] 2xl:px-[69px] pt-[37.5px] 2xl:pt-[50px]">
        <div className="flex items-center mb-[15px] 2xl:mb-5">
          <img src={BackArrow} alt="back" />
          <span className="ml-[11px] font-semibold text-colorPrimary">
            Back
          </span>
        </div>
        <div className="flex">
          <div className="mr-[75px] 2xl:mr-[100px]">
            <h3 className="text-[#1B1B1B] font-bold text-[22.5px] 2xl:text-3xl">
              ID - 6057702
            </h3>
            <span className="font-bold 2xl:text-xl text-colorPrimary">
              Ilerioluwa Brown{" "}
            </span>
          </div>

          <div>
            <h4 className="font-bold text-[#1B1B1B] 2xl:text-xl">
              Status: <span className="text-[#7D8287]">Awaiting Approval</span>
            </h4>
            <span className="2xl:text-xl text-[#1B1B1B]">Today, 8:48 AM</span>
          </div>
        </div>
        <div className="absolute right-0 top-[30px]">STEPPER</div>

        <TransactionDetails />

        <div className="flex relative items-end justify-center mb-[46px]">
          <div className="absolute left-[22%] lg:left-[40%] 2xl:left-[35%]">
            <p className="text-[#706E6E] font-semibold flex">Secured by</p>
          </div>
          <div className="h-[31px] w-[75px] absolute left-[80%] -translate-x-[80%] lg:left-[52%] lg:-translate-x-[60%] bottom-[20px]">
            <Logo logosm={true} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default VendorTransactionDetails;
