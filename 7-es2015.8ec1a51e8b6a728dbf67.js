(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{CWZ5:function(t,e,a){"use strict";a.r(e),a.d(e,"Module",function(){return B});var i=a("3Pt+"),s=a("tyNb"),n=a("ofXK"),r=a("sYmb"),l=a("dlKe"),o=a("eAKb"),b=a("PJzt"),c=a("mrSG"),d=a("fXoL"),h=a("awww");function R(t,e){if(1&t&&d.Ib(0,"i",14),2&t){const t=d.Ub().$implicit;d.cc("id","sortable_",t.field,"")}}function u(t,e){if(1&t){const t=d.Lb();d.Kb(0,"th"),d.Kb(1,"span",12),d.Sb("click",function(){d.jc(t);const a=e.$implicit;return d.Ub().sorterFields(a.field)}),d.oc(2,R,1,1,"i",13),d.pc(3),d.Jb(),d.Jb()}if(2&t){const t=e.$implicit;d.yb(t.class),d.wb(2),d.ac("ngIf",t.sortable),d.wb(1),d.rc(" ",null!=t.value?t.value:t," ")}}const f=function(t){return{item_id:t}},p=function(t){return["../../beneficiary/view",t]},m=function(t){return["../../beneficiary/save",t]};function E(t,e){if(1&t){const t=d.Lb();d.Kb(0,"tr"),d.Kb(1,"td"),d.pc(2),d.Jb(),d.Kb(3,"td"),d.pc(4),d.Jb(),d.Kb(5,"td"),d.pc(6),d.Jb(),d.Kb(7,"td"),d.pc(8),d.Jb(),d.Kb(9,"td"),d.pc(10),d.Jb(),d.Kb(11,"td",16),d.Kb(12,"a",17),d.Vb(13,"translate"),d.Ib(14,"i",18),d.Jb(),d.Kb(15,"a",19),d.Vb(16,"translate"),d.Ib(17,"i",20),d.Jb(),d.Kb(18,"a",21),d.Sb("click",function(){d.jc(t);const a=e.$implicit;return d.Ub(2).confirmDelete(a.item_id)}),d.Vb(19,"translate"),d.Ib(20,"i",22),d.Jb(),d.Jb(),d.Jb()}if(2&t){const t=e.$implicit,a=e.index;d.wb(2),d.qc(a+1),d.wb(2),d.qc(t.item_id),d.wb(2),d.qc(t.fullname),d.wb(2),d.qc(t.employee_fullname),d.wb(2),d.qc(t.relationship),d.wb(2),d.bc("title",d.Wb(13,10,"LIST.VIEW")),d.ac("routerLink",d.ec(18,p,d.ec(16,f,t.item_id))),d.wb(3),d.bc("title",d.Wb(16,12,"LIST.EDIT")),d.ac("routerLink",d.ec(22,m,d.ec(20,f,t.item_id))),d.wb(3),d.bc("title",d.Wb(19,14,"LIST.DELETE"))}}function T(t,e){if(1&t&&(d.Kb(0,"tbody"),d.oc(1,E,21,24,"tr",15),d.Jb()),2&t){const t=d.Ub();d.wb(1),d.ac("ngForOf",t.Table.dataRows)}}const S=function(){return["../../beneficiary/save"]};let O=(()=>{class t{constructor(t,e,a){this.Utils=t,this.ServiceBeneficiary=e,this.TranslateService=a,this.Translation={},this.Table=new h.a,this.Filters={limit:40,page:1,delay:0,deleted:1},this.data={},this.TranslateService.get(["SUCCESS","ERRORS","LIST","BUTTONS","PROFILE","DATE","ADDRESS"]).subscribe(t=>{this.Translation=t}),this.Table.init()}ngOnInit(){this.data.beneficiary_id&&(this.Filters.beneficiary_id=this.data.beneficiary_id),this.data.order_fields&&(this.Filters.order_fields=this.data.order_fields),this.Filters.deleted=this.data.deleted?this.data.deleted:1,this.data.query&&(this.Filters.query=this.data.query),this.data.active&&(this.Filters.active=this.data.active),this.data.limit&&(this.Filters.limit=this.data.limit),this.data.token&&(this.Filters.token=this.data.token),this.data.page&&(this.Filters.page=this.data.page),this.Table.headerColumns=[{value:this.Translation.LIST["#"],class:"text-center"},{value:this.Translation.LIST.ID,field:"beneficiary.beneficiary_id",sortable:!1},{value:this.Translation.PROFILE.NAMES,field:"beneficiary.names",sortable:!1},{value:this.Translation.PROFILE.EMPLOYEE,field:"employee.names",sortable:!1},{value:this.Translation.PROFILE.RELATIONSHIP,field:"beneficiary.relationship",sortable:!1},{value:this.Translation.LIST.ACTIONS,class:"text-center"}],this.ServiceBeneficiary.data_emmiter.subscribe(t=>{if("filter_data_list"==t.action){if(null!=t.data)for(let e in t.data)this.Filters[e]=t.data[e];this.filterData()}}),this.loadData()}ngAfterViewInit(){$("[rel='tooltip']").tooltip()}ngOnDestroy(){}loadData(){return Object(c.a)(this,void 0,void 0,function*(){this.Utils.showSpiner(),this.ServiceBeneficiary.getList(this.Filters).subscribe(t=>{this.Utils.closeSpiner(),1==t.success?(this.ServiceBeneficiary.data_emmiter.emit({action:"summary",data:t.summary}),this.Table.summary=t.summary,this.Table.addRows(t.data)):this.Utils.showAlert({title:null!=t.error?this.Translation.PROFILE[t.error]?this.Translation.PROFILE[t.error]:this.Translation.ERRORS[t.error]?this.Translation.ERRORS[t.error]:t.error:this.Translation.ERRORS.OPS,error:null!=t.reason?this.Translation.PROFILE[t.reason]?this.Translation.PROFILE[t.reason]:this.Translation.ERRORS[t.reason]?this.Translation.ERRORS[t.reason]:t.reason:this.Translation.ERRORS[void 0],timer:3e3})},t=>{this.Utils.closeSpiner(),this.Utils.showAlert({title:this.Translation.ERRORS.ERROR,error:(this.Translation.ERRORS[t.statusText]?this.Translation.ERRORS[t.statusText]:t.statusText)+" "+(null!=t.error.text?t.error.text:"")})})})}onScrollDown(){return Object(c.a)(this,void 0,void 0,function*(){this.Filters.delay=0,this.Filters.recursive=!1,this.Filters.page?this.Filters.page+=1:this.Filters.page=1,yield this.loadData()})}filterData(){return Object(c.a)(this,void 0,void 0,function*(){this.Filters.page=1,this.Table.clear(),yield this.loadData()})}deleted(t,e){this.ServiceBeneficiary.changeDeleted({item_id:t,code:e}).subscribe(e=>{if(1==e.success){for(var a=0;a<this.Table.dataRows.length;a++)if(t==this.Table.dataRows[a].item_id){this.Table.dataRows.splice(a,1);break}this.Utils.showLocalNotification({message:this.Translation.SUCCESS.DELETE_OK,icon:"success"})}else this.Utils.showAlert({title:null!=e.error?this.Translation.PROFILE[e.error]?this.Translation.PROFILE[e.error]:this.Translation.ERRORS[e.error]?this.Translation.ERRORS[e.error]:e.error:this.Translation.ERRORS.OPS,error:null!=e.reason?this.Translation.PROFILE[e.reason]?this.Translation.PROFILE[e.reason]:this.Translation.ERRORS[e.reason]?this.Translation.ERRORS[e.reason]:e.reason:this.Translation.ERRORS[void 0],timer:3e3})},t=>{this.Utils.closeSpiner(),this.Utils.showAlert({title:this.Translation.ERRORS.ERROR,error:(this.Translation.ERRORS[t.statusText]?this.Translation.ERRORS[t.statusText]:t.statusText)+" "+(null!=t.error.text?t.error.text:"")})})}confirmDelete(t){swal({icon:"warning",text:this.Translation.SUCCESS.THIS_ACTION_CANT_BE_UNDONE,title:this.Translation.SUCCESS.CONFIRM_DELETE,buttons:{cancel:{text:this.Translation.BUTTONS.CANCEL,className:"btn-fill btn-block btn-danger",closeModal:!0,visible:!0,value:"cancel"},confirm:{text:this.Translation.BUTTONS.CONFIRM,className:"btn-fill btn-block btn-theme",closeModal:!0,visible:!0}}}).then(e=>{"cancel"!=e&&this.deleted(t,e)})}sorterFields(t){return Object(c.a)(this,void 0,void 0,function*(){let e=!1,a=[],i=document.getElementById("sortable_"+t),s=this.Utils.sorter(this.Filters.sort_order_fields,t);if(this.Filters.sort_order_fields=s,i.classList.contains("fa-sort")||i.classList.contains("fa-sort-asc")||i.classList.contains("fa-sort-desc")){for(var n in s)a.push({field:n,value:s[n]}),t==n&&(e=!0,i.classList.remove("fa-sort"),i.classList.add("fa-sort-"+s[n].toLowerCase()));e||(i.classList.add("fa-sort"),i.classList.remove("fa-sort-asc","fa-sort-desc")),this.Filters.order_fields=JSON.stringify(a),this.Table.dataRows=[],this.loadData()}})}selectDownload(){swal({icon:"info",text:this.Translation.LIST.DOWNLOAD,title:this.Translation.LIST.DOWNLOAD,closeOnClickOutside:!1,closeOnEsc:!1,buttons:{cancel:{text:this.Translation.BUTTONS.CANCEL,className:"btn btn-fill btn-danger",closeModal:!0,visible:!0,value:null},csv:{text:this.Translation.BUTTONS.CSV,className:"btn btn-fill btn-theme",closeModal:!0,visible:!0,value:"csv"}}}).then(t=>{t&&this.download(t)})}download(t){var e=this.Filters;e.recursive=!0;var a={item_id:this.Translation.LIST.ID,fullname:this.Translation.PROFILE.BENEFICIARY,birthday:this.Translation.PROFILE.BIRTHDAY,relationship:this.Translation.PROFILE.RELATIONSHIP,employee_fullname:this.Translation.PROFILE.EMPLOYEE};this.Utils.showSpiner(),"csv"==t&&this.ServiceBeneficiary.getList(e).subscribe(t=>{this.Utils.closeSpiner(),this.Utils.downloadFileCSV(t.data,"list-beneficiary",a)},t=>{console.log("Error:",JSON.stringify(t));let e=JSON.stringify(t);this.Utils.showAlert({title:this.Translation.ERRORS.ERROR,error:(this.Translation.ERRORS[t.statusText]?this.Translation.ERRORS[t.statusText]:t.statusText)+" "+e})},()=>{this.Utils.showLocalNotification({message:this.Translation.SUCCESS.COMPLETED_FILE_DOWNLOAD,icon:"success"})})}}return t.\u0275fac=function(e){return new(e||t)(d.Hb(b.a),d.Hb(o.b),d.Hb(r.d))},t.\u0275cmp=d.Bb({type:t,selectors:[["list_component-beneficiary"]],inputs:{data:"data"},decls:18,vars:11,consts:[["infinite-scroll","",1,"table-full-width","infinite-scroll",3,"scrollWindow","infiniteScrollDistance","infiniteScrollUpDistance","scrolled"],[1,"table"],[3,"class",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"row","p-t-8"],[1,"pull-right","text-right","col-md-2"],[1,"btn","btn-simple","mr-1","text-info",3,"click"],[1,"fa","fa-download"],[1,"btn","btn-simple","btn-theme","mr-1",3,"routerLink"],[1,"fa","fa-plus"],[1,"col-md-2"],[1,"clearfix"],[3,"click"],["class","fa fa-sort",3,"id",4,"ngIf"],[1,"fa","fa-sort",3,"id"],[4,"ngFor","ngForOf"],[1,"td-actions"],[1,"btn","btn-simple","btn-xs","btn-info",3,"title","routerLink"],[1,"fa","fa-eye"],[1,"btn","btn-simple","btn-xs","btn-theme",3,"title","routerLink"],[1,"fa","fa-edit"],[1,"btn","btn-simple","btn-xs","btn-danger",3,"title","click"],[1,"fa","fa-times"]],template:function(t,e){1&t&&(d.Kb(0,"div",0),d.Sb("scrolled",function(){return e.onScrollDown()}),d.Kb(1,"table",1),d.Kb(2,"thead"),d.Kb(3,"tr"),d.oc(4,u,4,5,"th",2),d.Jb(),d.Jb(),d.oc(5,T,2,1,"tbody",3),d.Jb(),d.Jb(),d.Kb(6,"div",4),d.Ib(7,"hr"),d.Kb(8,"div",5),d.Kb(9,"button",6),d.Sb("click",function(){return e.selectDownload()}),d.Ib(10,"i",7),d.Jb(),d.Kb(11,"button",8),d.Ib(12,"i",9),d.Jb(),d.Jb(),d.Kb(13,"div",10),d.Kb(14,"span"),d.pc(15),d.Vb(16,"translate"),d.Jb(),d.Jb(),d.Ib(17,"div",11),d.Jb()),2&t&&(d.ac("scrollWindow",!1)("infiniteScrollDistance",2)("infiniteScrollUpDistance",1.5),d.wb(4),d.ac("ngForOf",e.Table.headerColumns),d.wb(1),d.ac("ngIf",e.Table.dataRows.length>0),d.wb(6),d.ac("routerLink",d.dc(10,S)),d.wb(4),d.sc("",d.Wb(16,8,"LIST.TOTAL")," ",null==e.Table.summary?null:e.Table.summary.total,""))},directives:[l.a,n.j,n.k,s.e,s.g],pipes:[r.c],encapsulation:2}),t})(),w=(()=>{class t{constructor(t,e,a){this.Router=t,this.TranslateService=e,this.ServiceBeneficiary=a,this.Translation={},this.data_beneficiary={},this.filter_beneficiary={},this.Router.routeReuseStrategy.shouldReuseRoute=function(){return!1},this.TranslateService.get(["SUCCESS","ERRORS","LIST","DATE","BUTTONS","PROFILE"]).subscribe(t=>{this.Translation=t}),this.token=localStorage.getItem("token"),this.data_beneficiary={token:this.token,query:!1}}ngOnInit(){}ngAfterViewInit(){$("[rel='tooltip']").tooltip()}ngOnDestroy(){}filterData(){return Object(c.a)(this,void 0,void 0,function*(){this.ServiceBeneficiary.data_emmiter.emit({action:"filter_data_list",data:this.data_beneficiary})})}onChangeFilterBeneficiary(t){(parseInt(t)>=0||""==t)&&(this.data_beneficiary.beneficiary_id=t,this.filterData())}}return t.\u0275fac=function(e){return new(e||t)(d.Hb(s.d),d.Hb(r.d),d.Hb(o.b))},t.\u0275cmp=d.Bb({type:t,selectors:[["app-list"]],decls:10,vars:1,consts:[[1,"main-content"],[1,"container-fluid"],[1,"row"],[1,"col-md-12"],[1,"card"],[1,"header"],[1,"toolbar"],[1,"separator","hx5"],[1,"content"],[3,"data"]],template:function(t,e){1&t&&(d.Kb(0,"div",0),d.Kb(1,"div",1),d.Kb(2,"div",2),d.Kb(3,"div",3),d.Kb(4,"div",4),d.Kb(5,"div",5),d.Ib(6,"div",6),d.Ib(7,"div",7),d.Jb(),d.Kb(8,"div",8),d.Ib(9,"list_component-beneficiary",9),d.Jb(),d.Jb(),d.Jb(),d.Jb(),d.Jb(),d.Jb()),2&t&&(d.wb(9),d.ac("data",e.data_beneficiary))},directives:[O],encapsulation:2}),t})();var v=a("Vx+w");function I(t,e){if(1&t&&d.Ib(0,"img",25),2&t){const t=d.Ub();d.bc("src",t.url+"beneficiary/storage/"+(null==t.Row.data?null:t.Row.data.beneficiary.image),d.lc)}}function g(t,e){1&t&&d.Ib(0,"img",26)}function L(t,e){if(1&t&&d.Ib(0,"img",25),2&t){const t=d.Ub();d.bc("src",t.url+"employee/storage/"+(null==t.Row.data?null:t.Row.data.employee.image),d.lc)}}function y(t,e){1&t&&d.Ib(0,"img",26)}function K(t,e){if(1&t&&(d.Kb(0,"span"),d.pc(1),d.Vb(2,"translate"),d.Vb(3,"uppercase"),d.Jb()),2&t){const t=d.Ub();d.wb(1),d.qc(d.Wb(2,1,d.Wb(3,3,"PROFILE."+(null==t.Row.data?null:t.Row.data.employee.sex))))}}function J(t,e){if(1&t&&(d.Kb(0,"span"),d.pc(1),d.Vb(2,"translate"),d.Vb(3,"uppercase"),d.Jb()),2&t){const t=d.Ub();d.wb(1),d.qc(d.Wb(2,1,d.Wb(3,3,"LIST."+(null==t.Row.data?null:t.Row.data.employee.status))))}}const F=function(t){return{item_id:t}},_=function(t){return["../save",t]},P=function(){return["../list"]},A=function(t){return["../../employee/view",t]};let N=(()=>{class t{constructor(t,e,a,i,s){this.Utils=t,this.Router=e,this.ActivatedRoute=a,this.TranslateService=i,this.ServiceBeneficiary=s,this.Translation={},this.Row=new o.a,this.url=v.a.api_url,this.Router.routeReuseStrategy.shouldReuseRoute=function(){return!1},this.TranslateService.get(["SUCCESS","ERRORS","BUTTONS","PROFILE","LIST"]).subscribe(t=>{this.Translation=t}),this.ActivatedRoute.params.subscribe(t=>{this.item_id=t.item_id}),this.token=localStorage.getItem("token"),this.Row.init()}ngOnInit(){this.item_id>0&&this.loadData()}ngAfterViewInit(){!(this.item_id>0)&&this.Utils.closeSpiner()}loadData(){this.ServiceBeneficiary.getProfile({item_id:this.item_id,loading:!0}).subscribe(t=>{1==t.success?this.Row.setData(t.data):(console.log(t),this.Utils.showAlert({title:null!=t.error?this.Translation.PROFILE[t.error]?this.Translation.PROFILE[t.error]:this.Translation.ERRORS[t.error]?this.Translation.ERRORS[t.error]:t.error:this.Translation.ERRORS.OPS,error:null!=t.reason?this.Translation.PROFILE[t.reason]?this.Translation.PROFILE[t.reason]:this.Translation.ERRORS[t.reason]?this.Translation.ERRORS[t.reason]:t.reason:this.Translation.ERRORS[void 0],timer:3e3}))},t=>{console.log(t),this.Utils.showAlert({title:this.Translation.ERRORS.ERROR,error:(this.Translation.ERRORS[t.statusText]?this.Translation.ERRORS[t.statusText]:t.statusText)+" "+(null!=t.error.text?t.error.text:"")})})}deleted(t){this.ServiceBeneficiary.changeDeleted({item_id:this.item_id,code:t}).subscribe(t=>{console.log(t),1==t.success?(this.Row.data.beneficiary.deleted=t.data,this.Utils.showLocalNotification({message:this.Translation.SUCCESS.DELETE_OK,icon:"success"}),this.Router.navigate(["beneficiary/list"])):this.Utils.showAlert({title:null!=t.error?this.Translation.PROFILE[t.error]?this.Translation.PROFILE[t.error]:this.Translation.ERRORS[t.error]?this.Translation.ERRORS[t.error]:t.error:this.Translation.ERRORS.OPS,error:null!=t.reason?this.Translation.PROFILE[t.reason]?this.Translation.PROFILE[t.reason]:this.Translation.ERRORS[t.reason]?this.Translation.ERRORS[t.reason]:t.reason:this.Translation.ERRORS[void 0],timer:3e3})},t=>{console.log(t),this.Utils.showAlert({title:this.Translation.ERRORS.ERROR,error:(this.Translation.ERRORS[t.statusText]?this.Translation.ERRORS[t.statusText]:t.statusText)+" "+(null!=t.error.text?t.error.text:"")})})}confirmDelete(){swal({icon:"warning",text:this.Translation.SUCCESS.THIS_ACTION_CANT_BE_UNDONE,title:this.Translation.SUCCESS.CONFIRM_DELETE,buttons:{cancel:{text:this.Translation.BUTTONS.CANCEL,className:"btn-fill btn-block btn-danger",closeModal:!0,visible:!0,value:"cancel"},confirm:{text:this.Translation.BUTTONS.CONFIRM,className:"btn-fill btn-block btn-theme",closeModal:!0,visible:!0}}}).then(t=>{"cancel"!=t&&this.deleted(t)})}}return t.\u0275fac=function(e){return new(e||t)(d.Hb(b.a),d.Hb(s.d),d.Hb(s.a),d.Hb(r.d),d.Hb(o.b))},t.\u0275cmp=d.Bb({type:t,selectors:[["app-view"]],decls:168,vars:103,consts:[[1,"main-content"],[1,"container-fluid"],[1,"row"],[1,"col-md-6"],[1,"card","card-user"],[1,"content"],[1,"author"],[1,"title","text-center"],["class","avatar-profile border-white-2",3,"src",4,"ngIf"],["class","avatar-profile border-white-2","src","assets/img/faces/default-avatar.png",4,"ngIf"],[1,"col-md-12"],[1,"title"],[1,"pe-7s-user"],[1,"card-footer"],[1,"col-md-6","text-right"],[1,"btn","btn-simple","btn-theme",3,"routerLink"],[1,"fa","fa-edit"],[1,"btn","btn-simple","btn-info",3,"routerLink"],[1,"fa","fa-list"],[1,"btn","btn-simple","btn-danger",3,"click"],[1,"fa","fa-times"],[1,"clearfix"],[4,"ngIf"],[1,"pe-7s-portfolio"],[1,"fa","fa-eye"],[1,"avatar-profile","border-white-2",3,"src"],["src","assets/img/faces/default-avatar.png",1,"avatar-profile","border-white-2"]],template:function(t,e){1&t&&(d.Kb(0,"div",0),d.Kb(1,"div",1),d.Kb(2,"div",2),d.Kb(3,"div",3),d.Kb(4,"div",4),d.Kb(5,"div",5),d.Kb(6,"div",6),d.Kb(7,"h5",7),d.pc(8),d.Vb(9,"translate"),d.Jb(),d.Ib(10,"br"),d.oc(11,I,1,1,"img",8),d.oc(12,g,1,0,"img",9),d.Ib(13,"br"),d.Kb(14,"h4",7),d.pc(15),d.Ib(16,"br"),d.Kb(17,"small"),d.pc(18),d.Jb(),d.Jb(),d.Jb(),d.Kb(19,"div",2),d.Ib(20,"hr"),d.Kb(21,"div",10),d.Kb(22,"h5",11),d.Ib(23,"i",12),d.pc(24),d.Vb(25,"translate"),d.Jb(),d.Kb(26,"label"),d.pc(27),d.Vb(28,"translate"),d.Jb(),d.Kb(29,"span"),d.pc(30),d.Jb(),d.Ib(31,"br"),d.Kb(32,"label"),d.pc(33),d.Vb(34,"translate"),d.Jb(),d.Kb(35,"span"),d.pc(36),d.Jb(),d.Ib(37,"br"),d.Kb(38,"label"),d.pc(39),d.Vb(40,"translate"),d.Jb(),d.Kb(41,"span"),d.pc(42),d.Jb(),d.Ib(43,"br"),d.Kb(44,"label"),d.pc(45),d.Vb(46,"translate"),d.Jb(),d.Kb(47,"span"),d.pc(48),d.Vb(49,"translate"),d.Vb(50,"uppercase"),d.Jb(),d.Ib(51,"br"),d.Kb(52,"label"),d.pc(53),d.Vb(54,"translate"),d.Jb(),d.Kb(55,"span"),d.pc(56),d.Vb(57,"translate"),d.Jb(),d.Ib(58,"br"),d.Kb(59,"label"),d.pc(60),d.Vb(61,"translate"),d.Jb(),d.Kb(62,"span"),d.pc(63),d.Jb(),d.Ib(64,"br"),d.Jb(),d.Jb(),d.Jb(),d.Kb(65,"div",13),d.Ib(66,"hr"),d.Ib(67,"div",3),d.Kb(68,"div",14),d.Kb(69,"button",15),d.Ib(70,"i",16),d.Jb(),d.Kb(71,"button",17),d.Ib(72,"i",18),d.Jb(),d.Kb(73,"button",19),d.Sb("click",function(){return e.confirmDelete()}),d.Ib(74,"i",20),d.Jb(),d.Jb(),d.Ib(75,"div",21),d.Jb(),d.Ib(76,"br"),d.Jb(),d.Jb(),d.Kb(77,"div",3),d.Kb(78,"div",4),d.Kb(79,"div",5),d.Kb(80,"div",6),d.Kb(81,"h5",7),d.pc(82),d.Vb(83,"translate"),d.Jb(),d.Ib(84,"br"),d.oc(85,L,1,1,"img",8),d.oc(86,y,1,0,"img",9),d.Ib(87,"br"),d.Kb(88,"h4",7),d.pc(89),d.Ib(90,"br"),d.Kb(91,"small"),d.pc(92),d.Jb(),d.Jb(),d.Jb(),d.Kb(93,"div",2),d.Ib(94,"hr"),d.Kb(95,"div",10),d.Kb(96,"h5",11),d.Ib(97,"i",12),d.pc(98),d.Vb(99,"translate"),d.Jb(),d.Kb(100,"label"),d.pc(101),d.Vb(102,"translate"),d.Jb(),d.Kb(103,"span"),d.pc(104),d.Jb(),d.Ib(105,"br"),d.Kb(106,"label"),d.pc(107),d.Vb(108,"translate"),d.Jb(),d.Kb(109,"span"),d.pc(110),d.Jb(),d.Ib(111,"br"),d.Kb(112,"label"),d.pc(113),d.Vb(114,"translate"),d.Jb(),d.Kb(115,"span"),d.pc(116),d.Jb(),d.Ib(117,"br"),d.Kb(118,"label"),d.pc(119),d.Vb(120,"translate"),d.Jb(),d.oc(121,K,4,5,"span",22),d.Ib(122,"br"),d.Kb(123,"label"),d.pc(124),d.Vb(125,"translate"),d.Jb(),d.Kb(126,"span"),d.pc(127),d.Vb(128,"translate"),d.Jb(),d.Ib(129,"br"),d.Jb(),d.Jb(),d.Kb(130,"div",2),d.Ib(131,"hr"),d.Kb(132,"div",10),d.Kb(133,"h5",11),d.Ib(134,"i",23),d.pc(135),d.Vb(136,"translate"),d.Jb(),d.Kb(137,"label"),d.pc(138),d.Vb(139,"translate"),d.Jb(),d.Kb(140,"span"),d.pc(141),d.Jb(),d.Ib(142,"br"),d.Kb(143,"label"),d.pc(144),d.Vb(145,"translate"),d.Jb(),d.Kb(146,"span"),d.pc(147),d.Jb(),d.Ib(148,"br"),d.Kb(149,"label"),d.pc(150),d.Vb(151,"translate"),d.Jb(),d.Kb(152,"span"),d.pc(153),d.Jb(),d.Ib(154,"br"),d.Kb(155,"label"),d.pc(156),d.Vb(157,"translate"),d.Jb(),d.oc(158,J,4,5,"span",22),d.Ib(159,"br"),d.Jb(),d.Jb(),d.Jb(),d.Kb(160,"div",13),d.Ib(161,"hr"),d.Ib(162,"div",3),d.Kb(163,"div",14),d.Kb(164,"button",15),d.Ib(165,"i",24),d.Jb(),d.Jb(),d.Ib(166,"div",21),d.Jb(),d.Ib(167,"br"),d.Jb(),d.Jb(),d.Jb(),d.Jb(),d.Jb()),2&t&&(d.wb(8),d.qc(d.Wb(9,46,"PROFILE.BENEFICIARY")),d.wb(3),d.ac("ngIf",null==e.Row.data?null:e.Row.data.beneficiary.image),d.wb(1),d.ac("ngIf",!(null!=e.Row.data&&e.Row.data.beneficiary.image)),d.wb(3),d.qc(e.Row.data.beneficiary.names),d.wb(3),d.qc(e.Row.data.beneficiary.lastname),d.wb(6),d.rc(" ",d.Wb(25,48,"PROFILE.PERSONAL"),""),d.wb(3),d.rc("",d.Wb(28,50,"PROFILE.NAMES"),":"),d.wb(3),d.qc(null==e.Row.data?null:e.Row.data.beneficiary.names),d.wb(3),d.rc("",d.Wb(34,52,"PROFILE.LASTNAME"),":"),d.wb(3),d.qc(null==e.Row.data?null:e.Row.data.beneficiary.lastname),d.wb(3),d.rc("",d.Wb(40,54,"PROFILE.MOTHER_LASTNAME"),":"),d.wb(3),d.qc(null==e.Row.data?null:e.Row.data.beneficiary.mother_lastname),d.wb(3),d.rc("",d.Wb(46,56,"PROFILE.GENDER"),":"),d.wb(3),d.qc(d.Wb(49,58,d.Wb(50,60,"PROFILE."+(null==e.Row.data?null:e.Row.data.beneficiary.sex)))),d.wb(5),d.rc("",d.Wb(54,62,"PROFILE.BIRTHDAY"),":"),d.wb(3),d.qc("NOT_AVAILABLE"!=(null==e.Row.data?null:e.Row.data.beneficiary.birthday)?null==e.Row.data?null:e.Row.data.beneficiary.birthday:d.Wb(57,64,"ERRORS.NOT_AVAILABLE")),d.wb(4),d.rc("",d.Wb(61,66,"PROFILE.RELATIONSHIP"),":"),d.wb(3),d.qc(null==e.Row.data?null:e.Row.data.beneficiary.relationship),d.wb(6),d.ac("routerLink",d.ec(96,_,d.ec(94,F,e.item_id))),d.wb(2),d.ac("routerLink",d.dc(98,P)),d.wb(11),d.qc(d.Wb(83,68,"PROFILE.EMPLOYEE")),d.wb(3),d.ac("ngIf",null==e.Row.data?null:e.Row.data.employee.image),d.wb(1),d.ac("ngIf",!(null!=e.Row.data&&e.Row.data.employee.image)),d.wb(3),d.qc(e.Row.data.employee.names),d.wb(3),d.qc(e.Row.data.employee.lastname),d.wb(6),d.rc(" ",d.Wb(99,70,"PROFILE.PERSONAL"),""),d.wb(3),d.rc("",d.Wb(102,72,"PROFILE.NAMES"),":"),d.wb(3),d.qc(null==e.Row.data?null:e.Row.data.employee.names),d.wb(3),d.rc("",d.Wb(108,74,"PROFILE.LASTNAME"),":"),d.wb(3),d.qc(null==e.Row.data?null:e.Row.data.employee.lastname),d.wb(3),d.rc("",d.Wb(114,76,"PROFILE.MOTHER_LASTNAME"),":"),d.wb(3),d.qc(null==e.Row.data?null:e.Row.data.employee.mother_lastname),d.wb(3),d.rc("",d.Wb(120,78,"PROFILE.GENDER"),":"),d.wb(2),d.ac("ngIf",null==e.Row.data?null:e.Row.data.employee.sex),d.wb(3),d.rc("",d.Wb(125,80,"PROFILE.BIRTHDAY"),":"),d.wb(3),d.qc("NOT_AVAILABLE"!=(null==e.Row.data?null:e.Row.data.employee.birthday)?null==e.Row.data?null:e.Row.data.employee.birthday:d.Wb(128,82,"ERRORS.NOT_AVAILABLE")),d.wb(8),d.rc(" ",d.Wb(136,84,"PROFILE.OCCUPATIONALS"),""),d.wb(3),d.rc("",d.Wb(139,86,"PROFILE.POSITION_JOB"),":"),d.wb(3),d.qc(null==e.Row.data?null:e.Row.data.employee.position_job),d.wb(3),d.rc("",d.Wb(145,88,"PROFILE.SALARY"),":"),d.wb(3),d.qc(null==e.Row.data?null:e.Row.data.employee.salary),d.wb(3),d.rc("",d.Wb(151,90,"DATE.HIRING_DATE"),":"),d.wb(3),d.qc(null==e.Row.data?null:e.Row.data.employee.hiring_date),d.wb(3),d.rc("",d.Wb(157,92,"LIST.STATUS"),":"),d.wb(2),d.ac("ngIf",null==e.Row.data?null:e.Row.data.employee.status),d.wb(6),d.ac("routerLink",d.ec(101,A,d.ec(99,F,e.Row.data.employee.employee_id))))},directives:[n.k,s.e],pipes:[r.c,n.n],encapsulation:2}),t})();var x=a("qUm5");function C(t,e){1&t&&(d.Kb(0,"span",4),d.pc(1,"*"),d.Jb())}let U=(()=>{class t{constructor(t,e,a){this.Utils=t,this.TranslateService=e,this.ServiceEmployee=a,this.Translation={},this.Filters={limit:40,page:1,delay:0,deleted:1},this.data={},this.SelectChange=new d.n,this.TranslateService.get(["SUCCESS","ERRORS","LIST","PROFILE"]).subscribe(t=>{this.Translation=t})}ngOnInit(){this.data.id=this.data.id?this.data.id:"employee_id",this.data.item_id=this.data.item_id?this.data.item_id:"",this.data.label=this.data.label?this.data.label:this.Translation.PROFILE.EMPLOYEE,this.data.disabled=!!this.data.disabled&&this.data.disabled,this.data.employee_id&&(this.Filters.employee_id=this.data.employee_id),this.Filters.recursive=!this.data.recursive||this.data.recursive,this.data.order_fields&&(this.Filters.order_fields=this.data.order_fields),this.Filters.deleted=this.data.deleted?this.data.deleted:1,this.data.query&&(this.Filters.query=this.data.query),this.data.active&&(this.Filters.active=this.data.active),this.data.limit&&(this.Filters.limit=this.data.limit),this.data.token&&(this.Filters.token=this.data.token),this.data.page&&(this.Filters.page=this.data.page),this.ServiceEmployee.data_emmiter.subscribe(t=>{if(null!=t.data&&"filter_data_pair"==t.action){for(let e in t.data)this.Filters[e]=t.data[e];this.loadData()}null!=t.data&&"set_value"==t.action&&(this.data.item_id=t.data,this.return_data=t.data,$("#"+this.data.id+" option[value='"+this.data.item_id+"']").attr("selected","selected"),$("#"+this.data.id).selectpicker("refresh"))}),this.loadData()}ngOnDestroy(){}loadData(){return Object(c.a)(this,void 0,void 0,function*(){yield this.ServiceEmployee.getList(this.Filters).subscribe(t=>Object(c.a)(this,void 0,void 0,function*(){if(1==t.success){var e="<option value=''>"+this.Translation.LIST.ALL+"</option>";$.each(t.data,function(t,a){e+="<option value='"+a.item_id+"'>"+a.fullname+"</option>"}),$("#"+this.data.id).find("option").remove().end().append(e).selectpicker("refresh"),this.data.item_id>=0&&($("#"+this.data.id+" option[value='"+this.data.item_id+"']").attr("selected","selected"),$("#"+this.data.id).selectpicker("refresh"))}}),t=>{this.Utils.closeSpiner()})})}onSelectChange(t){this.SelectChange.next(this.return_data)}}return t.\u0275fac=function(e){return new(e||t)(d.Hb(b.a),d.Hb(r.d),d.Hb(x.b))},t.\u0275cmp=d.Bb({type:t,selectors:[["select_component-employee"]],inputs:{data:"data"},outputs:{SelectChange:"SelectChange"},decls:5,vars:7,consts:[[1,"form-group"],[1,"control-label"],["class","star",4,"ngIf"],["data-live-search","true",1,"form-control","selectpicker",3,"title","name","id","ngModel","disabled","change","ngModelChange"],[1,"star"]],template:function(t,e){1&t&&(d.Kb(0,"div",0),d.Kb(1,"label",1),d.pc(2),d.oc(3,C,2,0,"span",2),d.Jb(),d.Kb(4,"select",3),d.Sb("change",function(t){return e.onSelectChange(t)})("ngModelChange",function(t){return e.return_data=t}),d.Jb(),d.Jb()),2&t&&(d.wb(2),d.rc("",null==e.data?null:e.data.label," "),d.wb(1),d.ac("ngIf",null==e.data?null:e.data.required),d.wb(1),d.bc("title",null==e.data?null:e.data.label),d.bc("name",null==e.data?null:e.data.id),d.bc("id",null==e.data?null:e.data.id),d.ac("ngModel",e.return_data)("disabled",null==e.data?null:e.data.disabled))},directives:[n.k,i.i,i.c,i.f],encapsulation:2}),t})();function k(t,e){1&t&&(d.Kb(0,"h3",42),d.pc(1),d.Vb(2,"translate"),d.Jb()),2&t&&(d.wb(1),d.qc(d.Wb(2,1,"PROFILE.NEW_PROFILE")))}function D(t,e){1&t&&(d.Kb(0,"h3",42),d.pc(1),d.Vb(2,"translate"),d.Jb()),2&t&&(d.wb(1),d.qc(d.Wb(2,1,"PROFILE.EDIT_PROFILE")))}const M=[{path:"",children:[{path:"list",component:w}]},{path:"",children:[{path:"save",component:(()=>{class t{constructor(t,e,a,i,s,n){this.Utils=t,this.Router=e,this.ActivatedRoute=a,this.TranslateService=i,this.ServiceBeneficiary=s,this.ServiceEmployee=n,this.Translation={},this.submitted=!1,this.Row=new o.a,this.files=[],this.path_files=new Array,this.keep_on={success:!0,error:""},this.url=v.a.api_url+"beneficiary/storage/",this.Router.routeReuseStrategy.shouldReuseRoute=function(){return!1},this.TranslateService.get(["SUCCESS","ERRORS","BUTTONS","LIST","LANGUAGE","PROFILE"]).subscribe(t=>{this.Translation=t}),this.ActivatedRoute.params.subscribe(t=>{this.item_id=t.item_id}),this.token=localStorage.getItem("token"),this.Row.init(),this.filter_employee={token:this.token,recursive:!0}}ngOnInit(){this.item_id>0&&this.loadData()}ngAfterViewInit(){$(".selectpicker").selectpicker("refresh"),$("#birthday").datetimepicker({format:"DD-MM-YYYY"})}loadData(){return Object(c.a)(this,void 0,void 0,function*(){yield this.ServiceBeneficiary.getProfile({item_id:this.item_id,loading:!0}).subscribe(t=>{1==t.success?(this.Row.setData(t.data),this.ServiceEmployee.data_emmiter.emit({action:"set_value",data:this.Row.data.beneficiary.employee_id}),$("#sex option[value='"+this.Row.data.beneficiary.sex+"']").attr("selected","selected"),$(".selectpicker").selectpicker("refresh")):(console.log(t),this.Utils.showAlert({title:null!=t.error?this.Translation.PROFILE[t.error]?this.Translation.PROFILE[t.error]:this.Translation.ERRORS[t.error]?this.Translation.ERRORS[t.error]:t.error:this.Translation.ERRORS.OPS,error:null!=t.reason?this.Translation.PROFILE[t.reason]?this.Translation.PROFILE[t.reason]:this.Translation.ERRORS[t.reason]?this.Translation.ERRORS[t.reason]:t.reason:this.Translation.ERRORS[void 0],timer:3e3}))},t=>{console.log(t),this.Utils.showAlert({title:this.Translation.ERRORS.ERROR,error:(this.Translation.ERRORS[t.statusText]?this.Translation.ERRORS[t.statusText]:t.statusText)+" "+(null!=t.error.text?t.error.text:"")})})})}cancel(){history.back()}save(t){if(this.submitted=!0,t.valid){let t=new FormData,e=this.Row.getDataValues();e.token=this.token,e.birthday=$("#birthday").val();for(let a in e)t.append(a,e[a]);for(let a in this.files){let e=this.files[a].file;e.size>5e7?(this.keep_on.success=!1,this.keep_on.error="FILE_SIZE_EXCESS"):t.append(a,e)}this.sendData(t)}else this.Utils.showAlert({icon:"warning",title:this.Translation.ERRORS.OPS,message:this.Translation.ERRORS.FIELDS_EMPTY_TRY_AGAIN})}sendData(t){this.Utils.showSpiner(),this.ServiceBeneficiary.save(t).subscribe(t=>{this.Utils.closeSpiner(),1==t.success?(this.item_id<0&&(this.item_id=t.data.employee_id),swal({icon:"success",text:this.Translation.SUCCESS.SAVE_OK,title:this.Translation.SUCCESS.GOOD_WORK,closeOnClickOutside:!1,closeOnEsc:!1,buttons:{list:{text:this.Translation.BUTTONS.LIST,className:"btn btn-fill btn-warning",closeModal:!0,visible:!0,value:"list"},view:{text:this.Translation.BUTTONS.VIEW,className:"btn btn-fill btn-theme",closeModal:!0,visible:!0,value:"view"},ok:{text:this.Translation.BUTTONS.OK,className:"btn btn-fill btn-smoke",closeModal:!0,visible:!0,value:"ok"}}}).then(e=>{"view"==e&&this.Router.navigate(["beneficiary/view",{item_id:this.item_id}]),"next"==e&&this.Router.navigate(["beneficiary/save",{item_id:t.pager.next}]),"new"==e&&this.Router.navigate(["beneficiary/save",{item_id:0}]),"list"==e&&this.Router.navigate(["beneficiary/list"])})):(this.submitted=!1,console.log(t),this.Utils.showAlert({title:null!=t.error?this.Translation.PROFILE[t.error]?this.Translation.PROFILE[t.error]:this.Translation.ERRORS[t.error]?this.Translation.ERRORS[t.error]:t.error:this.Translation.ERRORS.OPS,error:null!=t.reason?this.Translation.PROFILE[t.reason]?this.Translation.PROFILE[t.reason]:this.Translation.ERRORS[t.reason]?this.Translation.ERRORS[t.reason]:t.reason:this.Translation.ERRORS[void 0],timer:3e3}))},t=>{console.log(t),this.Utils.closeSpiner(),this.Utils.showAlert({title:this.Translation.ERRORS.ERROR,error:(this.Translation.ERRORS[t.statusText]?this.Translation.ERRORS[t.statusText]:t.statusText)+" "+(null!=t.error.text?t.error.text:"")})})}onChangeFilterEmployee(t){this.Row.data.beneficiary.employee_id=t}loadFilterEmployee(t,e="employee_id"){return Object(c.a)(this,void 0,void 0,function*(){this.ServiceEmployee.getPair({token:this.token,recursive:!0,active:1,deleted:1,limit:500}).subscribe(a=>Object(c.a)(this,void 0,void 0,function*(){if(1==a.success){var i="<option value=''>"+this.Translation.LIST.ALL+"</option>";$.each(a.data,function(t,e){i+="<option value='"+t+"'>"+e+"</option>"}),$("#"+e).find("option").remove().end().append(i).selectpicker("refresh"),t>=0&&($("#"+e+" option[value='"+t+"']").attr("selected","selected"),$("#"+e).selectpicker("refresh"))}else this.Utils.showAlert({title:null!=a.error?this.Translation.PROFILE[a.error]?this.Translation.PROFILE[a.error]:this.Translation.ERRORS[a.error]?this.Translation.ERRORS[a.error]:a.error:this.Translation.ERRORS.OPS,error:null!=a.reason?this.Translation.PROFILE[a.reason]?this.Translation.PROFILE[a.reason]:this.Translation.ERRORS[a.reason]?this.Translation.ERRORS[a.reason]:a.reason:this.Translation.ERRORS[void 0],timer:3e3})}),t=>{console.log(t),this.Utils.showAlert({title:this.Translation.ERRORS.ERROR,error:(this.Translation.ERRORS[t.statusText]?this.Translation.ERRORS[t.statusText]:t.statusText)+" "+(null!=t.error.text?t.error.text:"")})})})}detectFiles(t,e){this.files[e]={reader:"",file:t.target.files[0]};let a=new FileReader;a.onload=t=>{this.files[e].reader=t.target.result},a.readAsDataURL(t.target.files[0])}}return t.\u0275fac=function(e){return new(e||t)(d.Hb(b.a),d.Hb(s.d),d.Hb(s.a),d.Hb(r.d),d.Hb(o.b),d.Hb(x.b))},t.\u0275cmp=d.Bb({type:t,selectors:[["app-save"]],decls:112,vars:76,consts:[[1,"main-content"],[1,"container-fluid"],[1,"row"],[1,"col-md-12"],["id","wizardCard",1,"card","card-wizard"],["id","myForm"],["myForm","ngForm"],[1,"header","text-center"],["class","title",4,"ngIf"],[1,"category"],[1,"content"],[1,"col-md-6"],[1,"form-group"],[1,"control-label"],[1,"star"],["type","text","name","names","id","names","autocomplete","false","required","",1,"form-control",3,"placeholder","ngModel","ngModelChange"],["names","ngModel"],[1,"text-danger",3,"hidden"],["type","text","name","lastname","id","lastname","autocomplete","false",1,"form-control",3,"placeholder","ngModel","ngModelChange"],["lastname","ngModel"],["type","text","name","mother_lastname","id","mother_lastname","autocomplete","false",1,"form-control",3,"placeholder","ngModel","ngModelChange"],["mother_lastname","ngModel"],[1,"col-md-3"],["stacked","",1,"control-label"],["type","text","name","birthday","id","birthday","autocomplete","false",1,"form-control","datepicker",3,"placeholder","ngModel","ngModelChange"],["birthday","ngModel"],[1,"label-title"],["id","sex","name","sex",1,"form-control","selectpicker",3,"title","ngModel","ngModelChange"],["sex","ngModel"],["value","female"],["value","male"],[3,"data","change"],["type","text","name","relationship","id","relationship","autocomplete","false",1,"form-control","datepicker",3,"placeholder","ngModel","ngModelChange"],["relationship","ngModel"],["for","image",1,"control-label"],["type","file","name","image","id","image","accept",".jpg, .jpeg, .png",1,"form-control",3,"placeholder","change"],[1,"footer"],["type","button",1,"btn","btn-danger","btn-fill","btn-block",3,"click"],[1,"fa","fa-close"],["type","button",1,"btn","btn-theme","btn-fill","btn-block",3,"click"],[1,"fa","fa-save"],[1,"clearfix"],[1,"title"]],template:function(t,e){if(1&t){const t=d.Lb();d.Kb(0,"div",0),d.Kb(1,"div",1),d.Kb(2,"div",2),d.Kb(3,"div",3),d.Kb(4,"div",4),d.Kb(5,"form",5,6),d.Kb(7,"div",7),d.oc(8,k,3,3,"h3",8),d.oc(9,D,3,3,"h3",8),d.Kb(10,"p",9),d.pc(11),d.Vb(12,"translate"),d.Jb(),d.Jb(),d.Kb(13,"div",10),d.Kb(14,"h5"),d.pc(15),d.Vb(16,"translate"),d.Jb(),d.Kb(17,"div",2),d.Kb(18,"div",11),d.Kb(19,"div",12),d.Kb(20,"label",13),d.pc(21),d.Vb(22,"translate"),d.Kb(23,"span",14),d.pc(24,"*"),d.Jb(),d.Jb(),d.Kb(25,"input",15,16),d.Sb("ngModelChange",function(t){return e.Row.data.beneficiary.names=t}),d.Vb(27,"translate"),d.Jb(),d.Kb(28,"p",17),d.pc(29),d.Vb(30,"translate"),d.Jb(),d.Jb(),d.Jb(),d.Kb(31,"div",11),d.Kb(32,"div",12),d.Kb(33,"label",13),d.pc(34),d.Vb(35,"translate"),d.Kb(36,"span",14),d.pc(37,"*"),d.Jb(),d.Jb(),d.Kb(38,"input",18,19),d.Sb("ngModelChange",function(t){return e.Row.data.beneficiary.lastname=t}),d.Vb(40,"translate"),d.Jb(),d.Jb(),d.Jb(),d.Jb(),d.Kb(41,"div",2),d.Kb(42,"div",11),d.Kb(43,"div",12),d.Kb(44,"label",13),d.pc(45),d.Vb(46,"translate"),d.Jb(),d.Kb(47,"input",20,21),d.Sb("ngModelChange",function(t){return e.Row.data.beneficiary.mother_lastname=t}),d.Vb(49,"translate"),d.Jb(),d.Jb(),d.Jb(),d.Kb(50,"div",22),d.Kb(51,"div",12),d.Kb(52,"label",23),d.pc(53),d.Vb(54,"translate"),d.Jb(),d.Kb(55,"input",24,25),d.Sb("ngModelChange",function(t){return e.Row.data.beneficiary.birthday=t}),d.Vb(57,"translate"),d.Jb(),d.Jb(),d.Jb(),d.Kb(58,"div",22),d.Kb(59,"label",26),d.pc(60),d.Vb(61,"translate"),d.Kb(62,"span",14),d.pc(63,"*"),d.Jb(),d.Jb(),d.Kb(64,"select",27,28),d.Sb("ngModelChange",function(t){return e.Row.data.beneficiary.sex=t}),d.Vb(66,"translate"),d.Kb(67,"option",29),d.pc(68),d.Vb(69,"translate"),d.Jb(),d.Kb(70,"option",30),d.pc(71),d.Vb(72,"translate"),d.Jb(),d.Jb(),d.Jb(),d.Jb(),d.Ib(73,"hr"),d.Kb(74,"h5"),d.pc(75),d.Vb(76,"translate"),d.Jb(),d.Kb(77,"div",2),d.Kb(78,"div",11),d.Kb(79,"select_component-employee",31),d.Sb("change",function(t){return e.onChangeFilterEmployee(t.target.value)}),d.Jb(),d.Jb(),d.Kb(80,"div",11),d.Kb(81,"div",12),d.Kb(82,"label",23),d.pc(83),d.Vb(84,"translate"),d.Jb(),d.Kb(85,"input",32,33),d.Sb("ngModelChange",function(t){return e.Row.data.beneficiary.relationship=t}),d.Vb(87,"translate"),d.Jb(),d.Jb(),d.Jb(),d.Jb(),d.Ib(88,"hr"),d.Kb(89,"div",2),d.Kb(90,"div",3),d.Kb(91,"div",12),d.Kb(92,"label",34),d.pc(93),d.Vb(94,"translate"),d.Jb(),d.Kb(95,"input",35),d.Sb("change",function(t){return e.detectFiles(t,"image")}),d.Vb(96,"translate"),d.Jb(),d.Jb(),d.Jb(),d.Jb(),d.Jb(),d.Kb(97,"div",36),d.Kb(98,"div",2),d.Kb(99,"div",11),d.Kb(100,"div",12),d.Kb(101,"button",37),d.Sb("click",function(){return e.cancel()}),d.Ib(102,"i",38),d.pc(103),d.Vb(104,"translate"),d.Jb(),d.Jb(),d.Jb(),d.Kb(105,"div",11),d.Kb(106,"div",12),d.Kb(107,"button",39),d.Sb("click",function(){d.jc(t);const a=d.hc(6);return e.save(a)}),d.Ib(108,"i",40),d.pc(109),d.Vb(110,"translate"),d.Jb(),d.Jb(),d.Jb(),d.Jb(),d.Ib(111,"div",41),d.Jb(),d.Jb(),d.Jb(),d.Jb(),d.Jb(),d.Jb(),d.Jb()}if(2&t){const t=d.hc(26);d.wb(8),d.ac("ngIf",!e.Row.data.beneficiary.beneficiary_id),d.wb(1),d.ac("ngIf",e.Row.data.beneficiary.beneficiary_id>=1),d.wb(2),d.qc(d.Wb(12,32,"PROFILE.INFO_EDIT")),d.wb(4),d.qc(d.Wb(16,34,"PROFILE.DATA_PERSONAL")),d.wb(6),d.rc("",d.Wb(22,36,"PROFILE.NAMES")," "),d.wb(4),d.bc("placeholder",d.Wb(27,38,"PROFILE.NAMES")),d.ac("ngModel",e.Row.data.beneficiary.names),d.wb(3),d.ac("hidden",t.valid||0==e.submitted),d.wb(1),d.qc(d.Wb(30,40,"ERRORS.REQUIRED_FIELD")),d.wb(5),d.rc("",d.Wb(35,42,"PROFILE.LASTNAME")," "),d.wb(4),d.bc("placeholder",d.Wb(40,44,"PROFILE.LASTNAME")),d.ac("ngModel",e.Row.data.beneficiary.lastname),d.wb(7),d.qc(d.Wb(46,46,"PROFILE.MOTHER_LASTNAME")),d.wb(2),d.bc("placeholder",d.Wb(49,48,"PROFILE.MOTHER_LASTNAME")),d.ac("ngModel",e.Row.data.beneficiary.mother_lastname),d.wb(6),d.rc("",d.Wb(54,50,"PROFILE.BIRTHDAY"),":"),d.wb(2),d.bc("placeholder",d.Wb(57,52,"PROFILE.BIRTHDAY")),d.ac("ngModel",e.Row.data.beneficiary.birthday),d.wb(5),d.rc("",d.Wb(61,54,"PROFILE.GENDER")," "),d.wb(4),d.bc("title",d.Wb(66,56,"PROFILE.GENDER")),d.ac("ngModel",e.Row.data.beneficiary.sex),d.wb(4),d.qc(d.Wb(69,58,"PROFILE.FEMALE")),d.wb(3),d.qc(d.Wb(72,60,"PROFILE.MALE")),d.wb(4),d.qc(d.Wb(76,62,"PROFILE.EMPLOYEE")),d.wb(4),d.ac("data",e.filter_employee),d.wb(4),d.rc("",d.Wb(84,64,"PROFILE.RELATIONSHIP"),":"),d.wb(2),d.bc("placeholder",d.Wb(87,66,"PROFILE.RELATIONSHIP")),d.ac("ngModel",e.Row.data.beneficiary.relationship),d.wb(8),d.rc("",d.Wb(94,68,"PROFILE.PHOTO")," "),d.wb(2),d.bc("placeholder",d.Wb(96,70,"PROFILE.PHOTO")),d.wb(8),d.rc(" ",d.Wb(104,72,"BUTTONS.CANCEL"),""),d.wb(6),d.rc(" ",d.Wb(110,74,"BUTTONS.SAVE"),"")}},directives:[i.k,i.d,i.e,n.k,i.a,i.h,i.c,i.f,i.i,i.g,i.j,U],pipes:[r.c],encapsulation:2}),t})()}]},{path:"",children:[{path:"view",component:N}]}];var V=a("Wh94"),W=a("Skfg");let B=(()=>{class t{}return t.\u0275mod=d.Fb({type:t}),t.\u0275inj=d.Eb({factory:function(e){return new(e||t)},providers:[b.a,o.b],imports:[[i.b,n.b,r.b,l.b,s.h.forChild(M),V.a,W.a]]}),t})()}}]);