import React from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Main = () => {
	const { userData } = useContext(UserContext);
	return <div className="w-full h-full"></div>;
};

export default Main;
