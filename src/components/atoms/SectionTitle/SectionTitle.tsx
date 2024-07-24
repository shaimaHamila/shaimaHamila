interface SectionTitleProps {
  title: string;
  subTitle: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subTitle }) => {
  return (
    <div>
      <h2 className='section__title'>
        {"<"} {title} / {">"}
      </h2>
      <span className='section__subtitle'>{subTitle}</span>
    </div>
  );
};
export default SectionTitle;
