import SignupPage from "./pages/Signup";
import LoginPage from "./pages/Login";
import HomePage from "./pages/Home";

const routes = [
  {
    path: "/",
    component: LoginPage,
  },
  {
    path: "/signup",
    component: SignupPage,
  },
];

export default routes;
