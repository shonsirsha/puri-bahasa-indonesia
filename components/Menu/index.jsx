import React from "react";

const Menu = ({ opened = false, onMenuOpened }) => {
	return (
		<>
			<div
				className={`transition-all fixed  bg-transparent w-screen h-full z-10 backdrop-blur-sm ${
					opened ? `translate-x-[0]` : `translate-x-[100%]`
				} hover:cursor-pointer`}
				onClick={() => {
					onMenuOpened(false);
				}}
			></div>
			<div
				className={`transition-all fixed w-[100%] max-w-[320px] bg-white h-full z-10 p-8 ${
					opened ? `translate-x-[0]` : `translate-x-[-320px]`
				}`}
			>
				Menu Here
			</div>
		</>
	);
};

export default Menu;
