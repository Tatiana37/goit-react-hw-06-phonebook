import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
//  импорт компонента Provider
import { Provider } from 'react-redux';
//  импорт объекта глобального состояния
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
