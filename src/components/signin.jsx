import React from "react";

const SignIn = () => {
	const [data, setData] = React.useState({ username: "", password: "" });

	const handleSubmit = (event) => {
		event.preventDefault();
	};
	return (
		<form onSubmit={handleSubmit} className="text-center">
			<input
				type="text"
				title="Username or Email"
				className="block my-2 p-2 text-base rounded border-gray-300 text-gray-900 placeholder-gray-500 bg-slate-200  focus:border-slate-600 focus:ring-slate-600"
				placeholder="Username or email"
				value={data.username}
				onChange={(e) =>
					setData({
						username: e.target.value,
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
						username: data.username,
						password: e.target.value,
					})
				}
				required
			/>
			<input
				type="submit"
				className="w-full my-2 p-2 text-base rounded text-white bg-slate-800 cursor-pointer shadow-sm hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-600 focus:ring-offset-2"
				value="Sign In"
			/>
		</form>
	);
};

export default SignIn;
