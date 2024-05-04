import Todo from "../todo/Todo";
import "./TodoList.css";

export default function TodoList({
  todos,
  setTodos,
  setIsEditModalOpen,
  setEditTodo,
  editInputRef,
}) {
  return (
    <ul className="list">
      {todos.map((todo) => (
        <Todo
          todo={todo}
          key={todo.id}
          setTodos={setTodos}
          setIsEditModalOpen={setIsEditModalOpen}
          setEditTodo={setEditTodo}
          editInputRef={editInputRef}
        />
      ))}
    </ul>
  );
}
