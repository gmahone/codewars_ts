export class God{
/**
 * @returns Human[]
 */
  static create(){
    return [new Man, new Woman];
  }
}

export class Human{
  //name: string;
  //constructor(name: string) {
    //this.name = name;
  //}
}

export class Man extends Human{
}

export class Woman extends Human{
}


// simple version
export class Human {}

export class Woman extends Human {}

export class Man extends Human {}

export class God {
  static create() {
    return [new Man(), new Woman()];
  }
}

// classes with names property
interface IHuman {
  name: string;
}
export class Human implements IHuman {
  constructor(public name: string) {}
}
export class Man extends Human {}
export class Woman extends Human {}

export class God {
  static create() {
    return [new Man('Adam'), new Woman('Eve')];
  }
}

// solution with strict typing in create()
export class God{
    static create() : Array<Man | Woman>{
      return [new Man(), new Woman()]
    }
  }

export abstract class Human{}
export class Man extends Human{}
export class Woman extends Human{}
