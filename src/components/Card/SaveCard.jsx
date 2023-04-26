import { DeleteFilled, FileOutlined } from "@ant-design/icons";
import { Card } from "antd";
import axios from "axios";
import Cookies from "js-cookie";
import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function SaveCard({ item, index }) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const selectDraft = (id) => {
    navigate(`/${id}`);
  };

  const mutationDeleteDraft = useMutation((id) => {
    return axios.delete(`http://localhost:8000/deleteemail/${id}`, {
      headers: {
        Authorization: `Bearer ${Cookies.get("userToken")}`,
      },
    });
  });
  const deleteDraft = (id) => {
    mutationDeleteDraft.mutate(id, {
      onSuccess: () => {
        queryClient.invalidateQueries("draftList");
      },
    });
  };
  return (
    <Card
      title={`Draft${item._id}`}
      // extra={<a href="#">More</a>}
      style={{
        width: 200,
        backgroundColor: "gray",
      }}
    >
      <StyledImageDiv onClick={() => selectDraft(item._id)}>
        <FileOutlined style={{ fontSize: "80px", padding: "18px" }} />
      </StyledImageDiv>

      <DeleteFilled onClick={() => deleteDraft(item._id)} />
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
