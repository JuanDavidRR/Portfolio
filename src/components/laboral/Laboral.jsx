import { useContext } from "react";
import { Accordion } from "react-bootstrap"
import { ThemeContext } from "../../context";
import './laboral.css'

export const Laboral = () => {
    const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;
    return (
        <div id="experiencia" className="laboral-container pt-5"  style={{
            backgroundColor: darkMode ? "#222" : "white",
            color: darkMode && "white",
        }}>
            <h2 className="laboral-title-section">Experiencia Laboral</h2>
            <hr/>
            <Accordion defaultActiveKey="2" >

            <Accordion.Item className="laboral-accordion" eventKey="0" style={{
				backgroundColor: darkMode ? "#222" : "white",
				color: darkMode && "white",
			}}>
					<Accordion.Header> <h5 className="laboral-title">Digital Ware <small>(2019-2020)</small></h5> </Accordion.Header>
					<Accordion.Body>
                        <h4>Ingeniero Junior</h4>
                        <hr/>
                        <ul className="laboral-list">
                            <p className="laboral-responsability">Responsabilidades</p>
                            <li className="laboral-list-item">
                                Documentar los procesos de software de las herramientas de inteligencia de negocios
                            </li>
                            <li className="laboral-list-item">
                                Analista de datos y constructor de tableros BI (Business Intelligence)
                            </li>
                            <li className="laboral-list-item">
                               Desarrollador frontend de las aplicaciones de inteligencias de negocios hechas en Angular
                            </li>
                            <li className="laboral-list-item">
                                Consultor de bases de datos  SQL server y administrador de reportes para Comfenalco 
                            </li>
                            <li className="laboral-list-item">
                                Product Owner Jr y capacitador de herramientas BI 
                            </li>
                        </ul>
        
          </Accordion.Body>
			</Accordion.Item>

			<Accordion.Item style={{
				backgroundColor: darkMode ? "#222" : "white",
				color: darkMode && "white",
			}} className="laboral-accordion" eventKey="1">
					<Accordion.Header> <h5 className="laboral-title">Teleperformance <small>(2020-2021)</small></h5> </Accordion.Header>
					<Accordion.Body>
                        <h4>Customer Service Representative</h4>
                        <hr/>
                        <ul className="laboral-list">
                            <p className="laboral-responsability">Responsabilidades</p>
                            <li className="laboral-list-item">
                               Embajador de la Wave 11 en Colombia para un gran cliente extranjero
                            </li>
                            <li className="laboral-list-item">
                              Documentador de procesos los procesos técnicos de los clientes
                            </li>
                            <li className="laboral-list-item">
                              Documentador Salesforce de los procesos de los flujos lógicos de la campaña
                            </li>
                        </ul>
        
          </Accordion.Body>
			</Accordion.Item>

            <Accordion.Item style={{
				backgroundColor: darkMode ? "#222" : "white",
				color: darkMode && "white",
			}} className="laboral-accordion" eventKey="2">
					<Accordion.Header> <h5 className="laboral-title">Grupo Lyown <small>(2021)</small></h5> </Accordion.Header>
					<Accordion.Body>
                        <h4>Desarrollador Web</h4>
                        <hr/>
                        <ul className="laboral-list">
                            <p className="laboral-responsability">Responsabilidades</p>
                            <li className="laboral-list-item">
                                Creación de sitios web mediante el CMS WordPress mediante Elementor o Divi complemetando con HTML, CSS y JavaScript personalizado
                            </li>
                            <li className="laboral-list-item">
                                Cración de ecommerce mediante WooCommerce con optimización SEO y aplicación de neuroventas mediante gatillos mentales
                            </li>
                            <li className="laboral-list-item">
                              Optimizar las páginas web para lograr una carga rápida y optimización del contenido web
                            </li>
                            <li className="laboral-list-item">
                                Proteger los sitios web frente a vulnerabilidades
                            </li>
                            <li className="laboral-list-item">
                                Diseñar interfaces gráficas para implementarlas en los sitios aplicando el diseño UX/UI 
                            </li>
                            <li className="laboral-list-item">
                                Optimización SEO para los sitios web de los clientes mediante Yoast Seo, RankMath, Semrush y los servicios de Google
                            </li>
                            
                        </ul>
        
          </Accordion.Body>
			</Accordion.Item>

			</Accordion>
            </div>
    )
}
