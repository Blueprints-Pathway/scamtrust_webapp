import React, { useEffect } from 'react'
import AppLayout from '../../../components/layout/AppLayout'
import classes from './Awaiting.module.css'
import { Button, Card } from 'antd';
import { Steps } from 'antd';
import { HiArrowNarrowLeft } from 'react-icons/hi'
import FooterLogo from '../../../components/FooterLogo/FooterLogo';
import {  useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { useNavigate } from "react-router-dom";
import { vendorAcceptTransaction } from '../../../actions/vendorTransactionActions';
import { customerAcceptTransaction } from '../../../actions/customerTransactionActions';
import { vendorTransactionActions } from '../../../reducers/vendorTransactionReducer';
import { customerTransactionActions } from '../../../reducers/customerTransactionsReducer';
import swal from 'sweetalert';

const items = [
	{
		title: <p className={classes["steps"]}>Awaiting</p>,
	},
	{
		title: <p className={classes["steps"]}>On-going</p>,
	},
	{
		title: <p className={classes["steps"]}>Completed</p>,
	},
];

const Awaiting = () => {
    let detail = localStorage.getItem('USER_DETAILS')
    let usertype =JSON.parse(detail).data.usertype;
    const param =  useParams();
    
    const transactions = useSelector(state => state.customerTransaction);
    const vendorTransactions = useSelector(state => state.vendorTransaction)
    let transaction = transactions.ongoingTransactions.find(transaction => transaction.id == param.id);
    const dispatch = useDispatch();

	useEffect(() => {
		if (transactions.isAcceptTransactionSuccessful) {
			dispatch(customerTransactionActions.resetAcceptTransactionStatus());
			navigate(`/ratting`);
		}
		if (vendorTransactions.isAcceptTransactionSuccessful) {
			dispatch(vendorTransactionActions.resetAcceptTransactionStatus());
			navigate(`/ongoing-transaction/${param.id}`);
		}
	}, [
		transactions.isAcceptTransactionSuccessful,
		vendorTransactions.isAcceptTransactionSuccessful,
		dispatch,
	]);
    if(usertype === 'VENDOR'){
        transaction = vendorTransactions.allTransactions.find(transaction => transaction.id == param.id);

    }
		const completeTransaction = () => {
		if (usertype == "VENDOR") {
			dispatch(vendorAcceptTransaction(transaction.transaction_id));
			return;
		}

		dispatch(customerAcceptTransaction(transaction.transaction_id));
	};

	if (transactions.error) {
		//console.log();
		swal({
			icon: "error",
			text: transactions.error,
		});
		dispatch(customerTransactionActions.resetAcceptTransactionStatus());
	}
	if (vendorTransactions.error) {
		//console.log();
		swal({
			icon: "error",
			text: vendorTransactions.error,
		});
		dispatch(vendorTransactionActions.resetAcceptTransactionStatus());
	}

   
    //console.log(transaction)
const navigate=useNavigate()
	return (
		<AppLayout>
			<div className={classes["wrapper"]}>
				<Card className={classes["card-wrapper"]}>
					<div onClick={() => navigate(-1)} className={classes["button-con"]}>
						<HiArrowNarrowLeft className={classes["arrow"]} />
						<button className={classes["card-btn"]}>Back</button>
					</div>
					<div className={classes["top"]}>
						{/* TOP LEFT */}
						<div className={classes["top-left"]}>
							<div className={classes["left-1"]}>
								<p className={classes["top-left-id"]}>ID - {transaction.transaction_id}</p>
								<p className={classes["top-left-vendor"]}>{transaction?.vendor?.name || transaction?.customer?.username}</p>
							</div>
							{/* TOP MIDDLE */}
							<div className={classes["top-middle"]}>
								<p className={classes["top-middle-status"]}>
									<b>Status:</b>
									<span className={classes["top-middle-span"]}>
									{transaction.status}
									</span>
								</p>
								<p className={classes["top-middle-date"]}>{transaction.due_date}</p>
							</div>
						</div>
						{/* TOP RIGHT */}
						<div className={classes["top-right"]}>
							<Steps
								className={classes["steps-con"]}
								disabled
								current={0}
								labelPlacement="vertical"
								items={items}
							/>
							<br />
						</div>
					</div>

					{/* BOTTOM */}
					<div className={classes["bottom"]}>
						<div className={classes["bottom-con"]}>
							<div className={classes["title-div"]}>
								<p className={classes["title"]}>Transaction details</p>
							</div>
							<div className={classes["content-con"]}>
								<div className={classes["content"]}>
									<p className={classes["content-left"]}>Product name</p>
									<i className={classes["content-right"]}>{transaction.product_name}</i>
								</div>
								<div className={classes["content"]}>
									<p className={classes["content-left"]}>Product amount</p>
									<i className={classes["content-right"]}>₦{transaction.amount}</i>
								</div>
								<div className={classes["content"]}>
									<p className={classes["content-left"]}>Quantity</p>
									<i className={classes["content-right"]}>{transaction.quantity}</i>
								</div>
								<div className={classes["content"]}>
									<p className={classes["content-left"]}>Due date</p>
									<i className={classes["content-right"]}>{transaction.due_date}</i>
								</div>
								<div className={classes["content"]}>
									<p className={classes["content-left"]}>Description</p>
									<i className={classes["content-right"]}>
									{transaction.description}
									</i>
								</div>
							</div>
						</div>
					</div>

						{/* BUTTONS */}
				     { usertype === 'VENDOR' &&	
				    <div className={classes["btn-con"]}>
						<Button
							onClick={() =>
								navigate(`/cancel-reason/${transaction.transaction_id}`)
							}
							className={classes["bottom-btn1"]}
						>
							Decline
						</Button>
						<Button
							loading={
								usertype === "VENDOR"
									? vendorTransactions.loading
									: transactions.loading
							}
							onClick={completeTransaction}
							className={classes["bottom-btn2"]}
						>
							{" "}
							Accept
						</Button>
					</div>}
					<div className={classes["footer"]}>
						<FooterLogo />
					</div>
				</Card>
			</div>
		</AppLayout>
	);
};

export default Awaiting;


