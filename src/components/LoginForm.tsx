"use client";
import { useState } from 'react';
import { Input, Button, Form, message } from 'antd';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import type { NextPage } from 'next';
import Link from "next/link";
import { authService } from '@/app/services/authService';
import { TLoginEmployee } from '@/app/api/authApi';
import { useZustandStore } from "@/app/store/store-provider";
import jwt from 'jsonwebtoken';

const LoginForm: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const { setTokens } = useZustandStore((state) => state);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Please input your username!'),
    password: Yup.string().required('Please input your password!'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values: TLoginEmployee) => {
      setLoading(true);
      try {
        const response = await authService(values, setTokens);
        message.success('Login successful');
      } catch (error) {
        console.error('Login failed', error);
        message.error('Login failed');
      }
      setLoading(false);
    },
  });

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-md w-80">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <Form
          name="loginForm"
          initialValues={{ remember: true }}
          onFinish={formik.handleSubmit}
        >
          <Form.Item
            name="name"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input
              placeholder="Username"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-red-500">{formik.errors.name}</div>
            ) : null}
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password
              placeholder="Password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500">{formik.errors.password}</div>
            ) : null}
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              block
              className="mt-4"
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </main>
  );
};

export default LoginForm;
