import React, { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./contact.css";
import { Modal, Button } from "react-bootstrap";

import { useForm } from "../../hooks/useForm";
import { ThemeContext } from "../../context";

export const Form = () => {
	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;
	const [formValues, handleInputChange, reset] = useForm({
		nombre: "",
		email: "",
		asunto: "",
		message: "",
	});

	const { nombre, email, asunto, message } = formValues;

	const form = useRef();
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const sendEmail = (e) => {
		e.preventDefault();
		alert(`¡${formValues.nombre} recibí tu mensaje con éxito!`);
		emailjs
			.sendForm(
				"service_j694gzk",
				"template_p979y0d",
				form.current,
				"user_SL4h6mQ6tQ5YwfBzWi9yq"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		handleShow();
		reset();
	};

	return (
		<div className="form-container" id="contacto">
			<div
				className="form-wrapper"
				style={{
					color: darkMode && "#222",
				}}
			>
				<h2 className="form-title">Contáctame</h2>
				<hr />
				<p className="form-text">
					<b>¿Cómo te puedo colaborar?</b> Por favor llena el
					formulario y te atenderé lo más rápido posible.
				</p>
				<form ref={form} onSubmit={sendEmail} className="mt-3">
					<input
						type="text"
						className="form-control"
						placeholder="Nombre completo o Razón social"
						name="nombre"
						onChange={handleInputChange}
						value={nombre}
						required
					/>
					<input
						type="text"
						className="form-control"
						placeholder="Asunto"
						name="asunto"
						onChange={handleInputChange}
						value={asunto}
						required
					/>
					<input
						type="email"
						className="form-control"
						placeholder="Correo Electrónico"
						name="email"
						onChange={handleInputChange}
						value={email}
						required
					/>
					<textarea
						className="form-control"
						name="message"
						placeholder="Escribe el motivo del contacto..."
						onChange={handleInputChange}
						value={message}
						rows="3"
					></textarea>
					<div className="d-grid gap-2">
						<input
							className="d-grid gap-2 btn btn-primary "
							type="submit"
							value="ENVIAR"
						/>
					</div>
				</form>
			</div>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>¡GRACIAS POR CONTACTARME!</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					Tú mensaje fue enviado con éxito e intentaré responderlo tan
					pronto como me sea posible, en dado caso que no recibas una
					respuesta contáctame directamente{" "}
					<a
						href="tel:+573208424424"
						onclick="ga('send', 'event', { eventCategory: 'Contact', eventAction: 'Call', eventLabel: 'Mobile Button'});"
					>
						<p class="call-button">AQUÍ</p>
					</a>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="primary" onClick={handleClose}>
						Cerrar
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};
