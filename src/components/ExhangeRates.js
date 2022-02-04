import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledSelect = styled.select`
  height: 35px;
  margin: 10px;
  background-color: #b4fb71de;
`;

function ExhangeRates() {
  let items = " ";
  const dispatch = useDispatch();
  const data = useSelector((state) => state.items);

  useEffect(() => dispatch({ type: "GET_FIRST_DATA" }), []);

  if (data.length !== 0) {
    items = (
      <div className="table rates">
        <h2> UAH - {data.rates.UAH}</h2>
        <h2> USD - {data.rates.USD}</h2>
        <h2> EUR - {data.rates.EUR}</h2>
        <h2> RUB - {data.rates.RUB}</h2>
        <h2> PLN - {data.rates.PLN}</h2>
      </div>
    );
  }

  function changeRates(e) {
    dispatch({
      type: "CHANGE_RATES",
      payload: e.target.value,
    });
  }

  return (
    <StyledDiv>
      <div>
        <h1>
          exchange rates
          <StyledSelect id="" onChange={changeRates}>
            <option value="UAH" defaultValue>
              UAH
            </option>
            <option value="USD"> USD </option>
            <option value="EUR"> EUR </option>
            <option value="RUB"> RUB </option>
            <option value="PLN"> PLN </option>
          </StyledSelect>
        </h1>
      </div>
      <br />
      <br />
      <br />
      {items}
    </StyledDiv>
  );
}

export default ExhangeRates;
