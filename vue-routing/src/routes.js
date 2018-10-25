import Home from './components/Home.vue';
import Header from './components/Header';

//a webpack bundle function which does the same as import, a promise which loads upon need for component.
//improves performance in bigger web applications.
const User = resolve => {
    require.ensure(['./components/User/User.vue'], () => {
        resolve(require('./components/User/User.vue'));
    }, 'user');
}

const UserStart = resolve => {
    require.ensure(['./components/User/UserStart.vue'], () => {
        resolve(require('./components/User/UserStart.vue'));
    }, 'user');
}

const UserEdit = resolve => {
    require.ensure(['./components/User/UserEdit.vue'], () => {
        resolve(require('./components/User/UserEdit.vue'));
    }, 'user');
}

const UserDetail = resolve => {
    require.ensure(['./components/User/UserDetail.vue'], () => {
        resolve(require('./components/User/UserDetail.vue'));
    }, 'user');
}

export const routes = [
    { 
        path: '', name: 'home', components: {
            default: Home,
            'header-top': Header
        } 
    },
    { 
        path: '/user', components: {
            default: User,
            'header-bottom': Header
        }, 
        children: [
            { path: '', component: UserStart },
            { path: ':id', component: UserDetail, beforeEnter: (to, from, next) => {
                next();
            }},
            { path: ':id/edit', component: UserEdit, name: 'userEdit' }
        ] 
    },
    { path: '/redirect-me', redirect: '/user' },
    { path: '*', redirect: '/' }
];