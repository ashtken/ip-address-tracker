import React, { useContext } from "react";
import { IPContext } from "../../contexts/IPContext";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "./Map.scss";

const iconLocation = new Icon({
	iconUrl: "/icon-location.svg",
	iconSize: [30, 35],
});

export const Map = () => {
	const [data, setData] = useContext(IPContext);

	return (
		<MapContainer
			center={[data.location.lat, data.location.lng]}
			zoom={10}
			scrollWheelZoom={false}
		>
			<TileLayer
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<Marker
				position={[data.location.lat, data.location.lng]}
				icon={iconLocation}
			>
				<Popup>{data.ip}</Popup>
			</Marker>
		</MapContainer>
	);
};
