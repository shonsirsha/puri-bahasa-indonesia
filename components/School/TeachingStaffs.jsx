/* eslint-disable @next/next/no-html-link-for-pages */
import ThirtyFiveSixtyFive from "components/ThirtyFiveSixtyFive";
import CardWithIcon from "components/CardWithIcon";
import Book from "components/Icons/Book";

const TeachingStaffs = () => {
	const LeftContent = <h3 className="text-4xl font-bold">Teaching Staffs</h3>;
	const RightContent = (
		<div className="flex flex-col">
			<p>
				<b>
					Teaching staff of Puri Bahasa Indonesia are fully qualified,
					university - educated professional language teachers.{" "}
				</b>
			</p>
			<p className="my-4">
				Puri Bahasa Indonesia carefully selects and monitor the performance of
				our teachers, and Puri Bahasa Indonesia regularly consults with students
				on their progress, to ensure that the highest academic standards are
				maintained.
			</p>

			<CardWithIcon
				text={
					<>
						The school provides, <b>at no extra cost</b>, a range of materials
						concerned with speaking and reading comprehension, and writing
						skills, tailored to suit the standard of the course taken or the
						special interests of the student.{" "}
						<b>
							Please, don’t hesitate to{" "}
							<a
								target={"_blank"}
								href="/#contact-us"
								className="underline text-red-550"
							>
								contact us by clicking here
							</a>{" "}
							for any of your special purpose.
						</b>
					</>
				}
				svgIcon={<Book big />}
				large
			/>

			<p className="mt-4">
				Methods and materials are designed and aimed mainly to enable students
				to communicate well and naturally without neglecting social or cultural
				aspects.
			</p>
		</div>
	);
	return (
		<section id="teaching-staffs">
			<ThirtyFiveSixtyFive
				leftContent={LeftContent}
				rightContent={RightContent}
				className="bg-gray-75"
			/>
		</section>
	);
};

export default TeachingStaffs;
