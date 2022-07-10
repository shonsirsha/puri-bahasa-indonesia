const Container = ({ className = "", children }) => {
	return (
		<div
			className={`flex flex-col container px-[80px] min-h-full justify-center max-w-full ${className}`}
		>
			{children}
		</div>
	);
};

export default Container;
