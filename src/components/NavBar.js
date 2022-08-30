
const NavBar = () => {
    return (
      <div className="container">
        <header className="w-100 d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom shadow">
                  <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <span className="fs-4">Gohan´s Music Store</span>
                  </a>
                  <ul className="lista">
                    <li><button className="boton"> BTS </button></li>
                    <li><button className="boton"> Taylor Swift </button></li>
                    <li><button className="boton"> En Oferta </button></li>
                  </ul>
        </header>
    </div>
    );
  };
  
  export default NavBar;
  