import React, { Component } from "react";
import { fields } from "./data";
import Item from "./Item";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
class List extends Component {
  handleIconClick = fieldId => {
    console.log("clicked" + fieldId);
  };

  render() {
    return (
      <div>
        <h2>Fields</h2>
        <Container>
          {fields.map(({ id, name, type }) => (
            <Item
              key={id}
              id={id}
              name={name}
              type={type}
              onClick={() => this.handleIconClick(id)}
            />
          ))}
        </Container>
      </div>
    );
  }
}

export default List;
