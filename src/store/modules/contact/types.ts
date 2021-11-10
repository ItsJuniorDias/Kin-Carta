export enum ActionTypes {
  listContactRequest = 'LIST_CONTACT_REQUEST',
  listContactSuccess = 'LIST_CONTACT_SUCCESS',
  listContactFailure = 'LIST_CONTACT_FAILURE',
  passToFavorite = 'PASS_TO_FAVORITE',
  passToFavoriteSuccess = 'PASS_TO_FAVORITE_SUCCESS'
}


interface IPhone {
  work: string;
  home: string;
  mobile: string;
}

interface IAddress {
  street: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
}

export interface IContact {
  name: string;
  id: string;
  companyName: string;
  isFavorite: boolean;
  smallImageURL: string;
  largeImageURL: string;
  emailAddress: string;
  birthdate: string;
  phone: IPhone;
  address: IAddress;
}

export interface IDataSectionContact {
  title: string;
  data: IContact[];
}


export interface IContactState {
  data: IContact[];
}

