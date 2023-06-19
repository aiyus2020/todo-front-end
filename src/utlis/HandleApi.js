import axios from "axios";

const baseUrl = "http://localhost:5000";

const getAllTodo = (setTodo) => {
  axios.get(baseUrl).then(({ data }) => {
    console.log(`data ----> `, data);
    setTodo(data);
  });
};

const AddTodo = (text, setText, setTodo) => {
  axios
    .post(`${baseUrl}/save`, { text })
    .then((data) => {
      console.log(data);
      setText("");
      getAllTodo(setTodo);
    })
    .catch((err) => console.log(err));
};
const updatetodo = (todoId, text, setTodo, setText, setisupdating) => {
  axios
    .post(`${baseUrl}/update`, { _id: todoId, text })
    .then((data) => {
      console.log(data);
      setText("");
      setisupdating(false);
      getAllTodo(setTodo);
    })
    .catch((err) => console.log(err));
};
const deleteTodo = (_id, setTodo) => {
  axios
    .post(`${baseUrl}/delete`, { _id })
    .then((data) => {
      console.log(data);
      getAllTodo(setTodo);
    })
    .catch((err) => console.log(err));
};

export { getAllTodo, AddTodo, updatetodo, deleteTodo };
