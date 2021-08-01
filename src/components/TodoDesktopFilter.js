import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "../Context";

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

function TodoDesktopFilter() {
  const {
    storedTodos,
    clearCompleted,
    handleClickCompleted,
    handleClickAll,
    handleClickActiveOne,
    clickAll,
  } = useContext(Context);

  return (
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
  );
}

export default TodoDesktopFilter;
