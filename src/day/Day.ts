export default class Day {
  private name_: string
  private tasks_: string[]

  constructor(name: string) {
    this.name_ = name

    const storedTasks = localStorage.getItem(name)
    if (storedTasks) {
      try {
        this.tasks_ = JSON.parse(storedTasks)
      } catch (error) {
        console.error(`Error parsing stored tasks for ${name}:`, error)
        this.tasks_ = []
      }
    } else {
      this.tasks_ = []
    }
  }

  // Getters
  public get name(): string {
    return this.name_
  }

  public get tasks(): string[] {
    return this.tasks_
  }

  // Task Management
  public addTask(newTask: string): void {
    this.tasks_.push(newTask)
    localStorage.setItem(this.name_, JSON.stringify(this.tasks_))
  }

  public removeTask(index: number): void {
    if (index >= 0 && index < this.tasks_.length) {
      this.tasks_.splice(index, 1)
      localStorage.setItem(this.name_, JSON.stringify(this.tasks_))
    } else {
      console.error(`Invalid index ${index} for task removal`)
    }
  }
}