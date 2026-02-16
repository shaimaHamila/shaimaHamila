import SectionTitle from "../../atoms/SectionTitle/SectionTitle";
import "./MySkills.scss";
import { motion } from "framer-motion";

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

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const MySkills: React.FC<MySkillsProps> = ({ title, subTitle, skills }) => {
  return (
    <section id='skills' className='skills section'>
      <SectionTitle title={title} subTitle={subTitle} />
      <motion.div
        className='skills__container container '
        variants={container}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true }}
      >
        {skills.map((skill, index) => (
          <motion.div key={index} className='skills__card' variants={item}>
            <i className={`${skill.iconClass} skills__icon`} />
            <div>
              <h3 className='skills__name'>{skill.name}</h3>
              <p className='skills__category'>{skill.category}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
export default MySkills;
