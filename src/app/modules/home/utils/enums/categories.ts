export enum Categoria {
    HISTORIA_CULTURA = 1,
    PARQUES = 2,
    MUSEOS = 3,
    PLAYAS = 4,
    NATURALEZA = 5,
    TODAS = 6
  }
  
  export type Tab = {
    id: Categoria;
    nombre: string;
  };