import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Achievement from '@/components/Achievement'
//四级
import Four from '@/components/four/Four'
import HomePageFour from '@/components/four/HomePageFour'
import FourAchievement from '@/components/four/FourAchievement'
import FourArticleAndMistakes from '@/components/four/FourArticleAndMistakes'
import MyFourMistakes from '@/components/four/mistakeandarticle/MyFourMistakes'
import MyFourArticle from '@/components/four/mistakeandarticle/MyFourArticle'

// 六级
import Six from '@/components/six/Six'
import HomePageSix from '@/components/six/HomePageSix'
import SixAchievement from '@/components/six/SixAchievement'
import SixArticleAndMistakes from '@/components/six/SixArticleAndMistakes'
import MySixMistakes from '@/components/six/mistakeandarticle/MySixMistakes'
import MySixArticle from '@/components/six/mistakeandarticle/MySixArticle'

//TED听力
import TedHomePage from '@/components/ted/TedHomePage'
import TedSingleTalk from '@/components/ted/TedSingleTalk'

Vue.use(Router);

const route = new Router({
    mode:'history',
    linkActiveClass:'active',
    routes: [
        { path: '/', name: 'landing', component: Landing },
        { path: '/login', name: 'login', component: Login },
        { path: '/register', name: 'register', component: Register }, 
        { path: '/achievement', name: 'Achievement', component: Achievement },
        // 四级
        { path: '/homepagefour', name: 'HomePageFour', component: HomePageFour },
        { path: '/four/:handle', name: 'Four', component: Four },
        { path: '/fourachievement', name: 'FourAchievement', component: FourAchievement },
        { path: '/fourarticleandmistakes/:handle', name: 'FourArticleAndMistakes', component: FourArticleAndMistakes,children:[
            { path: '/myfourmistakes/:handle', name: 'MyFourMistakes', component: MyFourMistakes },
            { path: '/myfourarticle/:handle', name: 'MyFourArticle', component: MyFourArticle }
        ],redirect:"/myfourmistakes/:handle"},
        // 六级
        { path: '/homepagesix', name: 'HomePageSix', component: HomePageSix },
         { path: '/six/:handle', name: 'Six', component: Six },
         { path: '/sixachievement', name: 'SixAchievement', component: SixAchievement },
         { path: '/sixarticleandmistakes/:handle', name: 'SixArticleAndMistakes', component: SixArticleAndMistakes,children:[
            { path: '/mysixmistakes/:handle', name: 'MySixMistakes', component: MySixMistakes },
            { path: '/mysixarticle/:handle', name: 'MySixArticle', component: MySixArticle }
        ],redirect:"/mysixmistakes/:handle"},
         // TED
        { path: '/ted/tedhomepage', name: 'TedHomePage', component: TedHomePage },
        { path: '/ted/tedsingletalk/:handle', name: 'TedSingleTalk', component: TedSingleTalk }
        // { path: '*', redirect: '/' }
    ]
});


export default route;
