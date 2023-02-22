import React from "react";
import { SignIn, SignUp } from "../components";

const Auth = () => {
	const [create, setCreate] = React.useState(false);
	return (
		<div className=" w-full h-full flex flex-col items-center justify-center">
			{create ? <SignUp /> : <SignIn />}
			{create ? (
				<p className="mt-2 text-sm select-none">
					Already have account ?
					<span
						onClick={() => setCreate(false)}
						className=" cursor-pointer ml-1"
					>
						Sign In here
					</span>
				</p>
			) : (
				<p className="mt-2 text-sm select-none">
					Don't have an account ?
					<span
						onClick={() => setCreate(true)}
						className="cursor-pointer ml-1"
					>
						Sign Up here
					</span>
				</p>
			)}
		</div>
	);
};

export default Auth;
