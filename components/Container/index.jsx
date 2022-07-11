const Container = ({ className = "", fluid = true, children }) => {
	return (
		<div
			className={`flex flex-col container px-[24px] sm:px-[80px] min-h-full justify-center ${
				fluid && `max-w-full`
			} ${className}`}
		>
			{children}
		</div>
	);
};

export default Container;
