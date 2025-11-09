import { Teacher } from "./Teacher";

export class Cpp {
  teacher?: Teacher;

  setTeacher(teacher: Teacher) {
    this.teacher = teacher;
  }

  getRequirements(): string {
    return "Here is the list of requirements for Cpp";
  }

  getAvailableTeacher(): string {
    if (!this.teacher?.experienceTeachingC) {
      return "No available teacher";
    }
    return `Available Teacher: ${this.teacher.firstName}`;
  }
}
