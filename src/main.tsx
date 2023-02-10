import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "./routes";
const router = createBrowserRouter(routes);
const mountNode = document.querySelector("#root");
if (mountNode) {
  // React18 新的渲染方式
  createRoot(mountNode).render(<RouterProvider router={router}/>);
}