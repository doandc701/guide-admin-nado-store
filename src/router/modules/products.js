/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const productRouter = {
  path: '/products',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Products',
  meta: {
    title: 'Products',
    icon: 'international'
  },
  children: [
    {
      path: 'index',
      component: () => import('@/views/products/index'),
      name: 'IndexProducts',
      meta: { title: 'Manager Products', noCache: true }
    }
  ]
}

export default productRouter
