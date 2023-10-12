/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const orderRouter = {
  path: '/order',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Order',
  meta: {
    title: 'Order',
    icon: 'shopping'
  },
  children: [
    {
      path: 'index',
      component: () => import('@/views/order/index'),
      name: 'IndexOrder',
      meta: { title: 'Manager Order', noCache: true }
    }
  ]
}

export default orderRouter
