/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const bannerRouter = {
  path: '/banner',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Banner',
  meta: {
    title: 'Banner',
    icon: 'guide'
  },
  children: [
    {
      path: 'index',
      component: () => import('@/views/banner/index'),
      name: 'IndexBanner',
      meta: { title: 'Manager Banner', noCache: true }
    }
  ]
}

export default bannerRouter
