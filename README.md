# Employee Management System 🚀
A simple and beginner-friendly Employee Management System project built with React and Redux. This project demonstrates CRUD operations (Create, Read, Update, Delete) to manage employee data, making it an excellent starting point for those learning the React-Redux ecosystem.

This project uses:

- React for the frontend.
- Redux and redux-saga middleware for state management.
- json-server for the backend to simplify setup and focus on learning frontend concepts.

## Features 🎯

- View the list of employees.
- Add a new employee.
- Edit an existing employee's details.
- Delete an employee from the system.
- Beginner-friendly implementation with easy-to-understand code.
- Demonstrates usage of React Hooks and the React-Redux ecosystem.

## Preview 📸

- View Employee List	
![Screenshot (65)](https://github.com/user-attachments/assets/979b8d26-807f-40d1-aeae-d60da762b18f)

- Search Employee
![Screenshot (66)](https://github.com/user-attachments/assets/3685f688-d48f-4031-8adc-00fb11907ecc)

- Edit Employee
![Screenshot (69)](https://github.com/user-attachments/assets/2b9e99a2-6c22-4470-b2ef-33bd3c5c64fa)

- Add Employee	
![Screenshot (71)](https://github.com/user-attachments/assets/30694fa3-733e-49e9-8206-1c75e7d59c99)

## Technologies Used 🛠️

Frontend:
- React: For building the user interface.
- Redux: For state management.
- redux-saga: To handle side effects.
- Ant Design (antd): For UI components.

Backend:
- json-server: A simple fake REST API for quick setup and demonstration.

## Installation 🖥️

Follow these steps to run the project on your local machine:

- Clone the repository:

```
git clone https://github.com/yourusername/employee-management-system.git
cd employee-management-system
```

- Install dependencies:

```
npm install
```

- Start the backend server:

```
npx json-server --watch db.json --port 5000
```
This will run the server on http://localhost:5000.

- Start the frontend:

```
npm start
```
The React app will run on http://localhost:3000.

## Folder Structure 📂

```
employee-management-system/
├── public/
├── src/
│   ├── components/        # React components for UI
│   ├── redux/             # Redux setup (actions, reducers, sagas)
│   ├── assets/            # Static assets like images
│   ├── App.js             # Main application file
│   ├── index.js           # Entry point
├── db.json                # Mock backend (json-server)
├── package.json           # Project dependencies

```

## How It Works 🧠

- React Frontend: The frontend is built using React and styled with Ant Design components.
- Redux Store: The application state is managed using Redux, with actions and reducers defined to update the store.
- redux-saga: Middleware is used to handle side effects like API calls (e.g., fetching or updating employee data).
- json-server: Acts as a mock backend for handling RESTful API requests.

## What You'll Learn 📘

- How to set up and integrate React, Redux, and redux-saga.
- How to perform CRUD operations in a React app.
- How to use React Hooks for functional components.
- How to style components using Ant Design.
- How to use json-server as a quick backend solution for demo projects.

## Contributing 🤝

Contributions are welcome! Feel free to fork the repository, make improvements, and submit a pull request.

- Fork the project.
- Create a branch for your feature:
```
git checkout -b feature/your-feature-name
```
- Commit your changes:
```
git commit -m "Add your message here"
```
- Push your branch:
```
git push origin feature/your-feature-name
```
- Open a pull request.
  
