const masterArray = [];

document.forms[0].addEventListener("submit", (e) => {
  e.preventDefault();

  masterArray.push(e.target[0].value);

  alert("You have added a task");
});
