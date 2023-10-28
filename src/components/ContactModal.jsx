import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

import "./ContactModal.css";

export default function Contact(props) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [showFieldError, setShowFieldError] = useState(false);
	const [showEmailError, setShowEmailError] = useState(false);

	const isEmailValid = (email) => {
		const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
		return emailRegex.test(email);
	};

	const handleSubmit = () => {
		if (name && email && message) {
			if (isEmailValid(email)) {
				fetch("/sendEmail", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ name, email, message }),
				})
					.then((response) => response.json())
					.then((data) => {
						console.log(data);
					})
					.catch((error) => {
						console.error("Error:", error);
					});

				setName("");
				setEmail("");
				setMessage("");
				setShowFieldError(false);
				setShowEmailError(false);
			} else {
				setShowFieldError(false);
				setShowEmailError(true);
			}
		} else {
			setShowFieldError(true);
		}

		// You can now proceed with the form submission logic here
		// For example, you can make an API request to send the form data
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
					<h6 className="text-center error">Please fill out all forms!</h6>
				)}
				{showEmailError && (
					<h6 className="text-center error">Please enter a valid email!</h6>
				)}
				<Form>
					<Form.Group className="form" controlId="formName">
						<Form.Label>Name:</Form.Label>
						<Form.Control
							type="text"
							placeholder="Your Name"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</Form.Group>
					<Form.Group className="form" controlId="formEmail">
						<Form.Label>Email Address:</Form.Label>
						<Form.Control
							type="email"
							placeholder="Your Email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</Form.Group>
					<Form.Group className="form" controlId="formMessage">
						<Form.Label>Message:</Form.Label>
						<Form.Control
							as="textarea"
							rows={4}
							placeholder="Your Message"
							value={message}
							onChange={(e) => setMessage(e.target.value)}
						/>
					</Form.Group>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button
					className="transparent-button m-2"
					variant="secondary"
					onClick={props.onClose}
				>
					Close
				</Button>
				<Button
					className="transparent-button m-2"
					variant="primary"
					onClick={handleSubmit}
				>
					Submit
				</Button>
			</Modal.Footer>
		</Modal>
	);
}
