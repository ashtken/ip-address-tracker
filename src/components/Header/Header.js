import React from "react";
import { Search } from "../Search/Search";
import { SearchDetails } from "../SearchDetails/SearchDetails";
import "./Header.scss";

export const Header = () => {
	return (
		<div className="header">
			<h1 className="header__title">IP Address Tracker</h1>
			<Search />
			<SearchDetails />
		</div>
	);
};
