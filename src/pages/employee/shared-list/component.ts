import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

import { Utils } from "src/shared/classes/utils.class";
import { Table } from "src/shared/classes/table.class";
import { Service as ServiceEmployee, FiltersEmployee } from "src/pages/employee/module/service";

declare var $:any;
declare var swal:any;

@Component({
    selector:"list_component-employee",
    templateUrl:"template.html"
})

export class ListComponent implements OnInit, OnDestroy {
    private Translation:any = {};
    public Table:Table = new Table();
    public Filters:FiltersEmployee = { limit:40, page:1, delay:0, deleted:1 };
	
    @Input() data:any = {}; 
    
    constructor(
        private Utils:Utils,
        private ServiceEmployee:ServiceEmployee, 
        private TranslateService:TranslateService,
    ){
        this.TranslateService.get(["SUCCESS","ERRORS","LIST","BUTTONS","PROFILE","DATE"]).subscribe((Translation:string) => { this.Translation = Translation; });
        this.Table.init();
    }

    ngOnInit(){
        // console.log(this.data);
        (this.data.employee_id)? this.Filters.employee_id = this.data.employee_id : false;
        (this.data.order_fields)? this.Filters.order_fields = this.data.order_fields : false;
        this.Filters.deleted = (this.data.deleted)? this.data.deleted : 1;
        (this.data.query)? this.Filters.query = this.data.query : false;
        (this.data.active)? this.Filters.active = this.data.active : false;
        (this.data.limit)? this.Filters.limit = this.data.limit : false;
        (this.data.token)? this.Filters.token = this.data.token : false;
        (this.data.page)? this.Filters.page = this.data.page : false;

        // console.log(this.Filters);
        this.Table.headerColumns = [ 
            { value:this.Translation["LIST"]["#"], class:"text-center" },	
            { value:this.Translation["LIST"]["ID"], field:"employee.item_id", sortable:false },
            { value:this.Translation["PROFILE"]["NAMES"], field:"employee_data.names", sortable:false },
            { value:this.Translation["PROFILE"]["SALARY"], field:"employee.salary", sortable:false },
            { value:this.Translation["PROFILE"]["BENEFICIARY"], field:"employee.beneficiary", sortable:false },
            // { value:this.Translation["PROFILE"]["EMAIL"], field:"employee.email", sortable:false },
            // { value:this.Translation["DATE"]["DATES"], field:"employee.date", sortable:false },
            { value:this.Translation["DATE"]["HIRING_DATE"], field:"employee.date", sortable:false },
            // { value:this.Translation["DATE"]["REGISTRATION_DATE"], field:"employee.date", sortable:false },
            // { value:this.Translation["DATE"]["LAST_UPDATE"], field:"employee.updated", sortable:false },
            { value:this.Translation["LIST"]["ACTIONS"], class:"text-center" }	
        ];

        this.ServiceEmployee.data_emmiter.subscribe( return_data => {
            if(return_data.action == "filter_data_list"){
                if(return_data.data != undefined){
                    for(let key in return_data.data){
                        this.Filters[key] = return_data.data[key];
                    }
                }

                this.filterData();
            }
        });

        this.loadData();
    }

    ngAfterViewInit(){
        $("[rel='tooltip']").tooltip();
    }

    ngOnDestroy(){
        // this.ServiceEmployee.data_emmiter.unsubscribe();
    }

