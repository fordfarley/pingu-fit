import Exercise from "./types/exercise";
import abs from "./exercises/abs";
import back from "./exercises/back";
import biceps from "./exercises/biceps";
import chest from "./exercises/chest";
import forearm from "./exercises/forearm";
import legs from "./exercises/legs";
import shoulders from "./exercises/shoulders";
import triceps from "./exercises/triceps";

export const exercises = chest
  .concat(triceps)
  .concat(back)
  .concat(biceps)
  .concat(shoulders)
  .concat(legs)
  .concat(forearm)
  .concat(abs);

export const getSubstitutes = (id: number) => {
  let index = -1;
  const exercise = exercises.find((elem, i) => {
    if (elem.id === id) index = i;
    return elem.id === id;
  });

  return exercises.filter(
    (elem) =>
      elem.muscle === exercise?.muscle &&
      elem.musclePart === exercise?.musclePart
  );
};

export const getTraining = (ids: number[]) => {
  let training: Exercise[] = [];
  ids.forEach((elem) => {
    let found: Exercise | undefined = exercises.find(
      (exer) => elem === exer.id
    );
    if (found) training.push(found);
  });
  return training;
};

export const getExerciseById = (id: number) => {
  let index = -1;
  const exercise = exercises.find((elem, i) => {
    if (elem.id == id) index = i;
    return elem.id == id;
  });
  return exercise;
};
