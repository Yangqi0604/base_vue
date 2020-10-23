/*
 * @Author: Lijiahui
 * @Date: 2020-10-16 10:32:39
 * @LastEditors: YangQi
 * @LastEditTime: 2020-10-23 11:19:03
 */
const elc = resolve => require(['../components/Bench1.vue'], resolve);
const Bench2 = resolve => require(['../components/Bench2.vue'], resolve);
const mainRouter = [
    {
        path: '/',
        name: 'index',
        component: () => import('../views/Home.vue'),
        children: [
           {path:'elc/:id',name:'elc',component:elc},
           
        ]
    },
]


export default mainRouter