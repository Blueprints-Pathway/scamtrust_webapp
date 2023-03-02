/** @format */

import React, { useState } from "react";
import "./VendorTransaction.css";
const Star = ({ selected = false, onClick = (f) => f }) => (
	<div className={selected ? "star selected" : "star"} onClick={onClick} />
);

const Qualities = ({ totalStars }) => {
	const [qualitySelected, selectStar] = useState(0);
	console.log(qualitySelected, "hello quality");
	return (
		<div className="star-rating">
			{[...Array(totalStars)].map((n, i) => (
				<Star
					key={i}
					selected={i < qualitySelected}
					onClick={() => selectStar(i + 1)}
				/>
			))}
			<p>
				{qualitySelected} of {totalStars} stars
			</p>
		</div>
	);
};

export default Qualities;
