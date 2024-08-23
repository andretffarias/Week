export default class DayClass {
  private name_: string
  private tasks_: string[]

  constructor(name: string, tasks: string[]) {
    this.name_ = name
    this.tasks_ = tasks
  }

  public get name(): string {
    return this.name_
  }

  public get tasks(): string[] {
    return this.tasks_
  }

  public addTask(newTask: string): void {
    this.tasks_.push(newTask)
  }

  public removeTask(index: number): void {
    this.tasks_.splice(index, 1)
  }
  //oi
}