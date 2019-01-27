import React, { Component } from "react";
import { inject, observer, PropTypes } from "mobx-react";
import DevTools from "mobx-react-devtools";
import { hot } from "react-hot-loader"; // eslint-disable-line
import { Row, Button, Icon } from "antd";
import styles from "./App.css";

const ButtonGroup = Button.Group;

// @inject("color")
@inject(stores => ({
  store: stores.rootStore.countStore,
  githubStore: stores.rootStore.listStore,
}))
@observer
class App extends Component {
  render() {
    const { store, githubStore } = this.props;

    return (
      <div className="App">
        <h1> Hello, React, Mobx, Ant Design, Webpack4, Babel7, ESLint5, Prettier!</h1>
        <p>
          Counter:
          <span className={store.isOdd ? styles.odd : styles.even}>{store.count}</span>
        </p>
        <Row>
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
        </Row>
        <br />
        <Row>
          <Button type="primary" loading={githubStore.state === "pending"} onClick={() => githubStore.fetchProjects()}>
            Click me!&nbsp;
            {`(${githubStore.state})`}
          </Button>
        </Row>
        {githubStore.githubProjects.length}
        <DevTools />
      </div>
    );
  }
}

// App.wrappedComponent.propTypes = {
//   store: PropTypes.observableObject.isRequired,
//   // store: PropTypes.object.isRequired,
// };

// export default observer(App);
// export default hot(module)(observer(App));
export default hot(module)(App);
