import React, { Component } from "react";

class Counter extends React.Component {
	state = {
		count: 1,
		tags: ["tag1", "tag2", "tag3"],
	};

	render() {
		return (
			<div>
				<span className={this.getBadgeClasses()}>{this.formatCount()}</span>
				<button
					onClick={this.handleIncrement}
					className="btn btn-secondary btn-sm"
				>
					Increment
				</button>

				<div>
					{this.state.tags.length === 0 && "Please create a new tag"}
					{this.renderTags()}
				</div>
			</div>
		);
	}

	constructor() {
		super();
	}

	handleIncrement = () => {
		console.log("Increment Clicked", this);
	};

	formatCount() {
		const { count } = this.state;
		return count === 0 ? "Zero" : count;
	}

	getBadgeClasses() {
		let classes = "badge m-2 badge-";
		classes += this.state.count === 0 ? "warning" : "primary";
		return classes;
	}

	renderTags() {
		return (
			<ul>
				{this.state.tags.map((tag) => (
					<li key={tag}>{tag}</li>
				))}
			</ul>
		);
	}
}

export default Counter;
