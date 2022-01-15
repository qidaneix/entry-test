import { Component } from 'react';
import { ThemeContext } from '../contexts';

export class C extends Component {
  static contextType = ThemeContext;

  render() {
    return <section style={this.context}>this is section C</section>;
  }
}
