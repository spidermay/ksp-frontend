import "rxjs/add/operator/filter";
import { Subscription } from "rxjs/Subscription";
import { Router, NavigationEnd } from "@angular/router";
import { LocationStrategy, PlatformLocation, Location } from "@angular/common";
import { Component, OnInit, OnDestroy, ViewChild, HostListener } from "@angular/core";

import { ComponentNavbar as NavbarOutside } from "src/layout/navbar-outside/component";

declare var $: any;

@Component({
    selector: "app-layout",
    templateUrl: "./template.html"
})

export class ComponentLayout {
    location: Location;
    private _router: Subscription;
    
    @ViewChild(NavbarOutside) pagesnavbar: NavbarOutside;

    constructor( 
		private Router: Router, 
		location:Location 
	) {
      	this.location = location;
    }

    ngOnInit() {
        this._router = this.Router.events.filter(event => event instanceof NavigationEnd).subscribe(event => {
          	this.pagesnavbar.sidebarClose();
        });
    }
}
