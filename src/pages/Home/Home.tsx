import {
  HiOutlineBriefcase,
  HiOutlineDocumentText,
  HiOutlineHome,
  HiOutlineLightBulb,
  HiOutlineMail,
  HiOutlinePhotograph,
  HiOutlineUser,
} from "react-icons/hi";
import AboutMe from "../../components/templates/AboutMe/AboutMe";
import ContactMe from "../../components/templates/ContactMe/ContactMe";
import Footer from "../../components/templates/Footer/Footer";
import Menu from "../../components/templates/Menu/Menu";
import MyIntro from "../../components/templates/MyIntro/MyIntro";
import FlagshipCaseStudies from "../../components/templates/FlagshipCaseStudies/FlagshipCaseStudies";
import MyProjects from "../../components/templates/MyProjects/MyProjects";
import Testimonials from "../../components/templates/Testimonials/Testimonials";
import MyQualification from "../../components/templates/MyQualification/MyQualification";
import MyServices from "../../components/templates/MyServices/MyServices";
import MySkills from "../../components/templates/MySkills/MySkills";
import {
  ContactInformation,
  NavLinks,
  Projects,
  Sections,
  Services,
  SkillsData,
  SocialLinks,
} from "../../MyData/MyData";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Home: React.FC = () => {
  return (
    <>
      <Menu logo={"Shaima Hamila"} menuItems={menuItems} />
      <div className='main'>
        <MyIntro socialLinks={SocialLinks} imageSrc={"ShaimaHamila.png"} title={"Hi, I'am Shaima Hamila"} />
        <AboutMe
          title={"About Me"}
          subTitle={"My introduction"}
          imageSrc={"shaimaHamila-about-ing.png"}
          description={
            "I’m a Full-Stack & Backend Software Engineer with 3+ years of experience based in Luxembourg. I specialize in designing robust architectures, secure APIs, and responsive frontends for scalable web applications."
          }
          points={[
            "🚀 I build production fintech and SaaS platforms.",
            "⚡ Expert in NestJS, React, and PostgreSQL.",
            "🔥 Passionate about clean code and system design.",
          ]}
          yearsExperience={"03+"}
          completedProjects={"15+"}
          companiesWorked={"05+"}
          cvLink={"pdf/ShaimaHamilaCV2026.pdf"}
        />
        <MyServices title='Services' subTitle='What I offer' services={Services} />
        <MySkills title={"My Skills"} subTitle={"My technical skills"} skills={SkillsData} />
        <MyQualification sections={Sections} title={"Qualification"} subTitle={"My personal journey"} />
        <FlagshipCaseStudies />
        <MyProjects projects={Projects} title={"Other Projects"} subTitle={"More of my work"} />
        <Testimonials />
        <ContactMe
          contactInformation={ContactInformation}
          subTitle={"Get in touch"}
          title={"Contact Me"}
          loggedIn={false}
        />
      </div>
      <Footer
        title='Shaima Hamila'
        subtitle='Full-stack JS developer'
        socialLinks={SocialLinks}
        navLinks={NavLinks}
        copyText='2026-Designed and Developed by Shaima Hamila ❤️'
      />
      <ToastContainer />
    </>
  );
};
export default Home;
const menuItems = [
  { to: "intro", icon: <HiOutlineHome />, label: "Home" },
  { to: "about", icon: <HiOutlineUser />, label: "About" },
  { to: "services", icon: <HiOutlineBriefcase />, label: "Services" },
  { to: "skills", icon: <HiOutlineLightBulb />, label: "Skills" },
  { to: "qualification", icon: <HiOutlineDocumentText />, label: "Qualification" },
  { to: "projects", icon: <HiOutlinePhotograph />, label: "Projects" },
  { to: "contact", icon: <HiOutlineMail />, label: "Contact" },
];
