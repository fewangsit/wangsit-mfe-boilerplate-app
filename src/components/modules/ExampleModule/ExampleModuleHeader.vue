<script setup lang="ts">
import { shallowRef } from 'vue';
import { MenuItem } from '@fewangsit/wangsvue-fats/menuitem';
import {
  ButtonBulkAction,
  ButtonDownload,
  ButtonFilter,
  ButtonSearch,
  FilterContainer,
} from '@fewangsit/wangsvue-fats';
import { Option } from '@fewangsit/wangsvue-fats/dropdown';
import { FilterField } from '@fewangsit/wangsvue-fats/filtercontainer';
import { Member } from '@/types/member.type';
import DialogDeleteUser from './DialogDeleteUser.vue';

const dataSelected = shallowRef<Member[]>([]);
const showDeleteUserDialog = shallowRef<boolean>(false);

const bulkAction: MenuItem[] = [
  {
    label: 'Delete User',
    icon: 'checkbox-blank-circle',
    danger: true,
    command: (): void => {
      showDeleteUserDialog.value = true;
    },
  },
];

const filterFields: FilterField[] = [
  {
    label: 'Country',
    field: 'country',
    type: 'multiselect',
    placeholder: 'Select country',
    fetchOptionFn: (): Option[] => [{ label: 'Indonesia' }],
  },
  {
    label: 'Age',
    fields: ['minAge', 'maxAge'],
    type: 'rangenumber',
    placeholder: '0',
  },
];
</script>

<template>
  <div class="flex justify-end gap-4" data-wv-section="tabletoolbars">
    <ButtonBulkAction
      v-model:selected-data="dataSelected"
      :options="bulkAction"
      table-name="user-list"
    />
    <ButtonSearch class="ml-auto" table-name="user-list" />
    <ButtonDownload file-name="Download" table-name="user-list" />
    <ButtonFilter table-name="user-list" />
  </div>

  <FilterContainer :fields="filterFields" table-name="user-list" />

  <DialogDeleteUser
    v-model:visible="showDeleteUserDialog"
    :list="dataSelected"
    list-label="name"
  />
</template>
