import "./MyIntro.scss";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

interface SocialLink {
  href: string;
  iconClass: string;
}

interface MyIntroProps {
  socialLinks: SocialLink[];
  imageSrc: string;
  title: string;
}

const MyIntro: React.FC<MyIntroProps> = ({ socialLinks, imageSrc, title }) => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [title, "Frontend Developer", "React Specialist", "UI/UX Enthusiast", "Problem Solver"],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 2000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, [title]);

  return (
    <section className='home section' id='intro'>
      <div className='home__container container'>
        <div className='home__content'>
          {/* Left Column: Text & Socials */}
          <div className='home__data'>
            <motion.h1
              className='home__title'
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Hi, I'm <span className='text-highlight'>Shaima Hamila</span>
            </motion.h1>

            <motion.h3
              className='home__subtitle'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <span ref={el} />
            </motion.h3>

            <motion.p
              className='home__description'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Transforming ideas into reality with code. I build accessible, responsive, and performant web
              applications.
            </motion.p>

            <motion.div
              className='home__actions'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <a href='#contact' className='button button--flex glow-on-hover'>
                Let's Talk <i className='uil uil-message button__icon'></i>
              </a>

              <div className='home__social'>
                {socialLinks.map((link, index) => (
                  <a key={index} href={link.href} target='_blank' className='home__social-icon' rel='noreferrer'>
                    <i className={link.iconClass}></i>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Image */}
          <motion.div
            className='home__img-wrapper'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className='blob-shape'>
              <img className='home__blob' src={imageSrc} alt='Profile' />
            </div>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          className='home__scroll'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <a href='#about' className='home__scroll-button button--flex'>
            <i className='uil uil-mouse-alt home__scroll-mouse'></i>
            <span className='home__scroll-name'>Scroll Down</span>
            <i className='uil uil-arrow-down home__scroll-arrow'></i>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default MyIntro;
