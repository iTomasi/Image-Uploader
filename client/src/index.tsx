import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

import {ContextUpload} from "./context/ContextUpload";
import {ContextNotification} from "./context/ContextNotification";

ReactDOM.render(
  <React.StrictMode>
    <ContextNotification>   
      <ContextUpload>

        <App />
        
      </ContextUpload>
    </ContextNotification>
  </React.StrictMode>,
  document.getElementById('root')
);
