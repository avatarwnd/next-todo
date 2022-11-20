"use client";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dispatch, SetStateAction } from "react";

export const TodoListHeader = ({
  addTodo,
  filter,
  setFilter,
}: {
  addTodo: (description: string, editable: boolean) => void;
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
}) => {
  const handleAddTodo = () => {
    addTodo("", true);
  };
  return (
    <>
      <div className="relative flex items-center">
        <input
          placeholder="search"
          className="border border-black rounded-lg pl-7"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="absolute left-2 top-2"
        />
      </div>
      <button
        className="flex justify-center items-center text-base bg-blue-500 text-white h-fit px-3 rounded-sm border-2 border-black"
        onClick={handleAddTodo}
      >
        New
      </button>
    </>
  );
};
