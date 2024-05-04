import "./Todo.css";

export default function Todo({
  todo,
  setTodos,
  setIsEditModalOpen,
  setEditTodo,
}) {
  const handleEditTodo = (id) => {
    setIsEditModalOpen(true);
    setEditTodo(id);
  };

  const handleDeleteTodo = (id) => {
    setTodos((currTodos) => {
      let newTodos = currTodos.filter((todo) => {
        return todo.id !== id;
      });
      return newTodos;
    });
  };

  return (
    <li className="list_item">
      <section className="todo">{todo.todo}</section>
      <section className="btns">
        <button className="edit" onClick={() => handleEditTodo(todo.id)}>
          EDIT
        </button>
        <button className="delete" onClick={() => handleDeleteTodo(todo.id)}>
          DELETE
        </button>
      </section>
    </li>
  );
}
