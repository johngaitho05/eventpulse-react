import React, { useState, useEffect } from 'react';
import { Form, Input, Spin, Button, DatePicker, Upload, Select } from 'antd';
import 'react-datepicker/dist/react-datepicker.css';
import logo from '../assets/logo-sm.png';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { useCreateEventMutation, useGetVenuesQuery } from '../redux/apis/apiSlice';

const EventCreationForm = () => {
    const form = Form.useFormInstance();
    const [createEvent, { isLoading }] = useCreateEventMutation();
    const [errorMsg, setErrorMessage] = useState('');
    const { data: venueList, isFetching, isSuccess, isError, error } = useGetVenuesQuery();
    const [venues, setVenues] = useState([]);

    const userData = JSON.parse(localStorage.getItem('user'));
    const userId = userData?.id;
    console.log(userId);

    useEffect(() => {
        setVenues((venueList || []).map((venue) => ({ label: venue.name, value: venue.id })));
    }, [venueList]);

    const formatDate = (date) => {
        const formattedDate = new Date(date);
        return formattedDate.toISOString().split('T')[0]; // Extracts only the date part without the timezone offset
    };

    const onFinish = async (values) => {
        const formData = new FormData();
        formData.append('user_id', values.user_id);
        formData.append('title', values.title);
        formData.append('description', values.description);
        formData.append('start_date', formatDate(values.start_date));
        formData.append('end_date', formatDate(values.end_date));
        formData.append('venue_id', values.venue_id);
        formData.append('banner_url', values.banner_url.file.originFileObj);

        if (values.banner_url && values.banner_url.file) {
            formData.append('banner_url', values.banner_url.file.originFileObj);
        }

        try {
            const response = await createEvent(formData);
        } catch (error) {
            // Handle error
        }
    };

    const filterOption = (input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

    return (
        <div className="p-4 auth h-auto pt-[7rem]">
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
                    // form={form}
                    layout="vertical"
                    name="eventCreationForm"
                    onFinish={onFinish}
                    className="space-y-4"
                    enctype="multipart/form-data"
                >
                    <Form.Item name="user_id" hidden initialValue={userId}>
                        <Input />
                    </Form.Item>
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
                        name="start_date"
                        label="Start Date"
                        rules={[{ required: true, message: 'Please select the start date' }]}
                    >
                        <DatePicker style={{ width: '100%' }} />
                    </Form.Item>
                    <Form.Item
                        name="end_date"
                        label="End Date"
                        rules={[{ required: true, message: 'Please select the end date' }]}
                    >
                        <DatePicker
                            style={{ width: '100%' }}
                            className="mt-1 block w-full border border-gray-300 p-2 shadow-sm text-gray-700 sm:text-sm rounded-md"
                        />
                    </Form.Item>
                    <Form.Item
                        name="banner_url"
                        label="Banner Image"
                        rules={[{ required: true, message: 'Please upload the banner image' }]}
                    >
                        <Upload
                            accept=".jpg, .jpeg, .png"
                            maxCount={1}
                            label="Image"
                            listType="picture-card"
                            rules={[{ required: true, message: 'Please upload the banner image' }]}
                        >
                            <button type="button">
                                <PlusOutlined />
                                <div style={{ marginTop: 8 }}>Upload</div>
                            </button>
                        </Upload>
                    </Form.Item>
                    <Form.Item
                        name="venue_id"
                        label="Venue"
                        rules={[{ required: true, message: 'Please select a venue' }]}
                    >
                        <Select
                            className="w-full h-[40px]"
                            showSearch
                            placeholder="Select a venue"
                            optionFilterProp="children"
                            filterOption={filterOption}
                            options={venues}
                        />
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
