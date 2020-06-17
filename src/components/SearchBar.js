import React, { Component } from "react";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
  }
  render() {
    return (
      <div className="ui segment search-bar">
        <form
          className="ui form"
          onSubmit={(e) => {
            e.preventDefault();
            this.props.onSubmit(this.state.term);
          }}>
          <div className="field">
            <label>Yotube Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => {
                this.setState({ term: e.target.value });
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}
