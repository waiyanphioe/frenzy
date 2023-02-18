import React from "react";
import { SignIn, SignUp } from "../components";

const Auth = () => {
	const [create, setCreate] = React.useState(false);
	return (
		<div className=" w-full h-screen bg-slate-100 flex flex-col items-center justify-center">
			{create ? <SignUp /> : <SignIn />}
			{create ? (
				<span
					onClick={() => setCreate(false)}
					className="mt-2 cursor-pointer"
				>
					Already have account ?
				</span>
			) : (
				<span
					onClick={() => setCreate(true)}
					className="mt-2 cursor-pointer"
				>
					Create new account
				</span>
			)}
		</div>
	);
};

export default Auth;
