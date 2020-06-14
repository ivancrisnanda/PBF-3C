import React from 'react';
import logo from './logo.svg';
import './App.css';
import SideBar from "./container/SideBar/SideBar";
import Content from "./container/Content/Content";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
function App() {
  return (
    <div>
      <SideBar />
    </div>
  );
}

export default App;
