import React from "react";
import { useState, useContext } from "react";
import { axios } from "../../utils/axios";
import { IPContext } from "../../contexts/IPContext";
import arrow from "../../assets/images/icon-arrow.svg";
import "./Search.scss";
const API_KEY = process.env.REACT_APP_IP_ADDRESS_TRACKER_API_KEY;

export const Search = () => {
	const [ipAddress, setIPAddress] = useState("");
	const [data, setData] = useContext(IPContext);

	const getIP = async (e) => {
		e.preventDefault();
		const response = await axios
			.get(`v1?apiKey=${API_KEY}&ipAddress=${ipAddress}`)
			.catch((error) => console.error(error));

		setData(response.data);
	};

	return (
		<div className="search">
			<form className="search__form" onSubmit={getIP}>
				<input
					className="search__input"
					type="text"
					placeholder="Search for any IP address"
					value={ipAddress}
					onChange={(e) => setIPAddress(e.target.value)}
				/>
				<button className="search__button" type="submit">
					<img src={arrow} alt="arrow" />
				</button>
			</form>
		</div>
	);
};
