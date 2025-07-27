export interface BaseEntity {
  id: number | string;
}

export interface Company extends BaseEntity {
  image: string;
  name: string;
  description: string;
  location: string;
}

export interface Location extends BaseEntity {
  image: string;
  name: string;
  description: string;
}

export interface Food extends BaseEntity {
  image: string;
  name: string;
}

export interface Category extends BaseEntity {
  image: string;
  name: string;
}

export interface HistorySection extends BaseEntity{
  name: string;
  description: string;
}

export interface Place extends BaseEntity {
  image: string;
  name: string;
  description: string,
  categoryId: number;
  categoryName: string;
}
