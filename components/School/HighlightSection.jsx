import Container from "components/Container";

const HighlightSection = () => {
	const Box = ({ className, children }) => (
		<div
			className={`p-4 border-white border-solid border-0 border-b-4 max-w-[300px] text-center ${className} md:border-b-0 md:border-r-4`}
		>
			{children}
		</div>
	);
	return (
		<section className="bg-red-550">
			<Container className="py-[24px] items-center md:flex-row">
				<Box>
					<h4 className="text-white font-bold text-5xl">
						25 <span className="text-4xl">Years</span>
					</h4>
				</Box>
				<Box className={"my-4 md:my-0 md:mx-5"}>
					<h4 className="text-white font-bold text-5xl">
						1500+ <span className="text-4xl">Students</span>
					</h4>
				</Box>
				<Box>
					<h4 className="text-white font-bold text-5xl">
						50+ <span className="text-4xl">Nationalities</span>
					</h4>
				</Box>
			</Container>
		</section>
	);
};

export default HighlightSection;
