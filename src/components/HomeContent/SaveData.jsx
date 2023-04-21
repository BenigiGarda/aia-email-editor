import React from "react";
import styled from "styled-components";
import SaveCard from "../../components/Card/SaveCard";
import { Space } from "antd";

function SaveData() {
  let currentDate = new Date();
  const dummyItem = [
    {
      name: "Test",
      createdAt: currentDate.getDate(),
    },
    {
      name: "Test2",
      createdAt: currentDate.getDate() - 1,
    },
    {
      name: "Test3",
      createdAt: currentDate.getDate() - 2,
    },
    {
      name: "Test4",
      createdAt: currentDate.getDate() - 3,
    },
    {
      name: "Test5",
      createdAt: currentDate.getDate() - 4,
    },
    {
      name: "Test6",
      createdAt: currentDate.getDate() - 5,
    },
    {
      name: "Test7",
      createdAt: currentDate.getDate() - 6,
    },
    {
      name: "Test8",
      createdAt: currentDate.getDate() - 7,
    },
    {
      name: "Test9",
      createdAt: currentDate.getDate() - 8,
    },
    {
      name: "Test10",
      createdAt: currentDate.getDate() - 9,
    },
    {
      name: "Test11",
      createdAt: currentDate.getDate() - 10,
    },
    {
      name: "Test11",
      createdAt: currentDate.getDate() - 10,
    },
    {
      name: "Test11",
      createdAt: currentDate.getDate() - 10,
    },
    {
      name: "Test11",
      createdAt: currentDate.getDate() - 10,
    },
    {
      name: "Test11",
      createdAt: currentDate.getDate() - 10,
    },
    {
      name: "Test11",
      createdAt: currentDate.getDate() - 10,
    },
    {
      name: "Test11",
      createdAt: currentDate.getDate() - 10,
    },
  ];
  return (
    <StyledDiv>
      <StyledSpace>
        {dummyItem.map((item, index) => {
          return <SaveCard item={item} key={index} />;
        })}
      </StyledSpace>
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
