export interface BaseEntity {
  id: number | string;
}

export interface Place extends BaseEntity {
    image: string | undefined,
    name: string,
    description: string,
    idCategory: number,
    nameCategory: string,
}

