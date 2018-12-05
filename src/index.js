import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import { store } from "./js/store/storeConfig";

import App from "./js/containers/App";
import "./sass/main.sass";

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById("root"));