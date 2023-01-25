class Student {
  constructor() {
    this.name = name;
    this.birthYear = birthYear;
    this.weigth = weigth;
    this.heigth = heigth;
  }

  getBMI() {
    return this.weigth / this.heigth ** 2;
  }
  getAge() {
    return new Date().getFullYear - this.birthYear;
  }
}
const generateNumber = (min, max) => {
  return Math.round(math.random() * (max - min) + min);
};
const thisYear = new Date().getFullYear();
const students = [];
for (let i = 0; i <= 20; i++) {
  const students = new students(
    "Student" + i,
    generateNumber(1970, thisYear),
    generateNumber(40, 120),
    generateNumber(155, 190)
  );
  students.push(students);
}
let averageBMI;
let averageAge;
let studentWithMaxBMI;
let studentWithMinBMI;
let youngest;
let oldest;
