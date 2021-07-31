import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "../Context";

const ClearDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: ${({ theme }) => theme.backgroundClearDiv};
  padding: 1.5rem;
  color: ${({ theme }) => theme.backgroundClearDivColor};
  font-size: 16px;
  border-radius: 0 0 8px 8px;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const FilterDiv = styled.div`
  margin-top: 1rem;
  background: ${({ theme }) => theme.backgroundFilterDiv};
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
    background: ${({ theme }) => theme.backgroundDesktopDiv};
    padding: 1.5rem;
    color: ${({ theme }) => theme.desktopDivColor};
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
  color: ${(props) =>
    props.primary ? ({ theme }) => theme.filterButtons : "hsl(234, 11%, 52%)"};
  background: ${({ theme }) => theme.buttonBackground};
  font-size: 16px;
  font-family: "Josefin Sans", sans-serif;
  cursor: pointer;

  &:focus {
    color: var(--bright-blue);
  }

  &:hover {
    color: ${({ theme }) => theme.buttonHover};
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
          primary
          onClick={handleClickAll}
          style={{ color: clickAll && "var(--bright-blue)" }}
        >
          All
        </ButtonStyle>
        <ButtonStyle primary onClick={handleClickActiveOne}>
          Active
        </ButtonStyle>
        <ButtonStyle primary onClick={handleClickCompleted}>
          Completed
        </ButtonStyle>
      </FilterDiv>
      <DesktopDiv>
        <div className="itemsLeft">{`${storedTodos.length} items left`}</div>
        <div className="filterButtons">
          <ButtonStyle
            primary
            onClick={handleClickAll}
            style={{ color: clickAll && "var(--bright-blue)" }}
          >
            All
          </ButtonStyle>
          <ButtonStyle primary onClick={handleClickActiveOne}>
            Active
          </ButtonStyle>
          <ButtonStyle primary onClick={handleClickCompleted}>
            Completed
          </ButtonStyle>
        </div>
        <ButtonStyle onClick={clearCompleted}>Clear completed</ButtonStyle>
      </DesktopDiv>
    </>
  );
}

export default TodoMobileFilter;
