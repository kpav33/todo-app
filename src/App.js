import React, { useState, useEffect } from "react";
import { GlobalStyles } from "./GlobalStyle.style";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./components/Themes.style";
import styled from "styled-components";

import Header from "./components/Header";
import CreateTodo from "./components/CreateTodo";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";
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
  const [theme, setTheme] = useState(
    localStorage.getItem("savedTheme") || "dark"
  );
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  useEffect(() => {
    localStorage.setItem("savedTheme", theme);
  }, [theme]);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <AppContainer>
          <Header themeToggler={themeToggler} theme={theme} />
          <CreateTodo />
          <TodoList />
          <TodoFilter />
          <Footer />
        </AppContainer>
      </>
    </ThemeProvider>
  );
}

export default App;
