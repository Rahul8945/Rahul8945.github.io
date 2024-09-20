import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

export const Email = () => {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_3yqzu0x',    // Your Service ID from EmailJS
        'template_314eavk',   // Your Template ID from EmailJS
        form.current,         // Use the form reference directly
        'Nrst7HbCXe0pkdXHc'   // Your User ID or Public Key from EmailJS
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccessMessage("Your message has been sent successfully!");
          setErrorMessage(""); // Reset error message
          form.current.reset(); // Clear the form
        },
        (error) => {
          console.log(error.text);
          setErrorMessage("Failed to send message. Please try again later.");
          setSuccessMessage(""); // Reset success message
        }
      );
  };

  return (
    <div className="contact-container mx-auto mt-10 p-6 shadow-lg rounded-2xl bg-black text-white" style={{ boxShadow: 'rgba(23, 92, 230, 0.15) 0px 4px 24px' }}>
      <h2 className="text-3xl font-bold mb-6 text-center text-green-400">Contact Me :</h2>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-y-4 items-start ">
        <label className="font-semibold">Name:</label>
        <input
          type="text"
          name="user_name" // Ensure this matches your EmailJS template
          placeholder="Your Name"
          className="border p-2 rounded bg-black text-white xl:w-[800px] lg:w-[500px] md:w-[500px]"
          required
        />

        <label className="font-semibold">Email:</label>
        <input
          type="email"
          name="user_email" // Ensure this matches your EmailJS template
          placeholder="Your Email"
          className="border p-2 rounded bg-black text-white xl:w-[800px] lg:w-[500px] md:w-[500px]"
          required
        />

        <label className="font-semibold">Phone (optional):</label>
        <input
          type="text"
          name="user_phone" // Ensure this matches your EmailJS template
          placeholder="Your Phone Number"
          className="border p-2 rounded bg-black text-white xl:w-[800px] lg:w-[500px] md:w-[500px]"
        />

        <label className="font-semibold">Message:</label>
        <textarea
          name="message" // Ensure this matches your EmailJS template
          placeholder="Your Message"
          rows="5"
          className="border p-2 rounded bg-black text-white xl:w-[800px] lg:w-[500px] md:w-[500px]"
          required
        />
        
        <button
          type="submit"
          className="bg-orange-500 text-white p-2 rounded hover:bg-orange-600 transition-all"
        >
          Send Message
        </button>

        {successMessage && <p className="mt-4 text-green-500">{successMessage}</p>}
        {errorMessage && <p className="mt-4 text-red-500">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default Email;
