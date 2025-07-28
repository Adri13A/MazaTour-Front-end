export interface BaseEntity {
  id: number | string;
}

export interface ICardCompany extends BaseEntity {
  image: string;
  name: string;
  description: string;
  location: string;
}

export interface IListLocation extends BaseEntity {
  image: string;
  name: string;
  description: string;
}

export interface ICardFood extends BaseEntity {
  image: string;
  name: string;
}

export interface IListCategory extends BaseEntity {
  image: string;
  name: string;
}

export interface IHistorySection extends BaseEntity{
  name: string;
  description: string;
}

export interface ICardPlace extends BaseEntity {
  image: string;
  name: string;
  description: string,
  categoryId: number;
  categoryName: string;
}

export interface ICardPlaceRoute extends BaseEntity{
  name: string;
  image: string;
  placeName: string;
  routeName: string;
}