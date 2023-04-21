import { FileFilled, FileOutlined } from "@ant-design/icons";
import { Card, Space } from "antd";
import React from "react";
import styled from "styled-components";

function SaveCard({ item }) {
  return (
    <Card
      title={`${item.name}`}
      // extra={<a href="#">More</a>}
      style={{
        width: 200,
        backgroundColor: "gray",
      }}
    >
      <StyledImageDiv>
        <FileOutlined style={{ fontSize: "80px", padding: "18px" }} />
      </StyledImageDiv>
      <p>{JSON.stringify(item.createdAt)}</p>
    </Card>
  );
}

const StyledImageDiv = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export default SaveCard;
