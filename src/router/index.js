import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import WhatISee from '../pages/WhatISee.vue'
import WhatIRead from '../pages/WhatIRead.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/what-i-see', component: WhatISee },
  { path: '/what-i-read', component: WhatIRead }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
