"use client";

import { useState } from "react";
import { Button } from "../../components/Button";
import { TodoItem } from "./TodoItem";
import { TodoListHeader } from "./TodoListHeader";
import { useTodoList } from "./useTodoList";

export const TodoList = () => {
  const { todos, addTodo, editTodo, removeTodo, handleLogout } = useTodoList();
  const [filter, setFilter] = useState("");

  const filteredTodos = todos.filter((todo) =>
    todo.description.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div className="flex flex-col border-2 border-black rounded-md h-1/2 lg:w-1/2 w-fit">
      <div className="flex flex-row justify-between p-2 border-b-2 border-black">
        <TodoListHeader
          addTodo={addTodo}
          filter={filter}
          setFilter={setFilter}
        />
        <Button
          className="absolute right-3 top-3 h-fit"
          title="Logout"
          handleClick={handleLogout}
        />
      </div>
      <main className="overflow-auto">
        {filteredTodos.map((todo, index) => (
          <TodoItem
            key={todo.index + todo.description}
            description={todo.description}
            handleDelete={removeTodo}
            handleEdit={editTodo}
            index={index}
            initialIsEditable={todo.initialIsEditable}
          />
        ))}
      </main>
    </div>
  );
};
