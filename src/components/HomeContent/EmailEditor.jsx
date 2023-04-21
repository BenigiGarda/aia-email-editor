import { Button, Space } from "antd";
import React, { useRef } from "react";
import EmailEditorReact from "react-email-editor";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { saveTempDesign } from "../../store/slice/emailEditorSlice";
function EmailEditor() {
  const temp_design = useSelector((state) => state.emailEditor.temp_design);
  const dispatch = useDispatch();
  const emailEditorRef = useRef(null);
  const tempDesign = () => {
    emailEditorRef.current?.editor?.saveDesign((design) => {
      dispatch(saveTempDesign(design));
    });
  };

  const onLoad = () => {
    emailEditorRef.current?.editor?.loadDesign(temp_design);
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
          <Button onClick={() => tempDesign()}>Save Design</Button>
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
