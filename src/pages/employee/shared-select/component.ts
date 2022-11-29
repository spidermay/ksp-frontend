import { Component, OnInit, Input, Output, OnDestroy, EventEmitter } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

import { Utils } from "src/shared/classes/utils.class";
import { Service as ServiceEmployee, FiltersEmployee } from "src/pages/employee/module/service";

declare var $: any;

@Component({
    moduleId: module.id,
    templateUrl: "template.html",
    selector: "select_component-employee",
})

export class SelectComponent implements OnInit, OnDestroy {
    private Translation:any = {};
    public Filters:FiltersEmployee = { limit:40, page:1, delay:0, deleted:1 };
    public return_data:any;

	@Input() data:any = {}; 
    @Output() SelectChange = new EventEmitter();

    constructor(
        private Utils: Utils,
        private TranslateService: TranslateService,
        private ServiceEmployee: ServiceEmployee,
    ) {
        this.TranslateService.get(["SUCCESS","ERRORS","LIST","PROFILE"]).subscribe((translation: string) => { this.Translation = translation; });
	}
	
    ngOnInit() {
		// console.log(this.data);
		this.data.id = (this.data.id)? this.data.id : "employee_id";
		this.data.item_id = (this.data.item_id)? this.data.item_id : "";
		this.data.label = (this.data.label)? this.data.label : this.Translation["PROFILE"]["EMPLOYEE"];
		this.data.disabled = (this.data.disabled)? this.data.disabled : false ;

        (this.data.employee_id)? this.Filters.employee_id = this.data.employee_id : false;
        this.Filters.recursive = (this.data.recursive)? this.data.recursive : true;
        (this.data.order_fields)? this.Filters.order_fields = this.data.order_fields : false;
        this.Filters.deleted = (this.data.deleted)? this.data.deleted : 1;
        (this.data.query)? this.Filters.query = this.data.query : false;
        (this.data.active)? this.Filters.active = this.data.active : false;
        (this.data.limit)? this.Filters.limit = this.data.limit : false;
        (this.data.token)? this.Filters.token = this.data.token : false;
        (this.data.page)? this.Filters.page = this.data.page : false;

        this.ServiceEmployee.data_emmiter.subscribe( return_data => {
            if(return_data.data != undefined && return_data.action == "filter_data_pair"){
                for(let key in return_data.data){
                    this.Filters[key] = return_data.data[key];
                }
                
                this.loadData();
            }

            if(return_data.data != undefined && return_data.action == "set_value"){
                this.data.item_id = return_data.data;
                this.return_data = return_data.data;
                // console.log(this.data);

                $("#" + this.data.id + " option[value='" + this.data.item_id + "']").attr("selected","selected");
                $("#" + this.data.id).selectpicker("refresh");
            }
        });
        
        this.loadData();
	}

    ngOnDestroy(){
        // this.ServiceEmployee.data_emmiter.unsubscribe();
    }

	async loadData(){
		await this.ServiceEmployee.getList(this.Filters).subscribe(async (return_data:any) => {
            // console.log(return_data);
            if(return_data.success == 1){
                var select_options = "<option value=''>" + this.Translation["LIST"]["ALL"] + "</option>";

				$.each(return_data.data, function (key, value) {
                    select_options += "<option value='" + value.item_id + "'>" + value.fullname + "</option>"; 
                });
        
                $("#" + this.data.id).find("option").remove().end().append(select_options).selectpicker("refresh");

                if(this.data.item_id >= 0){
					$("#" + this.data.id + " option[value='" + this.data.item_id + "']").attr("selected","selected");
					$("#" + this.data.id).selectpicker("refresh");
                }
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

	onSelectChange(event){
        this.SelectChange.next(this.return_data);
	}
}