export default interface Training {
    id:number,
    name: string,
    route: string,
    image: string,
    exercises:{id:number, series: number}[]
  }