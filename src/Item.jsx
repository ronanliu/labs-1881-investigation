import React from "react";
import Icon from "antd/lib/icon";
import styled from "styled-components";

const Container = styled.div`
  line-height: 25px;
  background-color: #fff;
  min-width: 50%;
`;

const Item = ({ onClick, name, type }) => (
  <Container>
    <Icon type="plus" onClick={onClick} style={{ margin: 10 }} />
    {`[${type.toUpperCase()}] - ${name}`}
  </Container>
);

export default Item;
