import Training from "./types/training";

export const trainings = [
  {
    name:'Pectorales',
    route:'pectorales',
    exercises:[
      {
        id:0,
        series:4,
      },
      {
        id:3,
        series:3,
      },
      {
        id:0,
        series:3,
      },
    ]
  }
];

export const getExercisesIds = (training:Training) =>{
  if(!training) return [];
  const ids = training.exercises.map(elem => {
    return elem.id;
  })

  return ids;
}

export const getExercisesSeries = (training:Training) =>{
  if(!training) return [];
  const series = training.exercises.map(elem => {
    return elem.series;
  })

  return series;
}
