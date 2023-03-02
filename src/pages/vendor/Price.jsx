/** @format */

import React, { useState } from "react";
import "./VendorTransaction.css"
const Star = ({ selected = false, onClick = (f) => f }) => (
	<div className={selected ? "star selected" : "star"} onClick={onClick} />
);

const Prices = ({ totalStars }) => {
	const [starsSelected, selectStar] = useState(0);
    console.log(starsSelected,"hello")
	return (
		<div className="star-rating">
			{[...Array(totalStars)].map((n, i) => (
				<Star
					key={i}
					selected={i < starsSelected}
					onClick={() => selectStar(i + 1)}
				/>
			))}
			<p>
				{starsSelected} of {totalStars} stars
			</p>
		</div>
	);
};

export default Prices;
