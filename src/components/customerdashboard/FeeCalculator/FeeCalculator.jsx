/** @format */

import React,{useState} from "react";
import "./FeeCalculator.css";

const FeeCalculator = () => {
    const [transactionAmount, setTransactionAmount] = useState("");
	const TRANSACTION_FEE = transactionAmount * 0.02;
    const NEW_FEE=Math.round(TRANSACTION_FEE)
	const TOTAL_AMOUNT = +TRANSACTION_FEE + +transactionAmount;
const NEW_AMOUNT=Math.round(TOTAL_AMOUNT)
	return (
		<div className="fee-calc-con">
			<div className="fee-Calc-wrapper">
				<div className="fee-calc-top">
					<p className="fee-calc-title">Fee Calculator</p>
				</div>
				<hr className="fee-calc-line" />
				<div className="fee-calc-bottom">
					<div className="fee-calc-first">
						<p className="fee-calc-first-label">Enter Transaction amount:</p>
						<input
							className="fee-calc-first-input"
							type="text"
							placeholder="Enter amount"
							value={transactionAmount}
							onChange={(e) => setTransactionAmount(e.target.value)}
						/>
					</div>
					<div className="fee-calc-second">
						<p className="fee-calc-first-label">Transaction fee:</p>
						<input
							className="fee-calc-first-input2"
							type="text"
							value={NEW_FEE === 0 ? "" : NEW_FEE}
							disabled
							placeholder="₦"
						/>
					</div>
					<div className="fee-calc-first">
						<p className="fee-calc-first-label">Total amount:</p>
						{/* import AwaitingApproval from
						"../../assets/images/svg/awaiting-approval.svg"; */}
						<input
							className="fee-calc-first-input2"
							type="text"
							placeholder="₦"
							disabled
							value={NEW_AMOUNT === 0 ? "" : NEW_AMOUNT}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeeCalculator;
