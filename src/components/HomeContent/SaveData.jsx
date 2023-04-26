import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SaveCard from "../../components/Card/SaveCard";
import { Space } from "antd";
import apiClient from "../../network/api";

function SaveData() {
  let currentDate = new Date();
  const [data, setData] = useState([]);
  const getData = async () => {
    await apiClient
      .get("http://localhost:5000/api/v1/emailtemplate/")
      .then((res) => {
        console.log(res);
        setData(res.data.template);
      });
  };

  useEffect(() => {
    getData();
  }, []);
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
        {data.map((item, index) => {
          return <SaveCard item={item} key={index} index={index + 1} />;
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
