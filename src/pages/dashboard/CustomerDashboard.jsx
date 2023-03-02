import './customerDashboard.css'
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import InitiateTransaction from "../../components/InitiateTransaction/InitiateTransaction";
import InitiationSuccessful from "../../components/InitiateTransaction/InitiationSuccessful";
import TransactionPreview from "../../components/InitiateTransaction/TransactionPreview";
import Layout from "../../components/Layout/Layout";
import CustDashboard from "../../components/Pages/CustDashboard/CustDashboard";
import Backdrop from "../../components/UI/Backdrop";
import { fetchUser } from "../../services/auth";
import WithdrawFunds from "../../components/Pages/CustDashboard/WithdrawFunds";
import ConfirmWIthdrawFunds from "../../components/Pages/CustDashboard/ConfirmWIthdrawFunds";
import ConfirmTransactionPin from "../../components/Pages/CustDashboard/ConfirmTransactionPin";
// import SuccessfulWithdrawal from "../../components/Pages/CustDashboard/SuccessfulWithdrawal";
import DepositFunds from "../../components/Pages/CustDashboard/DepositFunds";
import chat from '../../assets/chat-img.png'
import logo from '../../assets/loader-img.png'
import faq from '../../assets/conversation-img.png'
import wallet from '../../assets/payment-img.png'
import create from '../../assets/create.png'
import KYC from '../../assets/KYC.png'
import Modal from "react-modal"
import AnimeList from '../../components/Pages/CustDashboard/AnimeList';
import FundWallet from '../../components/Pages/Wallet/FundWallet';
import ConfirmAccount from '../../components/Pages/Wallet/ConfirmAccount';


