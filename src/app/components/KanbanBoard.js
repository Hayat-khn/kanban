"use client";

import { useState, useEffect } from "react";
import { DndContext, closestCorners } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import { saveTasks, loadTasks } from "../utils/storage";

const initialColumns = [
  { id: "todo", title: "To Do", tasks: [] },
  { id: "in-progress", title: "In Progress", tasks: [] },
  { id: "done", title: "Done", tasks: [] },
];

export default function KanbanBoard() {
  const [columns, setColumns] = useState(initialColumns);

  // Load tasks from local storage on first render
  useEffect(() => {
    const savedTasks = loadTasks() || initialColumns;
    setColumns(savedTasks);
  }, []);

  // Save tasks to local storage when columns update
  useEffect(() => {
    saveTasks(columns);
  }, [columns]);

  // Add a new task
  const addTask = (columnId) => {
    const taskContent = prompt("Enter task name:");
    if (!taskContent) return;

    const newTask = { id: Date.now().toString(), content: taskContent };
    setColumns((prev) =>
      prev.map((col) =>
        col.id === columnId ? { ...col, tasks: [...col.tasks, newTask] } : col
      )
    );
  };

  // Delete a task
  const deleteTask = (taskId) => {
    setColumns((prev) =>
      prev.map((col) => ({
        ...col,
        tasks: col.tasks.filter((task) => task.id !== taskId),
      }))
    );
  };

  // Update a task
  const updateTask = (taskId) => {
    const newContent = prompt("Update task name:");
    if (!newContent) return;

    setColumns((prev) =>
      prev.map((col) => ({
        ...col,
        tasks: col.tasks.map((task) =>
          task.id === taskId ? { ...task, content: newContent } : task
        ),
      }))
    );
  };

  return (
    <DndContext collisionDetection={closestCorners}>
      <div style={styles.board}>
        {columns.map((col) => (
          <SortableContext key={col.id} items={col.tasks}>
            <div style={styles.column}>
              <h3>{col.title}</h3>
              <button style={styles.addBtn} onClick={() => addTask(col.id)}>
                Add Task
              </button>
              {col.tasks.map((task) => (
                <div key={task.id} style={styles.task}>
                  <input
                    type="text"
                    value={task.content}
                    readOnly
                    style={styles.taskInput}
                  />
                  <button style={styles.updateBtn} onClick={() => updateTask(task.id)}>
                    Update
                  </button>
                  <button style={styles.deleteBtn} onClick={() => deleteTask(task.id)}>
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </SortableContext>
        ))}
      </div>
    </DndContext>
  );
}

// Internal Styling
const styles = {
  board: {
    display: "flex",
    gap: "20px",
    padding: "20px",
    justifyContent: "center",
  },
  column: {
    background: "#f8f9fa",
    padding: "15px",
    borderRadius: "8px",
    width: "250px",
    minHeight: "300px",
    textAlign: "center",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  task: {
    background: "#fff",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    alignItems: "center",
  },
  taskInput: {
    border: "none",
    background: "transparent",
    textAlign: "center",
    width: "90%",
    fontSize: "14px",
  },
  addBtn: {
    padding: "5px 10px",
    background: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  updateBtn: {
    padding: "5px 10px",
    background: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  deleteBtn: {
    padding: "5px 10px",
    background: "#dc3545",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};
