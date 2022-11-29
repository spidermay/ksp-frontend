import { Component, OnInit } from "@angular/core";

@Component({
	selector:"app-view",
	templateUrl:"./template.html"
})

export class ViewComponent implements OnInit {
	public date :Date = new Date();
	constructor() { }

	ngOnInit() {
	}

	back(){
		history.back();
	}
}
