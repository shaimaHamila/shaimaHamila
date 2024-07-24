import { useState } from "react";
import SectionTitle from "../../atoms/SectionTitle/SectionTitle";
import "./MyQualification.scss";

type Qualification = {
  title: string;
  subtitle: string;
  calendar: string;
};

type Section = {
  title: string;
  qualifications: Qualification[];
};

type MyQualificationProps = {
  sections: {
    education: Section;
    work: Section;
  };
  title: string;
  subTitle: string;
};

const MyQualification: React.FC<MyQualificationProps> = ({ sections, title, subTitle }) => {
  const [activeSection, setActiveSection] = useState("education");
  const [qualifications, setQualifications] = useState(sections.education.qualifications);

  const handleTabClick = (section: "education" | "work") => {
    setActiveSection(section);
    setQualifications(sections[section].qualifications);
  };
  return (
    <section className='qualification__section section' id='qualification'>
      <SectionTitle title={title} subTitle={subTitle} />

      <div className='qualification__container container'>
        <div className='qualification__tabs'>
          <div
            className={`qualification__button button--flex ${
              activeSection === "education" ? "qualification__active" : ""
            }`}
            onClick={() => handleTabClick("education")}
          >
            <i className='uil uil-graduation-cap qualification__icon'></i>
            Education
          </div>

          <div
            className={`qualification__button button--flex ${activeSection === "work" ? "qualification__active" : ""}`}
            onClick={() => handleTabClick("work")}
          >
            <i className='uil uil-bag qualification__icon'></i>
            Work
          </div>
        </div>

        <div className='qualification__sections'>
          <div className={`qualification__content qualification__active`} data-content>
            {qualifications.map((qual, index) => (
              <div className='qualification__data' key={index}>
                {index % 2 === 0 ? (
                  <>
                    <div>
                      <h3 className='qualification__title'>{qual.title}</h3>
                      <span className='qualification__subtitle'>{qual.subtitle}</span>
                      <div className='qualification__calendar'>
                        <i className='uil uil-calendar-alt'></i>
                        {qual.calendar}
                      </div>
                    </div>
                    <div>
                      <span className='qualification__rounder'></span>
                      {index < qualifications.length - 1 && <span className='qualification__line'></span>}
                    </div>
                  </>
                ) : (
                  <>
                    <div></div>
                    <div>
                      <span className='qualification__rounder'></span>
                      {index < qualifications.length - 1 && <span className='qualification__line'></span>}
                    </div>
                    <div>
                      <h3 className='qualification__title'>{qual.title}</h3>
                      <span className='qualification__subtitle'>{qual.subtitle}</span>
                      <div className='qualification__calendar'>
                        <i className='uil uil-calendar-alt'></i>
                        {qual.calendar}
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyQualification;
