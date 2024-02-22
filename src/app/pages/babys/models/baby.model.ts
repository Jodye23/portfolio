export interface IBaby {
  name: string;
  sex: 'm' | 'f';
  born: Date;
  weights: Weight[];
  meals: Meal[];
  pees: Pee[];
  poops: Poop[];
}

export interface Weight {
  date: Date;
  weight: number;
  note: string;
}

export interface Meal {
  date: Date;
  note: string;
}

export interface Pee {
  date: Date;
  note: string;
}

export interface Poop {
  date: Date;
  note: string;
}

