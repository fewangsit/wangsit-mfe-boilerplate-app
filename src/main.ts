import App from '@/App.vue';
import createVueMicroApp from '@microtsm/vue';
import router from './router';

import {
  WangsVue,
  ToastService,
  Tooltip,
  Focus,
} from '@fewangsit/wangsvue-fats';
import preset from '@fewangsit/wangsvue-presets/fixedasset';

import '@/assets/css/main.css';
import '@fewangsit/wangsvue-fats/style.css';
import '@fewangsit/wangsvue-presets/fixedasset/style.css';

export const { mount, unmount } = createVueMicroApp(App, {
  el: '#app', // Only used for standalone development
  setupInstance(app) {
    app.use(WangsVue, { preset });

    app.use(router);
    app.use(ToastService);

    app.directive('Tooltip', Tooltip);
    app.directive('focus', Focus);
  },
});
