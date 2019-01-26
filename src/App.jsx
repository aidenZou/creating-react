import React, { Component } from "react";
import { observer, PropTypes } from "mobx-react";
import DevTools from "mobx-react-devtools";
import { hot } from "react-hot-loader"; // eslint-disable-line
import { Button, Icon } from "antd";
import "./App.css";

const ButtonGroup = Button.Group;

@observer
class App extends Component {
  render() {
    const { store } = this.props;

    return (
      <div className="App">
        <h1> Hello, World!</h1>
        <p>
          Counter:
          <span className={store.isOdd ? "Counter-odd" : "Counter-even"}>{store.count}</span>
        </p>
        <div>
          <ButtonGroup>
            <Button type="primary" onClick={() => store.increment(1)}>
              <Icon type="left" />
              increment
            </Button>
            <Button type="primary" onClick={() => store.decrement()}>
              decrement
              <Icon type="right" />
            </Button>
          </ButtonGroup>
        </div>
        <DevTools />
      </div>
    );
  }
}

App.propTypes = {
  store: PropTypes.observableObject.isRequired,
};

// export default observer(App);
// export default hot(module)(observer(App));
export default hot(module)(App);
