/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  Strucutre:
          url     => router path
          name    => name to display in sidebar
          slug    => router path name
          icon    => Feather Icon component/icon name
          tag     => text to display on badge
          tagColor  => class to apply on badge element
          i18n    => Internationalization
          submenu   => submenu of current item (current item will become dropdown )
                NOTE: Submenu don't have any icon(you can add icon if u want to display)
          isDisabled  => disable sidebar item/group
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default [
  {
    url: null,
    name: "Dashboard",    
    icon: "HomeIcon",
    i18n: "Dashboard",
    submenu : [
      {
        url: '/dashboard/start',
        name: 'Start Here!',
        slug: 'getting-started',
        i18n: "Getting Started",
        tag: "New",
        tagColor: "warning"
      },
      {
        url: '/dashboard/analytics',
        name: 'Analytics',
        slug: 'dashboard-analytics',
        i18n: "Analytics"
      },
      {
        url: '/dashboard/referrals',
        name: "Referrals",
        slug: "dashboard-referrals",
        i18n: "referrals",
      },
    ]
  },
  {
    url: null,
    name: "Contacts",    
    tagColor: "warning",
    icon: "UsersIcon",
    i18n: "Contacts",
    submenu : [
      {
        url: '/contacts/manage',
        name: 'Manage',
        slug: 'contact-management',
        i18n: "Manage Contacts"
      },
      {
        url: '/contacts/add',
        name: "Add",
        slug: "add-contact",
        i18n: "Add Contact",
      },
      {
        url: '/contacts/import',
        name: "Import",
        slug: "import-contact",
        i18n: "Import Contacts",
      },
    ]
  },
  {
    url: null,
    name: "References",
    tagColor: "warning",
    icon: "BriefcaseIcon",
    i18n: "References",
    submenu : [
      {
        url: '/references/manage',
        name: "Manage",
        slug: "manage-references"
      },
      {
        url: '/references/request',
        name: 'Request',
        slug: 'request-reference'        
      },
      {
        url: '/references/share',
        name: "Share",
        slug: "share-reference"        
      },      
      {
        url: '/references/provided',
        name: "Provided",
        slug: "provided-references"
      }
    ]
  }
  
]
