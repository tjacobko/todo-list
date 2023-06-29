const project = (title) => {
    let todos = []

    const addTodo = (todo) => todos.push(todo)

    return { title, todos, addTodo }
}

export { project }