import { useRef } from "react";
import "./Form.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GrPowerReset } from "react-icons/gr";

export default function Form({ todo, setTodo, todos, setTodos }) {
  const handleTodoChange = (e) => {
    setTodo(e.target.value.toUpperCase());
  };

  const inputRef = useRef();

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (todo.length) {
      if (todos.length) {
        let duplicateTodo = todos.filter((t) => t.todo === todo);
        if (!duplicateTodo.length) {
          setTodos([...todos, { id: todos.length + 1, todo }]);
          setTodo("");
        } else {
          // alert("Todo already exist");
          toast("Todo already exist");
          inputRef.current.focus();
        }
      } else {
        setTodos([...todos, { id: todos.length + 1, todo }]);
        setTodo("");
        inputRef.current.focus();
      }
    } else {
      toast("Please enter a TODO");
      inputRef.current.focus();
    }
  };

  const handleReset = (e) => {
    e.preventDefault();
    setTodos([]);
    setTodo("");
  };

  return (
    <form>
      <input
        type="text"
        className="user_input"
        value={todo}
        onChange={handleTodoChange}
        ref={inputRef}
        placeholder="Type Your Todo Here"
      />
      <button className="add" type="submit" onClick={handleAddTodo}>
        ADD TODO
      </button>
      <button className="reset" onClick={handleReset}>
        <GrPowerReset /> RESET
      </button>
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
    </form>
  );
}
