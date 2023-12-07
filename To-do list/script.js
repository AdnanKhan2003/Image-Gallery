const containerList = document.querySelector(".to-do--list__container");
const form = document.querySelector(".create__list");
const iconCheck = document.querySelector(".check");
const listName = document.querySelector(".to-do__task li");
const inputSearch = document.querySelector(".list__name");
const btnSearch = document.querySelector(".list__button");
const btnDeleteTask = document.querySelector(".close");
const iconMarkClass = ["fa-regular", "fa-square", "check"];
const iconDeleteClass = ["fa-solid", "fa-xmark", "close"];

const saveData = function () {
  localStorage.setItem("tasks", containerList.innerHTML);
};

const showData = function () {
  containerList.innerHTML = localStorage.getItem("tasks");
};

const clearBookmarks = function () {
  localStorage.clear();
};

const toggleClass = function (element, className) {
  element.classList.toggle(className);
};

const addClass = function (element, className) {
  element.classList.add(className);
};

const removeClass = function (element, className) {
  element.classList.remove(className);
};

const appendElement = function (targetEle, sourceEle) {
  targetEle.append(sourceEle);
};

const appendArrayElement = function (targetEle, sourceArr) {
  sourceArr.forEach((sourceEl) => {
    targetEle.append(sourceEl);
  });
};

const getTask = function () {
  const input = inputSearch.value;
  inputSearch.value = "";
  return input;
};

const handleTasks = function (iconElement, taskNameElement) {
  // Add/remove done or undone task icon
  toggleClass(iconElement, "fa-square");
  toggleClass(iconElement, "fa-square-check");

  // Mark done or undone tasks
  if (iconElement.classList.contains("fa-square-check")) {
    addClass(taskNameElement, "mark-done");
  } else {
    removeClass(taskNameElement, "mark-done");
  }
};

const markTasks = function (e) {
  const btn = e.target.closest(".to-do__task");
  const btnTask = btn.querySelector(".task__name");
  const btnTaskIcon = btn.querySelector(".check");

  // If btn is not the task list
  if (!btn) return;

  // Handles user interaction on tasks such as click or double click
  handleTasks(btnTaskIcon, btnTask);
  saveData();
};

const insertTasks = function (e) {
  // Prevent reload on form submission
  e.preventDefault();

  // Create elements for task wrapper, done mark icon and task name
  const containerTask = document.createElement("div");
  const iconMark = document.createElement("i");
  const taskName = document.createElement("li");
  const iconDelete = document.createElement("i");

  // Get tasks from user
  const input = getTask();

  // Return if no input from user
  if (!input) return;

  // Add class for elements: task wrapper, done mark icon and task name
  addClass(containerTask, "to-do__task");
  iconMarkClass.forEach((className) => addClass(iconMark, className));

  iconDeleteClass.forEach((className) => addClass(iconDelete, className));
  addClass(taskName, "task__name");

  taskName.innerText = input;

  // Insert whole task to DOM
  const insertEle = [iconMark, taskName, iconDelete];

  appendArrayElement(containerTask, insertEle);
  appendElement(containerList, containerTask);

  saveData();
};

const deleteTasks = function (e) {
  const btn = e.target.closest(".close");
  if (!btn) return;

  document.querySelector(".to-do__task").remove();
  saveData();
};

// Event Listeners
containerList.addEventListener("click", markTasks);
containerList.addEventListener("click", deleteTasks);
form.addEventListener("submit", insertTasks);
showData();

// clearBookmarks();
