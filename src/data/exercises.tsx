import Exercise from "./types/exercise";

export const exercises = [
  {
    id: 0,
    name: "Press de Banca",
    muscle: 1,
    musclePart: 1,
    tips: [
      "Consejo1: is simply dummy text of the printing and typesetting industry.",
      "Consejo2: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ],
    image: "/Exercises/chest/Barbell-Bench-Press.gif",
  },
  {
    id: 1,
    name: "Press de Banca en Máquina",
    muscle: 1,
    musclePart: 1,
    tips: [
      "Consejo1: is simply dummy text of the printing and typesetting industry.",
      "Consejo2: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ],
    image: "/Exercises/chest/Inner-Chest-Press-Machine.gif",
  },
  {
    id: 2,
    name: "Press con Mancuernas",
    muscle: 1,
    musclePart: 1,
    tips: [
      "Consejo1: is simply dummy text of the printing and typesetting industry.",
      "Consejo2: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ],
    image: "/Exercises/chest/Dumbbell-Press.gif",
  },
  {
    id: 3,
    name: "Flexión de diamante",
    muscle: 1,
    musclePart: 3,
    tips: [
      "Consejo1: is simply dummy text of the printing and typesetting industry.",
      "Consejo2: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ],
    image: "/Exercises/chest/Diamond-Push-up.gif",
  },
];

export const getSubstitutes = (id: number) => {
  let index = -1;
  const exercise = exercises.find((elem, i) => {
    if(elem.id === id) index=i;
    return (elem.id === id)
  });

  return exercises.filter(
    (elem) =>
      elem.muscle === exercise?.muscle &&
      elem.musclePart === exercise?.musclePart
  );
};

export const getTraining = (ids: number[]) =>{
    let training:Exercise[] = [];
    ids.forEach(elem => {
        let found:Exercise | undefined = exercises.find(exer => elem === exer.id);
        if(found) training.push(found);
    })
    return training;
}
