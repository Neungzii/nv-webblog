import Vue from 'vue'
import Router from 'vue-router'

// User
import UserIndex from '@/components/Users/Index'
import UserCreate from '@/components/Users/CreateUser' 
import UserEdit from '@/components/Users/EditUser' 
import UserShow from '@/components/Users/ShowUser'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/users', // url หลักgเช่น nv-webblog.com/users
      name: 'users',
      component: UserIndex
    },
    {       
      path: '/user/create',
      name: 'users-create',       
      component: UserCreate     
    },     
    {       
      path: '/user/edit/:userId',
      name: 'user-edit',
      component: UserEdit
    },     
    {       
      path: '/user/:userId',
      name: 'user',
      component: UserShow
    }, 
  ]
})
