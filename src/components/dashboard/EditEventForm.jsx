import React, { useState, useEffect } from 'react';

import {Alert, Button, DatePicker, Form, Input, Select, Spin, Upload} from 'antd';
import {LoadingOutlined, PlusOutlined} from '@ant-design/icons';
import {useGetEventDetailsQuery, useGetVenuesQuery, useUpdateEventMutation} from "../../redux/apis/apiSlice.js";
import {data} from "autoprefixer";
import moment from "moment";

const { RangePicker } = DatePicker;

const EditEventForm = ({eventId}) => {
  const form = Form.useFormInstance();
  const {data: event} = useGetEventDetailsQuery(eventId)
  const { data: venuesList } = useGetVenuesQuery(null, {skip:!event});
  const [venues, setVenues] = useState([]);
  const [updateEvent, { isLoading }] = useUpdateEventMutation();
  const [errorMsg, setErrorMessage] = useState("");
  const [infoMsg, setInfoMessage] = useState("")

  useEffect(() => {
    setVenues(
      (venuesList || []).map((venue) => ({ label: venue.name, value: venue.id }))
    );
  }, [venuesList]);

  const filterOption = (input, option) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

  const onFinish = async (formData) => {

  }

  const onChangeField = (field)=>{
    console.log(field)
  }

  return (
    <div className="px-4 lg:h-screen max-w-[700px]">
      {event && venues && <Form
        form={form}
        initialValues={{
          title: event?.title,
          description: event.description,
          dates: [moment(event.start_date), moment(event.end_date)],
          venue_id: event.venue_id.id,

        }}
        layout="vertical"
        name="eventCreationForm"
        onFinish={onFinish}
        className="space-y-4"
      >
        <Form.Item
          name="title"
          label="Event Title"
          rules={[{required: true, message: 'Please enter the event title'}]}
        >
          <Input className="h-[40px]"/>
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[{required: true, message: 'Please enter the event description'}]}
        >
          <Input.TextArea rows={4}/>
        </Form.Item>
        <Form.Item
          name="dates"
          label="Dates"
          rules={[{required: true, message: 'Please select the end date'}]}
        >
          <RangePicker showTime className="h-[40px]"/>
        </Form.Item>
        <Form.Item
          name="banner"
          label="Banner Image"
          rules={[{required: true, message: 'Please upload the banner image'}]}>
          <Upload
            accept=".jpg, .jpeg, .png"
            maxCount={1}
            label="Image"
            listType="picture-card"
            defaultFileList={[{
              uid: '1',
              name: 'xxx.png',
              status: 'done',
              url: event.banner_url,
              percent: 33
            }]}
            rules={[{required: true, message: 'Please upload the banner image'}]}>
            <button type="button">
              <PlusOutlined/>
              <div style={{marginTop: 8}}>Upload</div>
            </button>
          </Upload>
        </Form.Item>
        <Form.Item
          name="venue_id"
          label="Venue"
          rules={[{required: true, message: 'Please select a venue'}]}>
          <Select
            className="w-full h-[40px]"
            showSearch
            placeholder="Select a venue"
            optionFilterProp="children"
            filterOption={filterOption}
            options={venues}
          />
        </Form.Item>
        <Form.Item hidden={true}>
          <Input val/>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="w-[120px] bg-black text-center h-[40px] hover:bg-gray-950"
            disabled={isLoading}
          >
            {isLoading ? (
              <Spin indicator={<LoadingOutlined style={{fontSize: 24}} spin/>}/>
            ) : (
              'Update'
            )}
          </Button>
        </Form.Item>
        {errorMsg && <Alert className="my-2" message={errorMsg} type="error"/>}
        {infoMsg && <Alert className="my-2" message={infoMsg} type="success"/>}
      </Form>}
    </div>
  );
};

export default EditEventForm;