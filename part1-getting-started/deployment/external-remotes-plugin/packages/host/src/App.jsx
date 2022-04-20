import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

import WidgetMfe1 from "mfe1/WidgetMfe1";
import Widget from "mfe2/Widget";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Host app</div>
    <Widget />
    <WidgetMfe1 />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
