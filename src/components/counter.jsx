import React, { Component } from "react";

class Counter extends React.Component {
	state = {
		value: this.props.value,
		tags: ["tag1", "tag2", "tag3"],
	};

	render() {
		console.log(this.props);

		return (
			<div>
				{this.props.children}
				<span className={this.getBadgeClasses()}>{this.formatCount()}</span>
				<button
					onClick={() => {
						this.handleIncrement();
					}}
					className="btn btn-secondary btn-sm">
					Increment
				</button>
			</div>
		);
	}

	handleIncrement = () => {
		this.setState({ value: this.state.value + 1 });
	};

	formatCount() {
		const { value: count } = this.state;
		return count === 0 ? "Zero" : count;
	}

	getBadgeClasses() {
		let classes = "badge m-2 badge-";
		classes += this.state.value === 0 ? "warning" : "primary";
		return classes;
	}
}

export default Counter;
