import ContactUsForm from "components/ContactUsForm";
import React from "react";
import Container from "components/Container";

const ContactUs = () => {
	return (
		<div className="relative">
			<div className="bg-gray-75 absolute w-full h-[50%] bottom-0"></div>
			<Container>
				<div className="flex py-[48px]">
					<ContactUsForm />
				</div>
			</Container>
		</div>
	);
};

export default ContactUs;
