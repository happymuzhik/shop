import { Categories } from '../../core/enums/categories.enum';

const Products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'Some description',
    price: '100$',
    category: Categories.category1,
    isAvailable: true
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'Some description',
    price: '200$',
    category: Categories.category2,
    isAvailable: false
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'Some description',
    price: '300$',
    category: Categories.category2,
    isAvailable: true
  },
];

export { Products };
