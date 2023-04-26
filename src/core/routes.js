import { createBrowserRouter } from "react-router-dom";
import Todo from "../pages/todo";
import Detail from "../pages/detail";

let routes = [{
    children: [
        {
            path: "/",
            element: < Todo / > ,
        },
        {
         path: "todo/:id",
         element: < Detail / >
        },
    ],
}
];

export default routes;
export const browserRouter = createBrowserRouter(routes);