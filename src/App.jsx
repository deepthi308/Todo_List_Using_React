import Footer from "./components/footer/Footer";
import Form from "./components/form/Form";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import "./App.css";
import { useState, useRef } from "react";
import Modal from "./components/modal/Modal";

// Root Component
export default function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editTodo, setEditTodo] = useState(null);
  const editInputRef = useRef();
  return (
    <main className="app">
      <Header />
      <Form todo={todo} setTodo={setTodo} todos={todos} setTodos={setTodos} />
      <Main
        todos={todos}
        setTodos={setTodos}
        setIsEditModalOpen={setIsEditModalOpen}
        setEditTodo={setEditTodo}
        editInputRef={editInputRef}
      />
      <Footer />
      {isEditModalOpen && (
        <Modal
          setIsEditModalOpen={setIsEditModalOpen}
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          editInputRef={editInputRef}
        />
      )}
    </main>
  );
}
