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

export interface ICardCostRoute extends BaseEntity{
  name: string;
  image: string;
  unitType: string;
  paymentType: string;
  ticketType: string;
  cost: string;
}

export interface ICardRoute extends BaseEntity{
  name: string;
  originDestination: string;
  companyName: string;
  companyId: number;
  frequency: string;
}

export interface ICardPlacesRoute extends BaseEntity {
  image: string;
  name: string;
  description: string,
  categoryId: number;
  categoryName: string;
  routeId: number;
}

export interface IDetailRoute extends BaseEntity {
  name: string;
  originDestination: string;
  frequency: string;
  schedule: string;
  distance: string;
  timeTraveled: string;
  climatizacion: string;
  polylineOrigin: string;
  polylineDestination: string;
  costRoutes: ICostRoute[];
  stopRoutes: IStopRoute[];
  companyRoute: ICompanyRoute;
}

export interface ICostRoute extends BaseEntity {
  costId: number;
  name: string;
  cost: number;
}

export interface IStopRoute extends BaseEntity {
  stopId: number;
  name: string;
  coordinates: string;
}

export interface ICompanyRoute extends BaseEntity {
  companyId: number;
  companyName: string;
}

export interface ITerminal extends BaseEntity{
  name: string;
  coordinate: string;
  cardRoute: ICardRoute[];
}
