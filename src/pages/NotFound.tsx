import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function NotFound() {
  return (
    <Container>
      <h1>404</h1>
      <p>Page not found.</p>
      <Link to="/">Go back home</Link>
    </Container>
  );
}
