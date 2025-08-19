import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainApp from '../../../src/App';

function WebApp() {
  return (
    <BrowserRouter>
      <MainApp platform="web" />
    </BrowserRouter>
  );
}

export default WebApp;