import { FileOutlined } from "@ant-design/icons";
import { Card } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function SaveCard({ item, index }) {
  const navigate = useNavigate();
  const selectDraft = (id) => {
    navigate(`/${id}`);
  };
  return (
    <Card
      title={`${item.title}${index}`}
      // extra={<a href="#">More</a>}
      style={{
        width: 200,
        backgroundColor: "gray",
      }}
    >
      <StyledImageDiv onClick={() => selectDraft(item._id)}>
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
