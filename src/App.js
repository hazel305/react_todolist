
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Todo from './components/Todo';

function App() {
  const [todo,setTodo] = useState([
    {id:1, text:"learn chapter1", checked:false},
    {id:2, text:"learn chapter2", checked:false},
    {id:3, text:"learn chapter3", checked:false},
  ]);

  let todos = todo.map(item=>(
    <Todo key={item.id} item={item}/>
  ))
  return (
    <div className="container">
    <h2>todo List</h2>
    <Form>
      <Form.Group className="mb-3" controlId="todo1">
        <Form.Label>Add todo</Form.Label>
        <Form.Control type="text" placeholder="add todo" />
      </Form.Group>
    </Form>
    <div>
      {todos}
    </div>
    </div>
  );
}

export default App;
