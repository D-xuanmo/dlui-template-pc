import { createApp } from 'vue'
import DLCommon from '@xuanmo/dl-common'
import App from './App.vue'
import '@xuanmo/dl-common/dist/index.css'
import './assets/style/dlui.css'
import './style.css'

createApp(App).use(DLCommon).mount('#app')
