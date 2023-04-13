/** @format */

import React from "react";
import bell from "../../assets/images/bell.png";
import support from "../../assets/images/suppo.svg";
import chat from "../../assets/images/chat.svg";
import faq from "../../assets/images/faq.svg";
import footerLogo from "../../assets/images/footerLogo.png";
import AppLayout from "../../components/layout/AppLayout";
function Support() {
	return (
		<AppLayout>
			<div className="md:w-5/6 w-full rounded-xl   bg-[#FFFFFF] md:mt-40 mt-10 md:mx-20">
				
				<div className="md:flex  grid">
					<div>
						
						<img src={support} alt="" />
					</div>

					<div className="md:mt-20 mt md:py-5 md:mr-20 ">
						<h4 className="md:my-5  font-bold text-lg text-center">
							How can we help you?
						</h4>
						<p className="text-center font-light text-base">
							Need support? Find out how we can serve you better
						</p>
						<div className="flex justify-between">
							<div className="flex border border-black w-full m-2 p-">
                            <a
        href="https://wa.me/2348169199932"
        className="flex  w-full m-2 "
        target="_blank"
        rel="noopener noreferrer"
      >
								<div className="bg-[#0257C0] w-[35px] h-[35px] ss:w-[25px] sm:w-[30px] lg:w-[35px] sm:h-[30px] ss:h-[25px] lg:h-[35px] flex justify-center items-center rounded-[10px] py-2">
									<img
										className="sm:w-[16px] ss:w-[12px] lg:w-[18px] "
										src={chat}
										alt=""
									/>
								</div>
								<div>
									<h4 className="font-poppins ss:text-xs lg:text-[14px] text-black ml-2 ">
										Chat
									</h4>
									<h5 className="font-poppins text-[#707070] ss:text-[10px] lg:text-[10px] ml-1">
										Start a conversation now
									</h5>
								</div>
                                </a>
							</div>
							<div className="flex border border-black w-full m-2 p-1">
								<div className="bg-[#0257C0] w-[35px] h-[35px] ss:w-[25px] sm:w-[30px] lg:w-[35px] sm:h-[30px] ss:h-[25px] lg:h-[35px] flex justify-center items-center rounded-[10px]">
									<img
										className="sm:w-[16px] ss:w-[12px] lg:w-[18px]"
										src={faq}
										alt=""
									/>
								</div>
								<div>
									<h4 className="font-poppins ss:text-xs lg:text-[14px] text-black ml-2 ">
										{" "}
										FAQs
									</h4>
									<h5 className="font-poppins text-[#707070] ss:text-[10px] lg:text-[10px] ml-1">
										Find answers instantly
									</h5>
								</div>
							</div>
						</div>
					</div>
				</div>
			
		
            <div className=" flex justify-center  pb-20">
					<h4 className="font-Montserrat font-semibold text-xs lg:text-sm text-[#706E6E]">
						Secured by
					</h4>
					<img className="lg:w-[75px] w-[50px]" src={footerLogo} alt="" />
				</div>
			</div>
		</AppLayout>
	);
}

export default Support;
