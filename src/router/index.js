import { createRouter, createWebHashHistory } from 'vue-router'

import constantRoutes from './constantRoutes'
import asyncRoutes from './asyncRoutes'

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes
})

router.addRoute(asyncRoutes)

export default router
