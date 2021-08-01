import React from "react";

import TodoDesktopFilter from "./TodoDesktopFilter";
import TodoMobileFilter from "./TodoMobileFilter";

function TodoFilter() {
  return (
    <>
      <TodoMobileFilter />
      <TodoDesktopFilter />
    </>
  );
}

export default TodoFilter;
