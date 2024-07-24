"use strict";(self.webpackChunkdemo1=self.webpackChunkdemo1||[]).push([[76],{3940:(v,h,e)=>{e.d(h,{v:()=>u});var t=e(1626),p=e(3646),_=e(7144),c=e(4438);let u=(()=>{class r{http;apiUrl=`${_.c.apiUrl}/api/v1/admin/user`;token=new p.o;headers=new t.Lr({Authorization:`Bearer ${this.token.requestAuthToken()}`});options={headers:this.headers};constructor(n){this.http=n}getOwners(n){console.log("==getOwners call=="),console.log("dataTablesParameters=>",n),console.log("End dataTablesParameters<=");const d=this.calDraw(n.start,n.length);console.log("this page ==",d);const m=`${this.apiUrl}?page=${d}&limit=${n.length}&order=${n.order.column}&orderBy=${n.order.dir}`;return console.log(m),this.http.get(m,this.options)}calDraw(n,d){return n/d<1?1:n/d+1}getOwner(n){const d=`${this.apiUrl}/${n}`;console.log(d);const m=this.http.get(d,this.options);return console.log("get owner result"),console.log(m),m}createOwner(n){return this.http.post(this.apiUrl,n,this.options)}updateOwner(n,d){return this.http.put(`${this.apiUrl}/${n}`,d,this.options)}patchOwner(n,d){let m=`${this.apiUrl}/active/${n}`;return d.active||(m=`${this.apiUrl}/inactive/${n}`),console.log(m),this.http.patch(m,this.options)}deleteOwner(n){return this.http.delete(`${this.apiUrl}/${n}`,this.options)}static \u0275fac=function(d){return new(d||r)(c.KVO(t.Qq))};static \u0275prov=c.jDH({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})()},3621:(v,h,e)=>{e.d(h,{W:()=>_});var t=e(4438),p=e(1626);let _=(()=>{class c{http;apiUrl="https://preview.keenthemes.com/starterkit/metronic/laravel/api/v1/roles";constructor(r){this.http=r}getUsers(r,l){return this.http.post(`${this.apiUrl}/${r}/users`,l)}getRoles(r){return this.http.post(`${this.apiUrl}-list`,r)}getRole(r){return this.http.get(`${this.apiUrl}/${r}`)}createRole(r){return this.http.post(this.apiUrl,r)}updateRole(r,l){return this.http.put(`${this.apiUrl}/${r}`,l)}deleteRole(r){return this.http.delete(`${this.apiUrl}/${r}`)}deleteUser(r,l){return this.http.delete(`${this.apiUrl}/${r}/users/${l}`)}static \u0275fac=function(l){return new(l||c)(t.KVO(p.Qq))};static \u0275prov=t.jDH({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})()},3646:(v,h,e)=>{e.d(h,{o:()=>p});var t=e(7144);class p{authSessionStorageToken=`${t.c.appVersion}-${t.c.USERDATA_KEY}`;requestAuthToken(){try{const c=sessionStorage.getItem(this.authSessionStorageToken);return c?JSON.parse(c).token:void 0}catch(c){return void console.error(c)}}}},3386:(v,h,e)=>{e.d(h,{m:()=>c});var t=e(4438),p=e(5359),_=e(5126);let c=(()=>{class u{constructor(){}static \u0275fac=function(n){return new(n||u)};static \u0275cmp=t.VBU({type:u,selectors:[["app-tables-widget1"]],decls:120,vars:10,consts:[[1,"card-header","border-0","pt-5"],[1,"card-title","align-items-start","flex-column"],[1,"card-label","fw-bolder","fs-3","mb-1"],[1,"text-muted","fw-bold","fs-7"],[1,"card-toolbar"],["type","button","data-kt-menu-trigger","click","data-kt-menu-placement","bottom-end","data-kt-menu-flip","top-end",1,"btn","btn-sm","btn-icon","btn-color-primary","btn-active-light-primary"],["name","category",1,"fs-2"],[1,"card-body","py-3"],[1,"table-responsive"],[1,"table","align-middle","gs-0","gy-5"],[1,"p-0","w-50px"],[1,"p-0","min-w-200px"],[1,"p-0","min-w-100px"],[1,"p-0","min-w-40px"],[1,"symbol","symbol-50px","me-2"],[1,"symbol-label"],["src","./assets/media/svg/brand-logos/plurk.svg","alt","",1,"h-50","align-self-center"],["href","#",1,"text-gray-900","fw-bolder","text-hover-primary","mb-1","fs-6"],[1,"text-muted","fw-bold","d-block","fs-7"],[1,"d-flex","flex-column","w-100","me-2"],[1,"d-flex","flex-stack","mb-2"],[1,"text-muted","me-2","fs-7","fw-bold"],[1,"progress","h-6px","w-100"],["role","progressbar",1,"progress-bar","bg-primary"],[1,"text-end"],["href","#",1,"btn","btn-sm","btn-icon","btn-bg-light","btn-active-color-primary"],["name","arrow-right",1,"fs-2"],["src","./assets/media/svg/brand-logos/telegram.svg","alt","",1,"h-50","align-self-center"],["src","./assets/media/svg/brand-logos/vimeo.svg","alt","",1,"h-50","align-self-center"],["src","./assets/media/svg/brand-logos/bebo.svg","alt","",1,"h-50","align-self-center"],["src","./assets/media/svg/brand-logos/kickstarter.svg","alt","",1,"h-50","align-self-center"]],template:function(n,d){1&n&&(t.j41(0,"div",0)(1,"h3",1)(2,"span",2),t.EFF(3,"Tasks Overview"),t.k0s(),t.j41(4,"span",3),t.EFF(5,"Pending 10 tasks"),t.k0s()(),t.j41(6,"div",4)(7,"button",5),t.nrm(8,"app-keenicon",6),t.k0s(),t.nrm(9,"app-dropdown-menu1"),t.k0s()(),t.j41(10,"div",7)(11,"div",8)(12,"table",9)(13,"thead")(14,"tr"),t.nrm(15,"th",10)(16,"th",11)(17,"th",12)(18,"th",13),t.k0s()(),t.j41(19,"tbody")(20,"tr")(21,"th")(22,"div",14)(23,"span",15),t.nrm(24,"img",16),t.k0s()()(),t.j41(25,"td")(26,"a",17),t.EFF(27," Top Authors "),t.k0s(),t.j41(28,"span",18),t.EFF(29,"Successful Fellas"),t.k0s()(),t.j41(30,"td")(31,"div",19)(32,"div",20)(33,"span",21),t.EFF(34,"70%"),t.k0s()(),t.j41(35,"div",22),t.nrm(36,"div",23),t.k0s()()(),t.j41(37,"td",24)(38,"a",25),t.nrm(39,"app-keenicon",26),t.k0s()()(),t.j41(40,"tr")(41,"th")(42,"div",14)(43,"span",15),t.nrm(44,"img",27),t.k0s()()(),t.j41(45,"td")(46,"a",17),t.EFF(47," Popular Authors "),t.k0s(),t.j41(48,"span",18),t.EFF(49,"Most Successful"),t.k0s()(),t.j41(50,"td")(51,"div",19)(52,"div",20)(53,"span",21),t.EFF(54,"50%"),t.k0s()(),t.j41(55,"div",22),t.nrm(56,"div",23),t.k0s()()(),t.j41(57,"td",24)(58,"a",25),t.nrm(59,"app-keenicon",26),t.k0s()()(),t.j41(60,"tr")(61,"th")(62,"div",14)(63,"span",15),t.nrm(64,"img",28),t.k0s()()(),t.j41(65,"td")(66,"a",17),t.EFF(67," New Users "),t.k0s(),t.j41(68,"span",18),t.EFF(69,"Awesome Users"),t.k0s()(),t.j41(70,"td")(71,"div",19)(72,"div",20)(73,"span",21),t.EFF(74,"80%"),t.k0s()(),t.j41(75,"div",22),t.nrm(76,"div",23),t.k0s()()(),t.j41(77,"td",24)(78,"a",25),t.nrm(79,"app-keenicon",26),t.k0s()()(),t.j41(80,"tr")(81,"th")(82,"div",14)(83,"span",15),t.nrm(84,"img",29),t.k0s()()(),t.j41(85,"td")(86,"a",17),t.EFF(87," Active Customers "),t.k0s(),t.j41(88,"span",18),t.EFF(89,"Best Customers"),t.k0s()(),t.j41(90,"td")(91,"div",19)(92,"div",20)(93,"span",21),t.EFF(94,"90%"),t.k0s()(),t.j41(95,"div",22),t.nrm(96,"div",23),t.k0s()()(),t.j41(97,"td",24)(98,"a",25),t.nrm(99,"app-keenicon",26),t.k0s()()(),t.j41(100,"tr")(101,"th")(102,"div",14)(103,"span",15),t.nrm(104,"img",30),t.k0s()()(),t.j41(105,"td")(106,"a",17),t.EFF(107," Bestseller Theme "),t.k0s(),t.j41(108,"span",18),t.EFF(109,"Amazing Templates"),t.k0s()(),t.j41(110,"td")(111,"div",19)(112,"div",20)(113,"span",21),t.EFF(114,"70%"),t.k0s()(),t.j41(115,"div",22),t.nrm(116,"div",23),t.k0s()()(),t.j41(117,"td",24)(118,"a",25),t.nrm(119,"app-keenicon",26),t.k0s()()()()()()()),2&n&&(t.R7$(36),t.xc7("width","70%"),t.R7$(20),t.xc7("width","50%"),t.R7$(20),t.xc7("width","80%"),t.R7$(20),t.xc7("width","90%"),t.R7$(20),t.xc7("width","70%"))},dependencies:[p.J,_.w],encapsulation:2})}return u})()},8777:(v,h,e)=>{e.d(h,{i:()=>M});var t=e(4438),p=e(7038),_=e(3726),c=e(152),u=e(6354),r=e(4550),l=e(837),n=e(177),d=e(4058);const m=["deleteSwal"],O=["successSwal"],w=()=>({confirmButton:"btn btn-danger",cancelButton:"btn btn-active-light"}),C=()=>({confirmButton:"btn btn-success"});function D(g,B){if(1&g&&(t.qex(0),t.j41(1,"th"),t.EFF(2),t.k0s(),t.bVm()),2&g){const i=B.$implicit;t.R7$(2),t.JRh(i.title)}}let M=(()=>{class g{renderer;router;modalService;datatableConfig={};route="/";reload;modal;deleteEvent=new t.bkB;editEvent=new t.bkB;createEvent=new t.bkB;dtOptions={};datatableElement;deleteSwal;successSwal;idInAction;modalConfig={modalDialogClass:"modal-dialog modal-dialog-centered mw-650px"};swalOptions={buttonsStyling:!1};modalRef;clickListener;constructor(i,s,a){this.renderer=i,this.router=s,this.modalService=a}ngOnInit(){this.dtOptions={dom:"<'row'<'col-sm-12'tr>><'d-flex justify-content-between'<'col-sm-12 col-md-5'i><'d-flex justify-content-between'p>>",processing:!0,language:{processing:'<span class="spinner-border spinner-border-sm align-middle"></span> Loading...'},...this.datatableConfig},this.renderActionColumn(),this.setupSweetAlert(),this.reload&&this.reload.subscribe(i=>{this.modalService.dismissAll(),this.datatableElement.dtInstance.then(s=>s.ajax.reload())})}renderActionColumn(){this.dtOptions.columns&&this.dtOptions.columns.push({sortable:!1,title:"Actions",render:(s,a,o)=>{const k=`\n          <button class="btn btn-icon btn-active-light-primary w-30px h-30px me-3" data-action="edit" data-id="${o._id}">\n            <i class="ki-duotone ki-pencil fs-3"><span class="path1"></span><span class="path2"></span></i>\n          </button>`,f=`\n          <button class="btn btn-icon btn-active-light-primary w-30px h-30px" data-action="delete" data-id="${o._id}">\n            <i class="ki-duotone ki-trash fs-3">\n              <span class="path1"></span><span class="path2"></span>\n              <span class="path3"></span><span class="path4"></span><span class="path5"></span>\n            </i>\n          </button>`,b=[];return b.push(`\n          <button class="btn btn-icon btn-active-light-primary w-30px h-30px me-3" data-action="view" data-id="${o._id}">\n            <i class="ki-duotone ki-tablet-text-up fs-3"><span class="path1"></span><span class="path2"></span></i>\n          </button>`),this.editEvent.observed&&b.push(k),this.deleteEvent.observed&&b.push(f),b.join("")}})}ngAfterViewInit(){this.clickListener=this.renderer.listen(document,"click",i=>{const s=i.target.closest(".btn");if(s){const{action:a,id:o}=s.dataset;switch(this.idInAction=o,a){case"view":console.log(`${this.route}/${o}`),this.router.navigate([`${this.route}/${o}`]);break;case"create":console.log(`${this.route}/add`),this.router.navigate([`${this.route}/add`]);break;case"edit":console.log(`${this.route}/edit/${o}`),this.router.navigate([`${this.route}/edit/${o}`]);break;case"delete":this.deleteSwal.fire().then(E=>{E.isConfirmed&&this.successSwal.fire()})}}}),this.triggerFilter()}ngOnDestroy(){this.reload.unsubscribe(),this.clickListener&&this.clickListener(),this.modalService.dismissAll()}triggerDelete(){this.deleteEvent.emit(String(this.idInAction))}triggerFilter(){(0,_.R)(document,"keyup").pipe((0,c.B)(50),(0,u.T)(i=>{const s=i.target,a=s.getAttribute("data-action"),o=s.value?.trim().toLowerCase();return{action:a,value:o}})).subscribe(({action:i,value:s})=>{"filter"===i&&this.datatableElement.dtInstance.then(a=>a.search(s).draw())})}setupSweetAlert(){this.swalOptions={buttonsStyling:!1}}static \u0275fac=function(s){return new(s||g)(t.rXU(t.sFG),t.rXU(r.Ix),t.rXU(l.Bq))};static \u0275cmp=t.VBU({type:g,selectors:[["app-action-crud"]],viewQuery:function(s,a){if(1&s&&(t.GBs(p._,5),t.GBs(m,5),t.GBs(O,5)),2&s){let o;t.mGM(o=t.lsd())&&(a.datatableElement=o.first),t.mGM(o=t.lsd())&&(a.deleteSwal=o.first),t.mGM(o=t.lsd())&&(a.successSwal=o.first)}},inputs:{datatableConfig:"datatableConfig",route:"route",reload:"reload",modal:"modal"},outputs:{deleteEvent:"deleteEvent",editEvent:"editEvent",createEvent:"createEvent"},decls:9,vars:10,consts:[["deleteSwal",""],["successSwal",""],["datatable","",1,"table","align-middle","table-row-dashed","fs-6","gy-5","dataTable","no-footer",3,"dtOptions"],[1,"text-start","text-gray-500","fw-bold","fs-7","text-uppercase","gs-0"],[4,"ngFor","ngForOf"],[1,"fw-semibold","text-gray-600"],["title","Are you sure to delete?","text","This cannot be undone","icon","warning",3,"confirm","swalOptions","showCancelButton","focusCancel","customClass"],["title","Delete successfully!","text","","icon","success",3,"swalOptions","customClass"]],template:function(s,a){if(1&s){const o=t.RV6();t.j41(0,"table",2)(1,"thead")(2,"tr",3),t.DNE(3,D,3,1,"ng-container",4),t.k0s()(),t.nrm(4,"tbody",5),t.k0s(),t.j41(5,"swal",6,0),t.bIt("confirm",function(){return t.eBV(o),t.Njj(a.triggerDelete())}),t.k0s(),t.nrm(7,"swal",7,1)}2&s&&(t.Y8G("dtOptions",a.dtOptions),t.R7$(3),t.Y8G("ngForOf",a.dtOptions.columns),t.R7$(2),t.Y8G("swalOptions",a.swalOptions)("showCancelButton",!0)("focusCancel",!0)("customClass",t.lJ4(8,w)),t.R7$(2),t.Y8G("swalOptions",a.swalOptions)("customClass",t.lJ4(9,C)))},dependencies:[n.Sq,p._,d.b7]})}return g})()},3660:(v,h,e)=>{e.d(h,{B:()=>r});var t=e(177),p=e(7038),_=e(4058),c=e(837),u=e(4438);let r=(()=>{class l{static \u0275fac=function(m){return new(m||l)};static \u0275mod=u.$C({type:l});static \u0275inj=u.G2t({imports:[t.MD,p.H,_.RZ.forChild(),c.XZ]})}return l})()},4084:(v,h,e)=>{e.d(h,{i:()=>M});var t=e(4438),p=e(7038),_=e(3726),c=e(152),u=e(6354),r=e(4550),l=e(837),n=e(177),d=e(4058);const m=["deleteSwal"],O=["successSwal"],w=()=>({confirmButton:"btn btn-danger",cancelButton:"btn btn-active-light"}),C=()=>({confirmButton:"btn btn-success"});function D(g,B){if(1&g&&(t.qex(0),t.j41(1,"th"),t.EFF(2),t.k0s(),t.bVm()),2&g){const i=B.$implicit;t.R7$(2),t.JRh(i.title)}}let M=(()=>{class g{renderer;router;modalService;datatableConfig={};route="/";reload;modal;deleteEvent=new t.bkB;editEvent=new t.bkB;createEvent=new t.bkB;dtOptions={};datatableElement;deleteSwal;successSwal;idInAction;modalConfig={modalDialogClass:"modal-dialog modal-dialog-centered mw-650px"};swalOptions={buttonsStyling:!1};modalRef;clickListener;constructor(i,s,a){this.renderer=i,this.router=s,this.modalService=a}ngOnInit(){this.dtOptions={dom:"<'row'<'col-sm-12'tr>><'d-flex justify-content-between'<'col-sm-12 col-md-5'i><'d-flex justify-content-between'p>>",processing:!0,language:{processing:'<span class="spinner-border spinner-border-sm align-middle"></span> Loading...'},...this.datatableConfig},this.renderActionColumn(),this.setupSweetAlert(),this.reload&&this.reload.subscribe(i=>{this.modalService.dismissAll(),this.datatableElement.dtInstance.then(s=>s.ajax.reload())})}renderActionColumn(){this.dtOptions.columns&&this.dtOptions.columns.push({sortable:!1,title:"Actions",render:(s,a,o)=>{const k=`\n          <button class="btn btn-icon btn-active-light-primary w-30px h-30px" data-action="delete" data-id="${o.id}">\n            <i class="ki-duotone ki-trash fs-3">\n              <span class="path1"></span><span class="path2"></span>\n              <span class="path3"></span><span class="path4"></span><span class="path5"></span>\n            </i>\n          </button>`,f=[];return this.editEvent.observed&&f.push(`\n          <button class="btn btn-icon btn-active-light-primary w-30px h-30px me-3" data-action="edit" data-id="${o.id}">\n            <i class="ki-duotone ki-pencil fs-3"><span class="path1"></span><span class="path2"></span></i>\n          </button>`),this.deleteEvent.observed&&f.push(k),f.join("")}})}ngAfterViewInit(){this.clickListener=this.renderer.listen(document,"click",i=>{const s=i.target.closest(".btn");if(s){const{action:a,id:o}=s.dataset;switch(this.idInAction=o,a){case"view":this.router.navigate([`${this.route}/${o}`]);break;case"create":this.createEvent.emit(!0),this.modalRef=this.modalService.open(this.modal,this.modalConfig);break;case"edit":this.editEvent.emit(Number(this.idInAction)),this.modalRef=this.modalService.open(this.modal,this.modalConfig);break;case"delete":this.deleteSwal.fire().then(E=>{E.isConfirmed&&this.successSwal.fire()})}}}),this.triggerFilter()}ngOnDestroy(){this.reload.unsubscribe(),this.clickListener&&this.clickListener(),this.modalService.dismissAll()}triggerDelete(){this.deleteEvent.emit(Number(this.idInAction))}triggerFilter(){(0,_.R)(document,"keyup").pipe((0,c.B)(50),(0,u.T)(i=>{const s=i.target,a=s.getAttribute("data-action"),o=s.value?.trim().toLowerCase();return{action:a,value:o}})).subscribe(({action:i,value:s})=>{"filter"===i&&this.datatableElement.dtInstance.then(a=>a.search(s).draw())})}setupSweetAlert(){this.swalOptions={buttonsStyling:!1}}static \u0275fac=function(s){return new(s||g)(t.rXU(t.sFG),t.rXU(r.Ix),t.rXU(l.Bq))};static \u0275cmp=t.VBU({type:g,selectors:[["app-crud"]],viewQuery:function(s,a){if(1&s&&(t.GBs(p._,5),t.GBs(m,5),t.GBs(O,5)),2&s){let o;t.mGM(o=t.lsd())&&(a.datatableElement=o.first),t.mGM(o=t.lsd())&&(a.deleteSwal=o.first),t.mGM(o=t.lsd())&&(a.successSwal=o.first)}},inputs:{datatableConfig:"datatableConfig",route:"route",reload:"reload",modal:"modal"},outputs:{deleteEvent:"deleteEvent",editEvent:"editEvent",createEvent:"createEvent"},decls:9,vars:10,consts:[["deleteSwal",""],["successSwal",""],["datatable","",1,"table","align-middle","table-row-dashed","fs-6","gy-5","dataTable","no-footer",3,"dtOptions"],[1,"text-start","text-gray-500","fw-bold","fs-7","text-uppercase","gs-0"],[4,"ngFor","ngForOf"],[1,"fw-semibold","text-gray-600"],["title","Are you sure to delete?","text","This cannot be undone","icon","warning",3,"confirm","swalOptions","showCancelButton","focusCancel","customClass"],["title","Delete successfully!","text","","icon","success",3,"swalOptions","customClass"]],template:function(s,a){if(1&s){const o=t.RV6();t.j41(0,"table",2)(1,"thead")(2,"tr",3),t.DNE(3,D,3,1,"ng-container",4),t.k0s()(),t.nrm(4,"tbody",5),t.k0s(),t.j41(5,"swal",6,0),t.bIt("confirm",function(){return t.eBV(o),t.Njj(a.triggerDelete())}),t.k0s(),t.nrm(7,"swal",7,1)}2&s&&(t.Y8G("dtOptions",a.dtOptions),t.R7$(3),t.Y8G("ngForOf",a.dtOptions.columns),t.R7$(2),t.Y8G("swalOptions",a.swalOptions)("showCancelButton",!0)("focusCancel",!0)("customClass",t.lJ4(8,w)),t.R7$(2),t.Y8G("swalOptions",a.swalOptions)("customClass",t.lJ4(9,C)))},dependencies:[n.Sq,p._,d.b7]})}return g})()},691:(v,h,e)=>{e.d(h,{B:()=>r});var t=e(177),p=e(7038),_=e(4058),c=e(837),u=e(4438);let r=(()=>{class l{static \u0275fac=function(m){return new(m||l)};static \u0275mod=u.$C({type:l});static \u0275inj=u.G2t({imports:[t.MD,p.H,_.RZ.forChild(),c.XZ]})}return l})()},5162:(v,h,e)=>{e.d(h,{E:()=>c});var t=e(177),p=e(9664),_=e(4438);let c=(()=>{class u{static \u0275fac=function(n){return new(n||u)};static \u0275mod=_.$C({type:u});static \u0275inj=_.G2t({imports:[t.MD,p.h,p.h]})}return u})()}}]);