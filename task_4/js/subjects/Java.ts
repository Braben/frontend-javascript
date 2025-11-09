/// <reference path="Teacher.ts" />
/// <reference path="Subject.ts" />

namespace Subjects {
  // Extend the Teacher interface using declaration merging
  export interface Teacher {
    experienceTeachingJava?: number; // Optional property
  }
}

class Java extends Subjects.Subject {
  getRequirements(): string {
    return "Here is the list of requirements for Java";
  }

  getAvailableTeacher(): string {
    if (
      !this.teacher.experienceTeachingJava ||
      this.teacher.experienceTeachingJava < 0
    ) {
      return "No available teacher";
    }
    return `Available Teacher: ${this.teacher.firstName}`;
  }
}
