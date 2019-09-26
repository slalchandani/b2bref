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
                path: '/dashboard/start',
                name: 'getting-started',
                component: () => import('./views/GettingStarted.vue')
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
                path: '/references/request',
                name: 'request-reference',
                component: () => import("./views/references/RequestReference.vue")
              },
              {
                path: '/references/open',
                name: 'manage-references',
                component: () => import("./views/references/ManageReference.vue")
              },
              {
                path: '/references/received',
                name: 'received-requests',
                component: () => import("./views/references/Received.vue")
              },
              {
                path: '/references/share',
                name: 'share-reference',
                component: () => import("./views/references/Share.vue")
              },
              {
                path: '/references/share_status',
                name: 'share-status',
                component: () => import("./views/references/SharedStatus.vue")
              },
              {
                path: '/references/shared',
                name: 'shared-references',
                component: () => import("./views/references/ShareReference.vue")
              },
              {
                path: '/references/provided',
                name: 'provided-references',
                component: () => import("./views/references/ProvideReference.vue")
              },
              {
                path: '/references/summary',
                name: 'reference-request-summary',
                component: () => import("./views/references/RequestSummary.vue")
              },
              {
                path: '/external/references',
                name: 'external-reference',
                component: () => import("./views/external/Reference.vue")
              },
              {
                path: '/external/references2',
                name: 'external-reference2',
                component: () => import("./views/external/Reference2.vue")
              },
              {
                path: '/external/references3',
                name: 'external-reference3',
                component: () => import("./views/external/Reference3.vue")
              },
              {
                path: '/external/final',
                name: 'external-reference-final',
                component: () => import("./views/external/ReferenceFinal.vue")
              },
              {
                path: '/external/overview',
                name: 'external-overview',
                component: () => import("./views/external/Overview.vue")
              },
              {
                path: '/external/details',
                name: 'external-detail',
                component: () => import("./views/external/Detail.vue")
              },
              {
                path: '/references/direct',
                name: 'email',
                component: () => import('./views/apps/email/Email.vue'),
                meta: {
                    rule: 'editor'
                }
              },
              // =========================================
              // Pages  Routes
              // -----------------------------------------
              {
                path: '/pages/profile',
                name: 'page-profile',
                component: () => import('@/views/pages/Profile.vue'),
                meta: {
                    breadcrumb: [
                        { title: 'Home', url: '/' },
                        { title: 'Pages' },
                        { title: 'Profile', active: true },
                    ],
                    pageTitle: 'Profile',
                    rule: 'editor'
                },                
              },
              {
                path: '/pages/account',
                name: 'page-account',
                component: () => import('@/views/pages/Account.vue'),
                meta: {
                    breadcrumb: [
                        { title: 'Home', url: '/' },
                        { title: 'Pages' },
                        { title: 'Account', active: true },
                    ],
                    pageTitle: 'Account',
                    rule: 'editor'
                }
              },
              {
                path: '/pages/preferences',
                name: 'page-preferences',
                component: () => import('@/views/pages/Preferences.vue'),
                meta: {
                    breadcrumb: [
                        { title: 'Home', url: '/' },
                        { title: 'Pages' },
                        { title: 'Preferences', active: true },
                    ],
                    pageTitle: 'Preferences',
                    rule: 'editor'
                }
              },
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
