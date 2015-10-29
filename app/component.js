import React from 'react';

export const Main = React.createClass({
  getInitialState() {
    return {
      name : "World",
      greeting : true
    };
  },

  toggle() {
    this.setState({
      greeting : !this.state.greeting
    });
  },

  changeName() {
    let name = prompt("Please enter a name");

    if (name) {
      this.setState({
        name: name
      });
    }
  },

  render() {
    let test = (
      this.state.greeting
        ? <Greeting name={this.state.name} />
        : <Farewell name={this.state.name} />
    );

    return (
      <div>{test}
        <button onClick={this.changeName}>Change Name</button>
        <button onClick={this.toggle}>Toggle</button>
      </div>
    );
  }
});
export default Main;

let style = {
  farwell : {
    color : 'red'
  }
}

export const Farewell = React.createClass({
  render() {
    return (
      <div>
        <h1 style={style.farwell}>Farewell, {this.props.name}!</h1>
      </div>
    );
  }
});

export const Greeting = React.createClass({
  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}!</h1>
      </div>
    );
  }
});
