import React, { Component } from "react";
import { fields } from "./data";
import Item from "./Item";

class List extends Component {
  handleIconClick = fieldId => {
    console.log("clicked" + fieldId);
  };

  render() {
    return (
      <div>
        <h2>Fields</h2>
        {fields.map(({ id, name, type }) => (
          <Item
            key={id}
            id={id}
            name={name}
            type={type}
            onClick={() => this.handleIconClick(id)}
          />
        ))}
      </div>
    );
  }
}

export default List;
