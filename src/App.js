
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Todo from './components/Todo';

function App() {
  const [todo,setTodo] = useState([
    {id:1, text:"learn chapter1", checked:false},
    {id:2, text:"learn chapter2", checked:false},
    {id:3, text:"learn chapter3", checked:false},
  ]);
  const [todoId, setTodoId] = useState(2);

  let todos = todo.map(item=>(
    <Todo key={item.id} item={item}/>
  ))

  let addTodo = (item)=>{
    let newTodos = [...todo];
    //todoId는 const라서 복사하고 가져오기
    let newId  = todoId +1;
    setTodoId(newId+1);
   newTodos.push({id:newId, text:item, checked:false});
   setTodo(newTodos);
  //  setTodo("");
  document.getElementById('todo').value='';
  }

  const handleSubmit = (e)=>{
  e.preventDefault();
  // console.log(e.target.todo.value);
   addTodo(e.target.todo.value);
  }
  return (
    <div className="container">
    <h2>todo List</h2>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="todo">
        <Form.Label>Add todo</Form.Label>
        <Form.Control type="text" placeholder="add todo" name="todo"/>
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
