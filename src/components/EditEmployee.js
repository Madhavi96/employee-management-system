import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateUserRequest } from '../redux/actions/userActions';
import { useNavigate } from 'react-router-dom';
import { Drawer, Button, Form, Input } from 'antd';
import { EditOutlined } from '@ant-design/icons'; // Importing the Edit icon

const EditUser = ({ visible, onClose, userToEdit }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (userToEdit) {
      setName(userToEdit.name);
      setEmail(userToEdit.email);
    }
  }, [userToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserRequest({ id: userToEdit.id, name, email }));
    onClose(); // Close the drawer after submitting
    navigate('/'); // Navigate to the user list page
  };

  return (
    <Drawer
      title={
        <span>
          <EditOutlined style={{ marginRight: 8 }} />
          Edit Employee
        </span>
      }
      placement="right"
      closable={true}
      onClose={onClose}
      visible={visible}
      width={500}
      footer={
        <div style={{ textAlign: 'center' }}>
          <Button onClick={onClose} style={{ marginRight: 100 }}>
            Cancel
          </Button>
          <Button type="primary" htmlType="submit" onClick={handleSubmit}>
            Update
          </Button>
        </div>
      }
    >
      <Form onSubmitCapture={handleSubmit}>
        <Form.Item label="Name">
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Item>
        <Form.Item label="Email">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Item>
      </Form>
    </Drawer>
  );
};

export default EditUser;
