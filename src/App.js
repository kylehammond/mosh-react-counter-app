import React from "react";
import "./App.css";
import Counters from "./components/counters";
import NavBar from "./components/navbar";

function App() {
	return (
		<React.Fragment>
			<main className="container">
				<NavBar />
				<main className="container">
					<Counters />
				</main>
			</main>
		</React.Fragment>
	);
}

export default App;
