import { courses } from "./types/types";

export function getFilterCourse(courses: courses, reqRange: any[]) {
  //    ? нормализуем данные (null to 0)
  const normalizeReqRange = normalize(reqRange);
  const reqPrice = {
    start: normalizeReqRange[0],
    end: normalizeReqRange[1],
  };

  return courses.filter((course) => {
    //   ? нормализуем массив
    const prices = normalize(course.prices);
    const coursePrice = {
      start: prices[0],
      end: prices[1],
    };

    let condition: boolean = false;

    const start = Math.max(coursePrice.start, reqPrice.start);
    const end = Math.max(coursePrice.end, reqPrice.end);
    if (start < end || start == end) {
      return {
        name: course.name,
        prices,
      };
    }
  });
}

function normalize(array: any[]) {
  const normalizeArr = array.map((item) => (item ? item : 0));
  return normalizeArr;
}
