import { Routes } from "@angular/router";

import { ComponentLayout as LayoutInside } from "../layout/layout-inside/component";
import { ComponentLayout as LayoutOutside } from "../layout/layout-outside/component";

export const Routing: Routes = [
    {
        path: "",
        redirectTo: "/employee/list",
        pathMatch: "full",
    },
    {
        path: "",
        component: LayoutOutside,
        children: [
            {
                path: "not-found",
                loadChildren: () => import("../pages/not-found/module/module").then(item => item.Module)
            },
        ]
    },
    {
        path: "",
        component: LayoutInside,
        children: [
            {
                path: "not-found",
                loadChildren: () => import("../pages/not-found/module/module").then(item => item.Module)
            },
            {
                path: "employee",
                loadChildren: () => import("../pages/employee/module/module").then(item => item.Module)
            },
            {
                path: "beneficiary",
                loadChildren: () => import("../pages/beneficiary/module/module").then(item => item.Module)
            },
        ]
    },
    {
        path: "**",
        redirectTo: "/not-found"
    }
];
