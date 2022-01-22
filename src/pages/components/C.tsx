import { Component } from 'react';

export class C extends Component {
  // shouldComponentUpdate(nextProp, nextState) {}

  count = 0;

  render() {
    console.log('C rendered');
    this.props.func();
    return (
      <div>
        <h1>C: normal class</h1>
        <h2>{this.count++}</h2>
        <h2>{this.props.func().nums}</h2>
      </div>
    );
  }
}
