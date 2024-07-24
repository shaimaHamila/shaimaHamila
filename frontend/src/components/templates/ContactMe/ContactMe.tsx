import React, { useRef, useState } from "react";
import "./ContactMe.scss";
import SectionTitle from "../../atoms/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";
import { MessageEmail } from "../../../types/Message";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

type ContactInfo = {
  icon: string;
  title: string;
  subtitle: string;
};

type ContactMeProps = {
  contactInformation: ContactInfo[];
  subTitle: string;
  title: string;
  loggedIn: boolean;
};

const ContactMe: React.FC<ContactMeProps> = ({ contactInformation, subTitle, title, loggedIn }) => {
  const initialState = {
    user_name: "",
    user_email: "",
    message: "",
  };
  const [formData, setFormData] = useState<MessageEmail>(initialState);
  const form = useRef<HTMLFormElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.user_name || !formData.user_email || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }
    if (form.current) {
      emailjs.sendForm("service_2q7gblm", "template_qe9ff7x", form.current, "hl8plJGai7DZtpHyT").then(
        () => {
          toast.success("Message submitted successfully!");
        },
        () => {
          toast.error("Failed to submit message. Please try again.");
        },
      );
      form.current.reset();
    }
    setFormData(initialState);
  };

  return (
    <section id='contact' className='contact section'>
      <SectionTitle title={title} subTitle={subTitle} />

      <div className='contact__container container grid'>
        <div>
          {contactInformation.map((info, index) => (
            <div className='contact__information' key={index}>
              <i className={info.icon + " contact__icon"}></i>
              <div>
                <h3 className='content__title'>{info.title}</h3>
                <span className='contact__subtitle'>{info.subtitle}</span>
              </div>
            </div>
          ))}
        </div>
        <form ref={form} className='contact__form grid' onSubmit={handleSubmit}>
          <div className='contact__inputs grid'>
            <div className='contact__content'>
              <label className='contact__label'>Full Name</label>
              <input
                type='text'
                name='user_name'
                className='contact__input'
                placeholder='Your name'
                value={formData.user_name}
                onChange={handleInputChange}
              />
            </div>

            <div className='contact__content'>
              <label className='contact__label'>Email</label>
              <input
                type='email'
                name='user_email'
                className='contact__input'
                placeholder='name@gmail.com'
                value={formData.user_email}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className='contact__content'>
            <label className='contact__label'>Message</label>
            <textarea
              rows={7}
              name='message'
              className='contact__input'
              placeholder='Your message ...'
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
          </div>

          <div style={{ display: "flex", gap: "1rem" }}>
            <button style={{ border: "none" }} type='submit' className='button button--flex'>
              Send Message
              <i className='uil uil-message button__icon'></i>
            </button>
            {loggedIn && (
              <Link to='/admin/messages' className='button button--flex'>
                <span>See Messages</span>
              </Link>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
