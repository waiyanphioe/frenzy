import React, { useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const SignIn = () => {
	const [data, setData] = React.useState({ handle: "", password: "" });

	const navigate = useNavigate();

	const { setToken } = useContext(UserContext);

	const handleSubmit = async (event) => {
		event.preventDefault();
		await axios
			.post("/auth/signin", data)
			.then((res) => {
				setToken(res.data.token);
				navigate("../");
			})
			.catch((err) => console.log(err));
	};
	return (
		<form onSubmit={handleSubmit} className="text-center">
			<input
				type="text"
				title="Username or Email"
				className="block my-2 p-2 text-base rounded border-gray-300 text-gray-900 placeholder-gray-500 bg-slate-200  focus:border-slate-600 focus:ring-slate-600"
				placeholder="Username or email"
				value={data.handle}
				onChange={(e) =>
					setData({
						handle: e.target.value,
						password: data.password,
					})
				}
				required
			/>
			<input
				type="password"
				title="Password"
				className="block my-2 p-2 text-base rounded border-gray-300 text-gray-900 placeholder-gray-500 bg-slate-200 focus:border-slate-600 focus:ring-slate-600"
				placeholder="Password"
				value={data.password}
				onChange={(e) =>
					setData({
						handle: data.handle,
						password: e.target.value,
					})
				}
				required
			/>
			<input
				type="submit"
				className="w-full my-2 p-2 text-base rounded text-white bg-slate-800 cursor-pointer shadow-sm hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-700 focus:ring-offset-2"
				value="Sign In"
			/>
		</form>
	);
};

export default SignIn;
