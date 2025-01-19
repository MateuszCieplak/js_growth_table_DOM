'use strict';

// write code here
const buttonTable = document.querySelectorAll(".button");
const tableArray = document.querySelector("tr");
const table = tableArray.parentElement;

buttonTable.forEach(button => {
  const buttonClass = button.className;

  button.addEventListener("click", () => tableMethodbutton(buttonClass));
});

function tableMethodbutton(typeClass) {
  const columnTable = document.querySelectorAll("tr");

  if ((typeClass.includes("append-column"))) {
    columnTable.forEach(element => {
      if (element.children.length < 10) {
        const td = document.createElement("td");

        element.appendChild(td);
      }
    });
  } else if ((typeClass.includes("remove-column"))) {
    columnTable.forEach(element => {
      if (element.children.length > 2) {
        element.lastChild.remove();
      }
    });
  } else if ((typeClass.includes("append-row"))) {
    if (table.children.length < 10) {
      const rowTable = table.firstChild.cloneNode(true);

      table.appendChild(rowTable);
    }
  } else if ((typeClass.includes("remove-row"))) {
    if (table.children.length > 2) {
      table.lastChild.remove();
    }
  }
}
