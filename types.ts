
export interface Procedure {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  duration: string;
  benefits: string[];
}

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  ingredients: string[];
  usage: string;
}

export interface Location {
  name: string;
  address: string;
  phone: string;
  hours: string;
  mapLink: string;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  icon: string;
  downloadUrl: string;
}
