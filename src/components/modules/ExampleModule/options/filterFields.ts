import { Option } from '@fewangsit/wangsvue-fats/dropdown';
import { FilterField } from '@fewangsit/wangsvue-fats/filtercontainer';

export const quickFilterFields: FilterField[] = [
  {
    label: 'Country',
    field: 'country',
    type: 'multiselect',
    placeholder: 'Select country',
    fetchOptionFn: async (): Promise<Option[]> => {
      try {
        return [{ label: 'Indonesia' }];
      } catch (error) {
        console.error(error);
        return [];
      }
    },
  },
  {
    label: 'Age',
    fields: ['minAge', 'maxAge'],
    type: 'rangenumber',
    placeholder: '0',
  },
];

export const filterFields: FilterField[] = [
  {
    label: 'Country',
    field: 'country',
    type: 'multiselect',
    placeholder: 'Select country',
    fetchOptionFn: async (): Promise<Option[]> => {
      try {
        return [{ label: 'Indonesia' }];
      } catch (error) {
        console.error(error);
        return [];
      }
    },
  },
  {
    label: 'Age',
    fields: ['minAge', 'maxAge'],
    type: 'rangenumber',
    placeholder: '0',
  },
];
