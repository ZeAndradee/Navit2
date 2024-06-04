import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import SignupPage from "./pages/SignupPage/SignupPage.jsx";
import PrivateRoute from "./services/PrivateRoute.jsx";
import { LoginProvider } from "./services/LoginContext.jsx";
import { UserProvider } from "./services/UserContext.jsx";
import ProfilePage from "./pages/ProfilePage/ProfilePage.jsx";
import { ExtraCardProvider } from "./services/ExtraCardContext.jsx";
import { PostsProvider } from "./services/PostsContext.jsx";
import Error404 from "./pages/ErrorPage/Error404.jsx";

//Cria as rotas do site
const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute Rota={HomePage} />,
    errorElement: <Error404 />,
  },

  {
    path: "/login",
    element: <LoginPage />,
  },

  {
    path: "/signup",
    element: <SignupPage />,
  },

  {
    path: "/profile/:username",
    element: <ProfilePage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PostsProvider>
      <ExtraCardProvider>
        <UserProvider>
          <LoginProvider>
            <RouterProvider router={router} />
          </LoginProvider>
        </UserProvider>
      </ExtraCardProvider>
    </PostsProvider>
  </React.StrictMode>
);
