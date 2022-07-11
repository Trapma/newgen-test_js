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

    // от 100 до Х
    if (!reqPrice.end) {
      if (!coursePrice.end) {
        condition = true;
      } else {
        condition = coursePrice.end > reqPrice.start;
      }
    }
    // от 0 до 100
    if (!reqPrice.start) {
      if (!coursePrice.start) {
        condition = true;
      }
      condition = coursePrice.start < reqPrice.end;
    }
    // от 100 до 200
    if (reqPrice.start && reqPrice.end) {
      if (!coursePrice.start && !coursePrice.end) {
        return true;
      } else if (!coursePrice.start) {
        condition = coursePrice.end > reqPrice.start;
      } else if (!coursePrice.end) {
        condition = coursePrice.start < reqPrice.end;
      } else {
        condition = coursePrice.start < reqPrice.end || coursePrice.end > reqPrice.start;
      }
    }

    if (condition) {
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
