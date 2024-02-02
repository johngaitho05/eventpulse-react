import React, { useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { EyeInvisibleOutlined, EyeOutlined, GoogleOutlined } from 'react-icons/all';
import { Link } from 'react-router-dom';

const RegistrationForm = () => {
    const [form] = Form.useForm();
    const [showPassword, setShowPassword] = useState(false);

    const handlePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (values) => {
        // Handle form submission logic here
        console.log('Received values:', values);
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <Form
                form={form}
                name="registrationForm"
                onFinish={handleSubmit}
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
            >
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Please enter your name!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        { required: true, message: 'Please enter your email!' },
                        { type: 'email', message: 'Please enter a valid email address!' },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Phone"
                    name="phone"
                    rules={[{ required: true, message: 'Please enter your phone number!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please enter your password!' }]}
                >
                    <Input.Password
                        iconRender={(visible) =>
                            visible ? <EyeOutlined /> : <EyeInvisibleOutlined />
                        }
                        onChange={handlePasswordVisibility}
                    />
                </Form.Item>

                <Form.Item
                    label="Confirm Password"
                    name="confirmPassword"
                    dependencies={['password']}
                    rules={[
                        { required: true, message: 'Please confirm your password!' },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('The two passwords do not match!'));
                            },
                        }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item label="Country" name="country">
                    <Input />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Register
                    </Button>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Checkbox>Remember me</Checkbox>
                    <Link to="/login" className="ml-2">
                        Already have an account? Login here
                    </Link>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button icon={<GoogleOutlined />} onClick={() => alert('Sign in with Google')}>
                        Sign in with Google
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default RegistrationForm;
