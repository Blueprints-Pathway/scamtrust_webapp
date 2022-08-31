import { useNavigate } from "react-router-dom";
import { useState } from "react";

import SignupWrapper from "../../components/HOC/SignupWrapper";
import Button from "../../components/UI/Button";
import SecurityCard from "../../assets/images/security-card.svg";
import SelectGroup from "../../components/UI/SelectGroup";
import InputGroup from "../../components/UI/InputGroup";
import { registerUser, setSignupPin } from "../../services/auth";

const CustomerSecurityQuestion = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [securityQuestion, setSecurityQuestion] = useState("");

  const headingText = (
    <div className="flex justify-between items-center mb-[15px] mt-[43px] lg:mt-[87.75px] 2xl:mb-[42px] 2xl:mt-[117px]">
      <h3 className="text-[#232164] font-semibold text-base lg:text-xl 2xl:text-3xl">
        Security Question
      </h3>

      <img src={SecurityCard} alt="security card" />
    </div>
  );

  const navigate = useNavigate();

  const submitHandler = async () => {
    setErrorMessage("");
    if (loading) return;
    if (!securityQuestion.length) {
      setErrorMessage("Security question is required");
      return;
    }
    const customerSignupDetails = JSON.parse(
      localStorage.getItem("customer-signup")
    );
    const customerSignupData = { ...customerSignupDetails, securityQuestion };
    localStorage.setItem("customer-signup", JSON.stringify(customerSignupData));
    setLoading(true);
    // Send security question
    const pin = { pin: customerSignupData.pin };
    const securityQuestionAnswer = {
      question_id: "6",
      answer: securityQuestion,
    };
    try {
      const response = await registerUser(JSON.stringify(customerSignupData));
      if (response.status === false) {
        setLoading(false);
        const errorMessage = Object.values(response.message)[0];
        setErrorMessage(errorMessage[0]);
        return;
      }
      console.log(response);
      const token = response.data.access_token;
      await setSignupPin(pin, token);
      setLoading(false);
      navigate("/active-account");
    } catch (error) {
      setLoading(false);
      // const message =
      //   error.response && error.response.data.message
      //     ? error.response.data.message
      //     : error.message;
    }
  };

  return (
    <SignupWrapper headingText={headingText}>
      <p className="text-[rgba(35,33,100,0.5)] mb-[30px] lg:mb-[61px] text-[12px] 2xl:text-base w-[280px] lg:w-[353.25px] 2xl:w-[471px]">
        Security questions add an extra layer of security to your account; It is
        to verify if the account really belongs to you.
      </p>
      <div className="mb-[15px] 2xl:mb-[35px] w-[280px] lg:w-[353.25px] 2xl:w-[471px]">
        <SelectGroup
          label="Security Question"
          option="Choose a security question"
        />
      </div>
      <div className="mb-[26.25px] 2xl:mb-[35px] w-[280px] lg:w-[353.25px] 2xl:w-[471px]">
        <div className="flex flex-col">
          <div className="flex items-center">
            <label
              className="text-[13px] 2xl:text-lg text-colorTertiary mb-[10px] 2xl:mb-[15px]"
              htmlFor="security_question"
            >
              Your Answer
            </label>
          </div>
          <input
            type="text"
            onChange={(e) => setSecurityQuestion(e.target.value)}
            id="security_question"
            className={`border-[0.5px] w-full border-[#D5D8DA] h-[30px] 2xl:h-[40px] rounded-[5px] focus:outline-none px-[15px] 2xl:text-lg py-2 placeholder:2xl:text-xl text-[13px] placeholder:text-[12px] placeholder:text-[#8E8E8E]`}
          />
        </div>
      </div>

      {errorMessage.length ? (
        <div className="w-[280px] bg-red-500 mb-3 p-2 rounded text-white text-center lg:w-[353.25px] 2xl:w-[471px]">
          {errorMessage}
        </div>
      ) : (
        <></>
      )}

      <div className="w-[280px] lg:w-[353.25px] 2xl:w-[471px] mb-[58px] lg:mb-[117px] 2xl:mb-[156px]">
        <Button onClick={submitHandler} bgColor="bg-colorSecondary">
          {loading ? "Loading..." : "Continue"}
        </Button>
      </div>
    </SignupWrapper>
  );
};

export default CustomerSecurityQuestion;
