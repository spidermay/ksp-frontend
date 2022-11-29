import { Routes } from "@angular/router";

import { ListComponent as ListEmployee } from "../list/component";
import { ViewComponent as ViewEmployee } from "../view/component";
import { SaveComponent as SaveEmployee } from "../save/component";

export const Routing:Routes = [
    {
        path:"",
        children:[{
            path:"list",
            component:ListEmployee
        }]
    },
    {
        path:"",
        children:[{
            path:"save",
            component:SaveEmployee
        }]
    },
    {
        path:"",
        children:[{
            path:"view",
            component:ViewEmployee
        }]
    },
];