import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import instance from './helpers/auth';
import { initNewSession } from './redux/auth/auth-operations';
import { GoogleOAuthProvider } from '@moeindana/google-oauth';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/">
          <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
            <App />
          </GoogleOAuthProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

const { dispatch } = store;
instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (
      error.response.data.message === 'Invalid session' ||
      error.response.data.message === 'Unauthorized'
    ) {
      dispatch(initNewSession());
    }
    return Promise.reject(error);
  }
);
