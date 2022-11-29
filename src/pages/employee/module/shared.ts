import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";
import { InfiniteScrollModule } from "ngx-infinite-scroll";

import { Utils } from "src/shared/classes/utils.class";
import { Service as ServiceEmployee } from "./service";

import { ListComponent as SharedListEmployee } from "../shared-list/component";
import { SelectComponent as SelectComponentEmployee } from "../shared-select/component";

@NgModule({
    imports: [ 
        FormsModule,
        RouterModule, 
        CommonModule,
        TranslateModule,
        InfiniteScrollModule,
    ],
    declarations: [ 
        SharedListEmployee,
        SelectComponentEmployee 
    ],
    exports: [ 
        SharedListEmployee,
        SelectComponentEmployee 
    ],
    providers: [
        Utils,
        ServiceEmployee,
    ]
})

export class Shared {}