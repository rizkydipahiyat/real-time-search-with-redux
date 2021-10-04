import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./components/index";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { News, Cryptocurrency } from "./components/index";

const App = () => {
	return (
		<Router>
			<Header />
			<Container>
				<Route path="/news" component={News} />
				<Route path="/cryptocurrencies" component={Cryptocurrency} />
			</Container>
		</Router>
	);
};

export default App;
