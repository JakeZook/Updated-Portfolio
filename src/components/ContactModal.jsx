import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

import "./ContactModal.css";

export default function Contact(props) {
	return (
		<Modal
			className="contact"
			show={props.show}
			onHide={props.onClose}
			style={{ zIndex: 1050 }}
		>
			<Modal.Header closeButton className="justify-content-end">
				<h4 className="modal-title text-center">Get in touch!</h4>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Group className="form" controlId="formName">
						<Form.Label>Name:</Form.Label>
						<Form.Control type="text" placeholder="Your Name" />
					</Form.Group>
					<Form.Group className="form" controlId="formEmail">
						<Form.Label>Email Address:</Form.Label>
						<Form.Control type="email" placeholder="Your Email" />
					</Form.Group>
					<Form.Group className="form" controlId="formMessage">
						<Form.Label>Message:</Form.Label>
						<Form.Control as="textarea" rows={4} placeholder="Your Message" />
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
				<Button className="transparent-button m-2" variant="primary">
					Submit
				</Button>
			</Modal.Footer>
		</Modal>
	);
}
