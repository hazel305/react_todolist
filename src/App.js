import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Todo from './components/Todo';

function App() {
 

  const [todo, setTodo] = useState([
    { id: 1, text: "learn chapter1", checked: false },
    { id: 2, text: "learn chapter2", checked: false },
    { id: 3, text: "learn chapter3", checked: false },
  ]);
  const [todoId, setTodoId] = useState(3); // 초기 값을 3으로 설정

  const deleteTodo = (id) => {
    let newTodos = [...todo];
    let index = newTodos.findIndex((item) => item.id === id);
    newTodos.splice(index, 1);
    setTodo(newTodos);
  };

  let addTodo = (item) => {
    let newTodos = [...todo];
    let newId = todoId + 1;
    setTodoId(newId); // todoId 업데이트
    newTodos.push({ id: newId, text: item, checked: false });
    setTodo(newTodos);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(e.target.todo.value);
  }

  let todos = todo.map((item) => (
    <Todo key={item.id} item={item} deleteTodo={deleteTodo} />
  ));

  return (
    <div className="container">
      <h2>todo List</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="todo">
          <Form.Label>Add todo</Form.Label>
          <Form.Control type="text" placeholder="add todo" name="todo" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add
        </Button>
      </Form>

      <div>
        {todos}
      </div>
    </div>
  );
}

export default App;
