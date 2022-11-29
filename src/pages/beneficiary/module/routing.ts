import { Routes } from "@angular/router";

import { ListComponent as ListBeneficiary } from "../list/component";
import { ViewComponent as ViewBeneficiary } from "../view/component";
import { SaveComponent as SaveBeneficiary } from "../save/component";

export const Routing:Routes = [
    {
        path:"",
        children:[{
            path:"list",
            component:ListBeneficiary
        }]
    },
    {
        path:"",
        children:[{
            path:"save",
            component:SaveBeneficiary
        }]
    },
    {
        path:"",
        children:[{
            path:"view",
            component:ViewBeneficiary
        }]
    },
];