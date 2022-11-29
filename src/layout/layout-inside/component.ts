import { Component, OnInit, OnDestroy, ViewChild, HostListener } from "@angular/core";
import { LocationStrategy, PlatformLocation, Location } from "@angular/common";
import { Router, NavigationEnd, NavigationStart } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import "rxjs/add/operator/filter";

import { ComponentNavbar as NavbarInside } from "src/layout/navbar-inside/component";

declare var $: any;

@Component({
    selector: "app-layout",
    templateUrl: "./template.html"
})

export class ComponentLayout implements OnInit {
    private lastPoppedUrl: string;
    private yScrollStack: number[] = [];
    private _router: Subscription;
    location: Location;
    url: any;
    
    @ViewChild("sidebar") sidebar;
    @ViewChild(NavbarInside) navbar: NavbarInside;

    constructor( 
        private router: Router, 
        location:Location 
    ) {
        this.location = location;
    }

    ngOnInit() {
      const elementMainPanel = <HTMLElement>document.querySelector(".main-panel");
      const elementSidebar = <HTMLElement>document.querySelector(".sidebar .sidebar-wrapper");

       this.router.events.subscribe((event:any) => {
          if (event instanceof NavigationStart) {
             if (event.url != this.lastPoppedUrl)
                 this.yScrollStack.push(window.scrollY);
         } else if (event instanceof NavigationEnd) {
             if (event.url == this.lastPoppedUrl) {
                 this.lastPoppedUrl = undefined;
                 window.scrollTo(0, this.yScrollStack.pop());
             }
             else
                 window.scrollTo(0, 0);
         }
      });

      this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
           elementMainPanel.scrollTop = 0;
           elementSidebar.scrollTop = 0;
      });

        this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe(event => {
        //   this.url = event.url;
          this.navbar.sidebarClose();
        });

        var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        
        if (isWindows){
            // if we are on windows OS we activate the perfectScrollbar function
            var $main_panel = $('.main-panel');
            $main_panel.perfectScrollbar();
        }

    }

    public isMap(){
        if(this.location.prepareExternalUrl(this.location.path()) == '#/maps/fullscreen'){
            return true;
        } else {
            return false;
        }
    }
}