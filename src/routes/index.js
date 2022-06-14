/* Route declarations for the app */

import * as reviews from '../views';

const routData = [
    {
        id: 'route-001',
        path: '/login',
        component: reviews.Login,
        requiresAuth: true,
    },
    {
        id: 'route-002',
        path: '/signup',
        component: reviews.Signup,
        requiresAuth: false,
    },

    {
        id: 'route-003',
        path: '/home',
        component: reviews.Home,
        requiresAuth: false,
    },

    {
        id: 'route-004',
        path: '/',
        component: reviews.Login,
        requiresAuth: false,
    },

    {
        id: 'route-000',
        path: '*',
        component: reviews.NoPageFound,
        requiresAuth: false,
    },
];

export default routData;
