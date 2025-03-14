"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export default function Task({ task, deleteTask, updateTask }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: task.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    padding: "10px",
    marginBottom: "10px",
    background: "#f1f1f1",
    borderRadius: "5px",
    cursor: "grab",
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  };

  const inputStyle = {
    width: "100%",
    padding: "5px",
    border: "1px solid #ccc",
    borderRadius: "3px",
  };

  const buttonContainer = {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "5px",
  };

  const buttonStyle = {
    padding: "5px 10px",
    border: "none",
    borderRadius: "3px",
    cursor: "pointer",
    fontSize: "14px",
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {/* Editable Task Input */}
      <input
        type="text"
        value={task.content}
        onChange={(e) => updateTask(task.id, e.target.value)}
        style={inputStyle}
      />
      <div style={buttonContainer}>
        <button
          onClick={() => deleteTask(task.id)}
          style={{ ...buttonStyle, backgroundColor: "#dc3545", color: "#fff" }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
