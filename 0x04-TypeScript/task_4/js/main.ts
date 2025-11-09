// / <reference path="./subjects/Cpp.ts" />
// / <reference path="./subjects/Java.ts" />
// / <reference path="./subjects/React.ts" />
// / <reference path="./subjects/Teacher.ts" />

import { Cpp } from "./subjects/Cpp";
import { Java } from "./subjects/Java";
import { React } from "./subjects/React";
import { Teacher } from "./subjects/Teacher";

const cTeacher: Teacher = {
    firstName: "Benjamin",
    lastName: "Lamptey",
    experienceTeachingC: 10,
};


//cpp Subject
const cpp = new Cpp();
cpp.setTeacher(cTeacher);

console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());


//java Subject
const java = new Java();
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

//react Subject
const react = new React();
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
