export const saveTasks = (tasks) => {
  if (tasks) localStorage.setItem("kanban-tasks", JSON.stringify(tasks));
};

export const loadTasks = () => {
  try {
    const tasks = localStorage.getItem("kanban-tasks");
    return tasks ? JSON.parse(tasks) : null;
  } catch (error) {
    console.error("Error loading tasks:", error);
    return null;
  }
};
