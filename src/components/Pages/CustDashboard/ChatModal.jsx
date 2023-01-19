/** @format */

import React, { useState } from "react";
import Modal from "react-modal";
import AnimeList from "./AnimeList";

function ChatModal() {
	const [modalIsOpen, setModalIsOpen] = useState(false);

	const setModalIsOpenToTrue = () => {
		setModalIsOpen(true);
	};

	const setModalIsOpenToFalse = () => {
		setModalIsOpen(false);
	};

	return (
		<div>
			<button onClick={setModalIsOpenToTrue}>Click to Open Modal</button>

			<Modal 
			isOpen={modalIsOpen}
			onRequestClose={setModalIsOpenToFalse}
			>
				<button onClick={setModalIsOpenToFalse}>X</button>
				<AnimeList />
			</Modal>
		</div>
	);
}
export default ChatModal;
