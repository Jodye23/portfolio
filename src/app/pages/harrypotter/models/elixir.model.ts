import { Wizard } from './wizard.model';

export class Ingredient {
  id: string;
  name: string;

  constructor(
    ingredient = {
      id: '',
      name: '',
    }
  ) {
    this.id = ingredient.id;
    this.name = ingredient.name;
  }
}

export class ElixirDetail {
  id: string;
  name: string;
  effect: string;
  sideEffects: string | null;
  characteristics: string;
  time: string | null;
  difficulty: string;
  ingredients: Ingredient[];
  inventors: Wizard[];
  manufacturer: Wizard | null;

  constructor(
    elixirDetail = {
      id: '',
      name: '',
      effect: '',
      sideEffects: '',
      characteristics: '',
      time: '',
      difficulty: '',
      ingredients: [],
      inventors: [],
      manufacturer: null,
    }
  ) {
    this.id = elixirDetail.id;
    this.name = elixirDetail.name;
    this.effect = elixirDetail.effect;
    this.sideEffects = elixirDetail.sideEffects;
    this.characteristics = elixirDetail.characteristics;
    this.time = elixirDetail.time;
    this.difficulty = elixirDetail.difficulty;
    this.ingredients = [];
    this.inventors = [];
    this.ingredients = elixirDetail.ingredients.map(
      (ingredient: any) => new Ingredient(ingredient)
    );
    this.inventors = elixirDetail.inventors.map(
      (inventor: any) => new Wizard(inventor)
    );
    this.manufacturer = elixirDetail.manufacturer
      ? new Wizard(elixirDetail.manufacturer)
      : null;
  }
}
