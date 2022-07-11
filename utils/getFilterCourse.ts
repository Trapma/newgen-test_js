import { courses } from "./types/types";

export function getFilterCourse(courses: courses, reqRange: any[]) {
  //    ? нормализуем данные (null to 0)
  const normalizeReqRange = normalize(reqRange);

  return courses.filter((course) => {
    //   ? нормализуем массив
    const prices = normalize(course.prices);
    const reqPrice = {
      start: normalizeReqRange[0],
      end: !normalizeReqRange[1] ? prices[1] : normalizeReqRange[1],
    };
    const coursePrice = {
      start: prices[0],
      end: !prices[1] && reqPrice.end ? reqPrice.end : prices[1],
    };

    let condition: boolean = false;

    if (!reqPrice.end && !coursePrice.end) {
      condition = true;
    } else {
      const start = Math.max(coursePrice.start, reqPrice.start);
      const end = Math.min(coursePrice.end, reqPrice.end);
      condition = start < end || start == end;
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
