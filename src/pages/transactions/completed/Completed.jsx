import React from 'react'
import classes from './Completed.module.css'
import { Button, Card } from 'antd';
import { Steps } from 'antd';
import { HiArrowNarrowLeft } from 'react-icons/hi'
import FooterLogo from '../../../components/FooterLogo/FooterLogo';
import { useNavigate, useParams } from 'react-router-dom';
import AppLayout from '../../../components/layout/AppLayout';
import { useDispatch, useSelector } from 'react-redux';


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

const Completed = () => {
    let detail = localStorage.getItem('USER_DETAILS')
    let usertype =JSON.parse(detail).data.usertype;
    const transactions = useSelector(state => state.customerTransaction);
    const vendorTransactions = useSelector(state => state.vendorTransaction)
    const param =  useParams();
    const dispatch = useDispatch();
   
    let transaction = transactions.allTransactions.find(transaction => transaction.id == param.id);
    if(usertype === 'VENDOR'){
		console.log(vendorTransactions.allTransactions);
        transaction = vendorTransactions.completedTransactions.find(transaction => transaction.id == param.id);

    }
    console.log(transaction)
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
								<p className={classes["top-left-vendor"]}>{transaction?.vendor?.name || transaction?.customer?.username} </p>
							</div>
							{/* TOP MIDDLE */}
							<div className={classes["top-middle"]}>
								<p className={classes["top-middle-status"]}>
									<b>Status:</b>
									<span className={classes["top-middle-span"]}>{transaction.status}</span>
								</p>
								<p className={classes["top-middle-date"]}>{transaction.due_date}</p>
							</div>
						</div>
						{/* TOP RIGHT */}
						<div className={classes["top-right"]}>
							<Steps
								className={classes["steps-con"]}
								disabled
								current={3}
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
									<p className={classes["content-left"]}>{transaction.product_name}</p>
									<i className={classes["content-right"]}>iPhone</i>
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

					{ usertype === "VENDOR" &&	<Button
						
							// onClick={completeTransaction}
							className={classes["bottom-btn2"]}
						>
							{" "}
							View Rating
						</Button>}
					<div className={classes["footer"]}>
						<FooterLogo />
					</div>
				</Card>
			</div>
		</AppLayout>
	);
};

export default Completed;
  