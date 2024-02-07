import React, { useState } from "react";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };
  return (
    <section
      id="contact"
      className="h-[100%] w-[100vw] md:w-[1152px] md:h-[768px] flex justify-center items-center px-4 md:px-o py-6 md:py-0"
    >
      <div className="h-[100%] w-[100vw] md:w-[1014px] flex flex-col gap-4">
        <h1 className="text-[40px] font-bold leading-[48.4px] text-white">
          Contact
        </h1>
        <div className="flex flex-col  justify-center items-center gap-4 md:w-[1014px]">
          <p className="text-[16px] font-bold leading-[19.36px] text-white">
            Fill out this form to reach us.
          </p>
          <form
            onSubmit={onSubmit}
            className="flex flex-col md:w-[604px] md:h-[433px] gap-3 justify-between text-center"
          >
            <div className="flex justify-between">
              <input
                className="p-3 w-[48%]"
                w
                type="text"
                placeholder="Enter your name"
                value={firstName}
                name="firstName"
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                className="p-3 w-[48%]"
                type="text"
                placeholder="Enter your name"
                value={lastName}
                name="lastName"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <input
              className="p-3"
              type="email"
              placeholder="Enter your email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="p-3"
              type="tel"
              placeholder="Phone (optional)"
              name="email"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <textarea
              className="p-3"
              name=""
              id=""
              cols="30"
              rows="4"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <div className="flex justify-center">
              <button className="bg-blue-300 w-[180px] p-1 hover:bg-blue-500 hover:text-slate-800 font-bold text-[24px]">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
