import { RouteObject } from "react-router-dom";
import Home from "../pages/home";
import ButtonPage from "&/pages/buttons";
import DividerPage from "&/pages/divider";
import ToTopPage from "&/pages/to-top";
import BannerPage from "&/pages/banner";
import TagPage from "&/pages/tag";
// 页面路由
const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
    // 配置了children，需要在父路由中配置Outlet(出口)组件，否则子组件展示不了
    children: [
      {
        path: "button",
        element: <ButtonPage />,
      },
      {
        path: "divider",
        element: <DividerPage />,
      },
      {
        path: "to-top",
        element: <ToTopPage />,
      },
      {
        path: "banner",
        element: <BannerPage />,
      },
      {
        path: "tag",
        element: <TagPage />,
      },
    ],
  },
  {
    path: "*",
    element: <>wrong path</>
  }
];

export default routes;
