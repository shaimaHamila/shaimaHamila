import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

import "./Menu.scss";
type menuItem = {
  to: string;
  icon: JSX.Element;
  label: string;
};
interface MenuProps {
  menuItems: menuItem[];
  logo: string;
}
const Menu: React.FC<MenuProps> = ({ menuItems, logo }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    document.body.classList.toggle("dark-theme", !isDarkTheme);
  };

  return (
    <header className='header' id='header'>
      <nav className='nav container'>
        <a href='intro' className='nav__logo'>
          {logo}
        </a>

        <div className={`nav__menu ${menuOpen ? "show-menu" : ""}`} id='nav-menu'>
          <ul className='nav__list grid'>
            {menuItems.map((item) => (
              <li className='nav__item' key={item.to}>
                <ScrollLink
                  to={item.to}
                  smooth={true}
                  duration={500}
                  className='nav__link'
                  activeClass='active-link'
                  spy={true}
                  onClick={toggleMenu}
                >
                  {/* <i className={`${item.icon} nav__icon`}></i> {item.label} */}
                  <span className='nav__icon'> {item.icon}</span> {item.label}
                </ScrollLink>
              </li>
            ))}
          </ul>
          <i className='uil uil-times nav__close' id='nav-close' onClick={toggleMenu}></i>
        </div>

        <div className='nav__btns'>
          {/* Theme change button */}
          <i
            className={`uil uil-moon change-theme ${isDarkTheme ? "uil-sun" : ""}`}
            id='theme-button'
            onClick={toggleTheme}
          ></i>
          <div className='nav__toggle' id='nav-toggle' onClick={toggleMenu}>
            <i className='uil uil-apps'></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Menu;
