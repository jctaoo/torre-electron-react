import React from 'react';

type Props = {};

export default class Counter extends React.Component<Props> {
  state = {
    sum: 0,
  };

  render(): React.ReactNode {
    const { sum } = this.state;
    return (
        <div>
          <h1>{sum}</h1>
          <span onClick={() => {
            this.setState({ sum: sum + 1 });
          }}
          >
+
          </span>
        </div>
      );
  }
}
