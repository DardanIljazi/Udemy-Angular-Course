export class Product {
  private _id: number
  private _name: string
  private _state: string

  static _increm = 0

  constructor(name: string, state: string) {
    this._name = name;
    this._state = state;
    this._id = Product._increm
    Product._increm ++

  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get state(): string {
    return this._state;
  }

  set state(value: string) {
    this._state = value;
  }
}
