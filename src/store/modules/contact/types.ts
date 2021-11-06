export interface IPhone {
  work: string;
  home: string;
  mobile: string;
}

export interface IAddress {
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

export interface IContactState {
  data: IContact[];
}
