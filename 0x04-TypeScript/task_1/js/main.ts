interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

const teacher3: Teacher = {
  firstName: "John",
  fullTimeEmployee: false,
  lastName: "Doe",
  location: "London",
  contract: false,
};

console.log(teacher3);

interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: "Benjamin",
  lastName: "Lamptey",
  fullTimeEmployee: true,
  location: "Accra",
  numberOfReports: 5,
  contract: true, // still allowed from Teacher’s index signature
};

console.log(director1);
