import { project } from "./project"
import { todo } from "./todo"

const content = document.getElementById("content")

let projects = []

// Create sample project objects
const project1 = project("Project 1")
const project2 = project("Project 2")

// Create sample todo objects
const todo1 = todo("ToDo 1", "Stuff", 123, "High")
const todo2 = todo("ToDo 2", "Things", 345, "Low")
const todo3 = todo("ToDo 3", "More stuff", 890, "Med")

// Use project fxn to add todo
project1.addTodo(todo1)
project2.addTodo(todo2)
project2.addTodo(todo3)

// Push sample projects to array
projects.push(project1)
projects.push(project2)

// Display fxn creates DOM elements from projects array
const display = () => {
    // Remove all current cards
    const cards = document.querySelectorAll(".card")
    cards.forEach(card => content.removeChild(card))

    // Create and add all projects from array
    projects.forEach(project => {
        const card = document.createElement("div")
        card.classList.add("card")
        
        const card_title = document.createElement("h1")
        card_title.textContent = project.title
        card.appendChild(card_title)

        const task_list = document.createElement("div")
        project.todos.forEach(todo => {
            // Task div
            const task = document.createElement("div")
            task.classList.add("task")

            // Task title
            const task_title = document.createElement("h3")
            task_title.classList.add("task-title")
            task_title.textContent = todo.title
            task.appendChild(task_title)

            // Task description
            const task_description = document.createElement("p")
            task_description.classList.add("task-description")
            task_description.textContent = todo.description
            task.appendChild(task_description)

            // Task due date
            const task_due_date = document.createElement("p")
            task_due_date.classList.add("task-due-date")
            task_due_date.textContent = todo.dueDate
            task.appendChild(task_due_date)

            // Task priority
            const task_priority = document.createElement("p")
            task_priority.classList.add("task-priority")
            task_priority.textContent = todo.priority
            task.appendChild(task_priority)

            // Finally append task to task list
            task_list.appendChild(task)
        })
        card.appendChild(task_list)

        content.appendChild(card)
    })
}

display()