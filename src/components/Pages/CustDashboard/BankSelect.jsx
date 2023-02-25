import React from 'react';
import Pin from './Pin';
import { useEffect, useState } from 'react';
import axios from "axios";
import { FcSearch } from 'react-icons/fc'

const BankSelect = (props) => {
    const [pin, setPin] = useState('');
	const [error, setError] = useState();
	const [withdraws, setWithdraws] = useState();
    const [show, setShow] = useState(false);
    const [hide, setHide] = useState(false);
    const [bankSelected, setSelectedBank] = useState(false);
    const [bank, setBank] = useState([]);
    const [bankList, setBankList] = useState([]);
    const {setIsWithdrawing,amount,selectedBank,accountNumber,userName} = props;
    

    useEffect(() => {
            const details = async () => {
                try {
                    const API_URL = `https://scamtrust.herokuapp.com/api/v1/misc/get/banks`;
                    const config = {
                        headers: {
                            "Content-Type": "application/json",
                        },
                    };
                    const data = await axios.get(API_URL, config);
    
                    setBank(data?.data?.data);
                    setBankList(data?.data?.data)
                } catch (error) {
                    // Alert.alert("failed login details");
                    console.log(error, "errors");
                }
            };
            details();
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

        const searchHandler = (event) => {
            setBankList(bank.filter(bank => bank.name.trim().toLowerCase().includes(event.target.value.trim().toLowerCase())))
            
        }

		const bankSelectHandler = () => {
			if (bankSelected.length < 1 ) {
				setError('Please Select A Bank From the Dropdown Menu!')
				return;
			}
			setShow(false);
			//  setIsWithdrawing(false);

			setHide(true);
		}
    return (
		<React.Fragment>

    {!hide && <div>
			<div className="w-screen h-screen fixed z-40 top-0 left-0 bg-[rgba(23,23,23,0.54)]" />
			<div
				// onSubmit={handleSubmit(onContinueClicked)}
				className="fixed text-colorPrimary rounded-xl top-1/2 p-6 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 lg:max-w-[700px] xl:[1000px] md:p-10 w-[90%] mx-auto bg-white"
			>
				<div className="flex border-b pb-3 border-b-[#EAEAEA] justify-between items-center mb-11 md:mb-16">
					<p className="font-semibold text-xl md:text-[30px]">Select Bank</p>
					<p
						onClick={() => {
							setShow(false);
							setIsWithdrawing(false);
						}}
						className="font-extrabold cursor-pointer text-lg md:text-[25px]"
					>
						Close x
					</p>
				</div>

				<div className="mb-11 md:mb-16">
					<label className="text-xl text-center mt-[-20px] mb-4 font-semibold md:text-3xl block" htmlFor="amount">
						Select A Bank From the Dropdown
					</label>
					<div className="mb-32 md:mb-40 relative">
                    <div class="flex justify-center">
  <div class="mb-3 xl:w-96">
    <div class="mb-4 flex items-center justify-center ml-5">
      <input
        onChange={searchHandler}
        type="search"
        class="relative m-0 block w-80 min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary-600 focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
        placeholder="search"
        aria-label="Search"
        aria-describedby="button-addon2">
		</input>
      <span
        class="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
        id="basic-addon2"> 

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="h-5 w-5">
          <path
            fill-rule="evenodd"
            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
            clip-rule="evenodd" />
        </svg>

      </span>
    </div>
  </div>
</div>

<div class="flex-column justify-center items-center overflow-y-scroll scroll w-156 h-[300px] ">
  {/* <div class="w-96 "> */}
   { bankList.length === 0 ? <p>BANK NOT LISTED!</p> : 	bankList?.map(
	  (allbannk, index) => {
		  // console.log(selectedBank, "all bank");
		  // console.log(allbannk[index].name);
		  return (
			  <button
			  onClick={(e) => setSelectedBank(e.target.id)}
			//   aria-current="true"
			  className={bankSelected ? 
				"block w-full text-left cursor-pointer rounded-lg p-4 my-2 text-primary-600  focus:outline-none border-2 rounded-md w-full px-3 py-1.5 text-gray-700" 
				   : 
				 "block w-full text-left cursor-pointer rounded-lg p-4 my-2 text-primary-600  focus:outline-none border-2  rounded-md w-full px-3 py-1.5 text-gray-700"
				}
			  value={allbannk?.name} id={allbannk.name} >
	{allbannk?.name}
    </button>)
	    }
	    )
	}
    
    
  {/* </div> */}
</div>
{error && <p className='text-red-600 '>{error}</p>}
						{/* <label className="text-xl mb-2 md:text-3xl block" htmlFor="amount">
							Destinations account
							</label>
							<select
							onChange={(e) =>{ setSelectedBank(e.target.value); }}
							// className={`block ${
								// 	errors.account ? "border-red-600" : ""
								// } focus:outline-none border border-colorPrimary rounded-md w-full px-3 py-1.5 text-gray-700`}
								>
								{bank?.map(
									(allbannk, index) => {
										// console.log(selectedBank, "all bank");
										// console.log(allbannk[index].name);
										return (
											<option value={allbannk?.name} id={allbannk.name} >
											{allbannk?.name}
											</option>)
										}
										)
									}
								</select> */}

						{/* {errors.account && (
							<p className="text-red-600 mt-2">{errors.account.message}</p>
						)} */}
					</div>

				</div>

				<div className="flex justify-between items-center">
					{/* <img src={SecuredBy} alt="SecuredByScamTrust" /> */}
					<button
						type="submit"
						onClick={bankSelectHandler}
						className="bg-colorPrimary text-white px-7 py-3 rounded-md"
						>
						Continue
					</button>
				</div>
			</div>
		</div>}
			{hide && (
				<Pin
				selectedBank={bankSelected}
				setShow={setShow}
				setIsWithdrawing={setIsWithdrawing}
				amount={amount}
				accountNumber={accountNumber}
				userName = {userName}
				/>
				)}
				</React.Fragment>
    );
};

export default BankSelect;