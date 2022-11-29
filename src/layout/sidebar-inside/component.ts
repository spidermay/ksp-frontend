import { Component, OnInit, AfterViewInit, AfterViewChecked, AfterContentInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { Config } from "../../app/config";
import { Routes } from './interface';

declare var $:any;

@Component({
    moduleId: module.id,
    templateUrl: "template.html",
    selector: "component-sidebar-inside",
})

export class ComponentSidebar {
    public menuItems: any[];
    public project_name: string;
    public project_version: string;

    constructor( 
        private Router: Router,
        private TranslateService: TranslateService 
    ) { 

    }

    isNotMobileMenu(){
        if($(window).width() > 991){
            return false;
        }
        return true;
    }

    ngOnInit() {
        var isWindows = navigator.platform.indexOf("Win") > -1 ? true : false;
        this.menuItems = Routes.filter(menuItem => menuItem);
        this.project_version = Config.project_version;
        this.project_name = Config.project_name;

        isWindows = navigator.platform.indexOf("Win") > -1 ? true : false;

        if(isWindows){
           // if we are on windows OS we activate the perfectScrollbar function
           $(".sidebar .sidebar-wrapper, .main-panel").perfectScrollbar();
           $("html").addClass("perfect-scrollbar-on");
       } else {
           $("html").addClass("perfect-scrollbar-off");
       }
    }

    ngAfterViewInit(){
        var $sidebarParent = $(".sidebar .nav > li.active .collapse li.active > a").parent().parent().parent();
        var collapseId = $sidebarParent.siblings("a").attr("href");

        $(collapseId).collapse("show");
    }
}
