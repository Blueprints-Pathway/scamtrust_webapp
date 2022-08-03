import { useEffect } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Box from "@mui/material/Box";
import { createTheme } from "@mui/material";
import ReactStars from "react-rating-stars-component";

import Layout from "../components/Layout/Layout";
import BackArrow from "../assets/images/svg/back-arrow.svg";
import TransactionDetails from "../components/TransactionDetails/TransactionDetails";
import Logo from "../components/branding/Logo/Logo";
import { fetchTransaction } from "../services/transactions";

const ProductItemDetails = (props) => {
  const { headingDesc, count } = props;
  return (
    <div className="flex justify-between mb-5 2xl:mb-[40px]">
      <h6 className="text-[#242323] font-medium 2xl:text-xl">{headingDesc}</h6>
      <ReactStars
        count={5}
        onChange={() => null}
        size={15}
        activeColor="#FFAA00"
      />
    </div>
  );
};

const VendorTransactionCompleted = () => {
  const theme = createTheme({
    components: {
      // Name of the component
      Stepper: {
        styleOverrides: {
          // Name of the slot
          root: {
            // Some CSS
            // fontSize: '1rem',
          },
        },
      },
    },
  });

  useEffect(() => {
    // (async () => {
    //   const transaction = await fetchTransaction("SCM-TRA-62debfee024fe")
    //   console.log(transaction)
    // })()
  }, []);

  const steps = ["Awaiting approval", "On-going", "Completed"];

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
              Status: <span className="text-[#7D8287]">Completed</span>
            </h4>
            <span className="2xl:text-xl text-[#1B1B1B]">Today, 8:48 AM</span>
          </div>
        </div>
        <div className="absolute right-0 top-[30px]">
          <Box sx={{ width: "100%" }}>
            <Stepper classes={theme} activeStep={1} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel style={{ font: "4px" }}>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
        </div>

        <div className="mb-[131.25px] 2xl:mb-[175px] font-secondary">
          <form className="mt-4 2xl:mt-5 shadow-md rounded-[20px] overflow-hidden">
            <h4 className="text-[#333333] bg-[#EAEAEA] h-[75px] flex items-center pl-[35px] 2xl:pl-[50px] 2xl:h-[100px] font-bold 2xl:text-xl">
              Ratings
            </h4>

            <div className="2xl:px-[100px] px-[75px] 2xl:py-10 py-[30px]">
              <ProductItemDetails headingDesc="Delivery" count="2" />
              <ProductItemDetails headingDesc="Price" count="5" />
              <ProductItemDetails headingDesc="Quantity" count="2" />
              <ProductItemDetails headingDesc="Service" count="4" />
              <ProductItemDetails headingDesc="Quality" count="2.2" />
            </div>
          </form>
        </div>

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

export default VendorTransactionCompleted;
