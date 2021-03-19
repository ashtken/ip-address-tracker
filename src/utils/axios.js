import Axios from "axios";

export const axios = Axios.create({
	baseURL: "https://geo.ipify.org/api/",
});
