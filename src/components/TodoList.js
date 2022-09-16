import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {/* ca sa fie normal fara filtru todos, in loc de filtered... */}
        {filteredTodos.map((todo) => {
          return (
            <Todo
              todos={todos}
              setTodos={setTodos}
              key={todo.id}
              text={todo.text}
              todo={todo}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
