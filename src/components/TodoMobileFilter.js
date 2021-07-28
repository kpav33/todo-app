import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "../Context";

const ClearDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: var(--very-dark-desaturated-blue);
  padding: 1.5rem;
  color: var(--dark-grayish-blue);
  font-size: 16px;
  border-radius: 0 0 8px 8px;
`;

const FilterDiv = styled.div`
  margin-top: 1rem;
  background: var(--very-dark-desaturated-blue);
  padding: 1.5rem;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 8px;
`;

const ButtonStyle = styled.button`
  border: none;
  color: var(--dark-grayish-blue);
  background: var(--very-dark-desaturated-blue);
  font-size: 16px;
  font-family: "Josefin Sans", sans-serif;
  cursor: pointer;

  &:hover,
  &:focus {
    color: var(--bright-blue);
  }
`;

function TodoMobileFilter() {
  const {
    storedTodos,
    clearCompleted,
    handleClickCompleted,
    handleClickAll,
    handleClickActiveOne,
    clickAll,
  } = useContext(Context);

  return (
    <>
      <ClearDiv>
        <div>{`${storedTodos.length} items left`}</div>
        <ButtonStyle onClick={clearCompleted}>Clear completed</ButtonStyle>
      </ClearDiv>
      <FilterDiv>
        <ButtonStyle
          style={{ color: clickAll ? "var(--bright-blue)" : null }}
          onClick={handleClickAll}
        >
          All
        </ButtonStyle>
        <ButtonStyle onClick={handleClickActiveOne}>Active</ButtonStyle>
        <ButtonStyle onClick={handleClickCompleted}>Completed</ButtonStyle>
      </FilterDiv>
    </>
  );
}

export default TodoMobileFilter;
