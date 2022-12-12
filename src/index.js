import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Menu from './Menu';
import About from './About';
import Studies from './Studies';
import Projects from './Projects';
import Find from './Find';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Menu />
    <About />
    <Studies />
    <Projects />
    <Find />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
