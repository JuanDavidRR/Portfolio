import { useContext } from "react";
import { Accordion } from "react-bootstrap"
import '../components/laboral/laboral.css'
import { ThemeContext } from "../context";

export const Estudios = () => {
    const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;
    return (
        <div className="laboral-container pt-5"style={{
            backgroundColor: darkMode ? "#222" : "white",
            color: darkMode && "white",
            paddingBottom: '7%'
        }}>
            <h2 className="laboral-title-section">Formación Académica</h2>
            <hr/>
            <p>Si deseas soporte de cada uno de estos titulos y certificados puedes <a href="#contacto">CONTACTARME</a> y te enviaré el soporte requerido</p>
            <Accordion defaultActiveKey="2">

            <Accordion.Item className="laboral-accordion" eventKey="0" style={{
				backgroundColor: darkMode ? "#222" : "white",
				color: darkMode && "white",
			}} >
					<Accordion.Header> <h5 className="laboral-title">Educación Principal </h5> </Accordion.Header>
					<Accordion.Body>
                        <ul className="laboral-list">
                            <li className="laboral-list-item">
                            <p>Técnico en Finanzas y asesoría comercial <small>(2014-2016)</small></p>
                            </li>

                            <li className="laboral-list-item">
                            <p>Técnico en desarrollo de software <small>(2018-2020)</small></p>
                            </li>

                            <li className="laboral-list-item">
                            <p>Tecnólogo en diseño de software <small>(2020-2022)</small></p>
                            </li>

                            <li className="laboral-list-item">
                            <p>Máster Marketing digital y análitica web <small>(2021-2022)</small></p>
                            </li>
                        </ul>
          </Accordion.Body>
			</Accordion.Item>

			<Accordion.Item className="laboral-accordion" eventKey="1" style={{
				backgroundColor: darkMode ? "#222" : "white",
				color: darkMode && "white",
			}} >
					<Accordion.Header> <h5 className="laboral-title">Educación Secundaria</h5> 
                    </Accordion.Header>
					<Accordion.Body>
                        <ul className="laboral-list">
                            <li className="laboral-list-item">
                               Certificación WordPress NBI (2020)
                            </li>
                            <li className="laboral-list-item">
                               Universidad Austral Pilares del marketing digital (2020)
                            </li>
                            <li className="laboral-list-item">
                               Accenture Digital Skills (2020)
                            </li>
                            <li className="laboral-list-item">
                               Deakin University Business Problems and software solutions (2020)
                            </li>
                            <li className="laboral-list-item">
                            Scrum Foundation Professional Certificate (2020)
                            </li>
                            <li className="laboral-list-item">
                              Udemy Universidad CSS de cero a experto (2021)
                            </li>
                            <li className="laboral-list-item">
                           Udemy Universidad HTML de cero a experto (2021)
                            </li>
                            <li className="laboral-list-item">
                            Scrum Fundamentals Certified SCRUMStudy (2021)
                            </li>
                           
                            <li className="laboral-list-item">
                            SoloLearn CSS certificate (2021)
                            </li>
                            <li className="laboral-list-item">
                            SoloLearn HTML certificate (2021)
                            </li>
                            <li className="laboral-list-item">
                            SoloLearn JavaScript certificate (2021)
                            </li>
                            <li className="laboral-list-item">
                            SoloLearn React certificate (2021)
                            </li>
                            <li className="laboral-list-item">
                            SoloLearn Responsive Web Design Certificate (2021)
                            </li>
                            <li className="laboral-list-item">
                            SoloLearn SQL Certificate (2021)
                            </li>
                            
                        </ul>
                    </Accordion.Body>
			</Accordion.Item>
			</Accordion>
        </div>
    )
}
