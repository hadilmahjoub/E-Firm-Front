export class Client {
  public _id: string;
  public firstName: string;
  public name: string;
  public familyName: string;
  public FamilyName: string;
  public age: number;
  public adress: string;
  public email: string;
  public phoneNumber: string;
  public image: string;
  public city: string;

  constructor(
    _id: string,
    firstName: string,
    familyName: string,
    age: number,
    adress: string,
    email: string,
    phoneNumber: string,
    image: string,
    city: string,
    name: string,
    FamilyName: string
  ) {
    this._id = _id;
    this.firstName = firstName;
    this.familyName = familyName;
    this.FamilyName = FamilyName;
    this.age = age;
    this.adress = adress;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.image = image;
    this.city = city;
    this.name = name;
  }
}
