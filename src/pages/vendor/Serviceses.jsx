/** @format */

import React, { useState } from "react";
import "./VendorTransaction.css";
const Star = ({ selected = false, onClick = (f) => f }) => (
	<div className={selected ? "star selected" : "star"} onClick={onClick} />
);

const Serviceses = ({ totalStars }) => {
	const [servicesSelected, selectStar] = useState(0);
	console.log(servicesSelected, "hello");
	return (
		<div className="star-rating">
			{[...Array(totalStars)].map((n, i) => (
				<Star
					key={i}
					selected={i < servicesSelected}
					onClick={() => selectStar(i + 1)}
				/>
			))}
			<p>
				{servicesSelected} of {totalStars} stars
			</p>
		</div>
	);
};

export default Serviceses;
