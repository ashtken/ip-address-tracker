import React, { useContext } from "react";
import { IPContext } from "../../contexts/IPContext";
import "./SearchDetails.scss";

export const SearchDetails = () => {
	const [data, setData] = useContext(IPContext);
	return (
		<div className="searchdetails">
			<div className="searchdetails__details">
				<h3>IP ADDRESS</h3>
				<h1>{data.ip}</h1>
			</div>
			<div className="searchdetails__details">
				<h3>LOCATION</h3>
				<h1>
					{data.location.city}, {data.location.country}{" "}
					{data.location.postalCode}
				</h1>
			</div>
			<div className="searchdetails__details">
				<h3>TIMEZONE</h3>
				<h1>UTC{data.location.timezone}</h1>
			</div>
			<div className="searchdetails__details last">
				<h3>ISP</h3>
				<h1>{data.isp}</h1>
			</div>
		</div>
	);
};
