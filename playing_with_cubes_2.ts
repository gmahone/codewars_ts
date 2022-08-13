export class Cube {
  
  private _side: number;
  
  constructor(side: number) {
    this._side = side;
  }

  public getSide(): number {
    return this._side;
  }

  public setSide(value: number = 0) {
    this._side = Math.abs(value);
  }
}
