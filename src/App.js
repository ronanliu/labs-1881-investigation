import { Button, Modal } from "antd";
import "antd/dist/antd.css";
import React, { Component } from "react";
import List from "./List";

class App extends Component {
  state = {
    visible: false
  };

  handleBtnClick = () => this.setState({ visible: true });
  handleModalClose = () => this.setState({ visible: false });

  render() {
    return (
      <div style={{ margin: 50 }}>
        <Button onClick={this.handleBtnClick}>Open Modal</Button>
        <Modal
          visible={this.state.visible}
          onOk={this.handleModalClose}
          onCancel={this.handleModalClose}
          title="Client dashboard settings"
        >
          <List />
        </Modal>
      </div>
    );
  }
}

export default App;
