import React, { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import AppLayout from '../../components/layout/AppLayout';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import swal from 'sweetalert';
import { da } from 'date-fns/locale';

const AdminWithdrawals = () => {

    const navigate = useNavigate();
	const dispatch = useDispatch();

	const user_details = JSON.parse(localStorage?.getItem("USER_DETAILS"));
	const [withdrawals, setWithdrawals] = useState([]);
	const [isLaoding, setIsLoading] = useState(true);
	const [currentPageNumber, setCurrentPageNumber] = useState(1);
	const [lastPageNumber, setLastPageNumber] = useState();
	const [totalMoneyWithrawn, setTotalMoneyWithrawn] = useState('Chill A Bit!');
	const auth = useSelector((state) => state.auth);

	let totalAmountWithdrawn = 0;

	const previousBtnHandler = () => {
		if (+currentPageNumber <= 1) {
			return;
		}
		setCurrentPageNumber((currentNumber) => currentNumber - 1);
		console.log("previous", currentPageNumber, lastPageNumber);
	};
	const nextBtnHandler = () => {
		if (+currentPageNumber >= lastPageNumber) {
			return;
		}
		setCurrentPageNumber((currentNumber) => currentNumber + 1);
		console.log("next", currentPageNumber, lastPageNumber);
	};


	useEffect(() => {
		if (!auth.isAuthenticated) {
			navigate("/sign-in");
			return;
		}
		(async () => {
			try {
				const API_URL = `${process.env.REACT_APP_BASE_URL}/admin/withdrawals?page=${currentPageNumber}`;
				const config = {
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${user_details?.data?.access_token}`,
					},
				};

				const data = await axios.get(API_URL, config);

				

				console.log(data?.data?.data.data, "user data customer dashboard");
				setWithdrawals(data?.data.data.data);
				setLastPageNumber(data?.data.data.last_page);
				// setIsLoading(false);
				console.log(withdrawals, "values");
				// return response;
			} catch (error) {
				console.log(error, "error");
				// setIsLoading(false);
			}
		})();

		setIsLoading(false);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentPageNumber, auth.isAuthenticated]);



	const approveWithdrawal = async (walletId) => {
		setIsLoading(true);

		try {
			const API_URL = `${process.env.REACT_APP_BASE_URL}/admin/approve/withdrawal`;
			const config = {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${user_details?.data?.access_token}`,
				},
			};
			const payload = {
				wallet_transaction_id: walletId,
			};
			const data = await axios.post(API_URL, payload, config);
			console.log(data);
			swal({
				icon: "success",
				text: "Transaction Approved",
			});
		} catch (error) {
			swal({
				icon: "error",
				text: error.response.data.message,
			});
			console.log(error);
		}
		setIsLoading(false);
	};

    let data = <p>LOADING....</p>;
	if (withdrawals.length == 0) {
		data = <p>NO CUSTOMER HAS MADE WITHDRAWALS</p>;
	} else {
		data = withdrawals?.map((data) => {
			return (
				<tr  className='bg-[#EBEBEB] mt-8 h-20 lg:h-16'>
					<th className='pr-2 py-2 text-[8px] text-center font-normal md:text-[9px] xl:text-[12px]' scope='row'>{data.id}</th>
					
					<td className='px-2 py-2 text-[8px] text-center font-normal md:text-[9px] xl:text-[12px]' >{data.amount}</td>
					
					<td className='px-2 py-2 text-[8px] text-center font-normal md:text-[9px] xl:text-[12px]'>{data.status}</td>
				
					<td className='px-2 py-2 text-[8px] text-center font-normal md:text-[9px] xl:text-[12px]'>{data.account_number}</td>
					
					<td className='px-2 py-2 text-[8px] text-center font-normal md:text-[9px] xl:text-[12px]'>{data.date}</td>

					<td className='px-2 py-2 text-[8px] text-center font-normal md:text-[9px] xl:text-[12px]'>{data.bank.name}</td>
					
					<td className='px-2 py-2 text-[8px] text-center font-normal md:text-[9px] xl:text-[12px]'>
						<button onClick={() => approveWithdrawal(data.id)}>APPROVE</button>
					</td>
					{/* <td><button onClick={() => console.log('delete')}>
        DELETE</button></td> */}
				</tr>
			);
		});
	}





    return (
        <AppLayout>
        <div className='flex flex-col justify-center items-center mx-2 overflow-x-hidden h-[100%]'>
  
          <div className='relative flex flex-col justify-center mt-5 md:mt-5 lg:mt-1 xl:mt-3'>
  
                     {/* DROPDOWN */}
            <div className='absolute top-[4.8rem] right-8 md:top-12 md:right-14 lg:right-7 lg:top-[3.3rem] xl:top-16 xl:right-20'>
              <select className='border-[1px] border-[#888888] bg-[#dfdede] rounded text-[8px] h-6 w-24 pl-1 lg:h-5 xl:h-[1.7rem] xl:w-[7.5rem] xl:text-[10px]' name="date" id="date">
                <option className='text-[9px]' value="filter">Filter by date</option>
                <option value="1 week">1 week</option>
                <option value="1 month">1 month</option>
                <option value="3 months">3 months</option>
                <option value="1 year">1 year</option>
              </select>
            </div>
                {/* ------ */}
  
           
  
  
            <div className='flex flex-col items-center justify-center md:hidden'>
              <h1 className='text-center text-[#232164] font-semibold text-lg'>Withdrawals</h1>
            </div>
{/*   
            <div className='flex flex-row items-start justify-start mt-2 w-[100vw] px-5 md:w-[95vw] lg:w-[75vw] xl:w-[82vw]'>
              <div className='flex flex-row items-start justify-start'>
                  <div className='hidden md:flex md:flex-col md:items-center md:justify-start md:mr-10 xl:mr-14'>
                    <h1 className='text-center text-[#232164] font-semibold text-lg mt-1 xl:text-[21px]'>Transactions</h1>
                  </div>
                  <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
              </div>
            </div>
   */}
  
          </div>
  
  
               {/* TRANSACTIONS CARD */}
          <div className='flex flex-col items-center justify-start pt-5 px-4 h-[100%] w-[95vw] bg-[#f7f5f5] shadow-md xl:w-[85vw] xl:mt-8'>
            <div className='flex items-center justify-between w-[100%] mb-2 md:w-[95%] lg:w-[68vw] xl:w-[75vw]'>
              <p className='text-[#707070] text-xs xl:text-sm'>
                Withdrawals
              </p>
              <div className='flex items-center justify-center'>
                <p className='text-[10px] text-[#232164] font-medium mr-4 md:mr-10 xl:text-[11px]'>
                  View All
                </p>
                <div className='relative'>
                 <input className='relative bg-[#EBEBEB] rounded-lg h-6 w-[30vw] md:w-[20vw] lg:w-[15vw] xl:w-[14vw] xl:h-7' type="text" />
                 <AiOutlineSearch className='absolute bottom-1 ml-2 text-[#232164] xl:w-[18px] xl:h-[18px] xl:ml-5' />
                </div>
              </div>
            </div>
  
                       {/* TABLE */}
              <div className='flex items-start justify-center overflow-x-scroll overflow-y-scroll w-[100vw] xl:h-[22rem]'>
  
              <table className='mb-5 w-[92vw] overflow-x-scroll overflow-y-scroll md:w-[88vw] lg:w-[70vw] lg:mb-7 xl:w-[80vw]'>
                    {/* TABLE HEAD */}
                <thead>
                  <tr>
                    <th className='pr-2 py-4 text-[8px] font-normal text-[#A6A6A6] md:text-[9px] lg:text-[10px] xl:text-[12px]' scope='col'>ID</th>
                    <th className='px-2 py-4 text-[8px] font-normal text-[#A6A6A6] md:text-[9px] lg:text-[10px] xl:text-[12px]' scope='col'>AMOUNT</th>
                    <th className='px-2 py-4 text-[8px] font-normal text-[#A6A6A6] md:text-[9px] lg:text-[10px] xl:text-[12px]' scope='col'>STATUS</th>
                    <th className='px-2 py-4 text-[8px] font-normal text-[#A6A6A6] md:text-[9px] lg:text-[10px] xl:text-[12px]' scope='col'>ACCOUNT NUMBER</th>
                    <th className='px-2 py-4 text-[8px] font-normal text-[#A6A6A6] md:text-[9px] lg:text-[10px] xl:text-[12px]' scope='col'>DATE</th>
                    <th className='pl-2 py-4 text-[8px] font-normal text-[#A6A6A6] md:text-[9px] lg:text-[10px] xl:text-[12px]' scope='col'>BANK NAME</th>
                    <th className='pl-2 py-4 text-[8px] font-normal text-[#A6A6A6] md:text-[9px] lg:text-[10px] xl:text-[12px]' scope='col'>APPROVE</th>
                  </tr>
                </thead>
                <tbody>
                    {data}
                </tbody>
  
                
                
              </table>
              </div>
          </div>
  
  
        </div>
      </AppLayout>
    );
};

export default AdminWithdrawals;