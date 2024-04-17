import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Root from "../../layouts/Root/Root";
import Blogs from "../../pages/Blogs/Blogs";
import Bookmarks from "../../pages/Bookmarks/Bookmarks";
import Errors from "../../layouts/Errors/Errors";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Errors />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/bookmarks",
        element: <Bookmarks />,
      },
    ],
  },
]);

export default router;
