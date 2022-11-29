import { Router } from "@angular/router";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

import { Utils } from "src/shared/classes/utils.class";
import { Service as ServiceEmployee } from "src/pages/employee/module/service";

declare var $:any;

@Component({
    selector:"app-list",
    templateUrl:"template.html"
})

export class ListComponent implements OnInit, OnDestroy {
    private token:string;
    private Translation:any = {};
    public data_employee:any = {}; 
    // public filter_employee:any = {}; 
    public id:any;

    constructor(
        private Router:Router,
        private TranslateService:TranslateService,
        private ServiceEmployee:ServiceEmployee,
    ){
        this.Router.routeReuseStrategy.shouldReuseRoute = function(){ return false; };
        this.TranslateService.get(["SUCCESS","ERRORS","LIST","DATE","BUTTONS","PROFILE"]).subscribe((Translation:string) => { this.Translation = Translation; });
        this.token = localStorage.getItem("token");
        
        if(!this.token){
            // this.Router.navigate(["login"]);
        }

        this.data_employee = { token:this.token, footer:true, query:false };
        // this.filter_employee = { token:this.token, recursive:true };
    }

    ngOnInit(){
        
    }

    ngAfterViewInit(){
        $("[rel='tooltip']").tooltip();
    }

    ngOnDestroy(){
        // this.ServiceCatalogCity.data_emmiter.unsubscribe();
        // this.ServiceCatalogState.data_emmiter.unsubscribe();
    }

    async filterData() {
        this.ServiceEmployee.data_emmiter.emit({ action:"filter_data_list", data:this.data_employee });
    }

    onChangeFilterEmployee(value){
        if(parseInt(value) >= 0 || value == ""){
            this.data_employee.employee_id = value;
           
            this.filterData();
        }
    }
}