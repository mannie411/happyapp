import Home from "./views/Home";
import Favourites from "./views/Favourites";
import Joke from "./views/Joke";
import SingleJokes from "./views/SingleJokes";
import TwoPartJokes from "./views/TwoPartJokes";

const routes = [
  {
    path: "/joke/:id",
    name: "Joke",
    component: Joke,
  },

  {
    path: "/singlejokes",
    name: "SingleJokes",
    component: SingleJokes,
  },
  {
    path: "/twopart-jokes",
    name: "TwoPartJokes",
    component: TwoPartJokes,
  },
  {
    path: "/favourites",
    name: "Favourites",
    component: Favourites,
  },
  {
    path: "/",
    name: "Home",
    exact: true,
    component: Home,
  },
];

export default routes;
