import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";

import { Config } from "src/app/config";
import { Utils } from "src/shared/classes/utils.class";
import { Table } from "src/shared/classes/table.class";
import { Service as ServiceEmployee, Employee } from "../module/service";
import { Service as ServiceBeneficiary, FiltersBeneficiary } from "src/pages/beneficiary/module/service";

declare var $:any;
declare var swal:any;
@Component({
    selector:"app-view",
    templateUrl:"template.html"
})

export class ViewComponent implements OnInit{
    private token:string;
    private Translation:any = {};
    public item_id:any;
    public Row:Employee = new Employee();
    public url = Config.api_url + "static/storage/employee";
    public data_beneficiary:any = {}; 
    
    public TableBeneficiary:Table = new Table();
    public FiltersBeneficiary:FiltersBeneficiary = { size:100 };

    constructor(
        private Utils:Utils,
        private Router:Router,
        private ActivatedRoute:ActivatedRoute,
        private TranslateService:TranslateService,
        private ServiceEmployee:ServiceEmployee,
        private ServiceBeneficiary:ServiceBeneficiary,
    ){
        this.Router.routeReuseStrategy.shouldReuseRoute = function(){ return false; };
        this.TranslateService.get(["SUCCESS","ERRORS","BUTTONS","PROFILE","LIST"]).subscribe((Translation:string) => { this.Translation = Translation; });
        this.ActivatedRoute.params.subscribe(params => { this.item_id = params["item_id"]; });
        this.token = localStorage.getItem("token");
        
        if(!this.token){
            // this.Router.navigate(["login"]);
        }
        
        this.Row.init();
        this.TableBeneficiary.init();
        this.data_beneficiary = { token:this.token, employee_id:this.item_id };
        this.FiltersBeneficiary.employee_id = this.item_id;
    }

    async ngOnInit(){
        if(this.item_id > 0){
            await this.loadData();
            await this.loadDataBeneficiary();
        }
    }

    ngAfterViewInit(){
        (this.item_id > 0)? false :this.Utils.closeSpiner();     
    }
    
    loadData(){
        this.Utils.showSpiner();
        this.ServiceEmployee.getProfile({ item_id:this.item_id }).subscribe((return_data:any) => {
            this.Utils.closeSpiner();
            // console.log(return_data);
    
            if(return_data.success == 1){
                this.Row.setData(return_data.data);
            } else {
                console.log(return_data);
                let error = (return_data.error != undefined)? (this.Translation["PROFILE"][return_data.error])? this.Translation["PROFILE"][return_data.error] :(this.Translation["ERRORS"][return_data.error])? this.Translation["ERRORS"][return_data.error] :return_data.error :this.Translation["ERRORS"]["OPS"];
                let reason = (return_data.reason != undefined)? (this.Translation["PROFILE"][return_data.reason])? this.Translation["PROFILE"][return_data.reason] :(this.Translation["ERRORS"][return_data.reason])? this.Translation["ERRORS"][return_data.reason] :return_data.reason :this.Translation["ERRORS"]["undefined"];
                this.Utils.showAlert({ title:error, error:reason, timer:3000 });
            }
        }, (error) => {
            console.log(error);
            let error_text = (error.error.text != undefined) ? error.error.text :"";
            let error_message = (this.Translation["ERRORS"][error.statusText]) ? this.Translation["ERRORS"][error.statusText] : error.statusText;
            this.Utils.showAlert({ title:this.Translation["ERRORS"]["ERROR"], error:error_message + " " + error_text });
        });
    }

