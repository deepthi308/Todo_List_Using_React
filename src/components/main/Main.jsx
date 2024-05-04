import TodoList from "../todolist/TodoList";
import "./Main.css";

export default function Main({
  todos,
  setTodos,
  setIsEditModalOpen,
  setEditTodo,
  editInputRef,
}) {
  return (
    <main className="main">
      {todos.length ? (
        <TodoList
          todos={todos}
          setTodos={setTodos}
          setIsEditModalOpen={setIsEditModalOpen}
          setEditTodo={setEditTodo}
          editInputRef={editInputRef}
        />
      ) : (
        <p className="info">No Todo's are added yet !</p>
      )}
    </main>
  );
}
