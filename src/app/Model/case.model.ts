export class Case {
  public id: string;
  public type: string;
  public clientEmail: string;
  public clientName: string;
  public lawyerEmail: string;
  public date: any;
  public description: string;
  public status: string;
  public todos: string[];
  public rated: boolean;

  constructor(
    _id: string,
    type: string,
    clientEmail: string,
    clientName: string,
    lawyerEmail: string,
    date: any,
    desc: string,
    status: string,
    todos: string[],
    rated: boolean
  ) {
    this.id = _id;
    this.type = type;
    this.clientEmail = clientEmail;
    this.clientName = clientName;
    this.lawyerEmail = lawyerEmail;
    this.date = date;
    this.description = desc;
    this.status = status;
    this.todos = todos;
    this.rated = rated;
  }
}
