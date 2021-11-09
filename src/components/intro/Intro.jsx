import "./intro.css";
import { Accordion } from "react-bootstrap";

const Intro = () => {
  return (
    <div id="perfil" className="intro row row-cols-1 row-cols-lg-1 row-cols-md-1 row-cols-sm-1">
      <div className="intro-left col mt-5">
        <div className="intro-left-wrapper">
          <h2 className="intro-intro"><span className="important">Hola,</span> yo soy...</h2>
          <h1 className="intro-name">David Romero</h1>
          <hr/>
          <img src="https://i.imgur.com/7CBbUNe.png" alt="David Romero" className="intro-img-mobile" />
          <div className="intro-title">
            <div className="intro-title-wrapper">
              <div className="intro-title-item">DESARROLLADOR WEB</div>
              <div className="intro-title-item">DISEÑADOR UI/UX </div>
              <div className="intro-title-item">OPTIMIZADOR SEO</div>
            </div>
          </div>

          <p className="intro-description">
            Desarrollador web, amante del marketing digital y automáta al 100% para llegar a ser la mejor versión de mí mismo. Los usuarios son mi prioridad, por ello mediante mis conocimientos en UX/UI design simplifico su experiencia y con SEO impulso sus metas comerciales.
          </p>

        <Accordion className="intro-skills">
				<Accordion.Item eventKey="0">
					<Accordion.Header> <h4 className="pt-2">Habilidades y conocimientos</h4> </Accordion.Header>
					<Accordion.Body>
          <div>
              <div className="intro-skills-wrapper">
                
                 <div className="intro-bars-skills row">
                <div className="col-6 intro-bar-skill">
                    <h5>Inglés</h5>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-secondary" role="progressbar" style={{width: "80%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                 </div>
                 <div className="col-6 intro-bar-skill">
                    <h5>JavaScript</h5>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" style={{width: "65%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                 </div>
                 <div className="col-6 intro-bar-skill">
                    <h5>HTML</h5>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" style={{width: "85%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                 </div>
                 <div className="col-6 intro-bar-skill">
                    <h5>CSS</h5>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: "80%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>

                 </div>
                 
                 <div className="col-6 intro-bar-skill">
                    <h5>WordPress</h5>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: "85%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                 </div>
                 <div className="col-6 intro-bar-skill mb-3">
                    <h5>React</h5>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar" style={{width: "60%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                 </div>
                 <div className="row intro-other-skills mt-2">
                 <hr/>
                 <h4>Otras habilidades</h4>
                 
                 <ul className="skill-list">
                     <li>Photoshop</li>
                     <li>Adobe XD</li>
                     <li>Premiere Pro</li>
                     <li>Yoast/Rank Math</li>
                 </ul>
                 </div>
                 </div>
              </div>
          </div>
          </Accordion.Body>
				</Accordion.Item>
			</Accordion>
    
         
        </div>
</div>

      <div className="intro-right col">
        
        <img src="https://i.imgur.com/7CBbUNe.png" alt="David Romero" className="intro-img" />
        <div className="intro-contact mt-5">
                <h3>Información de contacto</h3>

                <hr/>
            <ul>
                <li><span className="list-item"><i class="fa fa-envelope"></i></span> <a href="mailto:juandavidrom@outlook.com"> juandavidrom@outlook.com</a></li>
                <li><span className="list-item"><i class="fas fa-mobile-alt"></i></span> <a target="_blank" href="https://wa.link/c1t88n" rel='noreferrer'> +57 320 8424424</a>  </li>
                <li><span className="list-item"><i class="fab fa-linkedin"></i></span> <a href="https://www.linkedin.com/in/juan-david-romero-rodas-58b7621a8/" target="_blank" rel="noreferrer">Perfil Linkedin</a> </li>
                <li><span className="list-item"><i class="far fa-edit"></i></span> <a href="https://janrebel.com/" target="_blank" rel="noreferrer">Jan Rebel</a></li>
                <li><span className="list-item"><i class="fab fa-github"></i></span> <a href="https://github.com/JuanDavidRR" target="_blank" rel="noreferrer">JuanelCJ</a></li>
                <a href="#contacto" className="btn btn-primary mt-2">Enviar Mensaje</a>
            </ul>
        </div> 
      </div>
    </div>
  );
};

export default Intro;