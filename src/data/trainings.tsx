import Training from "./types/training";

export const trainings = [
  {
    name:'Pecho & Triceps',
    route:'pechotriceps',
    exercises:[
      {
        id:1,
        series:4,
      },
      {
        id:12,
        series:3,
      },
      {
        id:11,
        series:3,
      },
      {
        id:2,
        series:3,
      },
      {
        id:16,
        series:3,
      },
      {
        id:26,
        series:4,
      },
      {
        id:33,
        series:3,
      },
      {
        id:31,
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
