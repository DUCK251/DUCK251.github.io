const form = document.querySelector(".nameForm");
const nameDiv = document.querySelector(".name");

const handleCancelSubmit = (event) => {
  nameDiv.lastChild.remove();
  nameDiv.lastChild.remove();
  form.style.display = "block";
}

const handleNameSubmit = (event) => {
  event.preventDefault();
  const name = event.target.lastElementChild.value;
  localStorage.setItem("name", name);
  const h2 = document.createElement("h2");
  h2.innerHTML = `안녕! ${name}`;
  const changeBtn = document.createElement("button");
  changeBtn.innerHTML = `<i class="fas fa-undo"></i>`;
  changeBtn.addEventListener("click", handleCancelSubmit);
  nameDiv.appendChild(h2);
  nameDiv.appendChild(changeBtn);
  form.style.display = "none";
}

const nameInit = () => {
  form.addEventListener("submit", handleNameSubmit);
  const name = localStorage.getItem("name");
  if (name) {
    const h2 = document.createElement("h2");
    h2.innerText = `안녕! ${name}`;
    nameDiv.appendChild(h2);
    const changeBtn = document.createElement("button");
    changeBtn.innerHTML = `<i class="fas fa-undo"></i>`;
    changeBtn.addEventListener("click", handleCancelSubmit);
    nameDiv.appendChild(changeBtn);
    form.style.display = "none";
  }
}

nameInit();