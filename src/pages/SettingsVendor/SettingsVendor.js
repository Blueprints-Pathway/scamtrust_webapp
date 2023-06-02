/** @format */

import React, { useState, useEffect } from "react";
import "../../components/layout/AppLayout.css";
import swal from "sweetalert";
import shielgg from "../../assets/images/shielgg 3.svg";

import GeneralSettings from "./GeneralSettings";

import AppLayout from "../../components/layout/AppLayout";

import PrivacySettings from "./PrivacySettings";
import SecuritySettings from "./SecuritySettings";
import { useSelector } from "react-redux";
import axios from "axios";

function SettingsVendor() {
	const [select, setSelect] = useState();
	const [image, setImage] = useState();
	const [preview, setPreview] = useState();
	const { data } = useSelector((state) => state.user);
	const [active, setActive] = useState("generalSettings");
	function onImageChange(e) {
		setImage(e.target.files[0]);
		setPreview(URL.createObjectURL(e.target.files[0]));

		// URL.createObjectURL(e.target.files[0]);
	}

	const auth = useSelector((state) => state?.auth?.data?.access_token);
	const upload = async () => {
		if (!image) {
			return;
		}

		try {
			const API_URL = `${process.env.REACT_APP_BASE_URL}/settings/upload/picture`;
			const config = {
				headers: {
					"Content-Type": "multipart/form-data",

					Authorization: `Bearer ${auth}`,
				},
			};
			const payload = {
				picture: image,
			};
			const data = await axios.post(API_URL, payload, config);
			//console.log(data, "data");
			swal({
				icon: "success",
				text: "Image uploaded successfully",
				confirmButtonColor: "#0000",
			});
			//console.log(data, "data");
		} catch (error) {
			//console.log(error, "errror");
			swal({
				icon: "error",
				text: error,
			});
		}
	};
	useEffect(() => {
		upload();
	}, [preview]);
	const user = JSON.parse(localStorage?.getItem("dataKey"));
	//console.log(user, "user datas");
	useEffect(() => {
		setPreview(data?.data?.image_url);
	}, []);
	return (
		<AppLayout>
			<div className="containerSettings2">
				<div className="center grid bg-black">
					<div className="mr-5  place-self-end bg-red md:shrink-0 ">
						<img
							className=" object-contain object-right mt-3  h-48 w-25 md:h-56 md:w-96 "
							src={shielgg}
							alt="none"
						/>
					</div>
				</div>

				<div className="CenterBottom">
					<div className="vendorNameSettings">
						<h1>{data?.data?.name || data?.data?.username}</h1>
					</div>

					<div className="CenterImg1">
						<div className="CenterImg2">
							<div className="CenterImg3">
								<div className="col-md-3">
									<label htmlFor="upload-button">
										<img
											src={preview}
											className="CenterImage1"
											alt={data?.data?.image_url}
										/>
									</label>

									<div>
										<div className="d-flex justify-content-center">
											<input
												className="input-image my-3 px-auto cursor-pointer"
												style={{ display: "none" }}
												id="upload-button"
												type="file"
												accept="image/*"
												onChange={(e) => {
													onImageChange(e);
												}}
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* <div className="CenterGeneralSettings"> */}

					<div className="GeneralSettings">
						<div className="category">
							{active === "generalSettings" ? (
								<h6 className="Selection active ">General Settings</h6>
							) : (
								<h6
									onClick={() => {
										setActive("generalSettings");
									}}
									className="text-3xl"
								>
									General Settings
								</h6>
							)}

							{active === "security" ? (
								<h6 className="Selection active">Security Settings</h6>
							) : (
								<h6
									onClick={() => {
										setActive("security");
									}}
									className="Selection"
								>
									Security Settings
								</h6>
							)}

							{active === "privacy" ? (
								<h6 className="Selection active">Privacy Settings</h6>
							) : (
								<h6
									onClick={() => {
										setActive("privacy");
									}}
									className="Selection"
								>
									Privacy Settings
								</h6>
							)}
						</div>

						<div className={select ? "form-GeneralSettings white-bg" : "hide"}>
							{active === "generalSettings" ? <GeneralSettings /> : null}
							{active === "privacy" ? <PrivacySettings /> : null}
							{active === "security" ? <SecuritySettings /> : null}
						</div>
					</div>
					{/* </div> */}
				</div>
			</div>
		</AppLayout>
	);
}

export default SettingsVendor;
