import React, { BaseSyntheticEvent, useState } from 'react';

interface Props {
    addTodo: AddTodo;
}

export const AddTodoForm: React.FC<Props> = ({addTodo}) => {
    const [text, setText] = useState('');
    const onClickHandler = (event: BaseSyntheticEvent) => {
        event.preventDefault();
        addTodo(text);
        setText('');
    }

    const onChangeHandler = (event: BaseSyntheticEvent) => {
        setText(event.target.value)
    }
  return (
    <form>
      <input onChange={onChangeHandler} type="text" />
      <button onClick={onClickHandler} type="submit">Add Todo</button>
    </form>
  );
};
