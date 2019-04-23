import React from "react";
import Icon from "antd/lib/icon";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  line-height: 25px;
  background-color: #fff;

  &:hover {
    background: #ccc;
  }
`;

const DraggableItem = ({ id, index, name, onDeleteClick, type }) => (
  <Draggable draggableId={id} index={index}>
    {provided => (
      <Container
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
      >
        <Icon
          type="delete"
          onClick={onDeleteClick}
          style={{ color: "red", margin: 10 }}
        />
        {`[${type.toUpperCase()}] - ${name}`}
      </Container>
    )}
  </Draggable>
);

export default DraggableItem;
