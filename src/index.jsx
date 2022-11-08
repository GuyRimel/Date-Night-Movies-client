import React from "react";
import { createRoot } from "react-dom/client";
import MainView from "./components/main-view/main-view";

import { Container, Row } from "react-bootstrap";
import "./index.scss";

// main React component
class DNMApplication extends React.Component {
  render() {
    return (
      <MainView />
    );
  }
}

// 'container' is the root DOM element
const container = document.getElementsByClassName("app-container")[0];
const root = createRoot(container);

// this tells React to render the app in the root DOM element
// ReactDOM.render(React.createElement(DNMApplication), container);
root.render(React.createElement(DNMApplication));
