import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useSubject } from './SubjectContext';

const Contact = () => {
  const { subject } = useSubject();

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    phone: Yup.string()
      .required('Phone is required')
      .matches(/^((\+36)|06)?\d*$/, 'Phone must start with "06" and only contain numbers after that'),
    email: Yup.string()
      .email('Invalid email')
      .required('Email is required'),
    subject: Yup.string().required('Subject is required'),
    message: Yup.string().required('Message is required'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '06',
      email: '',
      subject: '',
      message: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault(); 

    validationSchema
      .validate(formik.values, { abortEarly: false }) 
      .then(() => {

        formik.handleSubmit();
      })
      .catch((errors) => {

        const formErrors = {};
        errors.inner.forEach((error) => {
          formErrors[error.path] = error.message;
        });
        formik.setErrors(formErrors);
      });
  };

  const handlePhoneInput = (e) => {
    const numericRegex = /^((\+36)|06)?\d*$/;
    if (e.key !== 'Backspace' && !numericRegex.test(e.key)) {
      e.preventDefault();
    }
  };

  return (
    <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'>Contact</h1>
      <form
        action='https://getform.io/f/4431c9a2-8a74-4279-8423-ba8a20a45f51'
        method='POST'
        encType='multipart/form-data'
        onSubmit={handleSubmit}
      >
        <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
          <div className='flex flex-col'>
            <label className='uppercase text-sm py-2'>Name</label>
            <input
              className='border-2 rounded-lg p-3 flex border-gray-300'
              type='text'
              name='name'
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name && (
              <div className='text-red-600'>{formik.errors.name}</div>
            )}
          </div>
          <div className='flex flex-col'>
            <label className='uppercase text-sm py-2'>Phone</label>
            <input
              placeholder='+36'
              className='border-2 rounded-lg p-3 flex border-gray-300'
              type='tel'
              name='phone'
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              onKeyDown={handlePhoneInput}
            />
            {formik.touched.phone && formik.errors.phone && (
              <div className='text-red-600'>{formik.errors.phone}</div>
            )}
          </div>
        </div>
        <div className='flex flex-col py-2'>
          <label className='uppercase text-sm py-2'>Email</label>
          <input
            className='border-2 rounded-lg p-3 flex border-gray-300'
            type='email'
            name='email'
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && (
            <div className='text-red-600'>{formik.errors.email}</div>
          )}
        </div>
        <div className='flex flex-col py-2'>
        <label className='uppercase text-sm py-2'>Subject</label>
            <input
              id='contact-subject'
              className='border-2 rounded-lg p-3 flex border-gray-300'
              type='text'
              name='subject'
              value={subject}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          {formik.touched.subject && formik.errors.subject && (
            <div className='text-red-600'>{formik.errors.subject}</div>
          )}
        </div>
        <div className='flex flex-col py-2'>
          <label className='uppercase text-sm py-2'>Message</label>
          <textarea
            className='border-2 rounded-lg p-3 border-gray-300'
            rows='10'
            name='message'
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></textarea>
          {formik.touched.message && formik.errors.message && (
            <div className='text-red-600'>{formik.errors.message}</div>
          )}
        </div>
        <button type='submit' className='bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg hover:bg-sky-700'>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
