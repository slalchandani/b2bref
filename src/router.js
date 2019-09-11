/*=========================================================================================
  File Name: router.js
  Description: Routes for vue-router. Lazy loading is enabled.
  Object Strucutre:
                    path => router path
                    name => router name
                    component(lazy loading) => component to load
                    meta : {
                      rule => which user can have access (ACL)
                      breadcrumb => Add breadcrumb to specific page
                      pageTitle => Display title besides breadcrumb
                    }
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior () {
        return { x: 0, y: 0 }
    },
    routes: [

        {
    // =============================================================================
    // MAIN LAYOUT ROUTES
    // =============================================================================
            path: '',
            component: () => import('./layouts/main/Main.vue'),
            children: [
        // =============================================================================
        // Theme Routes
        // =============================================================================
              {
                path: '/',
                redirect: '/dashboard/analytics'
              },
              {
                path: '/dashboard/analytics',
                name: 'dashboard-analytics',
                component: () => import('./views/DashboardAnalytics.vue'),
                meta: {
                  rule: 'editor'
                }
              },
              {
                path: '/dashboard/referrals',
                name: 'dashboard-referrals',
                component: () => import('./views/DashboardReferrals.vue')
              },
              {
                path: '/contacts/manage',
                name: 'contacts-manager',
                component: () => import('./views/contact/Manager.vue')
              },
              {
                path: '/contacts/add',
                name: 'add-contact',
                component: () => import("./views/contact/Add.vue")
              },
              {
                path: '/contacts/import',
                name: 'import-contacts',
                component: () => import("./views/contact/ImportContacts.vue")
              },
              {
                path: '/analytics/responses',
                name: 'response-analytics',
                component: () => import("./views/analytics/ResponseAnalytics.vue")
              },
              {
                path: '/analytics/activity',
                name: 'activity-analytics',
                component: () => import("./views/analytics/ActivityAnalytics.vue")
              }
            ],
        },
    // =============================================================================
    // FULL PAGE LAYOUTS
    // =============================================================================
        {
            path: '',
            component: () => import('@/layouts/full-page/FullPage.vue'),
            children: [
        // =============================================================================
        // PAGES
        // =============================================================================
              {
                path: '/pages/login',
                name: 'page-login',
                component: () => import('@/views/pages/Login.vue')
              },
              {
                path: '/pages/error-404',
                name: 'page-error-404',
                component: () => import('@/views/pages/Error404.vue')
              },
            ]
        },
        // Redirect to 404 page, if no match found
        {
            path: '*',
            redirect: '/pages/error-404'
        }
    ],
})

router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
    if (appLoading) {
        appLoading.style.display = "none";
    }
})

export default router
