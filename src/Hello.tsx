import * as React from 'react';
import * as firebase from 'firebase';

export interface Props {
  content: string;
}

export default class MyComponent extends React.Component<Props, {}> {
  render() {
    console.log("XXX");
    return <div>{this.props.content}</div>
  }
}