import React, { Component } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import styled from "styled-components";
import DraggableItem from "./DraggableItem";

const Container = styled.div`
  border: 2px solid #ccc;
  border-radius: 4px;
  min-height: 100px;
  margin-top: 50px;
`;

class Dropzone extends Component {
  handleDragEnd = () => {
    // TODO:
    console.log("end of dragging");
  };

  render() {
    return (
      <DragDropContext onDragEnd={this.handleDragEnd}>
        <Container>
          {[].map(f => (
            <DraggableItem {...f} key={f.id} />
          ))}
        </Container>
      </DragDropContext>
    );
  }
}

export default Dropzone;
