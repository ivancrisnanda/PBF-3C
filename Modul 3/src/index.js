import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import HelloComponent from './component/HelloComponent';
import StateFullcomponent from './container/StateFullcomponent';
import LoginComponent from './component/LoginComponent';

// function HelloWorld() {
//     return <p> ini adalah function component</p>
// }


// const HelloWorld = () => {
//     return <p> ini adalah function component</p>
// }

// class StateFullcomponent extends React.Component {
//     render() {
//         return <p>ini adlaaha statefull component</p>
//     }
// }

ReactDOM.render(<LoginComponent />, document.getElementById('root'));
 
serviceWorker.unregister();
