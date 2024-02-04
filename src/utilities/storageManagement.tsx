import { parseDate } from "./dateServices";

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
      finishTraining();
      return "/trainings/end";
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

export const startTraining = (ids:number[], series:number[], trainingId:number) =>{
  let today = parseDate(new Date());
  localStorage.setItem("exercises", JSON.stringify(ids));
  localStorage.setItem("series", JSON.stringify(series));
  localStorage.setItem("session", JSON.stringify({date:today, id:trainingId}));
}

export const finishTraining = () =>{
  let sessionString = localStorage.getItem("session")
  let session = sessionString ? JSON.parse(sessionString) : null;
  delete session.date;
  if(session){
    localStorage.setItem("session", JSON.stringify(session));
    localStorage.removeItem("exercises");
    localStorage.removeItem("series");
    localStorage.setItem("session", JSON.stringify(session));
  }
  
}

export const getSession = () =>{
  let sessionString = localStorage.getItem("session")
  let session = sessionString ? JSON.parse(sessionString) : null;
  if(session!==null){
    let ids = Object.keys(session)
    ids.pop();
    return (ids.map(id => {
      let series = session[id].length;
      let maxWeight = 0;
      session[id].forEach((elem:number) => {if(elem>maxWeight) maxWeight=elem});
      let weights = session[id].map((elem:string) => parseInt(elem));
      return { id, series, maxWeight }
    }))
  }
};
