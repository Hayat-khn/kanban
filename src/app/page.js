import KanbanBoard from './components/KanbanBoard';
import Auth from './components/Auth';
import DarkModeToggle from './components/DarkModeToggle';

export default function Home() {
  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Kanban Board</h1>
        <div className="d-flex">
          <Auth />
          <DarkModeToggle />
        </div>
      </div>
      <KanbanBoard />
    </div>
  );
}
