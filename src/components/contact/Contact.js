import React, { useState } from "react";
import Title from "../layouts/Title";
import contactImg from "../../assets/images/contactImg.jpg";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

function Contact({ content, theme }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [succesMessage, setSuccesMessage] = useState("");

  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (name === "") {
      setErrorMessage(`${content.error.name}`);
      setSuccesMessage("");
    } else if (email === "") {
      setErrorMessage(`${content.error.email}`);
      setSuccesMessage("");
    } else if (!emailValidation(email)) {
      setErrorMessage(`${content.error.email}`);
      setSuccesMessage("");
    } else if (subject === "") {
      setErrorMessage(`${content.error.subject}`);
      setSuccesMessage("");
    } else if (message === "") {
      setErrorMessage(`${content.error.message}`);
      setSuccesMessage("");
    } else {
      setSuccesMessage(`${content.error.succesMassage}`);
      setErrorMessage("");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };

  return (
    <section id="contact" className="w-full py-20 font-titleFont">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="w-full flex justify-center text-center">
          <Title title={content.title} des={content.subtitle} />
        </div>
        <div className="w-full flex flex-col lg:flex-row gap-10">
          <div
            className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg 
                    dark:shadow-shadowOne shadow-lg shadow-blue-500/50 flex flex-col bg-gradient-to-tl dark:from-bodyColor dark:to-[#181F30] from-blue-300 to-white"
          >
            <img
              className="w-full h-[230px] lg:h-full object-cover rounded-lg"
              src={contactImg}
              alt="contact"
            />
            <div className="w-full flex flex-col justify-center items-center py-2">
              <h2 className="text-base uppercase my-5 sml:mt-[90px] font-[500]">
                {content.contact}{" "}
                <span className="text-designColor">{content.contactSpan}</span>
              </h2>
              <div className="flex gap-5">
                <a
                  href="https://hu.linkedin.com/in/ronald-csik%C3%B3s-a60938235?original_referer="
                  className="dark:homeIcon homeIcon shadow-lg shadow-blue-500/50 bg-white bg-opacity-20 text-blue-800"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/Csikito"
                  className="dark:homeIcon homeIcon shadow-lg shadow-blue-500/50 bg-white bg-opacity-20 text-blue-800"
                >
                  <FaGithub />
                </a>
                <a
                  href="mailto:csikosronald@gmail.com"
                  className="dark:homeIcon homeIcon shadow-lg shadow-blue-500/50 bg-white bg-opacity-20 text-blue-800"
                >
                  <GrMail />
                </a>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col gap-8 p-4 lgl:p-8 rounded-lg dark:shadow-shadowOne shadow-lg shadow-blue-500/50 py-10 bg-gradient-to-br dark:from-bodyColor dark:to-bodyColor from-blue-300 to-white ">
            <form className="w-full flex flex-col gap-5">
              <div>
                <label htmlFor="name" className="flex flex-col gap-1 relative">
                  {content.name}
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    id="name"
                    name="name"
                    className={`${
                      errorMessage === `${content.error.name}` &&
                      "outline-red-500"
                    } contactInput`}
                    type="text"
                    required
                  />
                  <span className="absolute right-0 text-sm text-red-500">
                    {errorMessage === `${content.error.name}`
                      ? errorMessage
                      : ""}
                  </span>
                  <span className="absolute right-0 text-sm text-green-500 animate-pulse">
                    {succesMessage ? succesMessage : ""}
                  </span>
                </label>
              </div>
              <div>
                <label htmlFor="email" className="flex flex-col gap-1 relative">
                  {content.email}
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    name="email"
                    className={`${
                      errorMessage === `${content.error.email}` &&
                      "outline-red-500"
                    } contactInput`}
                    type="email"
                    required
                  />
                  <span className="absolute right-0 text-sm text-red-500">
                    {errorMessage === `${content.error.email}`
                      ? errorMessage
                      : ""}
                  </span>
                </label>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="flex flex-col gap-1 relative"
                >
                  {content.subject}
                  <input
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    id="subject"
                    name="subject"
                    className={`${
                      errorMessage === `${content.error.subject}` &&
                      "outline-red-500"
                    } contactInput`}
                    type="text"
                    required
                  />
                  <span className="absolute right-0 text-sm text-red-500 ">
                    {errorMessage === `${content.error.subject}`
                      ? errorMessage
                      : ""}
                  </span>
                </label>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="flex flex-col gap-1 relative "
                >
                  {content.message}
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    id="message"
                    name="message"
                    className={`${
                      errorMessage === `${content.error.message}` &&
                      "outline-red-500"
                    } contactTextArea`}
                    cols="20"
                    rows="8"
                    type="text"
                    required
                  />
                  <span className="absolute right-0 text-sm text-red-500">
                    {errorMessage === `${content.error.message}`
                      ? errorMessage
                      : ""}
                  </span>
                </label>
              </div>
              <div>
                <button
                  onClick={handleSend}
                  className="w-full rounded-sm border-b-[1px] dark:border-b-gray-600  dark:bg-[#181F30] bg-slate-800 bg-opacity-40 text-lightText   py-1 hover:border-designColor dark:hover:text-designColor hover:text-blue-800 font-[500] duration-300"
                >
                  {content.send}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
