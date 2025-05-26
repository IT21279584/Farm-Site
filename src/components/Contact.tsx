import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, User, MessageSquare } from "lucide-react";

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_elxonuz",
        "YOUR_TEMPLATE_ID",
        formRef.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          setSuccess(true);
          setError(false);
          formRef.current?.reset();
        },
        () => {
          setError(true);
          setSuccess(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen px-4 py-20 bg-gradient-to-r from-green-50 to-green-100"
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-extrabold text-green-800">
            Get In Touch
          </h2>
          <p className="mt-2 text-gray-600">
            We’d love to hear from you! Fill out the form below to reach out.
          </p>
        </div>
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="p-10 space-y-6 transition-all bg-white shadow-xl rounded-2xl"
        >
          <div className="relative">
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Name
            </label>
            <div className="flex items-center px-3 py-2 border border-gray-300 rounded-lg">
              <User className="w-5 h-5 mr-2 text-gray-400" />
              <input
                type="text"
                name="user_name"
                required
                placeholder="Your name"
                className="w-full focus:outline-none"
              />
            </div>
          </div>
          <div className="relative">
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Email
            </label>
            <div className="flex items-center px-3 py-2 border border-gray-300 rounded-lg">
              <Mail className="w-5 h-5 mr-2 text-gray-400" />
              <input
                type="email"
                name="user_email"
                required
                placeholder="Your email"
                className="w-full focus:outline-none"
              />
            </div>
          </div>
          <div className="relative">
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Message
            </label>
            <div className="flex items-start px-3 py-2 border border-gray-300 rounded-lg">
              <MessageSquare className="w-5 h-5 mt-1 mr-2 text-gray-400" />
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Write your message here..."
                className="w-full resize-none focus:outline-none"
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-3 font-semibold text-white transition duration-300 bg-green-600 rounded-lg hover:bg-green-700"
          >
            Send Message
          </button>

          {success && (
            <p className="font-medium text-center text-green-600 animate-pulse">
              Message sent successfully!
            </p>
          )}
          {error && (
            <p className="font-medium text-center text-red-600">
              Something went wrong. Try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
