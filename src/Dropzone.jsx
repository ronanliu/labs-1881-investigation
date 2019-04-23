import React, { Component } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { connect } from "react-redux";
import styled from "styled-components";
import DraggableItem from "./DraggableItem";
import { removeFromZone, swapFields } from "./flow/actions";

const Container = styled.div`
  border: 2px solid #ccc;
  border-radius: 4px;
  min-height: 100px;
  margin-top: 50px;
`;

class Dropzone extends Component {
  handleDragEnd = result => {
    // TODO:
    console.log("end of dragging", result);
    const { destination, source } = result;
    if (!source || !destination) return;

    this.props.swapFields(source.index, destination.index);
  };
  handleDeleteClick = fieldId => this.props.removeFromZone(fieldId);

  render() {
    return (
      <DragDropContext onDragEnd={this.handleDragEnd}>
        <Droppable droppableId={"dropzone"}>
          {provided => (
            <Container {...provided.droppableProps} ref={provided.innerRef}>
              {this.props.selectedFields.map((f, i) => (
                <DraggableItem
                  {...f}
                  key={f.id}
                  index={i}
                  onDeleteClick={() => this.handleDeleteClick(f.id)}
                />
              ))}
              {provided.placeholder}
            </Container>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}

const mapState = ({ fields, selectedFields }) => ({
  selectedFields: selectedFields.map(sf => {
    const field = fields.find(f => f.id === sf);
    return field ? field : null;
  })
});
const mapDispatch = {
  removeFromZone,
  swapFields
};
export default connect(
  mapState,
  mapDispatch
)(Dropzone);
