import { Button, Modal } from "antd";
import "antd/dist/antd.css";
import React, { Component } from "react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import Dropzone from "./Dropzone";
import app from "./flow/reducers";
import List from "./List";

const store = createStore(app, applyMiddleware(logger));

class App extends Component {
  state = {
    visible: false
  };

  handleBtnClick = () => this.setState({ visible: true });
  handleModalClose = () => this.setState({ visible: false });

  render() {
    return (
      <Provider store={store}>
        <div style={{ padding: 50 }}>
          <Button onClick={this.handleBtnClick}>Open Modal</Button>
          <Modal
            visible={this.state.visible}
            onOk={this.handleModalClose}
            onCancel={this.handleModalClose}
            title="Client dashboard settings"
          >
            <List />
            <Dropzone />
          </Modal>
        </div>
      </Provider>
    );
  }
}

export default App;
