const taskInput = document.getElementById('item-name')
const addTaskButton = document.getElementById('btn-add-task')
const taskList = document.querySelector('ul')
const emptyItem = document.querySelector('.item');

// remove o primeiro li
const firstLi = taskList.firstElementChild
if (firstLi) {
  firstLi.style.display = 'none'
}

function addNewItem(itemName) {
  const li = document.createElement('li')
  li.className = 'item'

  const taskContent = document.createElement('div')
  taskContent.className = 'task-content'

  const label = document.createElement('label')
  label.className = 'custom-checkbox'

  const checkbox = document.createElement('input')
  checkbox.type = 'checkbox'
  checkbox.name = 'finished'
  checkbox.id = 'finished'

  const checkboxImg = document.createElement('div')
  checkboxImg.className = 'checkbox-img'

  const nameItem = document.createElement('span')
  nameItem.className = 'item-name'
  nameItem.textContent = itemName

  // Adiciona o checkbox e a imagem de fundo ao label
  label.appendChild(checkbox)
  label.appendChild(checkboxImg)

  // Adiciona o label e o span
  taskContent.appendChild(label)
  taskContent.appendChild(nameItem)

  const removeButton = document.createElement('button')
  removeButton.className = 'task-remove'

  const trashIcon = document.createElement('img')
  trashIcon.src = 'assets/icons/trash.svg'

  removeButton.appendChild(trashIcon)

  // Adiciona evento de clique ao botão de remoção
  removeButton.addEventListener("click", (event) => {
    event.preventDefault()
    li.remove()
  })

  li.appendChild(taskContent)
  li.appendChild(removeButton)

  return li
}

addTaskButton.addEventListener('click', (event) => {
  event.preventDefault()
  const taskName = taskInput.value

  if (taskName) {
    const newTask = addNewItem(taskName)
    taskList.append(newTask)
    taskInput.value = ''
  } else {
    alert('Por favor insira uma tarefa com nome.')
  }
})