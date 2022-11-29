import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";
import { InfiniteScrollModule } from "ngx-infinite-scroll";

import { Service as ServiceBeneficiary } from "./service";
import { Utils } from "src/shared/classes/utils.class";

import { Routing } from "./routing";
import { ListComponent as ListBeneficiary } from "../list/component";
import { ViewComponent as ViewBeneficiary } from "../view/component";
import { SaveComponent as SaveBeneficiary } from "../save/component";

import { Shared as SharedBeneficiary } from "src/pages/beneficiary/module/shared";
import { Shared as SharedEmployee } from "src/pages/employee/module/shared";

@NgModule({
    imports:[
        FormsModule,
        CommonModule,
        TranslateModule,
        InfiniteScrollModule,
        RouterModule.forChild(Routing),
        SharedBeneficiary,
        SharedEmployee,
    ],
    declarations:[
        ListBeneficiary,
        ViewBeneficiary,
        SaveBeneficiary,
    ],
    providers:[
        Utils,
        ServiceBeneficiary,
    ]
})
export class Module {}
