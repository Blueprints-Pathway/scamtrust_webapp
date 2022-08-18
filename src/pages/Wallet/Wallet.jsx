import Layout from "../../components/Layout/Layout";
import Eye from "../../assets/images/svg/eye.svg";
import Info from "../../assets/images/svg/info.svg";
import Chat from "../../assets/images/svg/chat.svg";

const Wallet = () => {
  return (
    <Layout>
      <div className="w-full">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="grid-cols-1 rounded-3xl bg-white w-full px-12 py-6">
              <div className="flex justify-between pb-1 border-b-2 border-b-colorSecondary mb-4">
                <p className="font-bold text-2xl">Account</p>
                <p className="font-medium text-2xl text-colorPrimary">
                  Ridic Ventures
                </p>
              </div>

              <div className="flex justify-between">
                <div />
                <img src={Eye} alt="eye" className="mb-3" />
              </div>

              <div className="flex justify-between mb-[40px]">
                <div>
                  <p className="font-medium text-3xl text-colorSecondary mb-2">
                    N 500,000
                  </p>
                  <p className="font-medium text-xl text-colorPrimary">
                    Available Balance
                  </p>
                  <button className="font-medium bg-[#E9303B] px-5 text-white py-3 rounded-md">
                    WITHDRAW
                  </button>
                </div>
                <div>
                  <p className="font-medium text-3xl text-colorSecondary mb-2">
                    N 500,000
                  </p>
                  <p className="font-medium text-xl text-colorPrimary">
                    Outgoing Balance
                  </p>
                  <button className="font-medium bg-colorGreen px-5 text-white py-3 rounded-md">
                    Fund
                  </button>
                </div>
              </div>

              <div className="mt-[45px]">
                <p className="font-medium text-xl mb-2">Primary Account</p>
                <div className="bg-[#EAEAEA] rounded-2xl mb-5 flex justify-between p-5">
                  <div>
                    <p className="text-xl">
                      <span className="text-colorSecondary">
                        N 1,100,000.00
                      </span>{" "}
                      Withdrawn so far
                    </p>
                    <p className="font-medium text-xl">
                      2009419261 Zenith Ilerioluwa Brown
                    </p>
                  </div>
                  <button className="px-4 py-3 bg-colorPrimary text-white rounded-md">
                    Add Account
                  </button>
                </div>
              </div>
            </div>

            <div className="flex bg-white mt-4 py-14 flex-col lg:flex-row justify-between rounded-3xl text-colorPrimary">
              <div className="w-[200px] mx-auto hover:scale-105 transition-all duration-500 2xl:w-[280px] py-[31px] px-[35px] bg-[#FFEFD9] rounded-3xl mb-3 lg:mb-0 lg:mr-5">
                <div className="bg-[#ff9300] mb-4 grid place-content-center h-[46px] w-[46px] rounded-full">
                  <img
                    className="w-[23px] h-[23px] object-contain"
                    src={Info}
                    alt="info"
                  />
                </div>
                <h6 className="font-semibold text-xl">FAQs</h6>
                <p>Find answers instantly</p>
              </div>
              <div className="w-[200px] mx-auto hover:scale-105 transition-all duration-500 2xl:w-[280px] py-[31px] px-[35px] bg-[#E2D8F1] rounded-3xl">
                <div className="bg-[#5F0AC3] mb-4 grid place-content-center h-[46px] w-[46px] rounded-full">
                  <img
                    className="w-[23px] h-[23px] object-contain"
                    src={Chat}
                    alt="chat"
                  />
                </div>
                <h6 className="font-semibold text-xl">Chat</h6>
                <p>Start a conversation now</p>
              </div>
            </div>
          </div>
          <div className="grid-cols-1 w-full bg-[#F2F2F2] rounded-[25px]">2</div>
        </div>
      </div>
    </Layout>
  );
};

export default Wallet;