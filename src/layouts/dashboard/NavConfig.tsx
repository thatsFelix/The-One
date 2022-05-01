import React from "react";
import Iconify from '../../components/Iconify';

const getIcon = (name) => (<Iconify icon={name} width={22} height={22}/>);

const navConfig = [
  {
    title: 'navBar.recommends.index',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'navBar.community.index',
    path: '/dashboard/user',
    icon: getIcon('eva:people-fill'),
    children: [
      {
        title: 'navBar.community.blog',
        path: '/dashboard/user',
      },
      {
        title: 'navBar.community.note',
        path: '/dashboard/user',
      },
      {
        title: 'navBar.community.qaa',
        path: '/dashboard/user',
      },
    ]
  },
  {
    title: 'navBar.greatTime.index',
    path: '/dashboard/products',
    icon: getIcon('eva:shopping-bag-fill'),
  },
  {
    title: 'navBar.aboutFelix.index',
    path: '/dashboard/blog',
    icon: getIcon('eva:file-text-fill'),
    children: [
      {
        title: 'navBar.aboutFelix.projects',
        path: '/dashboard/user',
      },
      {
        title: 'navBar.aboutFelix.introduction',
        path: '/dashboard/user',
      },

    ]
  },
];

// const navConfig = [
//   {
//     title: 'dashboard',
//     path: '/dashboard/app',
//     icon: getIcon('eva:pie-chart-2-fill'),
//   },
//   {
//     title: 'user',
//     path: '/dashboard/user',
//     icon: getIcon('eva:people-fill'),
//   },
//   {
//     title: 'product',
//     path: '/dashboard/products',
//     icon: getIcon('eva:shopping-bag-fill'),
//   },
//   {
//     title: 'blog',
//     path: '/dashboard/blog',
//     icon: getIcon('eva:file-text-fill'),
//   },
//   {
//     title: 'login',
//     path: '/login',
//     icon: getIcon('eva:lock-fill'),
//   },
//   {
//     title: 'register',
//     path: '/register',
//     icon: getIcon('eva:person-add-fill'),
//   },
//   {
//     title: 'Not found',
//     path: '/404',
//     icon: getIcon('eva:alert-triangle-fill'),
//   },
// ];

export default navConfig;
