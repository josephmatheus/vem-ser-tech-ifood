import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState([
    {
      name: "Ler",
      done: true,
    },
  ]);

  return (
    <div className="container">
      <h1>Tasks</h1>
      <p>
        <input
          type="text"
          placeholder="What to do"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.code === "Enter") {
              setTasks([
                ...tasks,
                {
                  name: value,
                  done: false,
                },
              ]);
              setValue("");
            }
          }}
        />
        {value === "dormir" ? <span>NÃO pode dormir</span> : null}
      </p>
      <ul>
        {tasks.map((task) => {
          return (
            <li
              key={task.name}
              className={`${task.done ? "done" : ""}`}
              onDoubleClick={() => {
                // achar o elemento no array
                const nextTasks = tasks.map((t) => {
                  if (t.name === task.name) {
                    return {
                      ...t,
                      done: !t.done,
                    };
                  }
                  return t;
                });

                setTasks(nextTasks);
              }}
            >
              <span>{task.name}</span>
              <button onClick={() => {
                const filtrado = tasks.filter((t) => t.name !== task.name);
                setTasks(filtrado);
              }}>[X]</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
