/** @format */

import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { FidgetSpinner } from "react-loader-spinner";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import swal from "sweetalert";
import classes from "../UsersListPage.module.css";
import { logoutUser } from "../../../actions/authActions";

const AdminDashboard = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const user_details = JSON.parse(localStorage?.getItem("USER_DETAILS"));
	const [withdrawals, setWithdrawals] = useState([]);
	const [isLaoding, setIsLoading] = useState(true);
	const [currentPageNumber, setCurrentPageNumber] = useState(1);
	const [lastPageNumber, setLastPageNumber] = useState();
	const auth = useSelector((state) => state.auth);

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
				<tr>
					<td>{data.id}</td>
					<td>{data.wallet_id}</td>
					<td>{data.user_id}</td>
					<td>{data.transaction_id}</td>
					<td>{data.amount}</td>
					<td>{data.type}</td>
					<td>{data.status}</td>
					<td>{data.purpose}</td>
					<td>{data.tracking_reference}</td>
					<td>{data.account_number}</td>
					<td>{data.bank_id}</td>
					<td>{data.description}</td>
					<td>{data.date}</td>

					<td>{data.bank.name}</td>
					<td>{data.bank.code}</td>
					<td>{data.bank.created_at}</td>
					<td>{data.bank.updated_at}</td>
					<td>
						<button onClick={() => approveWithdrawal(data.id)}>APPROVE</button>
					</td>
					{/* <td><button onClick={() => console.log('delete')}>
        DELETE</button></td> */}
				</tr>
			);
		});
	}
	return (
		<section className={classes.userListSection}>
			{isLaoding ? (
				<FidgetSpinner />
			) : (
				<table className={classes.table}>
					<thead>
						<tr>
							<th>ID</th>
							<th>WALLET_ID</th>
							<th>USER_ID</th>
							<th>TRANSACTION_ID</th>
							<th>AMOUNT</th>
							<th>TYPE</th>
							<th>STATUS</th>
							<th>PURPOSE</th>
							<th>TRACKING_REFERENCE</th>
							<th>ACCOUNT NO</th>
							<th>BANK_ID</th>
							<th>DESCRIPTION</th>
							<th>DATE</th>
							<th>BANK NAME</th>
							<th>BANK CODE</th>
							<th>CREATED AT</th>
							<th>UPDATED AT</th>
							<th>
								<button>APPROVE WITHDRAWAL</button>
							</th>
							{/* <th><button>DELETE ACCOUNT</button></th> */}
						</tr>
					</thead>
					<tbody>{data}</tbody>
				</table>
			)}

			<button
				className={classes.button}
				onClick={() => {
					dispatch(logoutUser());
				}}
			>
				LOGOUT
			</button>
			<button
				className={classes.button}
				onClick={() => {
					navigate("/users-list");
				}}
			>
				USERS LIST
			</button>
			<button className={classes.button} onClick={previousBtnHandler}>
				PREVIOUS
			</button>
			<button className={classes.button} onClick={nextBtnHandler}>
				NEXT
			</button>
		</section>
	);
};

export default AdminDashboard;
