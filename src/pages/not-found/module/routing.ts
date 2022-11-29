import { Routes } from "@angular/router";
import { ViewComponent as ViewDashboard } from "../view/component";

export const Routing: Routes = [{
    path: "",
    children: [
        {
            path: "view",
            component: ViewDashboard
        }
    ]
}];
