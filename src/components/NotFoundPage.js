import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function NotFoundPage() {
  return (
    <StyledDiv>
      <img
        src="https://acegif.com/wp-content/uploads/2022/4hv9xm/crying-emoji-5.gif"
        alt="cry"
      />
      This page not found, go to<Link to="/">Exhange rates</Link>
    </StyledDiv>
  );
}

export default NotFoundPage;
