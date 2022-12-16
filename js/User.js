// Написати клас User(ім'я, прізвище, стать ) і клас Student(все, що має User і додатково рік вступу).
// За допомогою вбудованого об'єкту Date перевіряєте, щоб рік вступу був не більше за поточний рік.
// У студента буде метод, який повертає кількість років які начається студент, тобто курс.
// Якщо рік вступу дорівнює поточному року - то це 1 курс. Місяці і дні вступу не враховуємо.

// Скрізь попрописувати сетери і гетери. Використати try...catch

class User {
   /**
    *
    * @param {string} lname
    * @param {string} fname
    * @param {string} male
    */
   constructor(lname, fname, male) {
      this.lname = lname;
      this.fname = fname;
      this.male = male;
   }
   get lname() {
      return this._lname;
   }
   set lname(lname) {
      if (typeof lname !== "string") {
         throw new TypeError("lname must be a string");
      }
      this._lname = lname;
   }
   get fname() {
      return this._fname;
   }
   set fname(fname) {
      if (typeof fname !== "string") {
         throw new TypeError("fname must be a string");
      }
      this._fname = fname;
   }
   get male() {
      return this._male;
   }
   set male(male) {
      if (typeof male !== "string") {
         throw new TypeError("male must be a string");
      }
      this._male = male;
   }
}

class Student extends User {
   /**
    *
    * @param {number} startYear
    */
   constructor(lname, fname, male, startYear) {
      super(lname, fname, male);
      this.startYear = startYear;
   }
   get startYear() {
      return this._startYear;
   }
   set startYear(startYear) {
      if (typeof startYear !== "string") {
         throw new TypeError("StartYear must be a data");
      }
      this._startYear = startYear;
   }
   getYearStudy() {
      return new Date().getFullYear() - new Date(this._startYear).getFullYear() === 0
         ? 1
         : new Date().getFullYear() - new Date(this._startYear).getFullYear();
      +1;
   }
}

try {
   const student1 = new Student("Vasil", "Kit", "male", "1.09.2019");
   const student2 = new Student("Ronald", "Mcdonald", "male", "1.09.2022");
   const student3 = new Student("Jonatan", "Dog", "male", "1.09.2021");
   console.log(student1);
   console.log(student1.getYearStudy());
   console.log(student2);
   console.log(student2.getYearStudy());
   console.log(student3);
   console.log(student3.getYearStudy());
} catch (error) {
   console.log(error);
}
