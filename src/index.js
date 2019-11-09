import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import Dashboard from "./pages/Dashboard";
import * as serviceWorker from './serviceWorker';
import store from "./store/store";

ReactDOM.render(
  <Provider store={store}>
    <Dashboard />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
