import { PageHeader } from "../../components/PageHeader";
import { TodoList } from "./TodoList";

export default function TodoPage() {
  return (
    <div className="flex flex-col p-3 items-center lg:w-1/2 h-full w-full">
      <PageHeader title="My To-Do List" />
      <TodoList />
      
    </div>
  );
}
