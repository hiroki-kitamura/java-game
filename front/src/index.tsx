import React from "react";
import ReactDOM from "react-dom";

import { GlobalStyle } from "src/resetStyle";

import { createStore, combineReducers, Store, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

import { Reversi } from "src/container/Reversi";
import { reversi } from "src/duck/Reversi/reducer";

const rootReducer = combineReducers({ reversi });

const store: Store = createStore(rootReducer, applyMiddleware(thunk));
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <Reversi />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
