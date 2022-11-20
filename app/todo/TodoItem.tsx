"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Button } from "../../components/Button";

export interface TodoItemProps {
  description: string;
  handleDelete: (index: number) => void;
  handleEdit: (index: number, description: string) => void;
  index: number;
  initialIsEditable?: boolean;
}

export const TodoItem = ({
  description,
  handleDelete,
  index,
  handleEdit,
  initialIsEditable = false,
}: TodoItemProps) => {
  const [isEditable, setIsEditable] = useState(initialIsEditable);
  const [newDescription, setNewDescription] = useState(description);
  return (
    <div className="flex border-b-2 border-black p-3 justify-between items-center">
      {isEditable ? (
        <input
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          className="border border-black rounded-lg pl-3"
        />
      ) : (
        <div>{description}</div>
      )}
      <div className="flex gap-3">
        {isEditable ? (
          <Button
            className="text-base h-fit"
            title="Save"
            handleClick={() => handleEdit(index, newDescription)}
          />
        ) : (
          <>
            <FontAwesomeIcon
              icon={faPencil}
              onClick={() => setIsEditable(true)}
            />
            <FontAwesomeIcon
              icon={faTrash}
              onClick={() => handleDelete(index)}
            />
          </>
        )}
      </div>
    </div>
  );
};
