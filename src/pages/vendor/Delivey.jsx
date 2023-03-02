/** @format */

import React, { useState } from "react";
import "./VendorTransaction.css";
const Star = ({ selected = false, onClick = (f) => f }) => (
	<div className={selected ? "star selected" : "star"} onClick={onClick} />
);

const Delivers = ({ totalStars }) => {
	const [deliverySelected, selectStar] = useState(0);
	console.log(deliverySelected, "hello");
	return (
		<div className="star-rating">
			{[...Array(totalStars)].map((n, i) => (
				<Star
					key={i}
					selected={i < deliverySelected}
					onClick={() => selectStar(i + 1)}
				/>
			))}
			<p>
				{deliverySelected} of {totalStars} stars
			</p>
		</div>
	);
};

export default Delivers;
