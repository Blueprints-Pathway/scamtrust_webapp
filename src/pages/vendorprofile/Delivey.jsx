/** @format */

import React, { useState } from "react";
import "./VendorTransaction.css";
const Star = ({ selected = false, onClick = (f) => f }) => (
	<div className={selected ? "star selected" : "star"} onClick={onClick} />
);

const Delivers = ({ totalStars,deliverySelected, deliveryStar }) => {
	
	return (
		<div className="star-rating">
			{[...Array(totalStars)].map((n, i) => (
				<Star
					key={i}
					selected={i < deliverySelected}
					onClick={() => deliveryStar(i + 1)}
				/>
			))}
			<p>
				{deliverySelected} of {totalStars} stars
			</p>
		</div>
	);
};

export default Delivers;
