import React, { useState } from 'react';
// import Form from 'react-bootstrap/Form';

const Todo = ({item, deleteTodo}) => {
    const [isChecked, setIsChecked] = useState(false);
    const [mode, setMode] = useState('read');
    const [text,setText] = useState(item.text);

    let className = 'form-check-label';
    let formClass = 'hidden';
   
    if(mode ==="edit"){
        className += " hidden";
        formClass='';
    }
    let deco = {};
    if(isChecked){
        className += ' text-muted';
        deco = {textDecoration:'line-through'}
    }

    const handleCheckboxClick = ()=>{
        setIsChecked(!isChecked);
        // setIsChecked((prevChecked) => !prevChecked);
      
        // console.log(isChecked);
    }

    const todoDelete = ()=>{
        deleteTodo(item.id);
    }

    const todoEdit= ()=>{
     setMode('edit');
    }
    
    const handleEdit=(val)=>{
      console.log(val);
      console.log(text)
    }

    const changeMode = (val)=>{
       setMode(val); 
    }
    return (
        <div className="form-check">
     
            <input className="form-check-input" type="checkbox" value="" id={`todo${item.id}`} onChange={handleCheckboxClick}/>
            <label className={className} style={deco} htmlFor={`todo${item.id}`}>
                {item.text}
            </label>
            <form className={formClass}>
            <input className="form-control" type="text" value={text} onChange={(e)=>{
                handleEdit(e.target.value);
                console.log(text);
            }}/> 
            <button type="button" className="btn btn-primary btn-sm mx-2" onClick={todoEdit}>Update</button>
            <button type="button" className="btn btn-warning btn-sm mx-2" onClick={() => changeMode('read')}>Cancel</button>
            </form>
            <button type="button" className="btn btn-secondary btn-sm mx-2" onClick={todoEdit}>Edit</button>
            <button type="button" className="btn btn-danger btn-sm mx-2" onClick={todoDelete}>Delete</button>
        </div>
    );
};

export default Todo;