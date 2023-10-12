/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const usersRouter = {
  path: '/users',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Users',
  meta: {
    title: 'Users',
    icon: 'user'
  },
  children: [
    {
      path: 'index',
      component: () => import('@/views/users/index'),
      name: 'IndexUsers',
      meta: { title: 'Manager Users', noCache: true }
    }
  ]
}

export default usersRouter
