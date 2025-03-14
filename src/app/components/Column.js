"use client";

import Task from "./Task";
import { useDroppable } from "@dnd-kit/core";
import { Button } from "react-bootstrap";

export default function Column({ id, title, tasks, deleteTask, updateTask, addTask }) {
  const { setNodeRef } = useDroppable({ id });

  return (
    <div ref={setNodeRef} className="col-md-4">
      <div className="p-3 bg-white rounded shadow">
        <h3>{title}</h3>
        {tasks.map((task) => (
          <Task key={task.id} task={task} deleteTask={deleteTask} updateTask={updateTask} />
        ))}
        <Button variant="primary" size="sm" onClick={() => addTask(id)}>
          Add Task
        </Button>
      </div>
    </div>
  );
}
