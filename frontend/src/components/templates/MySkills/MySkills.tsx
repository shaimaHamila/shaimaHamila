import SectionTitle from "../../atoms/SectionTitle/SectionTitle";
import "./MySkills.scss";
interface Skill {
  iconClass: string;
  name: string;
  category: string;
}
interface MySkillsProps {
  title: string;
  subTitle: string;
  skills: Skill[];
}
const MySkills: React.FC<MySkillsProps> = ({ title, subTitle, skills }) => {
  return (
    <section id='skills' className='skills section'>
      <SectionTitle title={title} subTitle={subTitle} />
      <div className='skills__container container '>
        {skills.map((skill, index) => (
          <div key={index} className='skills__card'>
            <i className={`${skill.iconClass} skills__icon`} />
            <div>
              <h3 className='skills__name'>{skill.name}</h3>
              <p className='skills__category'>{skill.category}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default MySkills;
