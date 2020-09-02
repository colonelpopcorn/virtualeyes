import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'power-indicator',
  styleUrl: 'power-indicator.css',
  shadow: true,
})
export class MyComponent {

  @Prop() isLoading: boolean;
  @Prop() color: string = 'green';
  
  render() {
    const classMap = {
      'circle': true,
      'is-loading': this.isLoading,
      'green': this.color === 'green',
      'yellow': this.color === 'yellow',
      'red': this.color === 'red',
    }
    return <span class={classMap}></span>;
  }
}
