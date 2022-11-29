import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";

import { Utils } from "src/shared/classes/utils.class";

import { ComponentNavbar } from "./component";

@NgModule({
    imports: [ 
        RouterModule, 
        CommonModule,
        TranslateModule
    ],
    declarations: [ 
        ComponentNavbar 
    ],
    exports: [ 
        ComponentNavbar 
    ],
    providers: [
        Utils,
    ]
})

export class ModuleNavbar {}
