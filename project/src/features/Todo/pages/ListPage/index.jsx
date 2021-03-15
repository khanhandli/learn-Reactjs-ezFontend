import React, { useState } from "react";
import TodoForm from "../../components/TodoForm";
import TodoList from "../../components/TodoList";

ListPage.propTypes = {};

function ListPage(props) {
    const [todoList, setTodoList] = useState([
        {
            id: 1,
            title: 'ReactJS',
            status: 'new'
        },
        {
            id: 2,
            title: 'Javascript',
            status: 'completed'
        },
        {
            id: 3,
            title: 'PHP',
            status: 'new'
        },
    ]);
    const [filter, setFilter] = useState('all');

    function handleClickTodo(value) {
        const findIndex = todoList.findIndex(x => x.id === value.id);
        // clone current arrat to the new one
        const newTodoList = [...todoList];

        //toggle state
        newTodoList[findIndex] = {
            ...newTodoList[findIndex],
            status: newTodoList[findIndex].status === 'new' ? 'completed' : 'new',
        };
        //update todo list
        setTodoList(newTodoList);
        console.log(todoList)

    }

    const handleShowAllClick = () => {
        setFilter('all')
    }

    const handleShowNewClick = () => {
        setFilter('new')

    }

    const handleShowCompletedClick = () => {
        setFilter('completed')

    }

    const renderTodoList = todoList.filter(todo => filter === 'all' || filter === todo.status);


    const handleOnSubmit = (value) => {
        const newTodo = {
            id: todoList.length + 1,
            title: value.title,
            status: 'new'
        }
        const newTodoList = [...todoList, newTodo]

        setTodoList(newTodoList)
    }


    return (
        <div>
            <h2>To Do Form</h2>
            <TodoForm onSubmit={handleOnSubmit} />

            <h2>Todo Lists</h2>
            <TodoList todoList={renderTodoList} onClickTodo={handleClickTodo} />

            <div>
                <button onClick={handleShowAllClick}>
                    Show All
				</button>
                <button onClick={handleShowNewClick}>
                    Show New
				</button>
                <button onClick={handleShowCompletedClick}>
                    Show Completed
				</button>
            </div>
        </div>
    );
}

export default ListPage;
