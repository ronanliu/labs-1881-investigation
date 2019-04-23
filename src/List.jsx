import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { addToZone } from "./flow/actions";
import Item from "./Item";

const selectionLimit = 5;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
class List extends Component {
  handleIconClick = fieldId => {
    const { selectedFields, addToZone } = this.props;
    if (
      selectedFields.indexOf(fieldId) < 0 &&
      selectedFields.length < selectionLimit
    ) {
      addToZone(fieldId);
    }
  };

  render() {
    return (
      <div>
        <h2>Fields</h2>
        <Container>
          {this.props.fields.map(({ id, name, type }) => (
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

const mapState = ({ fields, selectedFields }) => ({
  fields,
  selectedFields
});
const mapDispatch = {
  addToZone
};
export default connect(
  mapState,
  mapDispatch
)(List);
