import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

import NavBar from './NavBar.js';

export default function App() {
  return (
    <div>
      <div className={'content'}></div>
      <div id={'nav'} className={'nav'}></div>
    </div>
  );
}
