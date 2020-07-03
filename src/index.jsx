import React from "react";
import ReactDOM from "react-dom";

import { MainView } from "./components/main-view/main-view";

// Import statement to indicate that you need to bundle './index.scss'
import "./index.scss";

class MyFlixApplication extends React.Component {
  constructor() {
    super();
    // code executed right when the component is created in the memory
  }

  render() {
    return <MainView />;
  }

  componentDidMount() {
    // code executed right after the component is added to the DOM.
  }

  componentDidUpdate() {
    // code executed right after component's state or props are changed.
  }

  componentWillUnmount() {
    // code executed just before the moment the component gets removed from the DOM.
  }
}

// Finds the root of your app
const container = document.getElementsByClassName("app-container")[0];
ReactDOM.render(React.createElement(MyFlixApplication), container);