import SectionTitle from "../../atoms/SectionTitle/SectionTitle";
import "./AboutMe.scss";

interface AboutMeProps {
  title: string;
  subTitle: string;
  imageSrc: string;
  description: string;
  points: string[];
  yearsExperience: string;
  completedProjects: string;
  companiesWorked: string;
  cvLink: string;
}
const AboutMe: React.FC<AboutMeProps> = ({
  title,
  subTitle,
  imageSrc,
  description,
  points,
  yearsExperience,
  completedProjects,
  companiesWorked,
  cvLink,
}) => {
  return (
    <section className='about section' id='about'>
      <SectionTitle title={title} subTitle={subTitle} />
      <div className='about__container container grid'>
        <img src={imageSrc} alt='about me' className='about__img' />

        <div className='about__data'>
          <p className='about__description'>{description}</p>
          <ul className='about__description-ul'>
            {points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
          <div className='about__info'>
            <div>
              <span className='about__info-title'>{yearsExperience}</span>
              <span className='about__info-name'>
                years
                <br />
                experience
              </span>
            </div>
            <div>
              <span className='about__info-title'>{completedProjects}</span>
              <span className='about__info-name'>
                Completed
                <br />
                project
              </span>
            </div>
            <div>
              <span className='about__info-title'>{companiesWorked}</span>
              <span className='about__info-name'>
                Companies
                <br />
                worked
              </span>
            </div>
          </div>

          <div className='about__buttons'>
            <a download='' href={cvLink} className='button button--flex'>
              Download CV<i className='uil uil-download-alt button__icon'></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutMe;
