import { Component, OnInit, Renderer2, ViewChild, ElementRef, Directive } from "@angular/core";
import { Location, LocationStrategy, PathLocationStrategy } from "@angular/common";
import { Router, ActivatedRoute } from "@angular/router";

import { Config } from "src/app/config";

declare var $: any;

@Component({
    moduleId: module.id,
    templateUrl: "template.html",
    selector: "component-navbar-outside"
})

export class ComponentNavbar implements OnInit {
    public token:any = "";
    location: Location;
    private nativeElement: Node;
    private toggleButton;
    private sidebarVisible: boolean;
    public project_name: string;
	public project_version: string;

    @ViewChild("component-navbar-outside") button;

    constructor(
        location:Location, 
        private renderer : Renderer2, 
        private element : ElementRef
    ) {
        this.token = localStorage.getItem("token");
        this.project_name = Config.project_name;
        this.project_version = Config.project_version;
        
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
        this.location = location;
    }

    ngOnInit(){
        var navbar : HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName("navbar-toggle")[0];
        // console.log(this.location.prepareExternalUrl(this.location.path()));
    }

    sidebarOpen(){
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName("body")[0];
        
        setTimeout(function(){
            toggleButton.classList.add("toggled");
        },500);
        
        body.classList.add("nav-open");
        this.sidebarVisible = true;
    }

    sidebarClose(){
        var body = document.getElementsByTagName("body")[0];
        this.toggleButton.classList.remove("toggled");
        this.sidebarVisible = false;
        body.classList.remove("nav-open");
    }

    sidebarToggle(){
        // var toggleButton = this.toggleButton;
        // var body = document.getElementsByTagName("body")[0];
        if(this.sidebarVisible == false){
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
    }

    isLogin(){
        if(this.location.prepareExternalUrl(this.location.path()) === "#/pages/login"){
            return true;
        }
        return false;
    }

    isLock(){
        if(this.location.prepareExternalUrl(this.location.path()) === "#/pages/lock"){
            return true;
        }
        return false;
    }

    isRegister(){
        if(this.location.prepareExternalUrl(this.location.path()) === "#/pages/register"){
            return true;
        }
        return false;
    }

    getPath(){
        // console.log(this.location);
        return this.location.prepareExternalUrl(this.location.path());
    }
}
