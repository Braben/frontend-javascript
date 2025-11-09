import { Teacher } from "./Teacher";
export class React {
  teacher?: Teacher;
  setTeacher(teacher: Teacher) {
    this.teacher = teacher;
  }
  getRequirements(): string {
    return "Here is the list of requirements for Java";
  }
  getAvailableTeacher(): string {
    if (!this.teacher?.experienceTeachingReact) {
      return "No available teacher";
    }
    return `Available Teacher: ${this.teacher.firstName}`;
  }
}