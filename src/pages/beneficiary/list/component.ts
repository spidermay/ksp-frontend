import { Router } from "@angular/router";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

import { Utils } from "src/shared/classes/utils.class";
import { Service as ServiceBeneficiary } from "src/pages/beneficiary/module/service";

declare var $:any;

@Component({
    selector:"app-list",
    templateUrl:"template.html"
})

export class ListComponent implements OnInit, OnDestroy {
    private token:string;
    private Translation:any = {};
    public data_beneficiary:any = {}; 
    public filter_beneficiary:any = {}; 
    public id:any;

    constructor(
        private Router:Router,
        private TranslateService:TranslateService,
        private ServiceBeneficiary:ServiceBeneficiary,
    ){
        this.Router.routeReuseStrategy.shouldReuseRoute = function(){ return false; };
        this.TranslateService.get(["SUCCESS","ERRORS","LIST","DATE","BUTTONS","PROFILE"]).subscribe((Translation:string) => { this.Translation = Translation; });
        this.token = localStorage.getItem("token");
        
        if(!this.token){
            // this.Router.navigate(["login"]);
        }

        this.data_beneficiary = { token:this.token, query:false };
        // this.filter_beneficiary = { token:this.token, recursive:true };
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
        this.ServiceBeneficiary.data_emmiter.emit({ action:"filter_data_list", data:this.data_beneficiary });
    }

    onChangeFilterBeneficiary(value){
        if(parseInt(value) >= 0 || value == ""){
            this.data_beneficiary.beneficiary_id = value;
            
            this.filterData();
        }
    }
}