    changeStatus(){
        // this.ServiceEmployee.changeStatus({ employee_id:this.item_id, status:this.Row.data.employee.status }).subscribe((return_data:any) => {
        //     if(return_data.success == 1){
        //         this.Utils.showLocalNotification({ message:this.Translation["SUCCESS"]["SAVE_OK"], icon:"success" });
        //         this.Row.data.employee.active = return_data.data;   
        //     } else {
        //         let error = (return_data.error != undefined)? (this.Translation["PROFILE"][return_data.error])? this.Translation["PROFILE"][return_data.error] :(this.Translation["ERRORS"][return_data.error])? this.Translation["ERRORS"][return_data.error] :return_data.error :this.Translation["ERRORS"]["OPS"];
        //         let reason = (return_data.reason != undefined)? (this.Translation["PROFILE"][return_data.reason])? this.Translation["PROFILE"][return_data.reason] :(this.Translation["ERRORS"][return_data.reason])? this.Translation["ERRORS"][return_data.reason] :return_data.reason :this.Translation["ERRORS"]["undefined"];
        //         this.Utils.showAlert({ title:error, error:reason, timer:3000 });
        //     }
        // }, (error) => {
        //     console.log(error);
        //     let error_text = (error.error.text != undefined) ? error.error.text :"";
        //     let error_message = (this.Translation["ERRORS"][error.statusText]) ? this.Translation["ERRORS"][error.statusText] : error.statusText;
        //     this.Utils.showAlert({ title:this.Translation["ERRORS"]["ERROR"], error:error_message + " " + error_text });
        // });
    }

    deleted(code?){
        this.ServiceEmployee.changeDeleted({ item_id:this.item_id, code:code }).subscribe((return_data:any) => {
            // console.log(return_data);
            
            if(return_data.success == 1){
                this.Row.data.employee.deleted = return_data.data; 
                this.Utils.showLocalNotification({ message:this.Translation["SUCCESS"]["DELETE_OK"], icon:"success" });
                this.Router.navigate(["employee/list"]);
            } else {
                let error = (return_data.error != undefined)? (this.Translation["PROFILE"][return_data.error])? this.Translation["PROFILE"][return_data.error] :(this.Translation["ERRORS"][return_data.error])? this.Translation["ERRORS"][return_data.error] :return_data.error :this.Translation["ERRORS"]["OPS"];
                let reason = (return_data.reason != undefined)? (this.Translation["PROFILE"][return_data.reason])? this.Translation["PROFILE"][return_data.reason] :(this.Translation["ERRORS"][return_data.reason])? this.Translation["ERRORS"][return_data.reason] :return_data.reason :this.Translation["ERRORS"]["undefined"];
                this.Utils.showAlert({ title:error, error:reason, timer:3000 });
            }
        }, (error) => {
            console.log(error);
            let error_text = (error.error.text != undefined) ? error.error.text :"";
            let error_message = (this.Translation["ERRORS"][error.statusText]) ? this.Translation["ERRORS"][error.statusText] : error.statusText;
            this.Utils.showAlert({ title:this.Translation["ERRORS"]["ERROR"], error:error_message + " " + error_text });
        });
    }

    confirmDelete(){
        swal({
            icon:"warning",
            text:this.Translation["SUCCESS"]["THIS_ACTION_CANT_BE_UNDONE"],
            title:this.Translation["SUCCESS"]["CONFIRM_DELETE"],
            // content:{
            //     element:"input",
            //     attributes:{
            //         placeholder:this.Translation["SUCCESS"]["ENTER_CONFIRMATION_CODE"],
            //         type:"password",
            //         id:"confirm_code"
            //     },
            // },
            buttons:{
                cancel:{
                    text:this.Translation["BUTTONS"]["CANCEL"],
                    className:"btn-fill btn-block btn-danger",
                    closeModal:true,
                    visible:true,
                    value:"cancel"
                },
                confirm:{
                    text:this.Translation["BUTTONS"]["CONFIRM"],
                    className:"btn-fill btn-block btn-theme",
                    closeModal:true,
                    visible:true,
                },
            }                    
        }).then(code => { 
            if(code != "cancel"){
                this.deleted(code);
            }
        });
    }

