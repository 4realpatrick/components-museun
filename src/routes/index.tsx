import React from "react";
import { RouteObject } from "react-router-dom";
import App from "&/app";
import ButtonPage from "&/pages/buttons";
// 页面路由
const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    // 配置了children，需要在父路由中配置Outlet(出口)组件，否则子组件展示不了
    children: [
      {
        path: "button",
        element: <ButtonPage />,
      },
    ],
  },
];

export default routes;
