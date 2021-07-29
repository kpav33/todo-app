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

  @media only screen and (min-width: 768px) {
    display: none;
  }
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

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const DesktopDiv = styled.div`
  display: none;

  @media only screen and (min-width: 768px) {
    display: flex;
    width: 100%;
    background: var(--very-dark-desaturated-blue);
    padding: 1.5rem;
    color: var(--dark-grayish-blue);
    font-size: 16px;
    border-radius: 0 0 8px 8px;
    justify-content: space-between;
    align-items: center;

    div {
      button {
        margin-left: 1rem;
      }
    }
  }
`;

const ButtonStyle = styled.button`
  border: none;
  color: var(--dark-grayish-blue);
  background: var(--very-dark-desaturated-blue);
  font-size: 16px;
  font-family: "Josefin Sans", sans-serif;
  cursor: pointer;

  &:focus {
    color: var(--bright-blue);
  }

  &:hover {
    color: var(--light-grayish-blue-hover);
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
      <DesktopDiv>
        {`${storedTodos.length} items left`}
        <div>
          <ButtonStyle
            style={{ color: clickAll ? "var(--bright-blue)" : null }}
            onClick={handleClickAll}
          >
            All
          </ButtonStyle>
          <ButtonStyle onClick={handleClickActiveOne}>Active</ButtonStyle>
          <ButtonStyle onClick={handleClickCompleted}>Completed</ButtonStyle>
        </div>
        <ButtonStyle onClick={clearCompleted}>Clear completed</ButtonStyle>
      </DesktopDiv>
    </>
  );
}

export default TodoMobileFilter;
