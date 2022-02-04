import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const StyledDiv1 = styled(StyledDiv)`
  background-color: darkgray;
  height: 400px;
  width: 800px;
  margin-block: 10px;
  border-radius: 15px;
`;
const Styled2 = styled(StyledDiv)`
  flex-direction: row;
  background-color: #dddaeb;
  width: 760px;
  height: 140px;
  margin: 10px;
`;

const StyledSelect = styled.select`
  height: 50px;
  width: 300px;
  margin-right: 40px;
  margin-left: 40px;
  border-radius: 10px;
  text-align: center;
`;

export const StyledInput = styled.input`
  height: 50px;
  width: 300px;
  margin-right: 40px;
  margin-left: 40px;
  border-radius: 15px;
  background: ${(props) => (props.bg ? "#b4fb71de" : "white")};
  text-align: center;
`;

function Converter() {
  let convertSum = useSelector((state) => state.convertRezult);

  const dispatch = useDispatch();

  const valueFrom = (e) => {
    dispatch({
      type: "CONVERT_FROM",
      payload: e.target.value,
    });
  };

  const valueTo = (e) => {
    dispatch({
      type: "CONVERT_TO",
      payload: e.target.value,
    });
  };
  const changeSum = (e) => {
    dispatch({
      type: "AMOUNT",
      payload: e.target.value,
    });
  };

  return (
    <StyledDiv>
      <h3>Converter</h3>
      <StyledDiv1>
        <StyledDiv>
          <Styled2>
            <StyledDiv>
              <h3 style={{ display: "contents" }}>available currency</h3>
              <StyledSelect onChange={valueFrom} defaultValue={"DEFAULT"}>
                <option value="DEFAULT" disabled>
                  Choose here
                </option>
                <option value="UAH"> UAH </option>
                <option value="USD"> USD </option>
                <option value="EUR"> EUR </option>
                <option value="RUB"> RUB </option>
                <option value="PLN"> PLN </option>
              </StyledSelect>
            </StyledDiv>
            <StyledDiv>
              <h3 style={{ display: "contents" }}>desired currency</h3>
              <StyledSelect onChange={valueTo} defaultValue={"DEFAULT"}>
                <option value="DEFAULT" disabled>
                  Choose here
                </option>
                <option value="UAH"> UAH </option>
                <option value="USD"> USD </option>
                <option value="EUR"> EUR </option>
                <option value="RUB"> RUB </option>
                <option value="PLN"> PLN </option>
              </StyledSelect>
            </StyledDiv>
          </Styled2>
          <Styled2>
            <StyledDiv>
              <h3 style={{ display: "contents" }}>sum</h3>
              <StyledInput
                type="number"
                placeholder="100.00"
                onChange={changeSum}
              />
            </StyledDiv>
            <StyledDiv>
              <h3 style={{ display: "contents" }}>result</h3>
              <StyledInput type="text" bg readOnly value={convertSum || " "} />
            </StyledDiv>
          </Styled2>
        </StyledDiv>
      </StyledDiv1>
    </StyledDiv>
  );
}

export default Converter;
