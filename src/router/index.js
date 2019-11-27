import Vue from 'vue'
import Router from 'vue-router'
import Content from '@/components/Content'
import NavContent from '@/components/NavContent'
import FooterShare from '@/components/FooterShare'
import Aboutus from '@/components/Aboutus'
import Blogs from '@/components/Blogs'
import CaseStudies from '@/components/CaseStudies'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Content',
      component: Content
    },
    {
      path: '/NavContent',
      name: 'NavContent',
      component: NavContent
    },
    {
      path: '/FooterShare',
      name: 'FooterShare',
      component: FooterShare
    },
    {
      path: '/Aboutus',
      name: 'Aboutus',
      component: Aboutus
    },
    {
      path: '/Blogs',
      name: 'Blogs',
      component: Blogs
    },
    {
      path: '/CaseStudies',
      name: 'CaseStudies',
      component: CaseStudies
    }
  ]
})
