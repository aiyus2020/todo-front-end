import { useEffect, useState } from "react";
import Todo from "./components/Todo.js";
import {
  AddTodo,
  getAllTodo,
  updatetodo,
  deleteTodo,
} from "./utlis/HandleApi.js";

function App() {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");
  const [isupdating, setisupdating] = useState(false);
  const [todoId, settodoid] = useState("");

  useEffect(() => {
    getAllTodo(setTodo);
  }, []);

  const updateMode = (_id, text) => {
    setisupdating(true);
    setText(text);
    settodoid(_id);
  };
  return (
    <div className="App">
      <div className="container">
        <h1>Todo App</h1>

        <div className="top">
          <input
            type="text"
            placeholder="Add Todos..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div
            className="add"
            onClick={
              isupdating
                ? () =>
                    updatetodo(todoId, text, setTodo, setText, setisupdating)
                : () => AddTodo(text, setText, setTodo)
            }
          >
            {isupdating ? "update" : "add"}
          </div>
        </div>
        <div className="list">
          {todo.map((item) => (
            <Todo
              key={item._id}
              text={item.text}
              updateMode={() => updateMode(item._id, item.text)}
              deleteTodo={() => deleteTodo(item._id, setTodo)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
