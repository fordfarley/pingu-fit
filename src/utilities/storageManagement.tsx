export const nextExercise = () => {
  let series = localStorage.getItem("series");
  let exercises = localStorage.getItem("exercises");
  if (series && exercises) {
    let seriesArray = JSON.parse(series);
    let exercisesArray = JSON.parse(exercises);
    seriesArray.shift();
    exercisesArray.shift();
    if (seriesArray.length > 0) {
      localStorage.setItem("series", JSON.stringify(seriesArray));
      localStorage.setItem("exercises", JSON.stringify(exercisesArray));
      return `/exercise/${exercisesArray[0]}`;
    } else {
      return "/trainingEnd";
    }
  }
};

export const moveExercise = () => {
  let series = localStorage.getItem("series");
  let exercises = localStorage.getItem("exercises");
  if (series && exercises) {
    let seriesArray = JSON.parse(series);
    let exercisesArray = JSON.parse(exercises);
    let movedSeries = seriesArray.shift();
    let movedExercise = exercisesArray.shift();
    seriesArray.push(movedSeries);
    exercisesArray.push(movedExercise);
    localStorage.setItem("series", JSON.stringify(seriesArray));
    localStorage.setItem("exercises", JSON.stringify(exercisesArray));
    return `/exercise/${exercisesArray[0]}`;
  }
};

export const swapExercise = (newId: number) => {
  let series = localStorage.getItem("series");
  let exercises = localStorage.getItem("exercises");
  if (series && exercises) {
    let seriesArray = JSON.parse(series);
    let exercisesArray = JSON.parse(exercises);
    exercisesArray[0]=newId;
    localStorage.setItem("series", JSON.stringify(seriesArray));
    localStorage.setItem("exercises", JSON.stringify(exercisesArray));
  }
};
