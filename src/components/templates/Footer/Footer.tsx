import React from "react";
import "./Footer.scss";

type FooterProps = {
  title: string;
  subtitle: string;
  socialLinks: { href: string; iconClass: string }[];
  navLinks: { href: string; label: string }[];
  copyText: string;
};

const Footer: React.FC<FooterProps> = ({ title, subtitle, socialLinks, navLinks, copyText }) => {
  return (
    <footer className='footer'>
      <div className='footer__bg'>
        <div className='footer__container container grid'>
          <div>
            <h1 className='footer__title'>{title}</h1>
            <p className='footer__subtitle'>{subtitle}</p>
            <div className='footer__socials'>
              {socialLinks.map((link, index) => (
                <a href={link.href} target='_blank' className='footer__social' key={index}>
                  <i className={link.iconClass}></i>
                </a>
              ))}
            </div>
          </div>

          <ul className='footer__links'>
            {navLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className='footer__link'>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className='footer__copy'>&#169; {copyText}</p>
      </div>
    </footer>
  );
};

export default Footer;
