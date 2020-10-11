import { defineConfig } from 'umi';

export default defineConfig({
  layout: {},
  qiankun: {
    slave: {},
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
});
