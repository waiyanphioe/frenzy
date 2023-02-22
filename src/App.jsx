import React, { useContext, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Auth from "./pages/auth";
import PageNotFound from "./pages/404";
import Main from "./pages/main";
import axios from "axios";
import { UserContext } from "./context/UserContext";

const App = () => {
	axios.defaults.baseURL = "http://localhost:5000";

	return (
		<div className="w-full h-screen bg-white">
			<div className=" max-w-7xl h-full my-0 mx-auto">
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/auth" element={<Auth />} />
					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</div>
		</div>
	);
};

export default App;
