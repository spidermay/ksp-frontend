import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";
import { InfiniteScrollModule } from "ngx-infinite-scroll";

import { Utils } from "src/shared/classes/utils.class";
import { Service as ServiceBeneficiary } from "./service";

import { ListComponent as SharedListBeneficiary } from "../shared-list/component";
import { SelectComponent as SelectComponentBeneficiary } from "../shared-select/component";

@NgModule({
    imports: [ 
        FormsModule,
        RouterModule, 
        CommonModule,
        TranslateModule,
        InfiniteScrollModule,
    ],
    declarations: [ 
        SharedListBeneficiary,
        SelectComponentBeneficiary 
    ],
    exports: [ 
        SharedListBeneficiary,
        SelectComponentBeneficiary 
    ],
    providers: [
        Utils,
        ServiceBeneficiary,
    ]
})

export class Shared {}