import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const Contact = () => {
  const [isMessageSent, setIsMessageSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    phone: Yup.string().required("Phone Number is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await fetch(
          "https://getform.io/f/66898367-6eb9-4747-bd19-7f19a4e2d639",
          {
            method: "POST",
            body: new URLSearchParams(values),
          }
        );

        if (response.ok) {
          setIsMessageSent("Message was sent successfully");
          formik.resetForm();
        } else {
          setErrorMessage("Something went wrong. Please try again later.");
        }
      } catch (error) {
        setErrorMessage("Something went wrong. Please try again later.");
      }
    },
  });

  return (
    <div className="bg-[#f6f8fc]">
      <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
        <h1 className="py-4 text-4xl font-bold text-center text-[#001b5e]">
          Contact
        </h1>
        <form
          onSubmit={formik.handleSubmit}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <div className="grid md:grid-cols-2 gap-4 w-full py-2">
            <div className="flex flex-col">
              <label className="uppercase text-sm py-2">Name</label>
              <input
                className="border-2 rounded-lg p-3 border-gray-300"
                type="text"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.name && formik.errors.name && (
                <div className="text-red-600">{formik.errors.name}</div>
              )}
            </div>
            <div className="flex flex-col">
              <label className="uppercase text-sm py-2">Phone</label>
              <input
                className="border-2 rounded-lg p-3 border-gray-300"
                type="tel"
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.phone && formik.errors.phone && (
                <div className="text-red-600">{formik.errors.phone}</div>
              )}
            </div>
          </div>
          <div className="flex flex-col py-2">
            <label className="uppercase text-sm py-2">Email</label>
            <input
              className="border-2 rounded-lg p-3 border-gray-300"
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-600">{formik.errors.email}</div>
            )}
          </div>
          <div className="flex flex-col py-2">
            <label className="uppercase text-sm py-2">Message</label>
            <textarea
              className="border-2 rounded-lg p-3 border-gray-300"
              rows="5"
              name="message"
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            ></textarea>
            {formik.touched.message && formik.errors.message && (
              <div className="text-red-600">{formik.errors.message}</div>
            )}
          </div>
          <button
            type="submit"
            className="bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg hover:bg-sky-700 transition duration-300"
          >
            Send Message
          </button>
          {isMessageSent && (
            <div className="text-green-600 mt-4">{isMessageSent}</div>
          )}
          {errorMessage && (
            <div className="text-red-600 mt-4">{errorMessage}</div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
