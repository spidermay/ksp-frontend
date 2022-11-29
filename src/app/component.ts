import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

import { Config } from "./config";

@Component({
  selector: "app-root",
  templateUrl: "./template.html",
})

export class AppComponent {
	constructor(
		private translateService: TranslateService
	) { 
		// Set Language
		this.translateService.setDefaultLang(Config.lang);
		this.translateService.use(Config.lang);
	}
}