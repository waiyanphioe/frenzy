import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
	const [token, setToken] = useState("");
	const [userData, setUserData] = useState({});
	useEffect(() => {
		// axios
		// 	.get("/users/me", {
		// 		headers: {
		// 			Authorization: token,
		// 			// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZjFjZjMwZDUzZWZmMzM3MDQyYzUzOCIsImlhdCI6MTY3NjgyMzY5MSwiZXhwIjoxNjc3NDI4NDkxfQ.1pMRGNmiJ5DnF8sFbEwU9OLUilcFOVQjS6dbxuj9A4U",
		// 		},
		// 	})
		// 	.then((res) => {
		// 		setUserData(res.data);
		// 	})
		// 	.catch((err) => {
		// 		console.log(err.message);
		// 	});
	}, []);

	return (
		<UserContext.Provider
			value={{ token, setToken, userData, setUserData }}
		>
			{children}
		</UserContext.Provider>
	);
}
