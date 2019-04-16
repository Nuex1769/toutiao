import Vue from 'vue'
import Router from 'vue-router'
import EssayList from '../components/EssayList'
import EssayMain from '../components/EssayMain'
import Login from '../components/Login'
import Register from '../components/Register'
import Video from '../components/Video'
import IDid from '../components/IDid'
import Browse from '../view/Browse'
import MyCollect from '../view/MyCollect'
import MyComment from '../view/MyComment'
import MyLike from '../view/MyLike'
import Search from '../components/Search'







Vue.use(Router)

export default new Router({
  routes: [
    {
       path: '/essaymain',
       name: 'essaymain',
       component: EssayMain
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      children:[{
         path:'register',
        component: Register
      }]
    },
    {
      path:'/video',
      name:'video',
      component:Video
    },
    {
      path:'/idid',
      name:'idid',
      component:IDid
    },
    {
      path:'/mycollect',
      name:'mycollect',
      component: MyCollect
    },
    {
      path:'/browse',
      name:"browse",
      component:Browse
    },
    {
      path:'/mycomment',
      name:'mycomment',
      component:MyComment
    },
    {
      path:'/mylike',
      name:'mylike',
      component:MyLike
    },
     {
      path:'/search',
      name:'search',
      component:Search
    },

  ]
})
