import Layout from "../../components/Layout/Layout";
import Shield from "../../assets/images/svg/shield.svg";
import Add from "../../assets/images/svg/add.svg";

const VendorDetails = () => {
  return (
    <Layout>
      <div className="rounded-[25px] min-h-[60vh] overflow-hidden">
        <div className="h-[257px] relative bg-gradient-to-r to-colorPrimary from-[#0D3E8F]">
          <img
            src={Shield}
            alt="shield"
            className="absolute right-[10%] top-1/2 -translate-y-1/2"
          />
          <div className="absolute flex items-center left-[60px] -bottom-[40%] w-full">
            <div className="bg-white w-[139px] relative overflow-hidden rounded-full h-[139px] shadow-md p-1">
              <div className="bg-[#D3530B] grid place-content-center text-white absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-full w-[132px] h-[132px]">
                RC
              </div>
            </div>
            <div className="flex w-[90%] justify-between">
              <div className="flex flex-col ml-4 ">
                <h5 className="font-bold text-2xl text-[#707070]">
                  Ridic Ventures
                </h5>
                <p className="text-2xl">ID23232</p>
              </div>
              <button
                // onClick={onCreateTransactionClicked}
                className="bg-colorPrimary mr-36 mt-4 text-xs lg:text-base flex text-white items-center rounded-md px-2 py-2 lg:py-3 hover:-translate-y-1 hover:shadow-lg transition-all duration-700"
              >
                <span>Create transaction</span>
                <img src={Add} alt="add" className="mb-[-6px]" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-36 px-28 bg-white">
          <div className="flex justify-between">
            <div className="bg-[rgba(237,237,237,0.4)] py-4 px-11 w-[624px] rounded-2xl">
              {RATING.map((serv) => {
                const { rating, service } = serv;
                return (
                  <div className="flex mb-5 justify-between pb-2 border-b-[#EFF3FF] border-b-[3px]">
                    <div>{service}</div>
                    <div>RAting</div>
                  </div>
                );
              })}
            </div>
            <div>RIGHT</div>
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
