
export class Event {
  id: number;
  name: string;
  place: string;
  date: Date;
  numberOfHosts: number;

  constructor(id: number, name: string, place: string, date: Date, numberOfHosts: number) {
    this.id = id;
    this.name = name;
    this.place = place;
    this.date = date;
    this.numberOfHosts = numberOfHosts;
  }
}

