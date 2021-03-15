import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames'
import './style.scss'


TodoList.propTypes = {
    todoList: PropTypes.array,
    onClickTodo: PropTypes.func,
};

TodoList.defaultProps = {
    todoList: [],
    onClickTodo: null
}

function TodoList(props) {
    const { todoList, onClickTodo } = props;

    const handleClickTodo = (value) => {
        if (onClickTodo) {
            onClickTodo(value);
        }

    }

    return (
        <ul className="todo-list">
            {todoList.map(todo => (
                <li key={todo.id} className={classnames({
                    completed: todo.status === 'completed',
                    'todo-item': true
                })}
                    onClick={() => handleClickTodo(todo)}
                >
                    {todo.title}
                </li>
            ))
            }
        </ul >
    );
}

export default TodoList;