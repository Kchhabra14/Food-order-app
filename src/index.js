//import React from "react";
import { render } from "react-dom";
import { StrictMode } from "react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store  from "./store";
import { Provider } from "react-redux";


const Index = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <StrictMode>
          <App />
        </StrictMode>
      </BrowserRouter>
    </Provider>
    
  );
};

render(<Index />, document.getElementById("root"));