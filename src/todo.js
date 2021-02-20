const toDoForm = document.querySelector(".toDoForm"),
  toDoList = document.querySelector("ul"),
  toDoInput = document.querySelector(".toDoForm Input");

const PENDING = "PENDING",
  FINISHED = "FINISHED";
let pending = [],
  finished = [];

function saveToDos() {
  localStorage.setItem(PENDING, JSON.stringify(pending));
  localStorage.setItem(FINISHED, JSON.stringify(finished));
}

function loadToDos() {
  const pendingToDos = localStorage.getItem(PENDING);
  const finishedToDos = localStorage.getItem(FINISHED);
  if (pendingToDos !== null) {
    const parsedToDos = JSON.parse(pendingToDos);
    pending = parsedToDos;
  }
  if (finishedToDos !== null) {
    const parsedToDos = JSON.parse(finishedToDos);
    finished = parsedToDos;
  }
}

function paintToDo(element, type) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  delBtn.innerHTML = `<i class="fas fa-trash"></i>`;
  delBtn.addEventListener("click", handleDelete);
  span.innerText = element.text;
  span.style.margin = "1rem";
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = element.id;
  if (type === PENDING) {
    const finishBtn = document.createElement("button");
    finishBtn.innerHTML = `<i class="fas fa-check-circle"></i>`;
    finishBtn.addEventListener("click", handleFinish);
    li.appendChild(finishBtn);
    li.appendChild(delBtn);
    toDoList.appendChild(li);
  } else if (type === FINISHED) {
    span.style.color = "gray";
    const unfinishBtn = document.createElement("button");
    unfinishBtn.innerHTML = `<i class="fas fa-undo"></i>`;
    unfinishBtn.addEventListener("click", handleUnFinish);
    li.appendChild(unfinishBtn);
    li.appendChild(delBtn);
    span.style.textDecorationLine = "line-through";
    toDoList.appendChild(li);
  }
}

function paintToDos() {
  while (toDoList.firstChild) {
    toDoList.firstChild.remove();
  }
  pending.forEach((element) => {
    paintToDo(element, PENDING);
  });
  finished.forEach((element) => {
    paintToDo(element, FINISHED);
  });
}

function updateToDos() {
  saveToDos();
  loadToDos();
  paintToDos();
}

function createToDo(text) {
  const id = Date.now();
  pending.push({ id, text });
  updateToDos();
}

function deleteToDo(id) {
  pending = pending.filter((todo) => todo.id !== parseInt(id));
  finished = finished.filter((todo) => todo.id !== parseInt(id));
  updateToDos();
}

function finishToDo(id) {
  pending = pending.filter((element) => {
    if (element.id === parseInt(id)) {
      finished.push(element);
    }
    return element.id !== parseInt(id);
  });
  updateToDos();
}

function unfinishToDo(id) {
  finished = finished.filter((element) => {
    if (element.id === parseInt(id)) {
      pending.push(element);
    }
    return element.id !== parseInt(id);
  });
  updateToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  if (currentValue) {
    createToDo(currentValue);
  }
  toDoInput.value = "";
}

function handleDelete(event) {
  deleteToDo(event.target.parentNode.parentNode.id);
}

function handleFinish(event) {
  finishToDo(event.target.parentNode.parentNode.id);
}

function handleUnFinish(event) {
  unfinishToDo(event.target.parentNode.parentNode.id);
}

function toDoinit() {
  loadToDos();
  paintToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}
toDoinit();
