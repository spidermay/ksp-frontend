import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";

import { ViewComponent as NotFound } from "../view/component";

@NgModule({
    imports:[
        CommonModule,
        RouterModule.forChild([{ path:"", component:NotFound }]),
        TranslateModule
    ],
    declarations:[NotFound]
})

export class Module {}