"use strict";(self.webpackChunkdemo1=self.webpackChunkdemo1||[]).push([[102],{8102:(U,g,s)=>{s.r(g),s.d(g,{OwnerModule:()=>V});var u=s(177),l=s(9417),w=s(4550),c=s(837),v=s(4058),_=s(7470),b=s(3660),e=s(4438),C=s(7586),x=s.n(C),h=s(1626),k=s(3646),y=s(7144);let j=(()=>{class r{http;apiUrl=`${y.c.apiUrl}/api/v1/admin/user?page=1&limit=10`;token=new k.o;constructor(t){this.http=t}getOwners(t){console.log("==getOwners call==");const n=`${this.apiUrl}?page=${t.page}&limit=${t.limit}&order=${t.order}&orderBy=${t.orderBy}`,o={headers:new h.Lr({Authorization:`Bearer ${this.token.requestAuthToken()}`})};return this.http.get(n,o)}getOwner(t){return this.http.get(`${this.apiUrl}/${t}`)}createOwner(t){return this.http.post(this.apiUrl,t)}updateOwner(t,n){return this.http.put(`${this.apiUrl}/${t}`,n)}deleteOwner(t){return this.http.delete(`${this.apiUrl}/${t}`)}static \u0275fac=function(n){return new(n||r)(e.KVO(h.Qq))};static \u0275prov=e.jDH({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var O=s(3621),E=s(8777),F=s(5126);const M=["noticeSwal"],S=r=>({"ki-up":r});function N(r,m){1&r&&(e.j41(0,"div"),e.EFF(1," Name is required "),e.k0s())}function L(r,m){1&r&&(e.j41(0,"div"),e.EFF(1," Name must be at least 4 characters long "),e.k0s())}function R(r,m){if(1&r&&(e.j41(0,"div",49),e.DNE(1,N,2,0,"div",50)(2,L,2,0,"div",50),e.k0s()),2&r){e.XpG();const t=e.sdS(18);e.R7$(),e.Y8G("ngIf",null==t.errors?null:t.errors.required),e.R7$(),e.Y8G("ngIf",null==t.errors?null:t.errors.minlength)}}function T(r,m){1&r&&(e.j41(0,"div"),e.EFF(1,"Email is required"),e.k0s())}function B(r,m){1&r&&(e.j41(0,"div"),e.EFF(1,"Email is not valid"),e.k0s())}function A(r,m){if(1&r&&(e.j41(0,"div",49),e.DNE(1,T,2,0,"div",50)(2,B,2,0,"div",50),e.k0s()),2&r){e.XpG();const t=e.sdS(27);e.R7$(),e.Y8G("ngIf",null==t.errors?null:t.errors.required),e.R7$(),e.Y8G("ngIf",null==t.errors?null:t.errors.pattern)}}function I(r,m){if(1&r){const t=e.RV6();e.j41(0,"form",18,2),e.bIt("ngSubmit",function(i){e.eBV(t);const o=e.sdS(1),a=e.XpG();return e.Njj(a.onSubmit(i,o))}),e.j41(2,"div",19)(3,"h4",20),e.EFF(4,"Owner Details"),e.k0s(),e.j41(5,"button",21),e.bIt("click",function(){const i=e.eBV(t).$implicit;return e.Njj(i.dismiss("Cross click"))}),e.k0s()(),e.j41(6,"div",22)(7,"div",23)(8,"div",24),e.bIt("click",function(){e.eBV(t);const i=e.sdS(13);return e.Njj(i.toggle())}),e.EFF(9," Owner Information "),e.j41(10,"span",25),e.nrm(11,"i",26),e.k0s()(),e.j41(12,"div",27,3),e.mxI("ngbCollapseChange",function(i){e.eBV(t);const o=e.XpG();return e.DH7(o.isCollapsed1,i)||(o.isCollapsed1=i),e.Njj(i)}),e.j41(14,"div",28)(15,"label",29),e.EFF(16,"Name"),e.k0s(),e.j41(17,"input",30,4),e.mxI("ngModelChange",function(i){e.eBV(t);const o=e.XpG();return e.DH7(o.ownerModel.displayName,i)||(o.ownerModel.displayName=i),e.Njj(i)}),e.k0s(),e.DNE(19,R,3,2,"div",31),e.k0s(),e.j41(20,"div",28)(21,"label",29)(22,"span"),e.EFF(23,"Email"),e.k0s(),e.j41(24,"span",32),e.nrm(25,"app-keenicon",33),e.k0s()(),e.j41(26,"input",34,5),e.mxI("ngModelChange",function(i){e.eBV(t);const o=e.XpG();return e.DH7(o.ownerModel.email,i)||(o.ownerModel.email=i),e.Njj(i)}),e.k0s(),e.DNE(28,A,3,2,"div",31),e.k0s(),e.j41(29,"div",35)(30,"div",36)(31,"div",37)(32,"div",38),e.nrm(33,"input",39)(34,"label",40),e.k0s()(),e.j41(35,"label",41),e.EFF(36,"Suspended"),e.k0s()(),e.j41(37,"div",36)(38,"div",37)(39,"div",38),e.nrm(40,"input",42)(41,"label",40),e.k0s()(),e.j41(42,"label",41),e.EFF(43,"Active"),e.k0s()()()()()(),e.j41(44,"div",43)(45,"button",44),e.bIt("click",function(){const i=e.eBV(t).$implicit;return e.Njj(i.dismiss("cancel"))}),e.EFF(46," Discard "),e.k0s(),e.j41(47,"button",45)(48,"span",46),e.EFF(49," Submit "),e.k0s(),e.j41(50,"span",47),e.EFF(51," Please wait... "),e.nrm(52,"span",48),e.k0s()()()()}if(2&r){const t=e.sdS(1),n=e.XpG();e.R7$(8),e.BMQ("aria-expanded",!n.isCollapsed1),e.R7$(3),e.Y8G("ngClass",e.eq3(8,S,!n.isCollapsed1)),e.R7$(),e.R50("ngbCollapse",n.isCollapsed1),e.R7$(5),e.R50("ngModel",n.ownerModel.displayName),e.R7$(2),e.Y8G("ngIf",t.submitted&&t.invalid),e.R7$(7),e.R50("ngModel",n.ownerModel.email),e.R7$(2),e.Y8G("ngIf",t.submitted&&t.invalid),e.R7$(19),e.BMQ("data-kt-indicator",n.isLoading?"on":"off")}}let D=(()=>{class r{apiService;roleService;cdr;isCollapsed1=!1;isCollapsed2=!1;isLoading=!1;owners;datatableConfig={};reloadEvent=new e.bkB;aOwner;ownerModel={deleteReason:{reason:"",remark:""},_id:"",email:"",displayName:"",avatarUrl:"",active:!1,suspended:!1,suspendRequest:"",createdAt:"",updatedAt:""};noticeSwal;swalOptions={};roles$;constructor(t,n,i){this.apiService=t,this.roleService=n,this.cdr=i}ngAfterViewInit(){}ngOnInit(){this.datatableConfig={serverSide:!0,ajax:(t,n)=>{this.apiService.getOwners(t).subscribe(i=>{n({draw:t.draw,recordsTotal:i.total,recordsFiltered:i.total,data:i.users}),console.log(i)})},columns:[{title:"Name",data:"displayName",render:function(t,n,i){const o=["success","info","warning","danger"],a=o[Math.floor(Math.random()*o.length)],d=t[0].toUpperCase();return`\n            <div class="symbol symbol-circle symbol-50px overflow-hidden me-3" data-action="view" data-id="${i.id}">\n              <a href="javascript:;">\n                \n              <div class="symbol-label fs-3 bg-light-${a} text-${a}">\n                ${d}\n              </div>\n            \n              </a>\n            </div>\n            \n              <div class="d-flex flex-column" data-action="view" data-id="${i.id}">\n                <a href="javascript:;" class="text-gray-800 text-hover-primary mb-1">${t}</a>\n              <span>${i.email}</span>\n              </div>\n            \n          `}},{title:"Joined Date",data:"createdAt",render:function(t){return x()(t).format("DD MMM YYYY, hh:mm a")},orderData:[4],orderSequence:["asc","desc"],type:"string"},{title:"Suspended",data:"suspended",render:function(t,n,i){return t||""},orderData:[1],orderSequence:["asc","desc"],type:"string"},{title:"Active",data:"active",render:function(t,n,i){return t||""},orderData:[1],orderSequence:["asc","desc"],type:"string"}],createdRow:function(t,n,i){$("td:eq(0)",t).addClass("d-flex align-items-center")}}}delete(t){this.apiService.deleteOwner(t).subscribe(()=>{this.reloadEvent.emit(!0)})}edit(t){this.aOwner=this.apiService.getOwner(t),this.aOwner.subscribe(n=>{this.ownerModel=n})}create(){this.ownerModel={deleteReason:{reason:"",remark:""},_id:"",email:"",displayName:"",avatarUrl:"",active:!1,suspended:!1,suspendRequest:"",createdAt:"",updatedAt:""}}onSubmit(t,n){if(n&&n.invalid)return;this.isLoading=!0;const i={icon:"success",title:"Success!",text:""!=this.ownerModel._id?"Owner updated successfully!":"Owner created successfully!"},o={icon:"error",title:"Error!",text:""},a=()=>{this.isLoading=!1};""!=this.ownerModel._id?(()=>{this.apiService.updateOwner(this.ownerModel._id,this.ownerModel).subscribe({next:()=>{this.showAlert(i),this.reloadEvent.emit(!0)},error:p=>{o.text=this.extractText(p.error),this.showAlert(o),this.isLoading=!1},complete:a})})():(()=>{this.apiService.createOwner(this.ownerModel).subscribe({next:()=>{this.showAlert(i),this.reloadEvent.emit(!0)},error:p=>{o.text=this.extractText(p.error),this.showAlert(o),this.isLoading=!1},complete:a})})()}extractText(t){var n=[];for(var i in t)"string"==typeof t[i]?n.push(t[i]):"object"==typeof t[i]&&(n=n.concat(this.extractText(t[i])));return Array.from(new Set(n)).join("\n")}showAlert(t){let n=t.icon?.toString()||"success";"error"===t.icon&&(n="danger"),this.swalOptions=Object.assign({buttonsStyling:!1,confirmButtonText:"Ok, got it!",customClass:{confirmButton:"btn btn-"+n}},t),this.cdr.detectChanges(),this.noticeSwal.fire()}ngOnDestroy(){this.reloadEvent.unsubscribe()}static \u0275fac=function(n){return new(n||r)(e.rXU(j),e.rXU(O.W),e.rXU(e.gRc))};static \u0275cmp=e.VBU({type:r,selectors:[["app-owner-listing"]],viewQuery:function(n,i){if(1&n&&e.GBs(M,5),2&n){let o;e.mGM(o=e.lsd())&&(i.noticeSwal=o.first)}},decls:16,vars:4,consts:[["noticeSwal",""],["formModal",""],["myForm","ngForm"],["collapse1","ngbCollapse"],["displayName","ngModel"],["email","ngModel"],[1,"card"],[1,"card-header","border-0","pt-6"],[1,"card-title"],[1,"d-flex","align-items-center","position-relative","my-1"],["name","magnifier",1,"fs-3","position-absolute","ms-5"],["type","text","data-action","filter","placeholder","Search Owners",1,"form-control","form-control-solid","w-250px","ps-12"],[1,"card-toolbar"],[1,"d-flex","justify-content-end"],["type","button","data-action","create",1,"btn","btn-primary"],[1,"card-body","pt-0"],["route","/apps/owners",3,"deleteEvent","editEvent","createEvent","datatableConfig","reload","modal"],[3,"swalOptions"],[3,"ngSubmit"],[1,"modal-header"],["id","modal-basic-title",1,"modal-title"],["type","button","aria-label","Close",1,"btn-close",3,"click"],[1,"modal-body"],["id","kt_modal_update_customer_scroll","data-kt-scroll","true","data-kt-scroll-activate","{default: false, lg: true}","data-kt-scroll-max-height","auto","data-kt-scroll-dependencies","#kt_modal_update_customer_header","data-kt-scroll-wrappers","#kt_modal_update_customer_scroll","data-kt-scroll-offset","300px",1,"d-flex","flex-column","scroll-y","me-n7","pe-7","mw-650px"],["data-bs-toggle","collapse","role","button","aria-controls","kt_modal_update_customer_owner_info",1,"fw-bold","fs-3","rotate","collapsible","mb-7",3,"click"],[1,"ms-2","rotate-180"],[1,"ki-duotone","ki-down","fs-3",3,"ngClass"],[1,"collapse","show",3,"ngbCollapseChange","ngbCollapse"],[1,"fv-row","mb-7"],[1,"required","fw-semibold","fs-6","mb-2"],["type","text","name","displayName","required","","minlength","4",1,"form-control","form-control-solid",3,"ngModelChange","ngModel"],["class","fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback",4,"ngIf"],["placement","end","ngbTooltip","Email address must be active",1,"ms-1"],["name","information",1,"fs-7"],["type","email","name","email","required","","pattern","[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",1,"form-control","form-control-solid",3,"ngModelChange","ngModel"],[1,"d-flex","mb-7","flex-wrap","justify-content-between"],[1,"d-flex"],[1,"d-flex","align-items-center"],[1,"form-check","form-check-solid","form-switch","fv-row"],["type","checkbox","id","suspended",1,"form-check-input","w-45px","h-30px"],[1,"form-check-label"],[1,"fw-semibold","fs-6","mb-2","ms-3"],["type","checkbox","id","active","checked","true",1,"form-check-input","w-45px","h-30px"],[1,"modal-footer","flex-center"],["type","reset","id","kt_modal_update_customer_cancel",1,"btn","btn-light","me-3",3,"click"],["type","submit","id","kt_modal_update_customer_submit",1,"btn","btn-primary"],[1,"indicator-label"],[1,"indicator-progress"],[1,"spinner-border","spinner-border-sm","align-middle","ms-2"],[1,"fv-plugins-message-container","fv-plugins-message-container--enabled","invalid-feedback"],[4,"ngIf"]],template:function(n,i){if(1&n){const o=e.RV6();e.j41(0,"div",6)(1,"div",7)(2,"div",8)(3,"div",9),e.nrm(4,"app-keenicon",10)(5,"input",11),e.k0s()(),e.j41(6,"div",12)(7,"div",13)(8,"button",14),e.EFF(9," Add Owner "),e.k0s()()()(),e.j41(10,"div",15)(11,"app-action-crud",16),e.bIt("deleteEvent",function(d){return e.eBV(o),e.Njj(i.delete(d))})("editEvent",function(d){return e.eBV(o),e.Njj(i.edit(d))})("createEvent",function(){return e.eBV(o),e.Njj(i.create())}),e.k0s()()(),e.nrm(12,"swal",17,0),e.DNE(14,I,53,10,"ng-template",null,1,e.C5r)}if(2&n){const o=e.sdS(15);e.R7$(11),e.Y8G("datatableConfig",i.datatableConfig)("reload",i.reloadEvent)("modal",o),e.R7$(),e.Y8G("swalOptions",i.swalOptions)}},dependencies:[u.YU,u.bT,l.qT,l.me,l.BC,l.cb,l.YS,l.xh,l.R_,l.vS,l.cV,E.i,F.w,c.$G,c.md,v.b7]})}return r})(),G=(()=>{class r{static \u0275fac=function(n){return new(n||r)};static \u0275cmp=e.VBU({type:r,selectors:[["app-owner-details"]],decls:2,vars:0,template:function(n,i){1&n&&(e.j41(0,"p"),e.EFF(1,"owner-details works!"),e.k0s())}})}return r})(),V=(()=>{class r{static \u0275fac=function(n){return new(n||r)};static \u0275mod=e.$C({type:r});static \u0275inj=e.G2t({imports:[u.MD,l.YN,l.X1,w.iI.forChild([{path:"",component:D},{path:":id",component:G}]),b.B,_.G,c.Pv,c.zH,c.HC,c.n8,v.RZ.forChild()]})}return r})()}}]);