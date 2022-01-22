import { PureComponent } from 'react';

export class D extends PureComponent {
  count = 0;

  render() {
    console.log('D rendered');
    this.props.func();
    return (
      <div>
        <h1>D: pure class</h1>
        <h2>{this.count++}</h2>
        <h2>{this.props.func().nums}</h2>
      </div>
    );
  }
}
