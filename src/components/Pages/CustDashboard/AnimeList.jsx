/** @format */

function AnimeList() {
	return (
		<div>
			<div className="w-[200px] mx-auto hover:scale-105 transition-all duration-500 2xl:w-[280px] py-[31px] px-[35px] bg-[#ffffff]  rounded-2xl">
				<div className="border my-5 w-[200px] mx-auto hover:scale-105 transition-all duration-500 2xl:w-[280px] py-[31px] px-[35px] bg-[#ffffff]  rounded-2xl">
        <i class="    p-3 fa fa-phone" aria-hidden="true"></i>
					<span className="py-1">call us </span>
					<br />
					<span className="p-3">+2348169199932</span>
				</div>
				<div className="border  w-[200px] mx-auto hover:scale-105 transition-all duration-500 2xl:w-[280px] py-[31px] px-[35px] bg-[#ffffff]  rounded-2xl my-5">
					<a
          className="p-3"
						target="_blank"
						rel="noopener noreferrer"
						href="https://wa.me/+23407067302238"
					>
						<i class="fa fa-whatsapp whatsapp-icon"></i>

						<span className="p-3">Whatsapp</span>
						<br />
						<span className="p-3">Chat with Dami</span>
					</a>
				</div>
				<div className="border w-[200px] mx-auto hover:scale-105 transition-all duration-500 2xl:w-[280px] py-[31px] px-[35px] bg-[#ffffff]  rounded-2xl my-5">
					<a  className="p-3" href="mailto:Thescamtrust@amall.com">
						<i class="fa fa-envelope" aria-hidden="true"></i>
						<span  className="p-3">email</span>
						<br />
						<span  className="p-3">Thescamtrust@amall.com</span>
					</a>
				</div>
			</div>
		</div>
	);
}

export default AnimeList;
