document.addEventListener('DOMContentLoaded', () => {
  getTodoList()
  document.querySelector('.new-todo').addEventListener('submit', newTodo)
})

const getTodoList = () => {
  fetch('http://localhost:3000/todos')
    .then(res => res.json())
    .then(data => {
      data.forEach(t => {
        const todo = new Todo(t)
        document.querySelector('ul.todo-list').innerHTML += todo.render()
      })
    })
}

const newTodo = e => {
  e.preventDefault()
  fetch('http://localhost:3000/todos', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      todo: { name: e.target.todo.value }
    })
  })
    .then(res => res.json())
    .then(data => {
      const todo = new Todo(data)
      document.querySelector('ul.todo-list').innerHTML += todo.render()
      e.target.reset()
    })
}
