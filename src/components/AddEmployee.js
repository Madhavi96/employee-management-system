import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUserRequest } from '../redux/actions/userActions';
import { useNavigate } from 'react-router-dom';
import { Card, Button, Form, Input } from 'antd'; // Using Ant Design components
import AddEmployeeImg from '../assets/employee-add.jpg'; // Import the image

const AddUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    dispatch(addUserRequest({ name: values.name, email: values.email }));
    navigate('/');
  };

  const handleCancel = () => {
    navigate('/'); // Navigate to the user list page when the cancel button is clicked
  };

  return (
    <div className='overlay'>
      <div className="add-user-container">
        <Card
          title="Add Employee"
          style={{ width: 400, margin: '0 auto', padding: '20px' }}
          cover={<img src={AddEmployeeImg} className='add-employee' />}
        >
          <Form
            layout="vertical"
            onFinish={handleSubmit}
            initialValues={{ name, email }}
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: 'Please input the Employee\'s Name!' }]}
            >
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Employee's Name"
              />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: 'Please input the Employee\'s Email!' }, { type: 'email', message: 'Please input a valid email!' }]}
            >
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter user's email"
              />
            </Form.Item>

            <Form.Item>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button onClick={handleCancel}>Cancel</Button>
                <Button type="primary" htmlType="submit">Add</Button>
              </div>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default AddUser;
