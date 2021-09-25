import React, { Component } from "react";

class Counter extends React.Component {
	state = {
		count: 0,
	};

	styles = {
		fontSize: 50,
		fontWeight: "bold",
	};

	render() {
		return (
			<React.Fragment>
				<span style={{ fontWeight: 30 }} className="badge badge-primary m-2">
					{this.formatCount()}
				</span>
				<button className="btn btn-secondary btn-sm">Increment</button>
			</React.Fragment>
		);
	}

	formatCount() {
		const { count } = this.state;
		return count === 0 ? "Zero" : count;
	}
}

export default Counter;
