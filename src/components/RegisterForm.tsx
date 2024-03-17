"use client";

import type { NextPage } from 'next';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { registerEmployeeService } from '@/app/services/employeeService';
import { TRegisterEmployee } from '@/app/api/employeeApi';

// Define the validation schema for the form using Yup
const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  role: Yup.string().oneOf(['admin', 'manager', 'server', 'kitchen staff', 'delivery captain'], 'Role is required').required('Role is required'),
  shifts: Yup.array().of(
    Yup.object().shape({
      day: Yup.string().oneOf(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], 'Day is required').required('Day is required').default("Saturday"),
      startTime: Yup.string().required('Start time is required').default("10am"),
      endTime: Yup.string().required('End time is required').default("6pm")
    })
  ),
  contactInfo: Yup.object().shape({
    email: Yup.string().email('Email is not valid').required('Email is required'),
    phone: Yup.string().required('Phone is required')
  }),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
});

const RegisterForm: NextPage = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      role: '',
      shifts: [{ day: 'Monday', startTime: '10am', endTime: '6pm' }],
      contactInfo: { email: '', phone: '' },
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values: TRegisterEmployee) => {
      try {
        // Call the API service to register the employee
        const response = await registerEmployeeService(values);

        // Handle the response, e.g., show a success message
        console.log('Employee registered successfully:', response);
      } catch (error: any) {
        // Handle errors, e.g., display error message to user
        console.error('Failed to register employee:', error.message);
      }
    }
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={formik.handleSubmit}>
        {/* Name Field */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-500 text-xs mt-1">{formik.errors.name}</div>
          ) : null}
        </div>
        {/* Role Field */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role">
            Role
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="role"
            name="role"
            value={formik.values.role}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="manager">Manager</option>
            <option value="server">Server</option>
            <option value="kitchen staff">Kitchen Staff</option>
            <option value="delivery captain">Delivery Captain</option>
          </select>
          {formik.touched.role && formik.errors.role ? (
            <div className="text-red-500 text-xs mt-1">{formik.errors.role}</div>
          ) : null}
        </div>
        {/* Shifts Field */}
        {/* Note: Handling shifts as an array of objects requires a more complex setup, including dynamically adding and removing shift entries. This example focuses on the other fields. */}
        {/* Contact Info Fields */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            name="contactInfo.email"
            value={formik.values.contactInfo.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.contactInfo?.email && formik.errors.contactInfo?.email ? (
            <div className="text-red-500 text-xs mt-1">{formik.errors.contactInfo.email}</div>
          ) : null}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
            Phone
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone"
            type="tel"
            name="contactInfo.phone"
            value={formik.values.contactInfo.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.contactInfo?.phone && formik.errors.contactInfo?.phone ? (
            <div className="text-red-500 text-xs mt-1">{formik.errors.contactInfo.phone}</div>
          ) : null}
        </div>
        {/* Password Field */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-500 text-xs mt-1">{formik.errors.password}</div>
          ) : null}
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