const CustomerDashboard = () => {
  const [showInitiateTransaction, setShowInitiateTransaction] = useState(false);
  const [showTransactionPreview, setShowTransactionPreview] = useState(false);
  const [showTransactionSuccess, setShowTransactionSuccess] = useState(false);
  const [isWithdrawing, setIsWithdrawing] = useState(false);
  const [confirmTransactionPin, setConfirmTransactionPin] = useState(false);
  const [confirmWithdraw, setConfirmWithdraw] = useState(false);
  const [withdrawSuccessful, setWithdrawSuccessful] = useState(false);
  const [isFunding, setIsFunding] = useState(false);
  const [close, setClose] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [showFundWallet, setShowFundWallet] = useState(false);
	const [showConfirmAccount, setShowConfirmAccont] = useState(false);
  const [details, setDetails] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const setModalIsOpenToTrue = () => {
    setModalIsOpen(true);
  }
  const onCreateTransactionClicked = () => {
		setShowInitiateTransaction((prevState) => !prevState);
	};
  const setModalIsOpenToFalse = () => {
    setModalIsOpen(false);
  }

  const fundWalletHandler = () => {
    setShowFundWallet((prevState) => !prevState)
  }

  const handleConfirmAccount = () => {
    setShowConfirmAccont((prevState) => !prevState)
  }
	const user_details = JSON.parse(localStorage?.getItem("scam-trust-user"));
  
  useEffect(() => {
   
		(async () => {
			try {
				const API_URL = `https://scamtrust.herokuapp.com/api/v1/user/getdetails`;
				const config = {
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${user_details?.data?.access_token}`,
					},
				};

				const data = await axios.get(API_URL, config).finally(()=>{
          setIsLoading(false);

        });

				console.log(data?.data, "user data customer dashboard");
				setDetails(data?.data);
        // setIsLoading(false);
				// console.log(values, "values");
				// return response;
			} catch (error) {
				console.log(error, "error");
        // setIsLoading(false);
			}
      
      
    
		})();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
  const customStyles = {
		content: {
			width: "50vh",
			color: "#01306B",
			top: "50%",
			left: "50%",
			right: "auto",
			bottom: "auto",
			marginRight: "-50%",
			transform: "translate(-50%, -50%)",
			backgroundColor: "#ffffffff",
		},
	};


  const handleClose = () => {
    setClose(true);
  }

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //@TODO  NAVIGATE USER TO LOGIN
  useEffect(() => {
    // const isWithdraw = window.location.href.split("#")[1] === "withdraw";
    const isFunding = window.location.href.split("#")[1] === "fund";
    const modalIsOpen = window.location.href.split("#")[1] === "chat";
    // if (isWithdraw) {
    //   setIsWithdrawing(true);
    // }
    if (isFunding) {
      setIsFunding(true);
    }


    // if (!user) {
    //   navigate("/#customer-dashboard");
    // }
    // (async () => console.log(await fetchUser()))();
    // if (user.data.usertype !== USER_TYPE) {
    //   navigate("/#customer-dashboard");
    // }
  }, []);

  const openFaq = () => {
    navigate("/faq")
  }

  // const onCreateTransactionClicked = () => {
	// 	setShowInitiateTransaction((prevState) => !prevState);
	// };
 

  return (
    <Layout heading="Dashboard">
      { isLoading ?
         <img src={logo} className= "fixed top-1/2 left-1/2  m-auto transition-timing-function: cubic-bezier(0.4, 0, 1, 1) animate-bounce" alt="" /> 
      
      : <div>

      
      <FundWallet
				setShowConfirmAccont={setShowConfirmAccont}
				fundWalletHandler={fundWalletHandler}
				showFundWallet={showFundWallet}
			/>
			<ConfirmAccount
				setShowFundWallet={setShowFundWallet}
				showConfirmAccount={showConfirmAccount}
				setShowConfirmAccont={setShowConfirmAccont}
			/>
      <div className='h-[100vh]'>
      {isWithdrawing ? (
        <WithdrawFunds
        userName = {details?.data?.username}
        availableBalance = {details?.walletBalance}
          setIsWithdrawing={setIsWithdrawing}
          startWithdrawFunds={isWithdrawing}
          setConfirmTransactionPin={setConfirmTransactionPin}
        />
      ) : (
        <></>
      )}
      <DepositFunds isFunding={isFunding} setIsFunding={setIsFunding} />
      <ConfirmWIthdrawFunds
        setConfirmWithdraw={setConfirmWithdraw}
        confirmWithdraw={confirmWithdraw}
        setWithdrawSuccessful={setWithdrawSuccessful}
        setConfirmTransactionPin={setConfirmTransactionPin}
      />
      <ConfirmTransactionPin
        confirmTransactionPin={confirmTransactionPin}
        setConfirmWithdraw={setConfirmWithdraw}
        setIsWithdrawing={setIsWithdrawing}
        setConfirmTransactionPin={setConfirmTransactionPin}
      />
      {/* <SuccessfulWithdrawal
        setWithdrawSuccessful={setWithdrawSuccessful}
        withdrawSuccessful={withdrawSuccessful}
      /> */}
      
      {showInitiateTransaction ? (
        <Backdrop showInitiateTransaction={showInitiateTransaction}>
          <InitiateTransaction
            setShowInitiateTransaction={setShowInitiateTransaction}
            setShowTransactionPreview={setShowTransactionPreview}
          />
        </Backdrop>
      ) : (
        <></>
      )}

      {showTransactionPreview ? (
        <Backdrop showTransactionPreview={showTransactionPreview}>
          <TransactionPreview
            setShowInitiateTransaction={setShowInitiateTransaction}
            setShowTransactionPreview={setShowTransactionPreview}
            setShowTransactionSuccess={setShowTransactionSuccess}
          />
        </Backdrop>
      ) : (
        <></>
      )}
      {showTransactionSuccess ? (
        <Backdrop showTransactionSuccess={showTransactionSuccess}>
          <InitiationSuccessful
            setShowTransactionSuccess={setShowTransactionSuccess}
          />
        </Backdrop>
      ) : (
        <></>
      )}
      <CustDashboard
        setIsFunding={setIsFunding}
        setIsWithdrawing={setIsWithdrawing}
        setShowInitiateTransaction={setShowInitiateTransaction}
      />
      </div>

      <div className={close ? "cust-active hidden" : "cust-welcome"}>
        <div className={close ? "cust-active hidden" : "welcome-cust-card h-[42rem] mt-2 md:ml-[-40px] lg:h-[42rem] lg:w-[85%] lg:ml-[-4rem] xl:w-[72%] xl:ml-[-5px]"}>
          <div className='lg:m-28 lg:ml-[12.1rem] md:mt-16 xl:ml-[9.5rem]'>
            <h1 className='cust-message text-2xl text-center font-extrabold
            lg:text-4xl lg:text-left md:text-1xl
            '>Welcome to ScamTrust!</h1>
            <p className='text-[13px] text-[#707070] text-center pt-2 pb-6
            lg:text-left lg:my-2 lg:text-lg lg:pl-1
            '>Get secured by ScamTrust</p>
          </div>

          <div className='card-wrapper lg:mt-[-60px] md:mt-8 lg:mr-5'>
          <h3 className='cust-group text-xl font-extrabold mr-32 mb-1 lg:mr-[35.5rem]
          md:ml-[-17rem] md:text-lg
          '>Get Started</h3>
          <div className="card-con lg:mt-[-9px]">
            <div 		onClick={onCreateTransactionClicked} className='cust-card my-2 lg:mx-14 md:mx-5'>
              <img className='w-8' src={create} alt="create transaction" /> 
              <p className='pl-2'>Create New Transaction</p>
              </div>
            <div 
            // onClick={() => setIsFunding(true)}
            onClick={handleConfirmAccount}
            className="cust-card my-2 lg:mx-14 md:mx-5">
              <img className='w-8' src={wallet} alt="fund wallet" />
              <p className='mr-12 pl-2'>Fund your wallet</p>
              </div>
            <div className="cust-card my-2 lg:mx-14 md:mt-4 md:mr-[17.6rem] lg:mt-5">
              <img className='w-8' src={KYC} alt="complete KYC" />
              <p className='mr-12 pl-2'>Complete KYC</p>
              </div>
          </div>
          </div>

          <div className='cust-group2 card-wrapper lg:mt-[-5px] md:mt-3'>
          <h3 className='text-xl font-extrabold mr-32 mt-5 mb-1 lg:mr-[35.5rem]
          md:ml-[-17rem] md:text-lg
          '>Need help?</h3>
          <div className="card-con lg:mr-[22.8rem]">
            <div 
            onClick={openFaq}
            className='cust-card my-2 lg:mx-14 md:mx-5'>
              <img className='w-8' src={faq} alt="faq" /> 
              <p className='mr-28 pl-3'>FAQs</p>
              </div>
            <div 
            onClick={setModalIsOpenToTrue}
            className="cust-card my-2 lg:mx-14 md:mx-5">
              <img className='w-8' src={chat} alt="chat" />
              <p className='mr-16 pl-3'>Chat with us</p>
              </div>

              <Modal
              isOpen={modalIsOpen}
              style={customStyles}
              onRequestClose={setModalIsOpenToFalse}
              >
                <button className='pl-28 pt-5 text-lg md:pl-5 lg:pl-16' onClick={setModalIsOpenToFalse}>X</button>
                <AnimeList />
              </Modal>

          </div>
          </div>
          <div className='cust-close text-lg font-semibold text-right mt-2 mr-7
          lg:mr-48 lg:text-xl md:mr-20 md:mt-7
          '>
           <button className='cust-close-btn' onClick={handleClose}>Close x</button>
          </div>
      </div>
      </div>  
      </div>}      
                 
    </Layout>
  );
};

export default CustomerDashboard;
