import React from 'react'
import { TodoItemProps } from './Todo'

export type TodoListProps = {
    items: TodoItemProps[]
}

type TodoListState = unknown

class TodoList extends React.Component<TodoListProps, TodoListState> {
    render() {
        return (
            <ul>
                {this.props.items.map((item) => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        )
    }
}

export default TodoList
