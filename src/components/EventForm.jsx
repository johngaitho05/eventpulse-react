import React, { useState } from 'react';
import { Form, Input, Spin, Button } from 'antd';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import logo from '../assets/logo-sm.png';
import { LoadingOutlined } from '@ant-design/icons';
import { useCreateEventMutation } from '../redux/apis/apiSlice';

const EventCreationForm = () => {
    const [form] = Form.useForm();
    const [bannerFile, setBannerFile] = useState(null);
    const [createEvent, { isLoading }] = useCreateEventMutation();

    const onFinish = (values) => {
        values.bannerFile = bannerFile;
        console.log('Received values:', values);
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setBannerFile(file);
    };

    return (
        <div className="p-4 auth h-auto lg:h-screen pt-[7rem]">
            <div className="bg-white py-10 max-w-7xl mx-auto px-10 rounded-[20px] overflow-y-auto">
                <div className="flex flex-col justify-center items-center">
                    <div>
                        <img src={logo} alt="" className="h-11 object-cover" />
                    </div>
                    <h2 className="font-bold text-2xl">Event Pulse</h2>
                    <p className="my-1 text-sm text-gray-700">
                        You are a few clicks away from creating a new event
                    </p>
                </div>
                <Form
                    form={form}
                    layout="vertical"
                    name="eventCreationForm"
                    onFinish={onFinish}
                    className="space-y-4"
                >
                    <Form.Item
                        name="title"
                        label="Event Title"
                        rules={[{ required: true, message: 'Please enter the event title' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="description"
                        label="Description"
                        rules={[{ required: true, message: 'Please enter the event description' }]}
                    >
                        <Input.TextArea rows={4} />
                    </Form.Item>
                    <Form.Item
                        name="startDate"
                        label="Start Date"
                        rules={[{ required: true, message: 'Please select the start date' }]}
                    >
                        <DatePicker style={{ width: '100%' }} />
                    </Form.Item>
                    <Form.Item
                        name="endDate"
                        label="End Date"
                        rules={[{ required: true, message: 'Please select the end date' }]}
                    >
                        <DatePicker style={{ width: '100%' }} />
                    </Form.Item>
                    <Form.Item
                        name="bannerUrl"
                        label="Banner URL"
                        rules={[{ required: true, message: 'Please upload the banner image' }]}
                    >
                        <input
                            type="file"
                            className="mt-1 block w-full border border-gray-300 p-2 shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
                            onChange={handleFileChange}
                        />
                    </Form.Item>
                    <Form.Item
                        name="venueId"
                        label="Venue ID"
                        rules={[{ required: true, message: 'Please enter the venue ID' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="w-full bg-black text-center h-[40px] hover:bg-gray-950"
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <Spin
                                    indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
                                />
                            ) : (
                                'create event'
                            )}
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default EventCreationForm;
