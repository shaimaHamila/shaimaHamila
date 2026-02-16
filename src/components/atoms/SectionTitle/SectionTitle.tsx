import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subTitle: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subTitle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h2 className='section__title'>
        {"<"} {title} / {">"}
      </h2>
      <span className='section__subtitle'>{subTitle}</span>
    </motion.div>
  );
};
export default SectionTitle;
