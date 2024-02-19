document.addEventListener("DOMContentLoaded", function() {
    const todoList = document.getElementById("todo-list");
    const todoInput = document.getElementById("todo-input");
    const addButton = document.getElementById("add-button");
    const totalTasks = document.getElementById("total-tasks");
  
    addButton.addEventListener("click", function() {
      const todoText = todoInput.value.trim();
      if (todoText !== "") {
        addTodoItem(todoText);
        todoInput.value = "";
        updateTotalTasks();
      }
    });
  
    function addTodoItem(todoText) {
      const todoItem = document.createElement("div");
      todoItem.classList.add("todo-item");
  
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.addEventListener("change", function() {
        if (checkbox.checked) {
          todoItem.classList.add("checked");
        } else {
          todoItem.classList.remove("checked");
        }
      });
  
      const todoTextElement = document.createElement("span");
      todoTextElement.textContent = todoText;
  
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.classList.add("delete-button");
      deleteButton.addEventListener("click", function() {
        todoItem.remove();
        updateTotalTasks();
      });
  
      todoItem.appendChild(checkbox);
      todoItem.appendChild(todoTextElement);
      todoItem.appendChild(deleteButton);
      todoList.appendChild(todoItem);
    }
  
    function updateTotalTasks() {
      const tasksCount = todoList.querySelectorAll(".todo-item").length;
      totalTasks.textContent = tasksCount;
    }
  });
  