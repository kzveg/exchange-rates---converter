import React from "react";
import "../styles/App.css";
import styled from "styled-components";
import { Link, Route, Routes } from "react-router-dom";
import Converter from "../components/Converter";
import ExhangeRates from "./ExhangeRates";
import NotFoundPage from "./NotFoundPage";
import { useDispatch } from "react-redux";

const StyledHeader = styled.header`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
  height: 110px;
  background-color: gray;
`;

const StyledA = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 30px;
  background-color: #b8ff74;
  font-size: 25px;
  margin-right: 100px;
  border-radius: 10px;
`;

function App() {
  const dispatch = useDispatch();

  const baseRate = () => {
    dispatch({ type: "CHANGE_RATES", payload: "UAH" });
  };

  return (
    <>
      <StyledHeader>
        <StyledA>
          <Link to="/" style={{ textDecoration: "none" }} onClick={baseRate}>
            Exhange rates
          </Link>
        </StyledA>
        <StyledA>
          <Link to="/converter" style={{ textDecoration: "none" }}>
            Converter
          </Link>
        </StyledA>
      </StyledHeader>
      <Routes>
        <Route exact path="/" element={<ExhangeRates />} />
        <Route path="/converter" element={<Converter />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
