import { createBrowserRouter } from "react-router";
import App from "./App";

const router = createBrowserRouter(
  [
    { path: "/", Component: App },
    { path: "/app", Component: App },
  ],
  {
    basename: "/test",
  }
);

export default router;
