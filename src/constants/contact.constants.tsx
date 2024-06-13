import { Link } from "react-router-dom"

export const contact__form = [
  {
    type: 'text',
    label: <label htmlFor='name'>Your Name<span>*</span></label>,
    placeholder: 'Your Name',
    name: 'name'
  },
  {
    type: 'email',
    label: <label htmlFor='email'>Your Email<span>*</span></label>,
    placeholder: 'Your Email',
    name: 'email'
  },
  {
    type: 'text',
    label: <label htmlFor='phone'>Your Phone Number</label>,
    placeholder: 'Your Phone',
    name: 'phone'
  }
]

export const contactInfo = [
  {
    label: 'Address',
    image: 'location',
    info: <p>1234 Street Adress City Address, 1234</p>
  },
  {
    label: 'Phone',
    image: 'phone',
    info: <p>(00)1234 5678</p>
  },
  {
    label: 'We are open',
    image: 'watch',
    info: <>
      <p>Monday - Thursday: 9:00 AM - 5:30 PM</p>
      <p>Friday 9:00 AM - 6:00 PM</p>
      <p>Saturday: 11:00 AM - 5:00 PM</p>
    </>
  },
  {
    label: 'E-mail',
    image: 'email',
    info: <Link to='shop@email.com'>shop@email.com</Link>
  }
]