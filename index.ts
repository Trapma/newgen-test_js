import { getFilterCourse } from "./utils/getFilterCourse";
import { getSortCourse } from "./utils/getSortCourse";
// Список курсов
let courses = [
  { name: "Courses in England", prices: [0, 100] },
  { name: "Courses in Germany", prices: [500, null] },
  { name: "Courses in Italy", prices: [100, 200] },
  { name: "Courses in Russia", prices: [null, 400] },
  { name: "Courses in China", prices: [50, 250] },
  { name: "Courses in USA", prices: [200, null] },
  { name: "Courses in Kazakhstan", prices: [56, 324] },
  { name: "Courses in France", prices: [null, null] },
];

// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

// ? При фильтрации могут появляться пограничные случаи, когда диапазон цен частично входит в фильтрацию.
// ? Считаю что отображать частично входящий диапазон тоже необходимо.

const filterCourse = getFilterCourse(courses, requiredRange1);
console.log("filter", filterCourse);
const sortCourseA = getSortCourse(filterCourse, true);
console.log("sort ascending", sortCourseA);
const sortCourseD = getSortCourse(filterCourse, false);
console.log("sort descending", sortCourseD);
