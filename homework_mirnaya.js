// Создание объекта студент
function createStudent(sName, sAge, sRating, maxCP) {
   let Student = {
    name: sName,
    age: sAge,
    rating: sRating,
    birthYear() {
      let today = new Date();
      let year = today.getFullYear();
      return (year - this.age);
    },
    leapYear() {
      let leapYearValue = false;
      let age4analyse = this.age;
      if (age4analyse % 4 == 0) {
        leapYearValue = true;
      } 
      return (leapYearValue);
    },
    finalRating() {
     let today = new Date();
     let year = today.getFullYear();
     if (year%4 == 0) {
        leapY = 1;
      } 
      else {
        leapY = 0;
      } 
      let cP = this.rating;
      let mCP = maxCP;
      let mP = 100;
      let predictedPoints = (cP / mCP) * mP - 3 * leapY;
      return (predictedPoints);
  },
finalGrade() {
      let finGrade = 2;
      if (this.rating >= 40 && this.rating < 60) {
        finGrade = 3;
      } 
     else {
        if (this.rating >= 60 && this.rating < 85) {
           finGrade = 4;
        } 
        else {
           if (this.rating >= 85) {
              finGrade = 5;
           }
      } 
     }
      return (finGrade);
    }
     
   }; 
  return Student; 
};
//Создание списка студентов
let all_students = [];
let cycle_check = true;
let max_cp = prompt("Enter max rating", ''); 
while (cycle_check==true) {
let st_name = prompt("Enter student name", ''); 
let st_age = parseInt(prompt("Enter student age", '')); 
let st_rating = parseInt(prompt("Enter student rating", '')); 
let st_current = createStudent(st_name, st_age, st_rating, max_cp);
all_students.push(st_current);
cycle_check = confirm("Proceed?");
}

//Вычисление среднего рейтинга
function AverageRating (allStudents) {
   let st_count = allStudents.length;
   let i = 0;
   let rating_sum = 0;
   while (i < st_count) {
      rating_sum = rating_sum + allStudents[i].rating;
      i = i + 1;
   }
   let average_rate = rating_sum /  st_count;
return average_rate;
}

//Вывод списка студентов
console.log ("Average rating is " + AverageRating (all_students));
let student_count = all_students.length;
let j = 0;
while (j < student_count) {
      console.log ("Name: " + all_students[j].name + " Age: " + all_students[j].age + " Rating: " + all_students[j].rating + " Birth year: " + all_students[j].birthYear() + " Leap year: " + all_students[j].leapYear() + " Final Rating: " + all_students[j].finalRating() + " Final Grade: " + all_students[j].finalGrade());
 
      j = j + 1;
   }