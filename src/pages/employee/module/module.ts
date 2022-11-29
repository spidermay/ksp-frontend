import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { NguiMapModule} from "@ngui/map";

import { Service as ServiceEmployee } from "./service";
import { Utils } from "src/shared/classes/utils.class";
import { Service as ServiceBeneficiary } from "src/pages/beneficiary/module/service";

import { Routing } from "./routing";
import { ListComponent as ListEmployee } from "../list/component";
import { ViewComponent as ViewEmployee } from "../view/component";
import { SaveComponent as SaveEmployee } from "../save/component";

import { Shared as SharedBeneficiary } from "src/pages/beneficiary/module/shared";
import { Shared as SharedEmployee } from "src/pages/employee/module/shared";

@NgModule({
    imports:[
        FormsModule,
        CommonModule,
        NguiMapModule,
        TranslateModule,
        InfiniteScrollModule,
        RouterModule.forChild(Routing),
        SharedBeneficiary,
        SharedEmployee,
    ],
    declarations:[
        ListEmployee,
        ViewEmployee,
        SaveEmployee,
    ],
    providers:[
        Utils,
        ServiceEmployee,
        ServiceBeneficiary,
    ]
})
export class Module {}
