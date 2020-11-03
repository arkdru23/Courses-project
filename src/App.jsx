import React from "react";

import Header from "./Components/Header/Header";
import StoreProvider from "./store/StoreProvider";

import "./App.scss";

const App = () => (
	<StoreProvider>
		<Header />
	</StoreProvider>
);

export default App;
