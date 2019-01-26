import React, { Component } from "react";
import { observer, PropTypes } from "mobx-react";
import DevTools from "mobx-react-devtools";
import { hot } from "react-hot-loader"; // eslint-disable-line
import "./App.css";

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
        <p>
          <button type="button" onClick={() => store.increment(2)}>
            +
          </button>
          <button type="button" onClick={() => store.decrement()}>
            -
          </button>
        </p>
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
