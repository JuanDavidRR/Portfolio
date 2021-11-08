import React from "react";
import { Form } from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import { Laboral } from "./components/laboral/Laboral";
import { Navbar } from "./components/navbar/Navbar";
import { PortfolioList } from "./components/porfolio-list/PortfolioList";
import { Estudios } from "./estudios/Estudios";

export const App = () => {
	return (
		<>
			<Navbar />

			<Intro />

			<PortfolioList />

			<Laboral />

			<Estudios />

			<Form />
		</>
	);
};
