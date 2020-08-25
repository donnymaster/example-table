import React from 'react';
import ReactDOM from 'react-dom';
import ApiService from './service/api';
import MyApp from './components/app';
import { ApiServiceProvider } from './components/api-service-context';
import { Provider } from 'react-redux';
import store from './store';

const api = new ApiService();


ReactDOM.render(
  <Provider store={store}>
    <ApiServiceProvider value={api}>
      <MyApp />
  </ApiServiceProvider>
  </Provider>,
  document.getElementById('root')
);
