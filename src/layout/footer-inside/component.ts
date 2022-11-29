import { Component } from "@angular/core";
import { TranslateService } from '@ngx-translate/core';

import { Config } from "../../app/config";

@Component({
    moduleId: module.id,
    templateUrl: "template.html",
    selector: "component-footer-inside",
})

export class FooterComponent{
    public date : Date = new Date();
    public project_version = Config.project_version;

    constructor( 
        private TranslateService: TranslateService 
    ) {

    }
}
