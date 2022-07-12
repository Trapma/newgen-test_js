import { courses } from "./types/types";

export function getSortCourse(courses: courses, ascending: boolean) {
  const condition = (prevPrice: number, nextPrice: number) => {
    if (ascending) {
      return prevPrice - nextPrice;
    } else {
      return nextPrice - prevPrice;
    }
  };

  return courses.sort((prev, next) => {
    const prevPrice = {
      start: prev.prices[0] ? prev.prices[0] : 0,
      end: prev.prices[1] ? prev.prices[1] : Infinity,
    };
    const nextPrice = {
      start: next.prices[0] ? next.prices[0] : 0,
      end: next.prices[1] ? next.prices[1] : Infinity,
    };

    const preValue = prevPrice.start;
    const nextValue = nextPrice.start;
    return condition(preValue, nextValue);
  });
}
