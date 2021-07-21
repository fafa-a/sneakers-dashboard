import { createApp } from "vue"
import App from "./App.vue"
import { router } from "./router"

import "virtual:windi.css"
import "vue-global-api"

const app = createApp(App)

app.use(router)
app.mount("#app")
