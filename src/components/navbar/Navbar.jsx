import './navbar.css'
export const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link" aria-current="page" href="#perfil">PERFÍL</a>
        <a className="nav-link" href="#portafolio">PORTAFOLIO</a>
        <a className="nav-link" href="#experiencia">EXPERIENCIA</a>
        <a className="nav-link" href="#contacto">CONTACTO</a>
      </div>
    </div>
  </div>
</nav>
        </div>
    )
}
