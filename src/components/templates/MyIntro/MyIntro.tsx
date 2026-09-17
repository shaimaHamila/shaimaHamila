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
      strings: ["Full-Stack Software Engineer", "Backend Specialist (NestJS & Postgres)", "React & TypeScript Developer", "UX/UI Designer"],
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
              I design and build full-stack web applications — from client projects to production systems.
            </motion.p>
            <motion.div
              className='home__status-badge'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                background: 'rgba(0, 200, 83, 0.1)',
                border: '1px solid rgba(0, 200, 83, 0.3)',
                borderRadius: '20px',
                color: '#00e676',
                fontWeight: '500',
                marginBottom: '1.5rem',
                fontSize: '0.9rem'
              }}
            >
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#00e676', boxShadow: '0 0 8px #00e676' }}></span>
              Open to full-time roles and freelance projects in Luxembourg
            </motion.div>

            <motion.div
              className='home__actions'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
            >
              <a href='#about' className='button button--flex glow-on-hover' style={{ backgroundColor: 'var(--first-color)' }}>
                For Employers <i className='uil uil-file-alt button__icon'></i>
              </a>
              <a href='#services' className='button button--flex glow-on-hover' style={{ backgroundColor: 'transparent', border: '1px solid var(--first-color)', color: 'var(--first-color)' }}>
                For Clients <i className='uil uil-briefcase-alt button__icon'></i>
              </a>

              <div className='home__social' style={{ marginTop: '1rem', width: '100%' }}>
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
              {/* React Atom Orbits */}
              <div className='orbit-container'>
                <div className='react-orbit orbit-1'></div>
                <div className='react-orbit orbit-2'></div>
                <div className='react-orbit orbit-3'></div>
              </div>
              {/* Profile Nucleus */}
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
