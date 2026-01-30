import React, { useState } from "react";

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState<{
    status: "idle" | "submitting" | "success" | "error";
    message: string;
  }>({ status: "idle", message: "" });

  // PHP endpoint on your server that actually sends the email.
  // Example: "https://creo-mar.com/contact.php"
  const PHP_CONTACT_ENDPOINT = "https://YOUR-PHP-DOMAIN.tld/contact.php";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    setFormState({ status: "submitting", message: "Sending Message..." });

    try {
      const response = await fetch(PHP_CONTACT_ENDPOINT, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("PHP contact form request failed");
      }

      setFormState({
        status: "success",
        message: "Thank you! Your message has been sent successfully.",
      });
      form.reset();
    } catch (err) {
      setFormState({
        status: "error",
        message: "Oops! There was a problem sending. Please try again later.",
      });
    }
  };

  return (
    <article id="contact" className="wrapper style4">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-deep-navy mb-4">
            Have us make stuff for you.
          </h2>
          <p className="text-xl text-gray-500">
            Ornare nulla proin odio consequat sapien vestibulum ipsum.
          </p>
        </header>

        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-200">
          <form
            id="contact-form"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="w-full px-5 py-4 bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-brand-blue outline-none rounded-lg transition-all"
              />
              <input
                type="email"
                name="_replyto"
                placeholder="Email"
                required
                className="w-full px-5 py-4 bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-brand-blue outline-none rounded-lg transition-all"
              />
            </div>
            <div className="mb-6">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full px-5 py-4 bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-brand-blue outline-none rounded-lg transition-all"
              />
            </div>
            <div className="mb-6">
              <textarea
                name="message"
                rows={5}
                placeholder="Message"
                required
                className="w-full px-5 py-4 bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-brand-blue outline-none rounded-lg transition-all resize-none"
              ></textarea>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                type="submit"
                disabled={formState.status === "submitting"}
                className="flex-1 py-4 bg-brand-blue hover:bg-deep-navy text-white rounded-lg font-bold transition-all disabled:opacity-50 uppercase tracking-widest text-sm"
              >
                Send Message
              </button>
              <button
                type="reset"
                className="px-8 py-4 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg font-bold transition-all uppercase tracking-widest text-sm"
              >
                Clear Form
              </button>
            </div>

            {formState.message && (
              <p
                className={`text-center font-bold mb-4 ${
                  formState.status === "success"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {formState.message}
              </p>
            )}
          </form>

          <hr className="my-12 border-gray-100" />

          <div className="text-center">
            <h3 className="text-lg font-bold text-deep-navy uppercase tracking-widest mb-8">
              Find us on ...
            </h3>
            <ul className="flex flex-wrap justify-center gap-6">
              {[
                { icon: "fa-twitter", link: "#" },
                { icon: "fa-facebook-f", link: "#" },
                { icon: "fa-dribbble", link: "#" },
                { icon: "fa-linkedin-in", link: "#" },
                { icon: "fa-tumblr", link: "#" },
                { icon: "fa-github", link: "#" },
              ].map((social, idx) => (
                <li key={idx}>
                  <a
                    href={social.link}
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-brand-blue hover:text-white transition-all transform hover:scale-110"
                  >
                    <i className={`fab ${social.icon} text-xl`}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <footer className="mt-16 text-center border-t border-gray-200 pt-8 pb-12 flex flex-col items-center gap-2">
          <div className="text-lg font-black text-deep-navy uppercase tracking-[0.2em]">
            CREO,MAR Design
          </div>
          <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </footer>
      </div>
    </article>
  );
};
