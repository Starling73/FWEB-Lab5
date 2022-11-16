let initial = document.querySelector("#initial");
let group = document.querySelector("#group");
let phoneNumber = document.querySelector("#phone-number");
let idCard = document.querySelector("#id-card");
let faculty = document.querySelector("#faculty");
const btn = document.getElementById("btn");
const infoContainer = document.querySelector(".info_container");
let numberOfRow = 6;
let numberOfColumns = 6;
let tableContainer = document.querySelector(".table_container");
let colorPicker = document.getElementById("colorInput");
let elArray = [initial, group, phoneNumber, idCard, faculty];
let regExArray = [
  /([А-Яа-я-.]+) ([А-Яа-я-.]+) ([А-Яа-я-.]+)/,
  /^[А-Я, І]{2}-[0-9]{2}/,
  /\([0-9]{3}\)-[0-9]{3}-[0-9]{2}-[0-9]{2}/,
  /([А-Я]{2}) (№)(\d{6})/,
  /^[А-Я, І]{4}$/,
];

function checkIfValid(elArray, regExArray) {
  let boolArray = [];
  for (let i = 0; i < elArray.length; i++) {
    if (elArray[i].value.match(regExArray[i])) {
      sessionStorage.setItem("data" + i, elArray[i].value);
      boolArray.push(1);
    } else {
      boolArray.push(0);
    }
  }

  if (boolArray.includes(0)) {
    for (let i = 0; i < boolArray.length; i++) {
      if (boolArray[i] === 0) {
        checkColor(i);
      }
    }
    boolArray = [];
  } else {
    window.open("./action.html");
    for (let i = 0; i < elArray.length; i++) {
      elArray[i].classList.add("getNormal");
    }
  }
  boolArray = [];
}

function checkColor(index) {
  elArray[index].classList.remove("getNormal");
  elArray[index].classList.add("getRed");
}

btn.addEventListener("click", () => {
  checkIfValid(elArray, regExArray);
});

let myCell = document.querySelector("#cell2");

myCell.addEventListener("mouseover", () => {
  myCell.setAttribute("style", `background-color:#${randomColor()}`);
});

myCell.addEventListener("click", () => {
  myCell.setAttribute("style", `background-color:${colorPicker.value}`);
});

myCell.addEventListener("dblclick", () => {
  let vertical = document.querySelectorAll(".vertical");
  vertical.forEach((el) => {
    el.setAttribute("style", `background-color:${colorPicker.value}`);
    myCell.setAttribute("style", `background-color: #ffffff}`);
  });
});

function randomColor() {
  return Math.floor(Math.random() * 16777215).toString(16);
}

