import React from "react";
import axios from "axios";

const SignUp = () => {
	const [data, setData] = React.useState({
		name: "",
		username: "",
		email: "",
		password: "",
	});

	const handleSubmit = (event) => {
		event.preventDefault();
		axios
			.post("http://localhost:5000/auth/signup", data)
			.then((res) => console.log(res.data))
			.catch((err) => console.log(err));
	};
	return (
		<form onSubmit={handleSubmit} className="text-center">
			<input
				type="text"
				className="block my-2 p-2 text-base rounded border-gray-300 text-gray-900 placeholder-gray-500 bg-slate-200  focus:border-slate-600 focus:ring-slate-600"
				placeholder="Name"
				value={data.name}
				onChange={(e) =>
					setData({
						name: e.target.value,
						username: data.username,
						email: data.email,
						password: data.password,
					})
				}
				required
			/>
			<input
				type="text"
				className="block my-2 p-2 text-base rounded border-gray-300 text-gray-900 placeholder-gray-500 bg-slate-200  focus:border-slate-600 focus:ring-slate-600"
				placeholder="Username"
				value={data.username}
				onChange={(e) =>
					setData({
						name: data.name,
						username: e.target.value,
						email: data.email,
						password: data.password,
					})
				}
				required
			/>
			<input
				type="email"
				className="block my-2 p-2 text-base rounded border-gray-300 text-gray-900 placeholder-gray-500 bg-slate-200  focus:border-slate-600 focus:ring-slate-600"
				placeholder="Email"
				value={data.email}
				onChange={(e) =>
					setData({
						name: data.name,
						username: data.username,
						email: e.target.value,
						password: data.password,
					})
				}
				required
			/>
			<input
				type="password"
				className="block my-2 p-2 text-base rounded border-gray-300 text-gray-900 placeholder-gray-500 bg-slate-200  focus:border-slate-600 focus:ring-slate-600"
				placeholder="Password"
				value={data.password}
				onChange={(e) =>
					setData({
						name: data.name,
						username: data.username,
						email: data.email,
						password: e.target.value,
					})
				}
				required
			/>
			<input
				type="submit"
				className="w-full my-2 p-2 text-base rounded text-white bg-slate-800 shadow-sm  hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-700 focus:ring-offset-2"
				value="Sign Up"
			/>
		</form>
	);
};

export default SignUp;
