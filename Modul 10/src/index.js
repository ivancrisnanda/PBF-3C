import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import BlogPost from './container/BlogPost/BlogPost';
import MahasiswaPost from './container/MahasiswaPost/MahasiswaPost';

ReactDOM.render( < MahasiswaPost / > , document.getElementById('content'));

serviceWorker.unregister();