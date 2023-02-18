import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Auth from "./pages/auth";
import PageNotFound from "./pages/404";

const App = () => {
	const [auth, setAuth] = React.useState(false);
	return (
		<Routes>
			{auth ? (
				<>
					<Route path="/" element={<h1>Hu</h1>} />
					<Route
						path="/auth"
						element={<Navigate to={"/"} replace />}
					/>
					<Route path="*" element={<PageNotFound />} />
				</>
			) : (
				<>
					<Route path="/auth" element={<Auth />} />
					<Route path="*" element={<Navigate to={"/auth"} />} />
				</>
			)}
		</Routes>
	);
};

export default App;
