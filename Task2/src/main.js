import { createApp } from 'vue'
import App from './App.vue'
import wrapper from './wrapper.vue'
import landingPage from './landingPage.vue'
import { createPinia } from 'pinia'
import Home from './components/Home.vue'
import router from './routers/index'

const pinia = createPinia()

const app = createApp(landingPage)
app.use(pinia)
app.use(router)
app.mount('#app')

// to deal with pinia

