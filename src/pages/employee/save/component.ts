import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { NgForm } from "@angular/forms";

import { Config } from "src/app/config";
import { Utils } from "src/shared/classes/utils.class";
import { Service as ServiceEmployee, Employee } from "../module/service";
import { Service as ServiceBeneficiary } from "src/pages/beneficiary/module/service";

declare var $:any;
declare var swal:any;

@Component({
    selector:"app-save",
    templateUrl:"template.html"
})

export class SaveComponent implements OnInit{
    private token:string;
    private Translation:any = {};
    public item_id:any;
    public submitted = false;
    public Row:Employee = new Employee();
    public filter_beneficiary:any; 
    
    public files:any = [];
    public path_files = new Array<string>();
    public keep_on: any = { success:true, error:"" };
    public url = Config.api_url + "employee/storage/";

    constructor(
        private Utils:Utils,
        private Router:Router,
        private ActivatedRoute:ActivatedRoute,
        private TranslateService:TranslateService,
        private ServiceEmployee:ServiceEmployee,
        private ServiceBeneficiary:ServiceBeneficiary,
    ){
        this.Router.routeReuseStrategy.shouldReuseRoute = function(){ return false; };
        this.TranslateService.get(["SUCCESS","ERRORS","BUTTONS","LIST","LANGUAGE","PROFILE","DATE"]).subscribe((Translation:string) => { this.Translation = Translation; });
        this.ActivatedRoute.params.subscribe(params => { this.item_id = params["item_id"]; });
        this.token = localStorage.getItem("token");
        
        if(!this.token){
            // this.Router.navigate(["login"]);
        }
        
        this.Row.init();
        this.filter_beneficiary = { token:this.token };
    }

    ngOnInit(){
        if(this.item_id > 0){
            this.loadData();
        } else {
            this.Row.data.employee.sex = "male";
            $("#sex option[value='male']").attr("selected", "selected");
            $("#sex").selectpicker("refresh");   
        }
    }

    ngAfterViewInit(){
        
        setTimeout(()=>{
            $("#birthday, #hiring_date").datetimepicker({ format: "DD-MM-YYYY" });
            $(".selectpicker").selectpicker("refresh");
        }, 1000);
    }
    
    async loadData(){
        this.Utils.showSpiner();
        await this.ServiceEmployee.getProfile({ item_id:this.item_id }).subscribe((return_data:any) => {
            // console.log(return_data);  
            this.Utils.closeSpiner();
            
            if(return_data.success == 1){
                this.Row.setData(return_data.data);
                // this.ServiceBeneficiary.data_emmiter.emit({ action:"set_value", data:this.Row.data.employee_account.beneficiary_id });

                $("#sex option[value='" + this.Row.data.employee.sex + "']").attr("selected", "selected");
                $(".selectpicker").selectpicker("refresh");      
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

    cancel(){
        history.back();
    }

    save(form:NgForm) {
        this.submitted = true; 
        
        if(form.valid) { 
            let formData = new FormData();
            let data = this.Row.getDataValues();
                data["token"] = this.token;              
                data["birthday"] = $("#birthday").val();
                data["hiring_date"] = $("#hiring_date").val();
                
            for (let key in data) {
                formData.append(key, data[key]);
            }
            
            // console.log(this.files);
        
            for(let key in this.files){
                let file = <File>this.files[key]["file"];
                // console.log(file);
                
                if(file.size > 50000000){
                    this.keep_on.success = false;
                    this.keep_on.error = "FILE_SIZE_EXCESS";
                } else {
                    formData.append(key, file);
                    // console.log(formData.get(key));
                }
            }

            // console.log(data);
            this.sendData(formData);
        } else {
            this.Utils.showAlert({ icon:"warning", title:this.Translation["ERRORS"]["OPS"], message:this.Translation["ERRORS"]["FIELDS_EMPTY_TRY_AGAIN"] });
        }   
    }

    private sendData(data):void {
        // this.Utils.showSpiner();
        this.ServiceEmployee.save(data).subscribe((return_data:any) => {
            // console.log(return_data);
            this.Utils.closeSpiner();

            if(return_data.success == 1){
                (this.item_id < 0)? this.item_id = return_data.data.employee_id : false ;
                
                swal({
                    icon:"success",
                    text:this.Translation["SUCCESS"]["SAVE_OK"],
                    title:this.Translation["SUCCESS"]["GOOD_WORK"],
                    closeOnClickOutside:false,
                    closeOnEsc:false,
                    buttons:{
                        list:{
                            text:this.Translation["BUTTONS"]["LIST"],
                            className:"btn btn-fill btn-warning",
                            closeModal:true,
                            visible:true,
                            value:"list"
                        },
                        // new:{
                        //     text:this.Translation["BUTTONS"]["NEW"],
                        //     className:"btn btn-fill btn-smoke",
                        //     closeModal:true,
                        //     visible:true,
                        //     value:"new"
                        // },
                        // next:{
                        //     text:this.Translation["BUTTONS"]["NEXT"],
                        //     className:"btn btn-fill btn-smoke",
                        //     closeModal:true,
                        //     visible:true,
                        //     value:"next"
                        // },
                        view:{
                            text:this.Translation["BUTTONS"]["VIEW"],
                            className:"btn btn-fill btn-theme",
                            closeModal:true,
                            visible:true,
                            value:"view"
                        },
                        ok:{
                            text:this.Translation["BUTTONS"]["OK"],
                            className:"btn btn-fill btn-smoke",
                            closeModal:true,
                            visible:true,
                            value:"ok"
                        },
                    }                    
                }).then(value => {  
                    (value == "view")? this.Router.navigate(["employee/view", { item_id:this.item_id }]) :false;
                    (value == "next")? this.Router.navigate(["employee/save", { item_id:return_data.pager.next }]) :false;
                    (value == "new") ? this.Router.navigate(["employee/save", { item_id:0 }]) :false;
                    (value == "list")? this.Router.navigate(["employee/list"]) :false;
                });
            } else {
                this.submitted = false;
                console.log(return_data);
                let error = (return_data.error != undefined)? (this.Translation["PROFILE"][return_data.error])? this.Translation["PROFILE"][return_data.error] :(this.Translation["ERRORS"][return_data.error])? this.Translation["ERRORS"][return_data.error] :return_data.error :this.Translation["ERRORS"]["OPS"];
                let reason = (return_data.reason != undefined)? (this.Translation["PROFILE"][return_data.reason])? this.Translation["PROFILE"][return_data.reason] :(this.Translation["ERRORS"][return_data.reason])? this.Translation["ERRORS"][return_data.reason] :return_data.reason :this.Translation["ERRORS"]["undefined"];
                this.Utils.showAlert({ title:error, error:reason, timer:3000 });
            }
        }, (error) => {
            console.log(error);
            this.Utils.closeSpiner();
            let error_text = (error.error.text != undefined) ? error.error.text :"";
            let error_message = (this.Translation["ERRORS"][error.statusText]) ? this.Translation["ERRORS"][error.statusText] : error.statusText;
            this.Utils.showAlert({ title:this.Translation["ERRORS"]["ERROR"], error:error_message + " " + error_text });
        });
    }

    detectFiles(event, name) {
        this.files[name] = { reader:"", file:<File>event.target.files[0] };
        let reader = new FileReader();
        
        reader.onload = (e: any) => {
            this.files[name]["reader"] = e.target.result;
            // this.path_files.push(e.target.result);
        }

        reader.readAsDataURL(event.target.files[0]);
    }
}