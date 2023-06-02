/** @format */

import React, { useState } from "react";
import "./VendorTransaction.css";
const Star = ({ selected = false, onClick = (f) => f }) => (
	<div className={selected ? "star selected" : "star"} onClick={onClick} />
);

const Qualities = ({totalStars,qualitySelected,qualityStar}) => {
	
	// //console.log(qualitySelected, "hello quality");
	return (
		<div className="star-rating">
			{[...Array(totalStars)].map((n, i) => (
				<Star
					key={i}
					selected={i < qualitySelected}
					onClick={() => qualityStar(i + 1)}
				/>
			))}
			<p>
				{qualitySelected} of {totalStars} stars
			</p>
		</div>
	);
};

export default Qualities;
