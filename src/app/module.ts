/**
 * This development and the intellectual property, code, flow, database and logic is the property of Ismael Cortés <may.estilosfrescos@gmail.com>
 * Este desarrollo y la propiedad intelectual, del código, flujo, base de datos y logica es propiedad de Ismael Cortés <may.estilosfrescos@gmail.com>
 * @author Ismael Cortés <may.estilosfrescos@gmail.com>
 * @copyright Copyright (c) 2021, Ismael Cortés <may.estilosfrescos@gmail.com>
 * @license http://opensource.org/licenses/gpl-license.php GNU Public License
 * @package spiderFrame
 */

import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent }   from "./component";
import { RouterModule } from "@angular/router";
import { NgxSpinnerModule } from "ngx-spinner";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"; 
import { NguiMapModule} from "@ngui/map";

import { ModuleNavbar as NavbarInside} from "src/layout/navbar-inside/module";
import { ModuleFooter as FooterInside } from "src/layout/footer-inside/module";
import { ModuleFooter as FooterOutside } from "src/layout/footer-outside/module";
import { ModuleNavbar as NavbarOutside } from "src/layout/navbar-outside/module";
import { ModuleSidebar as SidebarInside } from "src/layout/sidebar-inside/module";

import { ComponentLayout as LayoutInside} from "../layout/layout-inside/component";
import { ComponentLayout as LayoutOutside } from "../layout/layout-outside/component";

import { Routing } from "./routing";
import { Config } from "./config";

@NgModule({
    imports:      [
        FormsModule,
        FooterInside,
        NavbarInside,
        NavbarOutside,
        FooterOutside,
        SidebarInside,
        HttpClientModule,
        NgxSpinnerModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(Routing,{ useHash: false }),
        TranslateModule.forRoot({
            loader: {
                deps: [ HttpClient ],
                provide: TranslateLoader,
                useFactory: (FactoryTranslateLoader),
            }
		}),
        NguiMapModule.forRoot({ apiUrl:"https://maps.google.com/maps/api/js?key=" + Config.google_key + "&libraries=visualization,places,drawing"}),
    ],
    declarations: [
        AppComponent,
        LayoutInside,
        LayoutOutside
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }

export function FactoryTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}