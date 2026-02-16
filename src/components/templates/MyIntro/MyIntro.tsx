import "./MyIntro.scss";
import { motion } from "framer-motion";

interface SocialLink {
  href: string;
  iconClass: string;
}

interface MyIntroProps {
  socialLinks: SocialLink[];
  imageSrc: string;
  title: string;
  subtitle: string;
}

const MyIntro: React.FC<MyIntroProps> = ({ socialLinks, imageSrc, title, subtitle }) => {
  return (
    <section className='home section' id='intro'>
      <div className='home__container container '>
        <div className='home__content grid'>
          <motion.div
            className='home__social'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {socialLinks.map((link, index) => (
              <a key={index} href={link.href} target='_blank' className='home__social-icon' rel='noreferrer'>
                <i className={link.iconClass}></i>
              </a>
            ))}
          </motion.div>

          <div className='home__img-data'>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className='home__blob-container'
            >
              <img className='home__blob avatar' src={imageSrc} alt='Profile' />
            </motion.div>

            <div className='home__data'>
              <motion.h1
                className='home__title'
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {title}
              </motion.h1>
              <motion.h3
                className='home__subtitle'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                {subtitle}
              </motion.h3>

              <motion.div
                className='home__btn-scroll'
                style={{ display: "flex" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <a href='#contact' className='button button--flex glow-on-hover'>
                  Get in touch<i className='uil uil-message button__icon'></i>
                </a>
                <div className='home__scroll'>
                  <a href='#about' className='home__scroll-button button--flex'>
                    <i className='uil uil-mouse-alt home__scroll-mouse'></i>
                    <span className='home__scroll-name'>Scroll down</span>
                    <i className='uil uil-arrow-down home__scroll-arrow'></i>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MyIntro;
