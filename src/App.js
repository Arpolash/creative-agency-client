import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { Route,BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import AddService from './components/AdminPanel/AddService/AddService';
import MakeAdmin from './components/AdminPanel/MakeAdmin/MakeAdmin';
import StudentList from './components/AdminPanel/StudentList/StudentList';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Review from './components/Dashboard/Review/Review';
import ServiceList from './components/Dashboard/ServiceList/ServiceList';
import Form from './components/Form/Form';
import Home from './components/Home/Home/Home';
import Services from './components/Home/Services/Services';
import PrivateRoute from './components/PrivateRoute';


export const UserContext = createContext();
function App() {
  const [loggedInUser,setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path='/'>
        <Home></Home>
        </Route>
        <PrivateRoute exact path='/dashboard'>
        <Dashboard></Dashboard>
        </PrivateRoute>
        <Route exact path="/dashboard/review">
          <Review></Review>
        </Route>
        <Route exact path="/dashboard/service">
          <ServiceList></ServiceList>
        </Route>
        <PrivateRoute exact path="/service">
          <Services></Services>
        </PrivateRoute>
        <Route exact path="/admin/studentList">
          <StudentList></StudentList>
        </Route>
        <Route exact path="/admin/addService">
          <AddService></AddService>
        </Route>
        <Route exact path="/admin/makeAdmin">
          <MakeAdmin></MakeAdmin>
        </Route>
        <Route exact path="/form">
          <Form></Form>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
