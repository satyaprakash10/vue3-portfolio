/*
|--------------------------------------------------------------------------
| Main entry point
|--------------------------------------------------------------------------
| Files in the "resources/scripts" directory are considered entrypoints
| by default.
|
| -> https://vitejs.dev
| -> https://github.com/innocenzi/laravel-vite
*/

import { createApp } from 'vue'
import App from '@/scripts/App.vue'
// import '../sass/crater.scss'
import router from '@/scripts/router'
// import '@/scripts/plugins/axios.js'
// import utils from '@/scripts/helpers/utilities.js'
// import { defineGlobalComponents } from './global-components'
// import { createPinia } from 'pinia'

// window.i18n = i18n

const app = createApp(App)
app.use(router)
// app.use(i18n)
// app.use(createPinia())

// app.provide('utils', utils)
// app.config.globalProperties.$utils = utils
// defineGlobalComponents(app)
// const components = import.meta.globEager('./components/base/*.vue')

// Object.entries(components).forEach(([path, definition]) => {
  // Get name of component, based on filename
  // "./components/Fruits.vue" will become "Fruits"
//   const componentName = path
//     .split('/')
//     .pop()
//     .replace(/\.\w+$/, '')

//   // Register component on this Vue instance
//   app.component(componentName, definition.default)
// })
// app.provide('$utils', utils)

app.mount('body')
