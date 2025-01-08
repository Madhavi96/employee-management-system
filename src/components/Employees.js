import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsersRequest, deleteUserRequest, searchUserRequest } from '../redux/actions/userActions';
import { Table, Button, Input } from 'antd';
import { Link } from 'react-router-dom';
import EditUser from './EditEmployee'; // Import the EditUser component
import { EditOutlined, UserAddOutlined, UserDeleteOutlined } from '@ant-design/icons'; // Importing the Edit icon

const Users = () => {
  const { Search } = Input;
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);

  const [visible, setVisible] = useState(false);
  const [userToEdit, setUserToEdit] = useState(null); // Store user details to edit

  useEffect(() => {
    dispatch(fetchUsersRequest());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteUserRequest(id));
  };

  const handleSearch = (employeeName) => {
    dispatch(searchUserRequest(employeeName));
  };

  const showDrawer = (user) => {
    setUserToEdit(user);
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  // Define the columns for the Ant Design Table
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: 300
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      width: 200
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <div className='btn-area'>
          <Button color='primary' variant="filled"  icon={<EditOutlined />} onClick={() => showDrawer(record)}>
            Edit
          </Button>
          <Button color="danger" variant="filled" icon={<UserDeleteOutlined />} onClick={() => handleDelete(record)}>
            Delete
          </Button>
        </div>
      ),
      width: 100
    },
  ];

  return (
    <div className='overlay'>
      <div className='main-content'>
        <h1>Employees</h1>

        <div className='panel'>
          <Button type="primary" icon={<UserAddOutlined />}>
            <Link to="/add-employee">Add Employee</Link>
          </Button>

          <Search
            placeholder="Employee Name"
            allowClear
            enterButton="Search"
            onSearch={(value) => handleSearch(value)}
          />
        </div>

        <Table
          dataSource={users}
          columns={columns}
          rowKey="id" // Unique key for each row
          pagination={{ pageSize: 5 }} // Set the pagination to display 5 users per page
        />

        {/* Use the EditUser Drawer Component */}
        <EditUser
          visible={visible}
          userToEdit={userToEdit}
          onClose={onClose}
        />
      </div>
    </div>
  );
};

export default Users;
