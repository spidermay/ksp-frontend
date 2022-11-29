import { Component, OnInit, Renderer2, ViewChild, ElementRef, Directive } from "@angular/core";
import { Location, LocationStrategy, PathLocationStrategy } from "@angular/common";
import { Router, ActivatedRoute } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";

import { Config } from "src/app/config";
import { Utils } from "src/shared/classes/utils.class";
import { Routes } from "src/layout/sidebar-inside/interface";
import { WebSocketService } from "src/shared/services/web_socket";

declare var $: any;
var misc:any = {
    active_collapse: true,
    navbar_menu_visible: 0,
    disabled_collapse_init: 0,
}

@Component({
    moduleId: module.id,
    templateUrl: "template.html",
    selector: "component-navbar-inside",
})

export class ComponentNavbar implements OnInit {
    private Translation: any = {};
    private toggleButton;
    private listTitles: any[];
    private location: Location;
    private nativeElement: Node;
    private sidebarVisible: boolean;
    public notifications: any = 0;
    public total_notification: number = 0;
    public list_notification: any[];
    public WebSocketService: WebSocketService;
    public module:any = "";
    public title:any = "";

    @ViewChild("component-navbar-inside") button;

    constructor(
        location: Location, 
        private Utils: Utils,
        private Router: Router,
        private element: ElementRef,
        private TranslateService: TranslateService,
    ) {
        this.location = location;
        this.sidebarVisible = false;
        this.nativeElement = element.nativeElement;
       
        this.TranslateService.get(["LIST","ERRORS","SUCCESS","NOTIFICATION"]).subscribe((translation: string) => { this.Translation = translation; });
   
        // this.WebSocketService = new WebSocketService();
    }

    ngOnInit(){
        let self = this;
        this.listTitles = Routes.filter(listTitle => listTitle);
       
        var navbar : HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName("navbar-toggle")[0];
        
        if($("body").hasClass("sidebar-mini")){
            misc.sidebar_mini_active = true;
        }

        $("#minimizeSidebar").click(function(){
            if(misc.sidebar_mini_active == true){
                $("body").removeClass("sidebar-mini");
                misc.sidebar_mini_active = false;
            } else {
                setTimeout(function(){
                    $("body").addClass("sidebar-mini");
                    misc.sidebar_mini_active = true;
                }, 300);
            }

            // we simulate the window Resize so the charts will get updated in realtime.
            var simulateWindowResize = setInterval(function(){
                window.dispatchEvent(new Event("resize"));
            }, 180);

            // we stop the simulation of Window Resize after the animations are completed
            setTimeout(function(){
                clearInterval(simulateWindowResize);
            },1000);
        });

        // setTimeout(function(){
        //     self.loadDataNotification();
        //     // window.dispatchEvent(new Event("resize"));
        // }, 1000);

        // This trick for mini sidebar in the start
        // $("body").addClass("sidebar-mini");
        // misc.sidebar_mini_active = true;

        this.getTitle();
    }

    ngOnDestroy(): void {
        // (this.WebSocketService.connected == true)? this.WebSocketService.close() : false;  
    }

    isMobileMenu(){
        if($(window).width() < 991){
            return false;
        }
        return true;
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
        if(this.sidebarVisible == false){
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
    }

    getTitle(){
        let current_path = "";
        let path_compound = "";
        let current_module = "";
        let location = this.location.prepareExternalUrl(this.location.path());
        
        if(location.charAt(0) === "#"){
            current_path = location.slice(2);
        } else {
            current_path = location.split("/")[2];
            current_module = location.split("/")[1];
        }
        
        for(let row of this.listTitles){
            let module = row.module;
            this.module = row.title;
            
            if(row.children != undefined){
                for(let children of row.children){
                    module = (children.module != undefined)? children.module : row.module;
                    (module[0] != "/")? module = "/" + module : false;
                    path_compound = module + "/" + children.path;

                    if(path_compound == location){
                        this.title = children.title;
                        return true;
                    }
                }
            } else {
                if(module == location){
                    this.title = row.title;
                    return true;
                }
            }
        }
    }

    getPath(){
        // console.log(this.location);
        return this.location.prepareExternalUrl(this.location.path());
    }

    back(){
        return this.location.back();
    }

    logOut(){
        if(localStorage.getItem("lockStatus") != "true"){
            localStorage.clear();
        }
        localStorage.removeItem("token");
        this.Router.navigate(["/"]);
    }   

    openPage(page, id?){
        this.Router.navigate(["../" + page, { id:id }]);
    }
}