import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import ChatPage from "./pages/ChatPage";
import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "chat",
        element: <ChatPage />
      }
    ]
  }
]);

export default router;
