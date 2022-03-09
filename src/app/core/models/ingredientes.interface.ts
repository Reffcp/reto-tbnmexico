export interface Ingrediente {
  idIngredient?: string;
  strDescription: string;
  strIngredient: string;
  strType: any;
}

export interface Ingredientes {
  meals: Ingrediente[];
}
