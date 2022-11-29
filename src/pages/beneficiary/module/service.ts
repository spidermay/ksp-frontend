import { Injectable, EventEmitter } from "@angular/core";
import { Row } from "src/shared/classes/row.class";
import { Filters } from "src/shared/classes/table.class";
import { Service as ServiceAPI } from "src/shared/services/api.service";

@Injectable()
export class Service {
    public token:any;
	public authenticated:any = false;
	public path_module:string = "beneficiary";
	public data_emmiter = new EventEmitter<any>();
    
	constructor(
		public ServiceAPI:ServiceAPI
	) {	}

	get(data){ data.url = this.path_module + "/" + data.item_id; return this.ServiceAPI.get(data); }
	getList(data){ data.url = this.path_module ; return this.ServiceAPI.get(data); }
	getPair(data){ data.url = this.path_module + "/get_pair"; return this.ServiceAPI.get(data); }
    getProfile(data){ data.url = this.path_module + "/" + data.item_id; return this.ServiceAPI.get(data); }
		
	save(data){ data.append("url",this.path_module); return this.ServiceAPI.post(data); }
	changeDeleted(data) {data.url = this.path_module + "/" + data.item_id; return this.ServiceAPI.delete(data); }
    downloadListCSV(data){ data.url = this.path_module + "/download"; return this.ServiceAPI.download(data); }
}

export interface FiltersBeneficiary extends Filters {
    beneficiary_id?:number;
    employee_id?:number;
}

export class Beneficiary extends Row {  
    constructor(){
        super();
    }

    public init(){
        super.init();
        this.data = {
            beneficiary:{},
            employee:{},
            pager:{
                next:0,
                previous:0
            }
        };
    }
}