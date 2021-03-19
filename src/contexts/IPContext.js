import React, { useState, createContext } from "react";

export const IPContext = createContext();

export const IPProvider = (props) => {
	const [data, setData] = useState({
		ip: "8.8.8.8",
		isp: "Google LLC",
		location: {
			city: "Mountain View",
			country: "US",
			lat: 37.38605,
			lng: -122.08385,
			postalCode: "94035",
			timezone: "-08:00",
		},
	});
	return (
		<IPContext.Provider value={[data, setData]}>
			{props.children}
		</IPContext.Provider>
	);
};
