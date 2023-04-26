import React from "react";
import styled from "styled-components";
import SaveCard from "../../components/Card/SaveCard";
import { Space } from "antd";
import Cookies from "js-cookie";
import axios from "axios";
import { useQuery } from "react-query";

function SaveData() {
  const userId = Cookies.get("userId");
  const { isLoading, data } = useQuery("draftList", async () => {
    return await axios.get(`http://localhost:8000/getemailbyuserid/${userId}`, {
      headers: {
        Authorization: `Bearer ${Cookies.get("userToken")}`,
      },
    });
  });

  return (
    <StyledDiv>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <StyledSpace>
          {data.data.map((item, index) => {
            return <SaveCard item={item} key={index} index={index + 1} />;
          })}
        </StyledSpace>
      )}
    </StyledDiv>
  );
}
const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
`;
const StyledSpace = styled(Space)`
  flex-wrap: wrap;
`;
export default SaveData;
