import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Content from "../components/Content/Content";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: "/",
            element: <Content></Content>,
            children:[
                {
                    path: "/",
                    element: <Home></Home>
                },
                {
                    path: "about",
                    element: <About></About>
                },
                {
                    path: "skills",
                    element: <Skills></Skills>
                },
                {
                    path: "projects",
                    element: <Projects></Projects>
                },
                {
                    path: "contact",
                    element: <Contact></Contact>
                },
            ]
        }
      ]
    },
  ]);

  export default router;