import React, { ChangeEventHandler, FormEventHandler } from 'react'
import TodoList from './TodoList'

type TodoAppProps = Record<string, unknown>

type TodoAppState = {
    items: TodoItemProps[]
    text: string
}

export interface TodoItemProps {
    text: string
    id: number
}

class TodoApp extends React.Component<TodoAppProps, TodoAppState> {
    state: TodoAppState = { items: [], text: '' }
    render() {
        return (
            <div>
                <h3>TODO</h3>
                <TodoList items={this.state.items} />
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="new-todo">What needs to be done?</label>
                    <input
                        id="new-todo"
                        onChange={this.handleChange}
                        value={this.state.text}
                    />
                    <button>Add #{this.state.items.length + 1}</button>
                </form>
            </div>
        )
    }

    handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        this.setState({ text: e.target.value })
    }

    handleSubmit: FormEventHandler = (e) => {
        e.preventDefault()
        if (this.state.text.length === 0) {
            return
        }
        const newItem = {
            text: this.state.text,
            id: Date.now(),
        }
        this.setState((state) => ({
            items: state.items.concat(newItem),
            text: '',
        }))
    }
}

export default TodoApp
