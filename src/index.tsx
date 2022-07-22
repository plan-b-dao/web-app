import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { AccountProvider, FounderContractProvider, Web3Provider } from './context';
import { ErrorProvider } from './context/ErrorContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ErrorProvider>
      <Web3Provider>
        <FounderContractProvider>
          <AccountProvider>
              <BrowserRouter>
                <App />
              </BrowserRouter>
          </AccountProvider>
        </FounderContractProvider>
      </Web3Provider>
    </ErrorProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
