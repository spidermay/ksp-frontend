import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { delay, finalize } from "rxjs/operators";

import { Config } from "src/app/config";
import { Utils } from "src/shared/classes/utils.class";

@Injectable({ providedIn:"root" })
export class Service {
	public token:string = localStorage.getItem("token");
	public api_url:string = Config.api_url;
	public delay:number = 0;

	constructor(
		public Utils:Utils,
		public HttpClient:HttpClient,
	) {	}

	getToken(){
		return this.token;
	}

	getApiUrl(){
		return this.api_url;
	}

	get(data):any {
		data.delay = (data.delay)? data.delay:this.delay;
		(!data.token)? data.token = localStorage.getItem("token"):false;
		data.full_url = (data.full_path == true)? data.url:this.api_url + data.url;
		(data.loading != undefined && data.loading == true )? this.Utils.showSpiner() : false ;
		
		return this.HttpClient.get(this.api_url + data.url, { params:data })
		.pipe(
			delay(data.delay),
			finalize(() => {
				(data.loading != undefined && data.loading == true )? this.Utils.closeSpiner() : false ;
			}),
		);
	}

	delete(data):any {
		data.delay = (data.delay)? data.delay:this.delay;
		(!data.token)? data.token = localStorage.getItem("token"):false;
		data.full_url = (data.full_path == true)? data.url:this.api_url + data.url;
		(data.loading != undefined && data.loading == true )? this.Utils.showSpiner() : false ;
		
		return this.HttpClient.delete(this.api_url + data.url, { params:data })
		.pipe(
			delay(data.delay),
			finalize(() => {
				(data.loading != undefined && data.loading == true )? this.Utils.closeSpiner() : false ;
			}),
		);
	}

	post(data):any {
		var token = data.get("token");
		(!token)? data.append("token", localStorage.getItem("token")) : false;
		var full_url = (data.get("full_path") == true)? data.get("url"):this.api_url + data.get("url");
		
		if(data.get("item_id") > 0 ){ 
			full_url = full_url + "/" + data.get("item_id");
			return this.HttpClient.put(full_url, data);
		} else {
			return this.HttpClient.post(full_url, data)
				.pipe(
					delay(data.delay),
					finalize(() => {
						(data.loading != undefined && data.loading == true )? this.Utils.closeSpiner() : false ;
					}),
			);
		}
	}

	download(data):any {
		(!data.token)? data.token = this.token:false;
		data.delay = (data.delay)? data.delay:this.delay; 
		(data.loading != undefined && data.loading == true )? this.Utils.showSpiner() : false ;

		return this.HttpClient.get(this.api_url + data.url, { params:data, responseType:"blob", observe:"body" })
		.pipe(
			delay(data.delay),
			finalize(() => {
				(data.loading != undefined && data.loading == true )? this.Utils.closeSpiner() : false ;
			}),
		);
	}	
}