import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles.css'
import installComponents from '@/components/index.js'

const app = createApp(App)

app.use(router)
installComponents(app)
app.mount('#app')
