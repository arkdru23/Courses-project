import React from "react";
import ReactDOM from "react-dom";
import "core-js/stable";
import "regenerator-runtime/runtime";

import App from "./App";

const rootElement = document.getElementById("root");

if (rootElement) {
	ReactDOM.render(<App />, rootElement);
}
