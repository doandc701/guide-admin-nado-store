/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const inventoryRouter = {
  path: '/inventory',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Inventory',
  meta: {
    title: 'Inventory',
    icon: 'tab'
  },
  children: [
    {
      path: 'index',
      component: () => import('@/views/inventory/index'),
      name: 'IndexInventory',
      meta: { title: 'Manager Inventory', noCache: true }
    }
  ]
}

export default inventoryRouter
