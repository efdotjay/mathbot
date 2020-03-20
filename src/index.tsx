import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import { initialState, rootReducer } from "./rootReducer";
import RootLayout from './containers/layouts/RootLayout';

const store = createStore(rootReducer, initialState);

function App() {
  return (
    <Provider store={store}>
      <RootLayout />
    </Provider>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
