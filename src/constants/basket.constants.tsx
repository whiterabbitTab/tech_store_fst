interface IMenuItems {
  heading: string;
  elements: string[];
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