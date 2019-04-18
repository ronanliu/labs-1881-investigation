import React from "react";
import Icon from "antd/lib/icon";
import styled from "styled-components";

const Container = styled.div`
  height: 25px;
  background-color: #fff;
  border: 1px solid #ccc;
  margin-bottom: 5px;
`;

const Item = ({ onClick, name, type }) => (
  <Container>
    <Icon type="plus" onClick={onClick} />
    {`[${type}] - ${name}`}
  </Container>
);

export default Item;
