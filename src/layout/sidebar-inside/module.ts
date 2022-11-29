import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";

import { ComponentSidebar } from "./component";

@NgModule({
    imports: [ 
        RouterModule, 
        CommonModule, 
        TranslateModule, 
    ],
    declarations: [ 
        ComponentSidebar 
    ],
    exports: [ 
        ComponentSidebar
    ]
})

export class ModuleSidebar {}
