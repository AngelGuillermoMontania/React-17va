import { useMemo } from "react";

export default function TodoList({ todos, tab, theme }) {
  const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab]);
  function filterTodos(todos, tab) {
    console.log(
      "Alentando artificialmente para filtrar " +
        todos.length +
        ' todos para "' +
        tab +
        '" tab.'
    );
    let startTime = performance.now();
    while (performance.now() - startTime < 500) {
      // No hacer nada durante 500 ms para emular un código extremadamente lento
    }

    return todos.filter((todo) => {
      if (tab === "all") {
        return true;
      } else if (tab === "active") {
        return !todo.completed;
      } else if (tab === "completed") {
        return todo.completed;
      }
    });
  }

  console.log("HOLA");

  return (
    <div style={{ backgroundColor: theme }}>
      <p>
        <b>
          Nota: ¡<code>filterTodos</code> se ralentiza artificialmente!
        </b>
      </p>
      <ul>
        {visibleTodos.map((todo) => (
          <li key={todo.id}>
            {todo.completed ? <s>{todo.text}</s> : todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
