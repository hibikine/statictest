import * as React from 'react';

const Show = ({ v }: { v: { k: number } }) => <p>{v.k}</p>;
export default class SomeComponent extends React.Component {
  private static v = { k: 5 };
  public render() {
    return this.subRender();
  }
  private subRender() {
    return <Show v={SomeComponent.v} />;
  }
}
