import { IFilterMenu } from "../components/Catalog/FilterMenuItems";

export const filterItems: IFilterMenu[] = [
  {
    heading: 'Category',
    elements: [
      {
        name: 'CUSTOM PCS',
        type: 'custom'
      },
      {
        name: 'MSI ALL-IN-ONE PCS',
        type: 'msiAllInOne'
      },
      {
        name: 'HP/COMPAQ PCS',
        type: 'hp/compaq'
      }
    ],
    type: 'type'
  },
  {
    heading: 'Price',
    elements: [
      {
        name: '$0.00 - $1,000.00',
        type: '0-1000'
      },
      {
        name: '$1,000.00 - $2,000.00',
        type: '1000-2000'
      },
      {
        name: '$2,000.00 - $3,000.00',
        type: '2000-3000'
      },
      {
        name: '$3,000.00 - $4,000.00',
        type: '3000-4000'
      },
      {
        name: '$4,000.00 - $5,000.00',
        type: '4000-5000'
      },
      {
        name: '$5,000.00 - $6,000.00',
        type: '5000-6000'
      },
      {
        name: '$6,000.00 - $7,000.00',
        type: '6000-7000'
      },
      {
        name: '$7,000.00 And Above',
        type: '7000-99999999'
      }
    ],
    type: 'price'
  }
]

export const colors: string[] = [
  "red",
  "black",
  "white",
  "gray",
  "blue",
  "green"
]

export const brands: string[] = [
  'roccat',
  'msi',
  'thermaltake',
  'adata',
  'packard',
  'gigabyte'
]