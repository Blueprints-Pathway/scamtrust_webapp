import React from 'react';
import Pin from './Pin';
import { useEffect, useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import axios from "axios";
import { FcSearch } from 'react-icons/fc'
import swal from 'sweetalert';
const BankSelect = (props) => {
    const [pin, setPin] = useState('');
	const [error, setError] = useState();
	const [withdraws, setWithdraws] = useState();
   
    const [hide, setHide] = useState(false);
    const [bankSelected, setSelectedBank] = useState('');
    const [bankSelectedId, setSelectedBankId] = useState('');
	const [isLoading, setIsLoading] = useState(false);
    const [bank, setBank] = useState([]);
    const [bankList, setBankList] = useState([]);
    const {setIsWithdrawing,amount,selectedBank,accountNumber,setShow, userName} = props;
    

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
		const user_details = JSON.parse(localStorage?.getItem("scam-trust-user"));
		const addAccount = async (e) => {
			if (bankSelected.length < 1 ) {
				setError('Please Select A Bank From the Dropdown Menu!')
				return;
			}
			
			setIsLoading(true)
			e.preventDefault();
			try {
				const API_URL = `https://scamtrust.herokuapp.com/api/v1/settings/change/bank/account`;
				const config = {
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${user_details?.data?.access_token}`,
					},
				};
				const payload = {
					account_number: accountNumber,
					bank: bankSelectedId,
				};
				const data = await axios.post(API_URL, payload, config);
				console.log(data.data, 'data') // status message
				setIsLoading(false)
				setShow(false);
				swal({
					icon: "success",
					text: data.data.message
		
				});
				// setEmail(data?.data?.data);
			} catch (error) {//data.status
				
				console.log(error, "error");
				setIsLoading(false)
				setShow(false);
				swal({
					icon: "error",
					text: error.response.data.message.responseMessage || 'An Unexpected Error Occured'
		 
				})
			}
		};

		const bankSelectHandler = () => {
			if (bankSelected.length < 1 ) {
				setError('Please Select A Bank From the Dropdown Menu!')
				return;
			}
			setShow(false);
			//  setIsWithdrawing(false);

			setHide(true);
		}
		let SearchList = <p class="flex-column justify-center items-center" >LOADING....</p>;
		if(bank.length === 0) {
			SearchList = <p class="flex-column justify-center items-center" >LOADING....</p>;
		}else if(bankList.length === 0) {
			SearchList = <p class="flex-column justify-center items-center" >BANK IS NOT AVAILABLE!</p>;
		}else {
			SearchList = bankList?.map(
				(allbannk, index) => {
					// console.log(selectedBank, "all bank");
					// console.log(allbannk[index].name);
					return (
						<div
						onClick={(e) => {setSelectedBank(e.currentTarget.innerText); setSelectedBankId(e.target.id); console.log(e.target.id)}}
						aria-current="true"
					  //   focus:border-colorPrimary block w-full text-left cursor-pointer p-4 my-2 text-primary-600  focus:outline-none border-2 rounded-md px-3 py-1.5 text-gray-700" 
						class="block w-full my-2 cursor-pointer border-2  bg-primary-100 p-4 text-primary-600  focus:outline-none border border-colorPrimary rounded-md w-full px-3 py-1.5 text-gray-700 active:bg-blue-600"
						value={allbannk?.name} id={allbannk.code} >
			  {allbannk?.name}
			  </div>)
				  }
				  )
			  
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
							// setIsWithdrawing(false);
						}}
						className="font-extrabold cursor-pointer text-lg md:text-[25px]"
					>
						Close x
					</p>
				</div>

				<div className="mb-11 md:mb-16">
					<label className="text-xl text-center mt-[-10px] mb-4 font-semibold md:text-3xl block">
						Select A Bank From the Dropdown
					</label>
					<div className="mb-32 md:mb-40 relative">
                    <div class="flex justify-center">
  <div class="mb-3 xl:w-96">
    <div class="mb-4 flex items-center justify-center">
      <input
        onChange={searchHandler}
        type="search"
        className="relative m-0 block w-80 min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding
		 px-6 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary-600
		  focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200
		   dark:placeholder:text-neutral-200  placeholder:pl-5"
        placeholder="Search Bank"
        aria-label="Search"

        aria-describedby="button-addon2">
		</input>
      <span
        class="absolute ml-64 input-group-text flex items-center whitespace-nowrap rounded py-1.5 text-right text-base font-normal text-neutral-700 dark:text-neutral-200"
        id="basic-addon2"> 
		<FcSearch className='text-xl' />
      </span>
    </div>
  </div>
</div>

<div class="flex-column justify-center items-center overflow-y-scroll scroll w-156 h-[300px] ">
  {/* <div class="w-96 "> */}
  { isLoading ? <ThreeDots 
height="80" 
width="80" 
radius="9"
color="#0357bf" 
ariaLabel="three-dots-loading"
wrapperStyle={{}}
wrapperClassName=""
visible={true}
 />: SearchList}
    
    
  {/* </div> */}
</div>
{error && <p className='text-red-600 '>{error}</p>}
						
					</div>

				</div>

				<div className="flex justify-between items-start mt-[-70px]">
					{/* <img src={SecuredBy} alt="SecuredByScamTrust" /> */}
					<button
						type="submit"
						onClick={addAccount}
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
				bankSelectedId = {bankSelectedId}
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