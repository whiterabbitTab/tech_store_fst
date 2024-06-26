import { ReactNode } from "react";

export interface IMenuItems {
  heading: string;
  elements: string[] | ReactNode[];
  id?: string | number;
}

export const menuItems: IMenuItems[] = 
[
  {
    heading: 'Estimate Shipping and Tax',
    elements: ['Enter your destination to get a shipping estimate.']
  },
  {
    heading: 'Apply Discount Code',
    elements: ['Enter your apply discount codes']
  }
]