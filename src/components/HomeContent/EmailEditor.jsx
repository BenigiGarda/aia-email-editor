import { Button, Space } from "antd";
import React, { useRef, useState } from "react";
import EmailEditorReact from "react-email-editor";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { saveTempDesign } from "../../store/slice/emailEditorSlice";
import Cookies from "js-cookie";
import axios from "axios";
function EmailEditor() {
  const temp_design = useSelector((state) => state.emailEditor.temp_design);
  const [tempLoaded, setTempLoaded] = useState(false);
  const dispatch = useDispatch();
  const emailEditorRef = useRef(null);

  const userId = Cookies.get("userId");
  const tempDesign = () => {
    emailEditorRef.current?.editor?.saveDesign((design) => {
      dispatch(saveTempDesign(design));
    });
  };

  const saveDesign = async () => {
    const body = {
      body: temp_design,
      userId: userId,
    };

    try {
      axios
        .post("http://localhost:8000/createemail", body, {
          headers: {
            Authorization: `Bearer ${Cookies.get("userToken")}`,
          },
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  };
  const onLoad = () => {
    if (tempLoaded === false) {
      emailEditorRef.current?.editor?.loadDesign(temp_design);
      setTempLoaded(true);
    }
    emailEditorRef.current?.editor?.addEventListener(
      "design:updated",
      function () {
        tempDesign();
      }
    );
  };

  const exportHtml = () => {
    emailEditorRef.current?.editor?.exportHtml((data) => {
      const { design, html } = data;
      console.log("exportHtml", html);
      console.log("design", design);
      alert("Output HTML has been logged in your developer console.");
    });
  };
  return (
    <>
      <StyledHeader>
        <Space>
          <Button type="primary">Send Design</Button>
          <Button onClick={() => exportHtml()}>Export Design</Button>
          <Button onClick={() => saveDesign()}>Save Design</Button>
        </Space>
      </StyledHeader>

      <EmailEditorReact ref={emailEditorRef} onReady={onLoad} />
    </>
  );
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 30px;
`;

export default EmailEditor;
