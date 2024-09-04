import { type TFilter } from '@/types/categories';

export const filtersData: TFilter[] = [
  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'white', label: 'White', checked: true },
      { value: 'beige', label: 'Beige', checked: false },
      { value: 'blue', label: 'Blue', checked: true },
      { value: 'brown', label: 'Brown', checked: false },
      { value: 'green', label: 'Green', checked: false },
      { value: 'purple', label: 'Purple', checked: false },
    ],
  },
  {
    id: 'model',
    name: 'Model',
    options: [
      { value: 'new-arrivals', label: 'New Arrivals', checked: false },
      { value: 'sale', label: 'Sale', checked: false },
      { value: 'travel', label: 'Travel', checked: false },
      { value: 'organization', label: 'Organization', checked: false },
      { value: 'accessories', label: 'Accessories', checked: false },
    ],
  },
  {
    id: 'size',
    name: 'Size',
    options: [
      { value: '2l', label: '2L', checked: false },
      { value: '6l', label: '6L', checked: false },
      { value: '12l', label: '12L', checked: false },
      { value: '18l', label: '18L', checked: true },
      { value: '20l', label: '20L', checked: false },
      { value: '40l', label: '40L', checked: false },
    ],
  },
  {
    id: 'unit',
    name: 'Unit',
    options: [
      { value: 'mm', label: 'mm', checked: false },
      { value: 'cm', label: 'cm', checked: false },
      { value: 'm', label: 'm', checked: true },
    ],
  },
];
