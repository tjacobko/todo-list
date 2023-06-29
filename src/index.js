import { project } from "./project"
import { todo } from "./todo"

const content = document.getElementById("content")

let projects = []

const project1 = project("Project 1")
const project2 = project("Project 2")

const todo1 = todo("ToDo1", "Stuff", 123, "High")
const todo2 = todo("ToDo2", "Things", 345, "Low")

project1.addTodo(todo1)
project2.addTodo(todo1)
project2.addTodo(todo2)

projects.push(project1)
projects.push(project2)

console.table(projects)

const display = () => {
    projects.forEach(project => {
        const card = document.createElement("div")
        card.classList.add("card")
        
        const card_title = document.createElement("h1")
        card_title.textContent = project.title
        card.appendChild(card_title)

        const task_list = document.createElement("div")
        project.todos.forEach(todo => {
            const task = document.createElement("div")
            task.classList.add("task")
            const task_title = document.createElement("h3")
            task_title.textContent = todo.title
            task.appendChild(task_title)
            task_list.appendChild(task)
        })
        card.appendChild(task_list)

        content.appendChild(card)
    })
}

display()