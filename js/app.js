const titleElement = document.getElementById('title')
const btnElement = document.getElementById('submit-button')
const resetButton = document.getElementById('reset-button')
// const ulElement = document.getElementById('todo-list')

btnElement.addEventListener("click", function(evt){
  const newLi = document.createElement('li')
  const inpElement = document.getElementById('add-list')
  newLi.textContent = inpElement.value 
  if (inpElement.value !== ""){
    document.querySelector('ul').appendChild(newLi)
    inpElement.value = ""

    
  }
})

resetButton.addEventListener("click",)