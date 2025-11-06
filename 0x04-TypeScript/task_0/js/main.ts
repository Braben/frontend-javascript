interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "Los Angeles",
};

const studentList: Student[] = [student1, student2];

// Create table elements
const table = document.createElement("table");
const tableHead = document.createElement("thead");
const tableBody = document.createElement("tbody");

// Header
const headerRow = document.createElement("tr");
const firstNameHeader = document.createElement("th");
firstNameHeader.textContent = "First Name";
const locationHeader = document.createElement("th");
locationHeader.textContent = "Location";
headerRow.append(firstNameHeader, locationHeader);
tableHead.appendChild(headerRow);
table.appendChild(tableHead);

// Rows
studentList.forEach((student) => {
  const row = document.createElement("tr");
  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;
  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;
  row.append(firstNameCell, locationCell);
  tableBody.appendChild(row);
});

table.appendChild(tableBody);
document.body.appendChild(table);

// Optional style
// table.style.borderCollapse = "collapse";
// table.querySelectorAll("th, td").forEach((cell) => {
//   (cell as HTMLTableCellElement).style.border = "1px solid #333";
//   (cell as HTMLTableCellElement).style.padding = "6px";
// });
