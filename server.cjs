const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/sendEmail", (req, res) => {
	const { name, email, message } = req.body;

	const transporter = nodemailer.createTransport({
		service: "Gmail",
		auth: {
			user: "jakezook@gmail.com",
			pass: "Jakeisme01!",
		},
	});

	const mailOptions = {
		from: "jakezook01@gmail.com",
		to: "jakezook01@gmail.com",
		subject: "Contact Form Submission!",
		text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
	};

	// Send the email
	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			console.error(error);
			res.status(500).send("Failed to send email");
		} else {
			console.log("Email sent: " + info.response);
			res.status(200).send("Email sent successfully");
		}
	});
});

const port = 3001;
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
