
export default class Person {
  constructor(private readonly firstName: string,
    private readonly lastName: string) {}
  
  public getFirstName(): string {
    return this.firstName
  }

  public getLastName(): string {
    return this.lastName
  }
}