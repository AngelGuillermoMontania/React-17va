import { useState } from "react";
import TodoList from "./components/TodoList.jsx";

function createTodos() {
  const todos = [];
  for (let i = 0; i < 50; i++) {
    todos.push({
      id: i,
      text: "Todo " + (i + 1),
      completed: Math.random() > 0.5,
    });
  }
  return todos;
}
const todos = createTodos();

export default function App() {
  const [tab, setTab] = useState("all");
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      <button onClick={() => setTab("all")}>Todos</button>
      <button onClick={() => setTab("active")}>Activos</button>
      <button onClick={() => setTab("completed")}>Completados</button>
      <br />
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={(e) => setIsDark(e.target.checked)}
        />
        Modo oscuro
      </label>
      <hr />
      <TodoList todos={todos} tab={tab} theme={isDark ? "black" : "grey"} />
    </>
  );
}
