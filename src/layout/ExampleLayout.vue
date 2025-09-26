<script setup lang="ts">
import { useBreadcrumbStore } from '@/store';
import { Breadcrumb, Card, TabMenu } from '@fewangsit/wangsvue-fats';
import { MenuItem } from '@fewangsit/wangsvue-fats/menuitem';

const { breadcrumbs } = useBreadcrumbStore();

const tabMenus: MenuItem[] = [
  {
    label: 'Home',
    route: 'home',
  },
  {
    label: 'Another Page',
    route: 'another-page',
  },
];
</script>

<template>
  <Breadcrumb :menus="breadcrumbs" />
  <Card>
    <template #content>
      <TabMenu :menu="tabMenus" />
      <router-view />
    </template>
  </Card>
</template>
