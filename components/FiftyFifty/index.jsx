import Container from "components/Container";
import Image from "next/image";

const ImageContainer = ({ bgImage }) => {
	return (
		<div
			className={`relative w-[100%] h-[200px] ${bgImage} bg-center bg-no-repeat bg-cover  md:w-[50%] md:min-h-[250px] lg:min-h-[350px]`}
		/>
	);
};

const FiftyFifty = ({ title = "Title", image = "", desc = <></> }) => {
	return (
		<div className="flex flex-col md:flex-row-reverse">
			<ImageContainer bgImage={image} />
			<Container className="w-[100%] py-[32px] md:w-[50%]">
				<h1 className="text-4xl text-black font-bold">{title}</h1>
				{desc}
			</Container>
		</div>
	);
};

export default FiftyFifty;
