import React, { Component } from "react";

class GitBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="foodbox">
        <div className="foodbox-restuaunt-name"><h3>{this.props.name}</h3></div>
        <div>Stars: {this.props.stars}</div>
        <div>Forks: {this.props.forks}</div>
      </div>
    )
  }
};

export default GitBox;