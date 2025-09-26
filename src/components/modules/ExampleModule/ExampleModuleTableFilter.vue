<script setup lang="ts">
import { FilterContainer } from '@fewangsit/wangsvue-fats';
import { filterFields } from './options/filterFields';
</script>

<template>
  <FilterContainer :fields="filterFields" table-name="user-list" />
</template>
