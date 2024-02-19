export enum STATUS_TODO {
  DONE = "Done",
  TO_BE_DONE = "To do",
  RESCHEDULE = "Postponed",
}

export interface ITodo {
  id: number,
  title: string,
  description: string,
  status: STATUS_TODO;
}

export class Todo {
  id: number = new Date().getTime();
  title: string = "";
  description: string = "";
  status: STATUS_TODO = STATUS_TODO.TO_BE_DONE;
  constructor(obj?: ITodo) {
    if (obj) {
      this.id = obj.id;
      this.title = obj.title;
      this.description = obj.description;
      this.status = obj.status;
    }

  }
}