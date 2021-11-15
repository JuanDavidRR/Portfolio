import React, { useContext } from "react";
import { Form } from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import { Laboral } from "./components/laboral/Laboral";
import { Navbar } from "./components/navbar/Navbar";
import { PortfolioList } from "./components/porfolio-list/PortfolioList";
import { Toggle } from "./components/toggle/Toggle";
import { ThemeContext } from "./context";
import { Estudios } from "./estudios/Estudios";

export const App = () => {
	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;

	return (
		<div
			style={{
				backgroundColor: darkMode ? "#222" : "white",
				color: darkMode && "white",
			}}
		>
			<Navbar />

			<Toggle />

			<Intro />

			<PortfolioList />

			<Laboral />

			<Estudios />

			<Form />
		</div>
	);
};
