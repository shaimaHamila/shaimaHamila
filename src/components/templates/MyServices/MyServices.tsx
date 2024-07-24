import SectionTitle from "../../atoms/SectionTitle/SectionTitle";
import "./MyServices.scss";
interface Service {
  iconClass: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

interface MyServicesProps {
  title: string;
  subTitle: string;
  services: Service[];
}
const MyServices: React.FC<MyServicesProps> = ({ title, subTitle, services }) => {
  return (
    <section className='services section' id='services'>
      {/* <!--==================== SERVICES ====================--> */}
      <SectionTitle title={title} subTitle={subTitle} />

      <div className='services__container container grid'>
        {services.map((service, index) => (
          <div className='services__content' key={index}>
            <div>
              <i className={service.iconClass + " services__icon"} />
              <h3 className='services__title'>{service.title}</h3>
              <p>{service.description}</p>
            </div>

            <a
              href={service.buttonLink}
              target={service.buttonLink !== "#projects" ? "_blank" : "_self"}
              className='button button--flex button--small button--link services__button'
            >
              {service.buttonText}
              <i className='uil uil-arrow-right button__icon' />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
export default MyServices;
