import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { TodoItemProps } from "./TodoItem";

export const useTodoList = () => {
  const [todos, setTodos] = useLocalStorage<TodoItemProps[]>("todos", []);
  const router = useRouter();
  const removeTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const editTodo = (index: number, newDescription: string) => {
    if (newDescription === "") {
      removeTodo(index);
    }
    if (newDescription === todos[index].description) {
      return;
    }
    const newTodos = [...todos];
    newTodos[index].description = newDescription;
    setTodos(newTodos);
  };

  const addTodo = (description: string, editable: boolean) => {
    setTodos([
      ...todos,
      {
        description,
        handleDelete: removeTodo,
        handleEdit: editTodo,
        index: todos.length,
        initialIsEditable: editable,
      },
    ]);
  };
  const handleLogout = () => {
    Cookies.remove("token");
    router.push("/");
  };

  useEffect(() => {
    if (!Cookies.get("token")) {
      router.push("/");
    }
  }, [router]);

  return { todos, addTodo, removeTodo, editTodo, handleLogout };
};
