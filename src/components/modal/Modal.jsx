import { useState } from "react";
import "./Modal.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Modal({
  todo,
  setIsEditModalOpen,
  todos,
  setTodos,
  editTodo,
  editInputRef,
}) {
  const [newTodo, setNewTodo] = useState(function () {
    let _todo = todos.filter((t) => t.id === editTodo);
    return _todo[0].todo;
  });

  const handleChangeTodo = (e) => {
    setNewTodo(e.target.value.toUpperCase());
  };

  const updateTodo = (id) => {
    let newTodos = todos.map((t) => {
      if (t.id === id) {
        return {
          ...t,
          todo: newTodo,
        };
      } else {
        return t;
      }
    });
    setTodos(newTodos);
    setIsEditModalOpen(false);
  };

  const handleSaveNewTodo = (e) => {
    e.preventDefault();
    if (newTodo.length) {
      if (todos.length) {
        let duplicateTodo = todos.filter((t) => t.todo === newTodo);
        if (!duplicateTodo.length) {
          updateTodo(editTodo);
          setNewTodo("");
        } else {
          toast("Todo already exist");
        }
      } else {
        updateTodo(editTodo);
        setNewTodo("");
      }
    } else {
      toast("Please enter a TODO");
    }
  };

  const handleCancelUpdate = (e) => {
    e.preventDefault();
    setIsEditModalOpen(false);
  };

  return (
    <section className="modal_container">
      <form className="modal">
        <section className="form_group">
          <label htmlFor="edit_user_input">Enter New Todo:</label>
          <input
            type="text"
            id="edit_user_input"
            className="edit_user_input"
            value={newTodo}
            onChange={handleChangeTodo}
            ref={editInputRef}
          />
        </section>
        <section className="buttons">
          <button className="save" onClick={handleSaveNewTodo}>
            Save
          </button>
          <button className="cancel" onClick={handleCancelUpdate}>
            Cancel
          </button>
        </section>
      </form>
      <ToastContainer
        position="bottom-right"
        type="info"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition:Bounce
      />
    </section>
  );
}
