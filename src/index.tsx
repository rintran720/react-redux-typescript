import React from 'react';
import ReactDOM from 'react-dom/client';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import App from './App';
import './index.d';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import registerServiceWorker from './serviceWorkerRegistration';
import { isProduction } from '~/utils/env';

if (isProduction()) {
  disableReactDevTools();
  registerServiceWorker();
}

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
