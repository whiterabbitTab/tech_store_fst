import { IINputInfo } from "../components/InputInfo/InputInfo";

export const fields: IINputInfo[] = [
  {
    type: 'email',
    label: <label htmlFor='email'>Email Address<span>*</span></label>,
    placeholder: 'Your Email',
    name: 'email'
  },
  {
    type: 'text',
    label: <label htmlFor='firstname'>First Name<span>*</span></label>,
    placeholder: 'Your First Name',
    name: 'firstname'
  },
  {
    type: 'text',
    label: <label htmlFor='surname'>Last Name<span>*</span></label>,
    placeholder: 'Your Last Name',
    name: 'surname'
  },
  {
    type: 'text',
    label: <label htmlFor='company'>Company<span>*</span></label>,
    placeholder: 'Your Company',
    name: 'company'
  },
  {
    type: 'text',
    label: <label htmlFor='address'>Street Address<span>*</span></label>,
    placeholder: 'Your Street Address',
    name: 'address'
  },
  {
    type: 'select',
    label: <label htmlFor='country'>Country<span>*</span></label>,
    placeholder: 'Your Country',
    name: 'country'
  },
  {
    type: 'select',
    label: <label htmlFor='state'>State/Province<span>*</span></label>,
    placeholder: 'Your State/Province',
    name: 'state'
  },
  {
    type: 'text',
    label: <label htmlFor='city'>City<span>*</span></label>,
    placeholder: 'Your City',
    name: 'city'
  },
  {
    type: 'text',
    label: <label htmlFor='postalcode'>Zip/Postal Code<span>*</span></label>,
    placeholder: 'Your Zip/Postal Code',
    name: 'postalcode'
  },
  {
    type: 'text',
    label: <label htmlFor='phone'>Phone Number<span>*</span></label>,
    placeholder: 'Your Phone NUmber',
    name: 'phone'
  }
]

export const countries = [
  "Russian",
  "Austria",
  "Sweden",
  "USA"
]

export const regions = {
  Russian: [
    "Republic of Adygea",
    "Republic of Bashkortostan",
    "Moscow oblast",
    "Murmansk region",
    "Novgorod region"
  ]
}