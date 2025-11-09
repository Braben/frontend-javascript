/// <reference path="Teacher.ts" />
/// <reference path="Subject.ts" />

namespace Subjects {
  // Extend the Teacher interface using declaration merging
  export interface Teacher {
    experienceTeachingReact?: number; // Optional property
  }
}

class React extends Subjects.Subject {
  getRequirements(): string {
    return "Here is the list of requirements for React";
  }

  getAvailableTeacher(): string {
    if (
      !this.teacher.experienceTeachingReact ||
      this.teacher.experienceTeachingReact < 0
    ) {
      return "No available teacher";
    }
    return `Available Teacher: ${this.teacher.firstName}`;
  }
}