    async loadDataBeneficiary(){
        this.Utils.showSpiner();
        this.ServiceBeneficiary.getList(this.FiltersBeneficiary).subscribe((return_data:any) => {
            // console.log(return_data.data);
            this.Utils.closeSpiner();

            if(return_data.success == 1){
                this.TableBeneficiary.summary = return_data.summary;
                this.TableBeneficiary.addRows(return_data.data);
            } else {
                // let error = (return_data.error != undefined)? (this.Translation["PROFILE"][return_data.error])? this.Translation["PROFILE"][return_data.error] :(this.Translation["ERRORS"][return_data.error])? this.Translation["ERRORS"][return_data.error] :return_data.error :this.Translation["ERRORS"]["OPS"];
                // let reason = (return_data.reason != undefined)? (this.Translation["PROFILE"][return_data.reason])? this.Translation["PROFILE"][return_data.reason] :(this.Translation["ERRORS"][return_data.reason])? this.Translation["ERRORS"][return_data.reason] :return_data.reason :this.Translation["ERRORS"]["undefined"];
                // this.Utils.showAlert({ title:error, error:reason, timer:3000 });
            }
        }, (error) => {
            this.Utils.closeSpiner();
            // let error_text = (error.error.text != undefined) ? error.error.text :"";
            // let error_message = (this.Translation["ERRORS"][error.statusText]) ? this.Translation["ERRORS"][error.statusText] : error.statusText;
            // this.Utils.showAlert({ title:this.Translation["ERRORS"]["ERROR"], error:error_message + " " + error_text });
        });
    }

    deletedBeneficiary(item_id, code){
        this.ServiceBeneficiary.changeDeleted({ item_id:item_id, code:code }).subscribe((return_data:any) => {
            // console.log(return_data);

            if(return_data.success == 1){
                for(var i=0; i < this.TableBeneficiary.dataRows.length; i++){
                    if(item_id == this.TableBeneficiary.dataRows[i]["item_id"]){
                        this.TableBeneficiary.dataRows.splice(i, 1);   
                        break; 
                    }
                }

                this.Utils.showLocalNotification({ message:this.Translation["SUCCESS"]["DELETE_OK"], icon:"success" });
            } else {
                let error = (return_data.error != undefined)? (this.Translation["PROFILE"][return_data.error])? this.Translation["PROFILE"][return_data.error] :(this.Translation["ERRORS"][return_data.error])? this.Translation["ERRORS"][return_data.error] :return_data.error :this.Translation["ERRORS"]["OPS"];
                let reason = (return_data.reason != undefined)? (this.Translation["PROFILE"][return_data.reason])? this.Translation["PROFILE"][return_data.reason] :(this.Translation["ERRORS"][return_data.reason])? this.Translation["ERRORS"][return_data.reason] :return_data.reason :this.Translation["ERRORS"]["undefined"];
                this.Utils.showAlert({ title:error, error:reason, timer:3000 });
            }
        }, (error) => {
            this.Utils.closeSpiner();
            let error_text = (error.error.text != undefined) ? error.error.text :"";
            let error_message = (this.Translation["ERRORS"][error.statusText]) ? this.Translation["ERRORS"][error.statusText] : error.statusText;
            this.Utils.showAlert({ title:this.Translation["ERRORS"]["ERROR"], error:error_message + " " + error_text });
        });
    }

    confirmDeleteBeneficiary(item_id){
        swal({
            icon:"warning",
            text:this.Translation["SUCCESS"]["THIS_ACTION_CANT_BE_UNDONE"],
            title:this.Translation["SUCCESS"]["CONFIRM_DELETE"],
            // content:{
            //     element:"input",
            //     attributes:{
            //         placeholder:this.Translation["SUCCESS"]["ENTER_CONFIRMATION_CODE"],
            //         type:"password",
            //         id:"confirm_code"
            //     },
            // },
            buttons:{
                cancel:{
                    text:this.Translation["BUTTONS"]["CANCEL"],
                    className:"btn-fill btn-block btn-danger",
                    closeModal:true,
                    visible:true,
                    value:"cancel"
                },
                confirm:{
                    text:this.Translation["BUTTONS"]["CONFIRM"],
                    className:"btn-fill btn-block btn-theme",
                    closeModal:true,
                    visible:true,
                },
            }                    
        }).then(code => { 
            if(code != "cancel"){
                this.deletedBeneficiary(item_id, code);
            }
        });
    }
    
}