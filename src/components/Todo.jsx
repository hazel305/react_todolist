import React from 'react';
import Form from 'react-bootstrap/Form';

const Todo = ({item}) => {
    return (
        <div>
             <Form.Check // prettier-ignore
            type="checkbox"
            id={`todo-${item.id}`}
            label={`${item.text}`}
          />
        </div>
    );
};

export default Todo;