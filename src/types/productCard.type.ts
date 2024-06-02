import { ISpecs } from "./products.type";

export interface IAboutPage {
  name: string;
  description: string;
  colors: string[];
  image_about: string[];
}

export interface IDetailsPage {
  name: string;
  details: string[];
  image_about: string[]
}

export interface ISpecsPage {
  name: string;
  specs: ISpecs;
  image_about: string[]
}
