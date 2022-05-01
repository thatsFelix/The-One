import React from "react";
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => (<Iconify icon={name} width={22} height={22} />);

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
  },
];

export default navConfig;
