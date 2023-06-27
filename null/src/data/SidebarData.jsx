import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
// import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  // {
  //   title: 'Home',
  //   path: '/home',
  //   icon: <AiIcons.AiFillHome />,
  //   cName: 'nav-text'
  // },
  {
    title: 'Shows',
    path: '/shows',
    icon: <FaIcons.FaTicketAlt />,
    cName: 'nav-text'
  },
  {
    title: 'Content',
    path: '/content',
    icon: <FaIcons.FaVideo />,
    cName: 'nav-text'
  },
  {
    title: 'Mailing List',
    path: '/mailinglist',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  // {
  //   title: 'Posts',
  //   path: '/posts',
  //   icon: <FaIcons.FaInstagram />,
  //   cName: 'nav-text'
  // },
  {
    title: 'Merch',
    path: 'https://null-merch-store.myshopify.com',
    target: "_blank",
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
//   {
//     title: 'Support',
//     path: '/support',
//     icon: <IoIcons.IoMdHelpCircle />,
//     cName: 'nav-text'
//   }
];