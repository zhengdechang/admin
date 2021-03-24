import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'

import UserEdit from "../views/UserEdit";

import AdminUserEdit from "../views/AdminUserEdit";
import AdminUserList from "../views/AdminUserList";
import Login from "../views/Login";
import UserList from "../views/UserList";
import CommentEdit from "../views/CommentEdit";
import SongCommentList from "../views/SongCommentList";
import MvCommentList from "../views/MvCommentList";
import CollectionCommentList from "../views/CollectionCommentList";

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => {err})
}




const routes = [
  {
    path:'/login',
    name:'login',
    component: Login,
    mata:{isPublic:true}
  },
  {
    path: '/',
    name: '/main',
    component: Main,
    children:[
        //用户
      { path:'/users/create',component: UserEdit,},
      { path:'/users/edit/:id', component: UserEdit, props:true},
      { path:'/users/list', component: UserList,},
        //管理员
      {  path: '/admin_users/create',component: AdminUserEdit},
      {  path: '/admin_users/edit/:id',component: AdminUserEdit,props:true},
      {  path: '/admin_users/list',component: AdminUserList},

        //评论管理
      {  path: '/comment/edit/',component: CommentEdit},
      {  path: '/comment/song/list',component: SongCommentList},
      {  path: '/comment/mv/list',component: MvCommentList},
      {  path: '/comment/collection/list',component: CollectionCommentList},
      // {  path: '/comment/collection/list',component: AdminUserList},
        //收藏管理
      {  path: '/comment/create',component: AdminUserEdit},
      {  path: '/liked/edit/:id',component: AdminUserEdit,props:true},
      {  path: '/liked/song/list',component: AdminUserList},
      {  path: '/liked/album/list',component: AdminUserList},
      {  path: '/liked/artist/list',component: AdminUserList},
      {  path: '/liked/collection/list',component: AdminUserList},
    ]
  },
]

const router = new VueRouter({
  routes
})
//
// router.beforeEach((to,from,next) =>{
//   if(!to.meta.isPublic && !localStorage.token){
//     return  next('
//     /login')
//   }
//   else next()
// })

router.beforeEach((to, from, next) => {
  if (!to.meta.isPublic) {
    next()
    var tokenStr = window.sessionStorage.getItem('token')
  }
  if (tokenStr) {
    next()
  } else {
    next('/login')
  }
})

// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location, onResolve, onReject) {
//   if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
//   return originalPush.call(this, location).catch(err => err)
// }

export default router
