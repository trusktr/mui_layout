import { To } from "react-router-dom";

export interface MenuProp {
  name: string,
  path: To,
  children?: Array<{
    name: string,
    path: To,
  }>
}

const menu: Array<MenuProp> = [
  {
    name: '首页',
    path: '/home',
  },
  {
    name: 'FirstPage',
    path: '/about'
  },
  {
    name: 'Data',
    path: '/',
    children: [
      {
        name: 'Table',
        path: '/Table'
      },
      {
        name: 'Calendar',
        path: '/calendar'
      },
      {
        name: 'Second Page - No.2',
        path: '/'
      }
    ]
  },
  {
    name: 'ThirdPage',
    path: '/',
    children: [
      {
        name: 'Third Page - No.1',
        path: '/'
      }
    ]
  }
];

export default menu;