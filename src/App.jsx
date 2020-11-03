import React from "react";
import { HashRouter as Router } from "react-router-dom";

import AsideMenu from "./Components/AsideMenu/AsideMenu";
import Header from "./Components/Header/Header";
import StoreProvider from "./store/StoreProvider";

import "./App.scss";

const App = () => (
	<StoreProvider>
		<Header />
		<Router>
			<div className="content-wrapper">
				<AsideMenu />
			</div>
		</Router>
	</StoreProvider>
);

export default App;
