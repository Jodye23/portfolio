export class Elixir {
  id: string;
  name: string;

  constructor(
    elixir = {
      id: '',
      name: '',
    }
  ) {
    this.id = elixir.id;
    this.name = elixir.name;
  }
}

export class Wizard {
  id: string;
  surname: string | null;
  name: string;
  elixirs?: Elixir[];

  constructor(
    wizard = {
      id: '',
      firstName: '',
      lastName: '',
      elixirs: [],
    }
  ) {
    this.id = wizard.id;
    this.name = wizard.firstName;
    this.surname = wizard.lastName;
    this.elixirs = wizard.elixirs?.map((elixir: any) => new Elixir(elixir));
  }
}
