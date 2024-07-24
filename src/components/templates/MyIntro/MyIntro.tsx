import "./MyIntro.scss";
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
          <div className='home__social'>
            {socialLinks.map((link, index) => (
              <a key={index} href={link.href} target='_blank' className='home__social-icon'>
                <i className={link.iconClass}></i>
              </a>
            ))}
          </div>

          <div className='home__img-data'>
            <img className='home__blob avatar' src={imageSrc} />
            <div className='home__data'>
              <h1 className='home__title'>{title}</h1>
              <h3 className='home__subtitle'>{subtitle}</h3>
              <div className='home__btn-scroll' style={{ display: "flex" }}>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MyIntro;
