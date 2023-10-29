import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Todo from './components/Todo';
// Import Swiper React components
import { Navigation, Pagination} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


function App() {
  // window.localStorage.setItem("name","푸바오"); //저장
  // console.log(window.localStorage.getItem('name'));
  // window.localStorage.removeItem('name');
  // console.log(window.localStorage.getItem('name'));



const [todoId, setTodoId] = useState(0);
  const [todo, setTodo] = useState([
    { id: 1, text: "learn chapter1", checked: false },
    { id: 2, text: "learn chapter2", checked: false },
    { id: 3, text: "learn chapter3", checked: false },
  ]);
  //객체나 배열은 문자열로 변환뒤에 setItem. stringify
  // const objString = JSON.stringify(todo); //객체-> 문자열
  // console.log(objString);
  // window.localStorage.setItem('todo',objString);//스토리지 저장
  //window.localStorage.getItem('todo');//스토리지 값읽기
  // const todoObj = JSON.parse(objString);//문자열-> 객체, 배열
  // console.log(todoObj);

  const getTodoList = ()=>{
    let todoListFromStorage = window.localStorage.getItem('todo');
    console.log(todoListFromStorage);
    if(todoListFromStorage !== null){
      window.localStorage.getItem('todo');
      //값이 있다면 할일
      const todoObj = JSON.parse(todoListFromStorage);
      let lastId = todoObj[todoObj.length -1 ].id;
      setTodo(todoObj);
      setTodoId(lastId)
      console.log(todoObj);
    }
  }

  useEffect(()=>{
    getTodoList();
  },[])

  const deleteTodo = (id) => {
    let newTodos = [...todo];
    let index = newTodos.findIndex((item) => item.id === id);
    newTodos.splice(index, 1);
    setTodo(newTodos);
  };

  const update = (id, val)=>{
    let newTodos = [...todo];
    let index = newTodos.findIndex((item) => item.id === id);
    newTodos[index]= {id:id, text:val, checked:false}
    setTodo(newTodos);
   
  }

    let todos = todo.map((item) => (
      <Todo key={item.id} item={item} deleteTodo={deleteTodo} update={update} />
    ));
  

 

  let addTodo = (item) => {
    let newTodos = [...todo];
    let newId = todoId + 1;
    setTodoId(newId); 
    newTodos.push({ id: newId, text: item, checked: false });
    setTodo(newTodos);
    

  };

  const setStorage = ()=>{
    const todoString = JSON.stringify(todo);
    window.localStorage.setItem('todo',todoString);
    console.log('storage에 저장');
  }

  useEffect(()=>{
    setStorage();
  },[todo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(e.target.todo.value);
  }




 
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


      <div className='sw'>

        <h2>swiper JS</h2>
        <Swiper
          modules={[Pagination,Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          pagination={{ clickable: true }}
          navigation
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          
        </Swiper>
      </div>
    </div>
  );
}

export default App;
