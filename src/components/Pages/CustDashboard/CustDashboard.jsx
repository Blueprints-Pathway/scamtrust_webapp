import Logo from "../../branding/Logo/Logo";
// import Nav from "../nav/Nav";
import "./CustDashboard.css";

const CustomerDashboard = () => {
  return (
    <div>
      {" "}
      <div className="container-fluid mx-auto ">
        <div className="flex flex-row">
          {/* <div className="inline-flex">
        <SideNav />
      </div> */}
          <div className="grow">
            {/* <Nav /> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 ">
                <div className="grid grid-cols-1 gap-10">
                  <div className=" border">
                    <div className="mb-2">
                      <h6
                        style={{
                          backgroundColor: "white",
                        }}
                        className=""
                      >
                        Chukwudi Osinachi
                      </h6>
                      <h6>ID - 6057702</h6>
                    </div>
                    <hr
                      className="border-1"
                      style={{
                        borderColor: "#86D19B",
                      }}
                    />

                    <div className="py-3 ">
                      <div className="flex justify-end ">
                        <span>
                          <i
                            className="far  fa-eye pointer-events-none    transform -translate-y-1/2 "
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            id="myInput"
                          ></i>
                        </span>
                      </div>
                      <div className="grid grid-cols-2">
                        <div>
                          <h6>Total Balance</h6>
                          <h4 className="">N500,000.00</h4>
                        </div>
                        <div>
                          <h6>Pending Balance</h6>
                          <h4>N250,000.00</h4>
                        </div>
                      </div>
                    </div>

                    <div className="py-3">
                      <div className="grid grid-cols-2">
                        <div>
                          <button
                            className="btn font-bold py-2 px-4 rounded"
                            style={{
                              background: "#E9303B",
                              borderRadius: "8.10345px",
                              fontFamily: "Poppins",
                              fontStyle: "normal",
                              fontWeight: "600",
                              fontSize: "14px",
                              lineHeight: "21px",
                              display: "flex",
                              alignItems: "center",

                              color: " #FFFFFF",
                            }}
                          >
                            WITHDRAW
                          </button>
                        </div>
                        <div>
                          <button
                            className="btn text-white font-bold py-2 px-10 rounded hover:bg-blue-700"
                            style={{
                              backgroundColor: "#3AB75D",
                              borderRadius: "6.12667px",
                              fontFamily: "Poppins",
                              fontStyle: "normal",
                              fontWeight: "600",
                              fontSize: "14px",
                              lineHeight: "21px",
                              display: "flex",
                              alignItems: "center",

                              color: "#FFFFFF",
                            }}
                          >
                            FUND
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 rounded-lg bg-white border">
                    <h3 className="text-2xl my-2">Fee Calculator</h3>
                    <hr
                      className="border-1"
                      style={{
                        borderColor: "#86D19B",
                      }}
                    />
                    <div className="my-3">
                      <div className="flex justify-between mb-2">
                        <p>Enter Transaction amount:</p>
                        <input
                          type="text"
                          className="border"
                          placeholder="Enter amount"
                        />
                      </div>
                      <div className="flex justify-between mb-2">
                        <p>Transaction fee:</p>
                        <input
                          type="text"
                          className="border"
                          placeholder="Enter amount"
                        />
                      </div>
                      <div className="flex justify-between mb-2">
                        <p>Total amount:</p>
                        <input
                          type="text"
                          className="border"
                          placeholder="Enter amount"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2  ">
                    <div
                      className="p-5 m-5 h-44 rounded-lg border"
                      style={{
                        backgroundColor: "#FFEFD9",
                        borderRadius: "24px",
                      }}
                    >
                      <div>
                        <span
                          style={{
                            backgroundColor: "#FFEFD9",
                            fontFamily: "Poppins",
                            fontStyle: "normal",
                            fontWeight: "600",
                            fontSize: "20px",
                            lineHeight: "30px",
                            display: "flex",
                            alignItems: "flex-end",
                            color: "#232164",
                          }}
                        >
                          FAQs
                        </span>
                        <h2
                          style={{
                            backgroundColor: "#FFEFD9",
                            fontFamily: "poppins",
                            fontStyle: "normal",
                            fontWeight: "200",
                            fontSize: "12px",
                            lineHeight: "26px",
                            /* or 284% */

                            color: "#1B1B1B",
                          }}
                        >
                          Find answers instantly
                        </h2>
                      </div>
                    </div>

                    <div
                      className="p-5 m-5 rounded-lg h-44  border"
                      style={{
                        backgroundColor: " #E2D8F1",
                        borderRadius: "24px",
                      }}
                    >
                      <div>
                        <span
                          style={{
                            backgroundColor: " #E2D8F1",
                            fontFamily: "Poppins",
                            fontStyle: "normal",
                            fontWeight: "600",
                            fontSize: "20px",
                            lineHeight: "30px",
                            display: "flex",
                            alignItems: "flex-end",
                            color: "#232164",
                          }}
                        >
                          Chat
                        </span>
                        <h2
                          style={{
                            backgroundColor: " #E2D8F1",
                            fontFamily: "poppins",
                            fontStyle: "normal",
                            fontWeight: "200",
                            fontSize: "12px",
                            lineHeight: "26px",
                            /* or 284% */

                            color: "#1B1B1B",
                          }}
                        >
                          Start a conversation now
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div
                    className="mt-5 flex"
                    style={{
                      justifyContent: "center",
                    }}
                  >
                    <h2>Secured by</h2>
                    <div>
                      <img
                        alt="logo"
                        style={{
                          width: "50px",
                          height: "20px",
                          display: "inline",
                        }}
                        src={Logo}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5">
                {" "}
                <div className="p-5 rounded-lg bg-white border">
                  <div className="mb-2 flex justify-between">
                    <span>All</span>
                    <span>OutGoing</span>
                    <span>Cancelled</span>
                    <span>Completed</span>
                  </div>
                  <hr
                    className="border-1"
                    style={{
                      borderColor: "#86D19B",
                    }}
                  />

                  <div className="py-3 ">
                    <div className="flex justify-end mb-4">
                      <span>
                        <button
                          className=" hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
                          style={{
                            backgroundColor: "#3AB75D",
                          }}
                        >
                          Create Transaction{" "}
                          <i
                            className="fas fa-plus  my-2 mx-1 p-0.5"
                            style={{
                              borderRadius: "50px",
                              color: "black",
                              background: "#FFFFFF",
                              boxShadow:
                                "3.03571px 3.03571px 6.07143px rgba(100, 96, 96, 0.25",
                            }}
                          ></i>
                        </button>
                      </span>
                    </div>
                    <div className=" flex justify-between grid-cols-4">
                      <div>
                        <span
                          style={{
                            color: "#A6A6A6",
                          }}
                        >
                          Transactions
                        </span>
                        <div>
                          <h4
                            style={{
                              fontFamily: "Lato",
                              fontStyle: "normal",
                              fontWeight: "500",
                              fontSize: "16px",
                              lineHeight: "46px",
                              color: "#232164",
                            }}
                            className=""
                          >
                            Iphone 11 ....
                          </h4>
                          <small
                            style={{
                              fontFamily: "poppins",
                              fontStyle: "normal",

                              fontSize: "10px",
                            }}
                          >
                            Awaiting approval
                          </small>
                        </div>
                        <div>
                          <h4
                            style={{
                              fontFamily: "Lato",
                              fontStyle: "normal",
                              fontWeight: "500",
                              fontSize: "16px",
                              lineHeight: "46px",
                              color: "#232164",
                            }}
                            className=""
                          >
                            Iphone 11 ....
                          </h4>
                          <small
                            style={{
                              fontFamily: "poppins",
                              fontStyle: "normal",

                              fontSize: "10px",
                            }}
                          >
                            Awaiting approval
                          </small>
                        </div>

                        <div>
                          <h4
                            style={{
                              fontFamily: "Lato",
                              fontStyle: "normal",
                              fontWeight: "500",
                              fontSize: "16px",
                              lineHeight: "46px",
                              color: "#232164",
                            }}
                            className=""
                          >
                            Iphone 11 ....
                          </h4>
                          <small
                            style={{
                              fontFamily: "poppins",
                              fontStyle: "normal",

                              fontSize: "10px",
                            }}
                          >
                            Awaiting approval
                          </small>
                        </div>

                        <div>
                          <h4
                            style={{
                              fontFamily: "Lato",
                              fontStyle: "normal",
                              fontWeight: "500",
                              fontSize: "16px",
                              lineHeight: "46px",
                              color: "#232164",
                            }}
                            className=""
                          >
                            Iphone 11 ....
                          </h4>
                          <small
                            style={{
                              fontFamily: "poppins",
                              fontStyle: "normal",

                              fontSize: "10px",
                            }}
                          >
                            Awaiting approval
                          </small>
                        </div>
                        <div>
                          <h4
                            style={{
                              fontFamily: "Lato",
                              fontStyle: "normal",
                              fontWeight: "500",
                              fontSize: "16px",
                              lineHeight: "46px",
                              color: "#232164",
                            }}
                            className=""
                          >
                            Iphone 11 ....
                          </h4>
                          <small
                            style={{
                              fontFamily: "poppins",
                              fontStyle: "normal",

                              fontSize: "10px",
                            }}
                          >
                            Awaiting approval
                          </small>
                        </div>
                        <div>
                          <h4
                            style={{
                              fontFamily: "Lato",
                              fontStyle: "normal",
                              fontWeight: "500",
                              fontSize: "16px",
                              lineHeight: "46px",
                              color: "#232164",
                            }}
                            className=""
                          >
                            Iphone 11 ....
                          </h4>
                          <small
                            style={{
                              fontFamily: "poppins",
                              fontStyle: "normal",

                              fontSize: "10px",
                            }}
                          >
                            Awaiting approval
                          </small>
                        </div>
                        <div>
                          <h4
                            style={{
                              fontFamily: "Lato",
                              fontStyle: "normal",
                              fontWeight: "500",
                              fontSize: "16px",
                              lineHeight: "46px",
                              color: "#232164",
                            }}
                            className=""
                          >
                            Iphone 11 ....
                          </h4>
                          <small
                            style={{
                              fontFamily: "poppins",
                              fontStyle: "normal",

                              fontSize: "10px",
                            }}
                          >
                            Awaiting approval
                          </small>
                        </div>
                        <div>
                          <h4
                            style={{
                              fontFamily: "Lato",
                              fontStyle: "normal",
                              fontWeight: "500",
                              fontSize: "16px",
                              lineHeight: "46px",
                              color: "#232164",
                            }}
                            className=""
                          >
                            Iphone 11 ....
                          </h4>
                          <small
                            style={{
                              fontFamily: "poppins",
                              fontStyle: "normal",

                              fontSize: "10px",
                            }}
                          >
                            Awaiting approval
                          </small>
                        </div>

                        <div>
                          <h4
                            style={{
                              fontFamily: "Lato",
                              fontStyle: "normal",
                              fontWeight: "500",
                              fontSize: "16px",
                              lineHeight: "46px",
                              color: "#232164",
                            }}
                            className=""
                          >
                            Iphone 11 ....
                          </h4>
                          <small
                            style={{
                              fontFamily: "poppins",
                              fontStyle: "normal",

                              fontSize: "10px",
                            }}
                          >
                            Awaiting approval
                          </small>
                        </div>
                      </div>
                      <div>
                        <span
                          style={{
                            color: "#A6A6A6",
                          }}
                        >
                          Vendor Name
                        </span>
                        <div>
                          <h4
                            style={{
                              fontFamily: "Lato",
                              fontStyle: "normal",
                              fontWeight: "500",
                              fontSize: "16px",
                              lineHeight: "46px",
                              color: "#232164",
                            }}
                          >
                            Ridic Ventures
                          </h4>
                        </div>
                        <div className="mt-8">
                          <h4
                            style={{
                              fontFamily: "Lato",
                              fontStyle: "normal",
                              fontWeight: "500",
                              fontSize: "16px",
                              lineHeight: "46px",
                              color: "#232164",
                            }}
                          >
                            Ridic Ventures
                          </h4>
                        </div>

                        <div className="mt-7">
                          <h4
                            style={{
                              fontFamily: "Lato",
                              fontStyle: "normal",
                              fontWeight: "500",
                              fontSize: "16px",
                              lineHeight: "46px",
                              color: "#232164",
                            }}
                          >
                            Ridic Ventures
                          </h4>
                        </div>

                        <div className="mt-8">
                          <h4
                            style={{
                              fontFamily: "Lato",
                              fontStyle: "normal",
                              fontWeight: "500",
                              fontSize: "16px",
                              lineHeight: "46px",
                              color: "#232164",
                            }}
                          >
                            Ridic Ventures
                          </h4>
                        </div>
                        <div className="mt-7">
                          <h4
                            style={{
                              fontFamily: "Lato",
                              fontStyle: "normal",
                              fontWeight: "500",
                              fontSize: "16px",
                              lineHeight: "46px",
                              color: "#232164",
                            }}
                          >
                            Ridic Ventures
                          </h4>
                        </div>
                        <div className="mt-7">
                          <h4
                            style={{
                              fontFamily: "Lato",
                              fontStyle: "normal",
                              fontWeight: "500",
                              fontSize: "16px",
                              lineHeight: "46px",
                              color: "#232164",
                            }}
                          >
                            Ridic Ventures
                          </h4>
                        </div>
                        <div className="mt-8">
                          <h4
                            style={{
                              fontFamily: "Lato",
                              fontStyle: "normal",
                              fontWeight: "500",
                              fontSize: "16px",
                              lineHeight: "46px",
                              color: "#232164",
                            }}
                          >
                            Ridic Ventures
                          </h4>
                        </div>
                        <div className="mt-8">
                          <h4
                            style={{
                              fontFamily: "Lato",
                              fontStyle: "normal",
                              fontWeight: "500",
                              fontSize: "16px",
                              lineHeight: "46px",
                              color: "#232164",
                            }}
                          >
                            Ridic Ventures
                          </h4>
                        </div>
                        <div className="mt-8">
                          <h4
                            style={{
                              fontFamily: "Lato",
                              fontStyle: "normal",
                              fontWeight: "500",
                              fontSize: "16px",
                              lineHeight: "46px",
                              color: "#232164",
                            }}
                          >
                            Ridic Ventures
                          </h4>
                        </div>
                      </div>

                      <div>
                        <span
                          style={{
                            color: "#A6A6A6",
                          }}
                        >
                          Amount
                        </span>
                        <div>
                          {" "}
                          <h4
                            style={{
                              fontFamily: "Lato",
                              fontStyle: "normal",
                              fontWeight: "500",
                              fontSize: "16px",
                              lineHeight: "46px",
                              color: "#232164",
                            }}
                            className=""
                          >
                            N500,000.00
                          </h4>
                        </div>
                        <div className="mt-7">
                          {" "}
                          <h4
                            style={{
                              fontFamily: "Lato",
                              fontStyle: "normal",
                              fontWeight: "500",
                              fontSize: "16px",
                              lineHeight: "46px",
                              color: "#232164",
                            }}
                            className=""
                          >
                            N500,000.00
                          </h4>
                        </div>
                        <div className="mt-8">
                          {" "}
                          <h4
                            style={{
                              fontFamily: "Lato",
                              fontStyle: "normal",
                              fontWeight: "500",
                              fontSize: "16px",
                              lineHeight: "46px",
                              color: "#232164",
                            }}
                            className=""
                          >
                            N500,000.00
                          </h4>
                        </div>
                        <div className="mt-7">
                          {" "}
                          <h4
                            style={{
                              fontFamily: "Lato",
                              fontStyle: "normal",
                              fontWeight: "500",
                              fontSize: "16px",
                              lineHeight: "46px",
                              color: "#232164",
                            }}
                            className=""
                          >
                            N500,000.00
                          </h4>
                        </div>

                        <div className="mt-7">
                          {" "}
                          <h4
                            style={{
                              fontFamily: "Lato",
                              fontStyle: "normal",
                              fontWeight: "500",
                              fontSize: "16px",
                              lineHeight: "46px",
                              color: "#232164",
                            }}
                            className=""
                          >
                            N500,000.00
                          </h4>
                        </div>
                        <div className="mt-7">
                          {" "}
                          <h4
                            style={{
                              fontFamily: "Lato",
                              fontStyle: "normal",
                              fontWeight: "500",
                              fontSize: "16px",
                              lineHeight: "46px",
                              color: "#232164",
                            }}
                            className=""
                          >
                            N500,000.00
                          </h4>
                        </div>
                        <div className="mt-8">
                          {" "}
                          <h4
                            style={{
                              fontFamily: "Lato",
                              fontStyle: "normal",
                              fontWeight: "500",
                              fontSize: "16px",
                              lineHeight: "46px",
                              color: "#232164",
                            }}
                            className=""
                          >
                            N500,000.00
                          </h4>
                        </div>
                        <div className="mt-8">
                          {" "}
                          <h4
                            style={{
                              fontFamily: "Lato",
                              fontStyle: "normal",
                              fontWeight: "500",
                              fontSize: "16px",
                              lineHeight: "46px",
                              color: "#232164",
                            }}
                            className=""
                          >
                            N500,000.00
                          </h4>
                        </div>
                        <div className="mt-8">
                          {" "}
                          <h4
                            style={{
                              fontFamily: "Lato",
                              fontStyle: "normal",
                              fontWeight: "500",
                              fontSize: "16px",
                              lineHeight: "46px",
                              color: "#232164",
                            }}
                            className=""
                          >
                            N500,000.00
                          </h4>
                        </div>
                      </div>
                      <div>
                        <span
                          style={{
                            color: "#A6A6A6",
                          }}
                        >
                          Date
                        </span>
                        <div>
                          {" "}
                          <h4
                            style={{
                              fontFamily: "Lato",
                              fontStyle: "normal",
                              fontWeight: "500",
                              fontSize: "16px",
                              lineHeight: "46px",
                              color: "#232164",
                            }}
                          >
                            25th May, 2022
                          </h4>
                        </div>
                        <div className="mt-7">
                          {" "}
                          <h4
                            style={{
                              fontFamily: "Lato",
                              fontStyle: "normal",
                              fontWeight: "500",
                              fontSize: "16px",
                              lineHeight: "46px",
                              color: "#232164",
                            }}
                          >
                            25th May, 2022
                          </h4>
                        </div>
                        <div className="mt-7">
                          {" "}
                          <h4
                            style={{
                              fontFamily: "Lato",
                              fontStyle: "normal",
                              fontWeight: "500",
                              fontSize: "16px",
                              lineHeight: "46px",
                              color: "#232164",
                            }}
                          >
                            25th May, 2022
                          </h4>
                        </div>
                        <div className="mt-7">
                          {" "}
                          <h4
                            style={{
                              fontFamily: "Lato",
                              fontStyle: "normal",
                              fontWeight: "500",
                              fontSize: "16px",
                              lineHeight: "46px",
                              color: "#232164",
                            }}
                          >
                            25th May, 2022
                          </h4>
                        </div>
                        <div className="mt-8">
                          {" "}
                          <h4
                            style={{
                              fontFamily: "Lato",
                              fontStyle: "normal",
                              fontWeight: "500",
                              fontSize: "16px",
                              lineHeight: "46px",
                              color: "#232164",
                            }}
                          >
                            25th May, 2022
                          </h4>
                        </div>
                        <div className="mt-8">
                          {" "}
                          <h4
                            style={{
                              fontFamily: "Lato",
                              fontStyle: "normal",
                              fontWeight: "500",
                              fontSize: "16px",
                              lineHeight: "46px",
                              color: "#232164",
                            }}
                          >
                            25th May, 2022
                          </h4>
                        </div>
                        <div className="mt-8">
                          {" "}
                          <h4
                            style={{
                              fontFamily: "Lato",
                              fontStyle: "normal",
                              fontWeight: "500",
                              fontSize: "16px",
                              lineHeight: "46px",
                              color: "#232164",
                            }}
                          >
                            25th May, 2022
                          </h4>
                        </div>

                        <div className="mt-8">
                          {" "}
                          <h4
                            style={{
                              fontFamily: "Lato",
                              fontStyle: "normal",
                              fontWeight: "500",
                              fontSize: "16px",
                              lineHeight: "46px",
                              color: "#232164",
                            }}
                          >
                            25th May, 2022
                          </h4>
                        </div>
                        <div className="mt-7">
                          {" "}
                          <h4
                            style={{
                              fontFamily: "Lato",
                              fontStyle: "normal",
                              fontWeight: "500",
                              fontSize: "16px",
                              lineHeight: "46px",
                              color: "#232164",
                            }}
                          >
                            25th May, 2022
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* 
                      <div className="py-3">
                          <div className="grid grid-cols-2">
                              <div>
                                  <button className="btn font-bold py-2 px-4 rounded  bg-red-700 ">
                                      WITHDRAW
                                  </button>
                              </div>
                              <div>
                                  <button className="btn bg-green-700 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
                                      FUND
                                  </button>
                              </div>
                          </div>
                      </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
