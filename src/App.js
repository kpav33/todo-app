//import "./App.css";
import { GlobalStyles } from "./GlobalStyle.style";
import styled from "styled-components";

import Header from "./components/Header";
import CreateTodo from "./components/CreateTodo";
import TodoList from "./components/TodoList";
import TodoMobileFilter from "./components/TodoMobileFilter";
import Footer from "./components/Footer";

const AppContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;

  @media only screen and (min-width: 768px) {
    width: 40%;
    margin: 0 auto;
  }
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <Header />
        <CreateTodo />
        <TodoList />
        <TodoMobileFilter />
        <Footer />
      </AppContainer>
    </>
  );
}

export default App;
