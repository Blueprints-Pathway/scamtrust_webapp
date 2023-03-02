/** @format */

import React, { } from "react";
import "./VendorTransaction.css"
const Star = ({ selected = false, onClick = (f) => f }) => (
	<div className={selected ? "star selected" : "star"} onClick={onClick} />
);




const Prices = ({ totalStars,priceSelected,priceStar }) => {
	
    console.log(priceSelected,"hello price")
	return (
		<div className="star-rating">
			{[...Array(totalStars)].map((n, i) => (
				<Star
					key={i}
					selected={i < priceSelected}
					onClick={()=>priceStar(i + 1)}
				/>
			))}
			<p>
				{priceSelected} of {totalStars} stars
			</p>
		</div>
	);
};

export default Prices;
