import DefaultLayout from "./layouts/DefaultLayout";
import Views from "./modules";

const routes=[
    {
        path : "/",
        layout: DefaultLayout,
        exact: true,
        component: Views.HomeView
    },
    {
        path: "/delete",
        layout: DefaultLayout,
        exact: true,
        component: Views.DeleteView
        
    },
    {
        path: "/update",
        layout: DefaultLayout,
        exact: true,
        component: Views.UpdateView
    },
    {
        path: "/table",
        layout: DefaultLayout,
        exact: true,
        component: Views.TableView
    },
    {
        path: "/dashBoard",
        layout: DefaultLayout,
        exact: true,
        component: Views.DashBoardView
    },

]

export default routes;