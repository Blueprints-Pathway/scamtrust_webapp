import Layout from "../../components/Layout/Layout";
import Shield from "../../assets/images/svg/shield.svg";
import Add from "../../assets/images/svg/add.svg";
import Chat from "../../assets/images/svg/chat.svg";
import Message from "../../assets/images/svg/message.svg";
import Check from "../../assets/images/svg/check.svg";
import Location from "../../assets/images/svg/location.svg";
import Phone from "../../assets/images/svg/phone.svg";

const VendorDetails = () => {
  return (
    <Layout>
      <div className="rounded-[25px] min-h-[60vh] overflow-hidden">
        <div className="relative absolute z-0">

        <div className="h-[120px] z-0 md:h-[220px] 2xl:h-[257px] bg-gradient-to-r to-colorPrimary from-[#0D3E8F]">
          <img
            src={Shield}
            alt="shield"
            className="absolute w-[100px] h-[120px] md:w-[190px] top-[60%] md:h-[250px] right-[10%] md:top-[60%] -translate-y-1/2"
          />
          <div className="absolute flex items-center left-[20px] justify-between md:left-[60px] -bottom-[40%] md:-bottom-[50%] 2xl:-bottom-[40%] w-full">
            <div className="bg-white w-[50px] h-[50px] md:w-[139px] relative overflow-hidden rounded-full md:h-[139px] shadow-md p-1">
              <div className="bg-[#D3530B] font-semibold w-[45px] h-[45px] text-xl md:text-[40px] grid place-content-center text-white absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-full md:w-[132px] md:h-[132px]">
                RC
              </div>
            </div>
            <div className="flex w-[90%] justify-between">
              <div className="flex flex-col ml-4 ">
                <h5 className="font-bold text-xs md:text-2xl text-[#707070]">
                  Ridic Ventures
                </h5>
                <p className="text-xs md:text-2xl">ID23232</p>
              </div>
              <button
                // onClick={onCreateTransactionClicked}
                className="bg-colorPrimary mr-7 md:mr-36 mt-4 text-xs lg:text-base flex text-white items-center rounded-md px-2 py-2 lg:py-3 hover:-translate-y-1 hover:shadow-lg transition-all duration-700"
              >
                <span>Create transaction</span>
                <img src={Add} alt="add" className="mb-[-6px]" />
              </button>
            </div>
          </div>
        </div>
        </div>

        <div className="pt-36 px-4 md:px-28 bg-white mb-9 pb-9 rounded-b-[25px]">
          <div className="">
            <div className="px-5 mb-9 flex justify-between items-center border-b-2 border-b-[#EAEAEA]">
              <div className="flex">
                <img src={Message} alt="message_icon" className="mr-6" />
                <span className="font-medium text-[8px] md:text-2xl">Email address</span>
              </div>
              <p className="text-[8px]">Ridic@gmail.com</p>
            </div>
            <div className="px-5 mb-9 flex justify-between items-center border-b-2 border-b-[#EAEAEA]">
              <div className="flex">
                <img src={Phone} alt="message_icon" className="mr-6" />
                <span className="font-medium text-[8px] md:text-2xl">Phone number</span>
              </div>
              <p className="text-[8px]">08156711115</p>
            </div>
            <div className="px-5 mb-9 flex justify-between items-center border-b-2 border-b-[#EAEAEA]">
              <div className="flex">
                <img src={Location} alt="message_icon" className="mr-6" />
                <span className="font-medium text-[8px] md:text-2xl">Office address</span>
              </div>
              <p className="text-[8px]">Ikate, Lekki, Lagosm</p>
            </div>
            <div className="px-5 mb-9 flex justify-between items-center border-b-2 border-b-[#EAEAEA]">
              <div className="flex">
                <img src={Check} alt="message_icon" className="mr-6" />
                <span className="font-medium text-[8px] md:text-2xl">RC Number</span>
              </div>
              <p className="text-xs">7654321</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between">
            <div className="bg-[rgba(237,237,237,0.4)] py-4 px-2 md:px-11 mb-5 md:mb-0 md:w-[624px] rounded-2xl">
              {RATING.map((serv) => {
                const { rating, service } = serv;
                return (
                  <div className="flex mb-5 justify-between pb-2 border-b-[#EFF3FF] border-b-[3px]">
                    <div>{service}</div>
                    <div>Rating</div>
                  </div>
                );
              })}
            </div>
            <div>
              <div className="bg-[#F8F8F8] md:w-[296px] rounded-2xl">
                <div className="flex items-center justify-between px-2 py-4">
                  <p className="font-medium">Competence Score</p>
                  <p className="bg-colorGreen text-white py-2 w-11 text-center rounded-lg">
                    80%
                  </p>
                </div>
                <div className="flex items-center justify-between px-2 py-4">
                  <p className="font-medium">Grade</p>
                  <p className="bg-colorGreen text-white w-11 text-center py-2 rounded-lg">
                    A
                  </p>
                </div>
              </div>
              <div className="mt-3 p-6 flex items-center bg-[#E2D8F1] text-colorPrimary md:w-[296px] rounded-2xl">
                <div className="w-10 h-10 bg-colorPrimary grid place-content-center mr-3 rounded-full">
                  <img src={Chat} alt="report_vendor" />
                </div>
                <div>
                  <p className="font-semibold text-lg">Report vendor</p>
                  <p>Chat with us</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const RATING = [
  { service: "Delivery", rating: 3 },
  { service: "Price", rating: 3 },
  { service: "Service", rating: 3 },
  { service: "Quality", rating: 3 },
];

export default VendorDetails;
