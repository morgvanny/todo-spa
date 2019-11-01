class Todo {
  constructor(obj) {
    this.name = obj.name
    this.id = obj.id
  }

  render() {
    return `<li id="${this.id}">
    <p>${this.name}</p>
    </li>`
  }
}
