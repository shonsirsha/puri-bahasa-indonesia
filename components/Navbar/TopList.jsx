import Email from "components/Icons/Email";
import MapMarker from "components/Icons/MapMarker";
import Phone from "components/Icons/Phone";

const TopList = () => {
	return (
		<div className="flex flex-col md:flex-row px-3 py-4 bg-red-550 w-100 items-center justify-between">
			<div className="text-xs text-white font-semibold mr-5 flex mb-3 md:mb-0 text-center md:text-left">
				<MapMarker size={4} />
				<a
					href="https://goo.gl/maps/MGxED6G1uqRSGQVE6"
					target="_blank"
					className="ml-1 underline "
					rel="noreferrer noopener"
				>
					Jl. Masjid 24, Yogyakarta 55113, Indonesia (click here to open on
					Google Maps)
				</a>
			</div>

			<div className="flex items-center">
				<div className="flex text-xs text-white font-semibold mr-5">
					<Phone size={4} />
					<a href="tel:+6281392013030" className="ml-1">
						+62 81 392 01 3030
					</a>
				</div>

				<div className="flex text-xs text-white font-semibold mr-5">
					<Email size={4} />
					<a className="ml-1 underline" href="mailto:info@puribahasa.com">
						info@puribahasa.com
					</a>{" "}
				</div>
			</div>
		</div>
	);
};

export default TopList;
