import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Users from './components/Employees';
import './styles/main.scss';

const AddUser = lazy(() => import('./components/AddEmployee'));
const EditUser = lazy(() => import('./components/EditEmployee'));

const App = () => (
  <Provider store={store}>
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path="/" element={<Users />} />
          <Route path="/add-employee" element={<AddUser />} />
        </Routes>
      </Suspense>
    </Router>
  </Provider>
);

export default App;