    async loadData(){
        this.Utils.showSpiner();
        this.ServiceEmployee.getList(this.Filters).subscribe((return_data:any) => {
            // console.log(return_data);
            this.Utils.closeSpiner();

            if(return_data.success == 1){
                this.ServiceEmployee.data_emmiter.emit({ action:"summary", data:return_data.summary });
                this.Table.summary = return_data.summary;
                this.Table.addRows(return_data.data);
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
    
    async onScrollDown() {
        this.Filters.delay = 0;
        this.Filters.recursive = false;
        (!this.Filters.page)? this.Filters.page = 1 :this.Filters.page += 1;
        await this.loadData();
    }

    async filterData() {
        this.Filters.page = 1;
        this.Table.clear();
        await this.loadData();
    }
    
    deleted(item_id, code){
        this.ServiceEmployee.changeDeleted({ item_id:item_id, code:code }).subscribe((return_data:any) => {
            // console.log(return_data);

            if(return_data.success == 1){
                for(var i=0; i < this.Table.dataRows.length; i++){
                    if(item_id == this.Table.dataRows[i]["item_id"]){
                        this.Table.dataRows.splice(i, 1);   
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

    confirmDelete(item_id){
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
                this.deleted(item_id, code);
            }
        });
    }

    async sorterFields(field){
        let found = false;
        let order_fields = [];
        let element = document.getElementById("sortable_" + field);
        let sort_order_fields = this.Utils.sorter(this.Filters.sort_order_fields, field);
        this.Filters.sort_order_fields = sort_order_fields;

        if( element.classList.contains("fa-sort") || element.classList.contains("fa-sort-asc") || element.classList.contains("fa-sort-desc") ){
            for(var key in sort_order_fields){
                order_fields.push({ field:key, value:sort_order_fields[key] });
                
                if(field == key){
                    found = true;
                    element.classList.remove("fa-sort");
                    element.classList.add("fa-sort-" + sort_order_fields[key].toLowerCase());
                }
            }
    
            if(!found){
                element.classList.add("fa-sort");
                element.classList.remove("fa-sort-asc", "fa-sort-desc");
            }
    
            this.Filters.order_fields = JSON.stringify(order_fields);
            this.Table.dataRows = [];
            this.loadData();
        }
    }
    
    selectDownload(){
        swal({
            icon:"info",
            text:this.Translation["LIST"]["DOWNLOAD"],
            title:this.Translation["LIST"]["DOWNLOAD"],
            closeOnClickOutside:false,
            closeOnEsc:false,
            buttons:{
                cancel:{
                    text:this.Translation["BUTTONS"]["CANCEL"],
                    className:"btn btn-fill btn-danger",
                    closeModal:true,
                    visible:true,
                    value:null
                },
                // pdf:{
                //     text:this.Translation["BUTTONS"]["PDF"],
                //     className:"btn btn-fill btn-smoke",
                //     closeModal:true,
                //     visible:true,
                //     value:"pdf"
                // },
                csv:{
                    text:this.Translation["BUTTONS"]["CSV"],
                    className:"btn btn-fill btn-theme",
                    closeModal:true,
                    visible:true,
                    value:"csv"
                },
            }                    
        }).then(value => {
            (value)? this.download(value) :false;
        });
    }

    download(type?:string){
        var data:any = this.Filters;
        data["recursive"] = true;
        
        var column_data = {
            item_id:this.Translation["LIST"]["ID"],
			fullname:this.Translation["PROFILE"]["NAMES"],
			// lastname:this.Translation["PROFILE"]["LASTNAME"],
			// mother_lastname:this.Translation["PROFILE"]["MOTHER_LASTNAME"],
			birthday:this.Translation["PROFILE"]["BIRTHDAY"],
			position_job:this.Translation["PROFILE"]["POSITION_JOB"],
			salary:this.Translation["PROFILE"]["SALARY"],
			status:this.Translation["PROFILE"]["STATUS"],
			hiring_date:this.Translation["DATE"]["HIRING_DATE"],
			beneficiary:this.Translation["PROFILE"]["BENEFICIARY"],
		};

        this.Utils.showSpiner();
        
        if(type == "csv"){
            this.ServiceEmployee.getList(data).subscribe((return_data:any) => {
                // console.log(return_data);
                this.Utils.closeSpiner();   
                this.Utils.downloadFileCSV(return_data.data, "list-employee", column_data);    
            }, error => {
                console.log("Error:", JSON.stringify(error));
                let error_text = JSON.stringify(error);
                let error_message = (this.Translation["ERRORS"][error.statusText])? this.Translation["ERRORS"][error.statusText] : error.statusText;
                this.Utils.showAlert({ title:this.Translation["ERRORS"]["ERROR"], error:error_message + " " + error_text });
            }, () => {
                // console.log("Completed");
                this.Utils.showLocalNotification({ message:this.Translation["SUCCESS"]["COMPLETED_FILE_DOWNLOAD"], icon:"success" });
            });
        }
    }
}