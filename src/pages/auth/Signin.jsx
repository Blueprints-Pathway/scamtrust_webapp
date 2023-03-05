import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "../../components/branding/Logo/Logo";
import CustomerTestimony from "../../components/CustomerTestimony/CustomerTestimony";
import Eye from "../../assets/images/svg/eye.svg";
import { login, reset } from "../../features/auth/authSlice";
import { fetchUser } from "../../services/auth";
import SignupSelectionModal from "../../components/Pages/auth/SignupSelectionModal";

const Signin = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, isError, user, message, isSuccess } = useSelector(
    (state) => state.auth
  );

  const togglePasswordVisibility = () => {
    setPasswordVisibility((prevState) => !prevState);
  };

  const loginHandler = (e) => {
    e.preventDefault();
    if (password.trim().length < 8) {
      setErrorMessage("Password must be at least 8 characters long");
      return;
    }
    setErrorMessage("");
    const payload = {
      email,
      password,
    };
    dispatch(login(payload));
  };

  useEffect(() => {
    if (isError) {
      // SHOW ERROR FROM MESSAGE
    }
    if (isSuccess || user) {
      (async () => await fetchUser())();
      if (user.data.usertype === "VENDOR") {
        navigate("/vendor-dashboard");
      } else if (user.data.usertype === "CUSTOMER") {
        navigate("/customer-dashboard");
      } else if (user.data.usertype === "ADMIN") {
        navigate("/admin-panel");
      }
      dispatch(reset());
    }
  }, [user, isError, isSuccess, message, navigate, dispatch, errorMessage]);

  return (
    <>
      <SignupSelectionModal
        setShowSignupModal={setShowSignupModal}
        showSignupModal={showSignupModal}
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full relative min-h-screen">
        <div className="relative lg:block hidden bg-[#F9F9F9] px-[63px] 2xl:px-[89px] py-[36px] 2xl:py-[51px]">
          <Logo />
          <CustomerTestimony />
        </div>
        <div className="relative">
          <div className="block lg:hidden px-[63px] 2xl:px-[89px] py-[36px] 2xl:py-[51px]">
            <Logo />
          </div>
          <form
            onSubmit={loginHandler}
            className="px-[20px] lg:px-[63px] 2xl:px-[89px] absolute mt-10 lg:mt-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] lg:w-[420px] 2xl:w-[560px]"
          >
            {/* {errorMessage.length ? (
              <div className="bg-[#FF0000] text-center text-white rounded-md py-3 mb-[30px] text-sm">
                {errorMessage}
              </div>
            ) : (
              <></>
            )} */}
            {isError ? (
              <div className="bg-[#FF0000] text-center text-white rounded-md py-3 mb-[30px] text-sm">
                {message}
              </div>
            ) : (
              <h3 className="text-colorPrimary mb-[30px] font-extrabold text-2xl md:mb-[20px]">
                Welcome Back
              </h3>
            )}

            <div className="mb-[30px] md:mb-[20px]">
              <div className="relative">
                <label className="text-[13px] 2xl:text-lg text-colorTertiary mb-[10px] 2xl:mb-[15px]">
                  Email
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder={"email"}
                  className={`border-[0.5px] w-full ${"h-[35px]"} border-[#D5D8DA] h-[30px] 2xl:h-[40px] rounded-[5px] focus:outline-none px-[15px] 2xl:text-lg py-2 placeholder:2xl:text-xl text-[13px] placeholder:text-[13px] placeholder:text-[#8E8E8E] placeholder:font-medium`}
                />
              </div>
            </div>
            <div className="mb-[30px] md:mb-[20px]">
              <div className="relative">
                <label className="text-[13px] 2xl:text-lg text-colorTertiary mb-[10px] 2xl:mb-[15px]">
                  Password
                </label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="myInput"
                  type={!passwordVisibility ? "password" : "text"}
                  placeholder={"password"}
                  className={`border-[0.5px] w-full ${"h-[35px]"} border-[#D5D8DA] h-[30px] 2xl:h-[40px] rounded-[5px] focus:outline-none px-[15px] 2xl:text-lg py-2 placeholder:2xl:text-xl text-[13px] placeholder:text-[13px] placeholder:text-[#8E8E8E] placeholder:font-medium`}
                />
                <span className="show" onClick={togglePasswordVisibility}>
                  <img
                    src={Eye}
                    alt="view"
                    className="absolute right-[17px] cursor-pointer top-1/2 -translate-y-2/2"
                  />
                </span>
              </div>
            </div>

            <div className="flex justify-between font-normal text-sm 2xl:text-xl text-[#8E8E8E] mb-[30px] mt-[-20px] 2xl:mb-[100px] md:mb-[57px] md:mt-[-10px]">
              <div className="flex items-center justify-between">
                <p className="px-2">Remember Me</p>
                <input type="checkbox"/>
              </div>
              <Link  to="password-recovery">Forgot Password? </Link>
            </div>

            {errorMessage.length ? (
              <div className="bg-[#FF0000] text-center text-white rounded-md py-3 mb-[10px] text-sm md:mb-[45px] md:mt-[-45px] sm:mt-[-50px] sm:mb-[30px] lg:mt-[-45px] lg:mb-[40px]">
                {errorMessage}
              </div>
            ) : (
              <></>
            )}

            <button
              disabled={!password.length || !email.length}
              className={`disabled:bg-[#D5D8DA] justify-center flex items-center px-[10px] w-full rounded-[5px] ${"bg-colorPrimary"} py-2 text-white text-[13px] 2xl:text-lg md:mt-[-30px] lg:mt-[-30px]`}
              type="submit"
            >
              {isLoading ? "Loading..." : "Continue"}
            </button>

            <div className="mt-[10px] text-center text-sm 2xl:text-xl text-[#8E8E8E]">
              Don&apos;t have an account?{" "}
              <div
                onClick={() => setShowSignupModal(true)}
                className="text-colorPrimary inline-block cursor-pointer font-medium"
              >
                Create
              </div>{" "}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signin;
