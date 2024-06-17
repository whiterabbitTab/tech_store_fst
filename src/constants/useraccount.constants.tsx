interface INavigation {
  path: string;
  text: string;
}

export const navigation: INavigation[] = [
  {
    path: 'main',
    text: 'Account Dashboard',
  },
  {
    path: 'information',
    text: 'Account Information'
  },
  {
    path: 'book',
    text: 'Address Book'
  },
  {
    path: 'orders',
    text: 'My Orders'
  },
  {
    path: 'downloadable_products',
    text: 'My Downloadable Products'
  },
  {
    path: 'payment_methods',
    text: 'Stored Payment Methods'
  },
  {
    path: 'agrements',
    text: 'Billing Agrements'
  },
  {
    path: 'wish_list',
    text: 'My Wish List'
  },
  {
    path: 'product_reviews',
    text: 'My Product Reviews'
  },
  {
    path: 'newsletter_subscriptions',
    text: 'Newsletter Subscriptions'
  }
]

interface IBlocks {
  headerBlock: string;
  headersInfoBlock: string[];
  namesEdit: string[];
  secondLinks: string | undefined;
  paths: string[];
  headerLink?: {
    path: string;
    name: string;
  };
}

export const blocks: IBlocks[] = [
  {
    headerBlock: 'Account Information',
    headersInfoBlock: ['Contact Information', 'Newsletters'],
    namesEdit: ['Edit', 'Edit'],
    paths: ['information', 'newsletter_subscriptions'],
    secondLinks: "Change Password"
  },
  {
    headerBlock: 'Address Book',
    headersInfoBlock: ['Default Billing Address', 'Default Shipping Address'],
    namesEdit: ['Edit Address', 'Edit Address'],
    paths: ['information', 'newsletter_subscriptions'],
    headerLink: {
      path: 'book',
      name: 'Manage Addresses'
    },
    secondLinks: undefined
  }
]