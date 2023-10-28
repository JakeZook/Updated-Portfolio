import React, { useState, useRef } from "react";
import { Modal, Button, Form } from "react-bootstrap";

import emailjs from "@emailjs/browser";

import "./ContactModal.css";

export default function Contact(props) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [showFieldError, setShowFieldError] = useState(false);
	const [showEmailError, setShowEmailError] = useState(false);
	const [showConfirmation, setShowConfirmation] = useState(false);

	const form = useRef();

	const isEmailValid = (email) => {
		const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
		return emailRegex.test(email);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (name && email && message) {
			if (isEmailValid(email)) {
				emailjs.sendForm(
					import.meta.env.VITE_SERVICE,
					import.meta.env.VITE_TEMPLATE,
					form.current,
					import.meta.env.VITE_KEY
				);

				setName("");
				setEmail("");
				setMessage("");
				setShowFieldError(false);
				setShowEmailError(false);
				setShowConfirmation(true);
			} else {
				setShowConfirmation(false);
				setShowFieldError(false);
				setShowEmailError(true);
			}
		} else {
			setShowConfirmation(false);
			setShowFieldError(true);
		}
	};

	return (
		<Modal
			className="contact"
			show={props.show}
			onHide={props.onClose}
			style={{ zIndex: 1050 }}
		>
			<Modal.Header closeButton className="justify-content-end"></Modal.Header>
			<h4 className="modal-title text-center">Get in touch!</h4>
			<Modal.Body>
				{showFieldError && (
					<h6 className="text-center error">Please fill out all fields!</h6>
				)}
				{showEmailError && (
					<h6 className="text-center error">Please enter a valid email!</h6>
				)}
				{showConfirmation && (
					<h6 className="text-center confirmation">Email Sent!</h6>
				)}
				<Form ref={form} onSubmit={handleSubmit}>
					<Form.Group className="form" controlId="formName">
						<Form.Label>Name:</Form.Label>
						<Form.Control
							type="text"
							placeholder="Your Name"
							name="user_name"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</Form.Group>
					<Form.Group className="form" controlId="formEmail">
						<Form.Label>Email Address:</Form.Label>
						<Form.Control
							type="email"
							placeholder="Your Email"
							name="user_email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</Form.Group>
					<Form.Group className="form" controlId="formMessage">
						<Form.Label>Message:</Form.Label>
						<Form.Control
							as="textarea"
							rows={5}
							placeholder="Your Message"
							name="message"
							value={message}
							onChange={(e) => setMessage(e.target.value)}
						/>
					</Form.Group>
					<div className="d-flex justify-content-center">
						<button className="transparent-button m-2" type="submit">
							Send
						</button>
						<Button
							className="transparent-button m-2"
							variant="secondary"
							onClick={props.onClose}
						>
							Close
						</Button>
					</div>
				</Form>
			</Modal.Body>
		</Modal>
	);
}
