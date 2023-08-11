interface IGeo {
  lat: string;
  lng: string;
}

interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IGeo;
}

interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface IUser {
  id: string;
  fullName: string;
  username: string;
  email: string;
  // avatar?: string;
  // address?: IAddress;
  phoneNumber: string;
  // website?: string;
  // company?: ICompany;
}
