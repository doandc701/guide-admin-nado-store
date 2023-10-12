/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const categoriesRouter = {
  path: '/categories',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Category',
  meta: {
    title: 'Category',
    icon: 'list'
  },
  children: [
    {
      path: 'index',
      component: () => import('@/views/categories/index'),
      name: 'IndexCategories',
      meta: { title: 'Manager Categories', noCache: true }
    }
  ]
}

export default categoriesRouter
