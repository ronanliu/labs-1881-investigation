import Icon from "antd/lib/icon";
import Input from "antd/lib/input";
import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Container = styled.div`
  line-height: 25px;
  background-color: #fff;
  display: flex;
  align-items: center;
  padding-right: 10px;

  &:hover {
    background: #ccc;
  }
`;

const Name = styled.div`
  width: 100%;
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
        <Name>{`[${type.toUpperCase()}] - ${name}`}</Name>
        <Input
          style={{ flexGrow: 1 }}
          placeholder="enter additional information"
          size="small"
        />
      </Container>
    )}
  </Draggable>
);

export default DraggableItem;
