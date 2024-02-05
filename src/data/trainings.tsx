import Training from "./types/training";

export const trainings = [
  {
    id:0,
    name:'Pecho & Triceps',
    route:'pechotriceps',
    image:'/Muscles-pecs.png',
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
  },
  {
    id:1,
    name:'Espalda & Bíceps',
    route:'espaldatriceps',
    image:'/Muscles-back.png',
    exercises:[
      {
        id:39,
        series:4,
      },
      {
        id:47,
        series:3,
      },
      {
        id:38,
        series:3,
      },
      {
        id:48,
        series:3,
      },
      {
        id:59,
        series:3,
      },
      {
        id:51,
        series:3,
      },
      {
        id:55,
        series:3,
      },
      {
        id:54,
        series:3,
      },

    ]
  },
  {
    id:2,
    name:'Hombros & Antebrazos',
    route:'hombroantebrazos',
    image:'/Muscles-shoulders.png',
    exercises:[
      {
        id:69,
        series:4,
      },
      {
        id:67,
        series:3,
      },
      {
        id:64,
        series:3,
      },
      {
        id:73,
        series:3,
      },
      {
        id:76,
        series:3,
      },
      {
        id:77,
        series:3,
      },
      {
        id:78,
        series:3,
      },
      {
        id:79,
        series:3,
      },
    ]
  },
  {
    id:3,
    name:'Piernas & Abdominales',
    route:'piernasabs',
    image:'/Muscles-legs.png',
    exercises:[
      {
        id:99,
        series:4,
      },
      {
        id:100,
        series:3,
      },
      {
        id:97,
        series:3,
      },
      {
        id:103,
        series:3,
      },
      {
        id:88,
        series:3,
      },
      {
        id:108,
        series:3,
      },
      {
        id:110,
        series:3,
      },
    ]
  },
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
