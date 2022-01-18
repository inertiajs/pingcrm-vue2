import Vue from 'vue'
import { createRenderer } from 'vue-server-renderer'
import { createInertiaApp } from '@inertiajs/inertia-vue'
import createServer from '@inertiajs/server'

createServer((page) => createInertiaApp({
  page,
  render: createRenderer().renderToString,
  resolve: name => require(`./Pages/${name}`),
  title: title => title ? `${title} - Ping CRM` : 'Ping CRM',
  setup({ app, props, plugin }) {
    Vue.use(plugin)
    return new Vue({
      render: h => h(app, props),
    })
  },
}))
