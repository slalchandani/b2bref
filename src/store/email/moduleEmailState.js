/*=========================================================================================
  File Name: moduleEmailState.js
  Description: Email Module State
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import emails from '@/views/apps/email/mails'

export default {
    mails: emails,
    mail_filter: 'inbox',
    mailTags: [
        { text: 'Complete', value : 'complete', color:"success"},
        { text: 'Direct', value: 'direct', color:"primary"},
        { text: 'Stale', value: 'stale', color:"warning"},
        { text: 'Rejected', value: 'rejected', color:"danger"},
    ],
    mailSearchQuery: '',
}