import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import WhatISee from '../pages/WhatISee.vue'
import WhatIRead from '../pages/WhatIRead.vue'
import WhatIHear from '../pages/WhatIHear.vue'
import WhatIWatch from '../pages/WhatIWatch.vue'
import About from '../pages/About.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/what-i-see', component: WhatISee },
  { path: '/what-i-read', component: WhatIRead },
  { path: '/what-i-hear', component: WhatIHear },
  { path: '/what-i-watch', component: WhatIWatch },
  { path: '/about', component: About },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    // ⬇️ Oldalváltáskor mindig a tetejére görget
    return { top: 0, behavior: 'smooth' }
  }
})

export default router
