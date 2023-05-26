import React from 'react';
import ReactDOM from 'react-dom/client';
import AppMovies from './components/AppMovies/AppMovies';
import 'antd/dist/antd';
import './index.css';

const app = ReactDOM.createRoot(document.getElementById('root'));

app.render(<AppMovies />);
