import { Button, Space } from "antd";
import React, { useRef, useState } from "react";
import EmailEditorReact from "react-email-editor";
import styled from "styled-components";

import apiClient from "../../network/api";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { useQuery } from "react-query";

function EmailEditorDraft() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [savedDesign, setSavedDesign] = useState(null);
  const [draftLoaded, setDraftLoaded] = useState(false);
  const emailEditorRef = useRef(null);
  const { data } = useQuery("draftData", async () => {
    return await axios.get("http://localhost:8000/getemailbyid/" + id, {
      headers: {
        Authorization: `Bearer ${Cookies.get("userToken")}`,
      },
    });
  });

  const saveDraft = async () => {
    const body = {
      body: savedDesign,
    };
    try {
      apiClient
        .patch(`http://localhost:8000/updateemail/` + id, body, {
          headers: {
            Authorization: `Bearer ${Cookies.get("userToken")}`,
          },
        })
        .then((res) => {
          console.log(res);
          navigate("/savedata");
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  };
  const onLoad = () => {
    if (draftLoaded === false) {
      emailEditorRef.current?.editor?.loadDesign(data.data[0].body);
      setDraftLoaded(true);
    }
    emailEditorRef.current?.editor?.addEventListener(
      "design:updated",
      function () {
        emailEditorRef.current.editor.saveDesign((design) => {
          setSavedDesign(design);
        });
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
          <Button onClick={() => saveDraft()}>Save Design</Button>
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

export default EmailEditorDraft;
