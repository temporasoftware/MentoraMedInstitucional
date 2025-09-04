import SocialLinks from "./SocialLinks";

const NavMenu = () => (
  <nav className="wsmenu clearfix">
    <ul className="wsmenu-list nav-blue">
      <li aria-haspopup="true" className="h-link">
        <a href="#sobre">Sobre</a>
      </li>

      <li aria-haspopup="true" className="h-link">
        <a href="#quem-somos">Quem Somos</a>
      </li>

      <li aria-haspopup="true" className="h-link">
        <a href="#como-funciona">Como Funciona</a>
      </li>

      <li aria-haspopup="true" className="h-link">
        <a href="#beneficios">Beneficios</a>
      </li>

      <li aria-haspopup="true" className="h-link">
        <a href="#contato">Contato</a>
      </li>

      <li aria-haspopup="true" className="h-link">
        <a href="#nr-1">NR-1</a>
      </li>

      <li aria-haspopup="true" className="h-link">
        <a href="#nr-1">Área do Colaborador</a>
      </li>

      {/* <SocialLinks /> */}
    </ul>
  </nav>
);

export default NavMenu;
