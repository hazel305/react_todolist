import React, { useState } from 'react';
// import Form from 'react-bootstrap/Form';

const Todo = ({item}) => {
    const [isChecked, setIsChecked] = useState(false);

    let className = 'form-check-label';
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
    return (
        <div className="form-check">
             {/* <Form.Check // prettier-ignore
            type="checkbox"
            id={`todo-${item.id}`}
            label={`${item.text}`}
            className={className}
            style={deco}
            onChange={handleCheckboxClick}
            checked={!isChecked}
          /> */}
     
            <input className="form-check-input" type="checkbox" value="" id={`todo${item.id}`} onChange={handleCheckboxClick}/>
            <label className={className} style={deco} htmlFor={`todo${item.id}`}>
                {item.text}
            </label>

        </div>
    );
};

export default Todo;