import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const Form = () => {
  const form = useRef();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_djnhadc",
        "template_o8ndrdq",
        form.current,
        "NtguAprVgAi9PGSbr"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setUserName("");
    setUserEmail("");
    setMessage("");
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="w-full flex flex-col mx-auto justify-center items-center gap-y-5 py-10 bg-gray-100 shadow-xl rounded-3xl text-black" 
    >
      <input
        type="text"
        name="user_name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="name"
        className="outline-0 border-b border-b-gray-200 p-2 w-72 text-sm"
      />

      <input
        type="email"
        name="user_email"
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
        placeholder="email"
        className="outline-0 border-b border-b-gray-200 p-2 w-72 text-sm"
      />
      <textarea
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="message"
        className="outline-0 border-b border-b-gray-200 p-2 w-72 text-sm"
      />
      <input
        type="submit"
        value="Send"
        className='bg-yellow-500 rounded-xl text-white w-44 h-11 mt-20 hover:bg-stone-200 hover:text-black hover:duration-200 hover:scale-110 duration-200 shadow-xl">'
      />
    </form>
  );
};
