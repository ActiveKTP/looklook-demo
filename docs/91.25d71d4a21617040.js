"use strict";(self.webpackChunkdemo1=self.webpackChunkdemo1||[]).push([[91],{91:(T,g,i)=>{i.r(g),i.d(g,{BuilderModule:()=>R});var u=i(177),f=i(4550),e=i(4438),b=(i(6369),i(2101)),d=i(9417),h=i(5126);const k=["form"],m=t=>({active:t}),p=t=>({active:t});function _(t,c){1&t&&(e.qex(0),e.j41(1,"span",69),e.EFF(2,"Preview"),e.k0s(),e.bVm())}function v(t,c){1&t&&(e.qex(0),e.j41(1,"span",70),e.EFF(2),e.nrm(3,"span",71),e.k0s(),e.bVm()),2&t&&(e.R7$(),e.xc7("display","block"),e.R7$(),e.SpI(" Please wait..."," "," "))}function j(t,c){1&t&&(e.qex(0),e.j41(1,"span",69),e.EFF(2,"Reset"),e.k0s(),e.bVm())}function y(t,c){1&t&&(e.qex(0),e.j41(1,"span",70),e.EFF(2),e.nrm(3,"span",71),e.k0s(),e.bVm()),2&t&&(e.R7$(),e.xc7("display","block"),e.R7$(),e.SpI(" Please wait..."," "," "))}let C=(()=>{class t{layout;activeTab="Sidebar";model;form;configLoading=!1;resetLoading=!1;constructor(s){this.layout=s}ngOnInit(){this.model=this.layout.getLayoutConfig(this.layout.getBaseLayoutTypeFromLocalStorage())}setActiveTab(s){this.activeTab=s}resetPreview(){this.resetLoading=!0,this.layout.resetBaseConfig()}submitPreview(){this.configLoading=!0,this.layout.saveBaseConfig(this.model)}static \u0275fac=function(r){return new(r||t)(e.rXU(b.Y2))};static \u0275cmp=e.VBU({type:t,selectors:[["app-builder"]],viewQuery:function(r,o){if(1&r&&e.GBs(k,7),2&r){let l;e.mGM(l=e.lsd())&&(o.form=l.first)}},decls:153,vars:53,consts:[["form","ngForm"],[1,"card","mb-10"],[1,"card-body","d-flex","align-items-center","p-5","p-lg-8"],[1,"d-flex","h-50px","w-50px","h-lg-80px","w-lg-80px","flex-shrink-0","flex-center","position-relative","align-self-start","align-self-lg-center","mt-3","mt-lg-0"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 24 24",1,"text-primary","h-75px","w-75px","h-lg-100px","w-lg-100px","position-absolute","opacity-5"],["fill","currentColor","d","M10.2,21.23,4.91,18.17a3.58,3.58,0,0,1-1.8-3.11V8.94a3.58,3.58,0,0,1,1.8-3.11L10.2,2.77a3.62,3.62,0,0,1,3.6,0l5.29,3.06a3.58,3.58,0,0,1,1.8,3.11v6.12a3.58,3.58,0,0,1-1.8,3.11L13.8,21.23A3.62,3.62,0,0,1,10.2,21.23Z"],["name","wrench",1,"fs-2x","fs-lg-3x","text-primary","position-absolute"],[1,"ms-6"],[1,"list-unstyled","text-gray-600","fw-bold","fs-6","p-0","m-0"],[1,"card","card-custom"],[1,"card-header","card-header-stretch","overflow-auto"],["role","tablist",1,"nav","nav-stretch","nav-line-tabs","fw-bold","border-transparent","flex-nowrap"],[1,"nav-item"],["role","tab",1,"nav-link","cursor-pointer",3,"click","ngClass"],["novalidate","",1,"form",3,"ngSubmit"],[1,"card-body"],[1,"tab-content","pt-3"],[1,"tab-pane",3,"ngClass"],[1,"form-group","d-flex","flex-stack"],[1,"d-flex","flex-column"],[1,"fw-bold","text-gray-900"],[1,"fs-7","fw-semibold","text-muted"],[1,"d-flex","justify-content-end"],[1,"form-check","form-check-custom","form-check-solid","form-check-success","form-switch"],[1,"form-check","form-check-custom","form-check-solid","form-switch","mb-2"],["type","checkbox","name","model.app.sidebar.default.fixed.desktop",1,"form-check-input",3,"ngModelChange","ngModel"],[1,"separator","separator-dashed","my-6"],["type","checkbox","name","model.app.sidebar.default.minimize.desktop.enabled",1,"form-check-input",3,"ngModelChange","ngModel"],["for","kt_builder_sidebar_minimize_desktop_enabled","data-bs-toggle","tooltip","data-kt-initialized","1",1,"form-check-label","text-gray-700","fw-bold"],[1,"form-check","form-check-custom","form-check-solid","form-check-success","form-switch","ms-10"],["type","checkbox","name","model.app.sidebar.default.minimize.desktop.hoverable",1,"form-check-input",3,"ngModelChange","ngModel"],["for","kt_builder_sidebar_minimize_desktop_hoverable","data-bs-toggle","tooltip","data-kt-initialized","1",1,"form-check-label","text-gray-700","fw-bold"],["type","checkbox","name","model.app.sidebar.default.minimize.desktop.default",1,"form-check-input",3,"ngModelChange","ngModel"],["for","kt_builder_sidebar_minimize_desktop_default","data-bs-toggle","tooltip","data-kt-initialized","1",1,"form-check-label","text-gray-700","fw-bold"],["type","checkbox","name","model.app.header.default.fixed.desktop",1,"form-check-input",3,"ngModelChange","ngModel"],[1,"form-check","form-check-custom","form-check-success","form-check-solid","form-check-sm","ms-10"],["type","radio","checked","checked","value","menu","id","kt_builder_header_content_menu","name","model.app.header.default.content","value","menu",1,"form-check-input",3,"ngModelChange","ngModel"],["for","kt_builder_header_content_menu",1,"form-check-label","text-gray-700","fw-bold","text-nowrap"],["type","radio","value","page-title","id","kt_builder_header_content_page-title","name","layout-builder[layout][app][header][default][content]","name","model.app.header.default.content","value","page-title",1,"form-check-input",3,"ngModelChange","ngModel"],["for","kt_builder_header_content_page-title",1,"form-check-label","text-gray-700","fw-bold","text-nowrap"],[1,"form-check","form-check-custom","form-check-solid","form-check-success","form-switch","me-10"],["type","checkbox","name","layout-builder[layout][app][toolbar][fixed][desktop]","id","kt_builder_toolbar_fixed_desktop","name","model.app.toolbar.fixed.desktop",1,"form-check-input","w-45px","h-30px",3,"ngModelChange","ngModel"],["for","kt_builder_toolbar_fixed_desktop",1,"form-check-label","text-gray-700","fw-bold"],["type","checkbox","name","model.app.toolbar.fixed.mobile","id","kt_builder_toolbar_fixed_mobile",1,"form-check-input","w-45px","h-30px",3,"ngModelChange","ngModel"],["for","kt_builder_toolbar_fixed_mobile",1,"form-check-label","text-gray-700","fw-bold"],[1,"mb-6"],[1,"fw-semibold","text-muted","fs-7","d-block","lh-1"],["data-kt-buttons","true","data-kt-buttons-target",".form-check-image:not(.disabled),.form-check-input:not([disabled])","data-kt-initialized","1"],[1,"form-check-image","form-check-success","mb-10",3,"ngClass"],[1,"form-check-wrapper"],["src","./assets/media/misc/layout/toolbar-classic.png","alt","",1,"mw-100"],[1,"form-check","form-check-custom","form-check-success","form-check-sm","form-check-solid"],["type","radio","checked","checked","value","classic","name","model.app.toolbar.layout",1,"form-check-input",3,"ngModelChange","ngModel"],[1,"form-check-label","text-gray-800"],["src","./assets/media/misc/layout/toolbar-saas.png","alt","",1,"mw-100"],["type","radio","value","saas","name","model.app.toolbar.layout",1,"form-check-input",3,"ngModelChange","ngModel"],["src","./assets/media/misc/layout/toolbar-accounting.png","alt","",1,"mw-100"],["type","radio","value","accounting","name","model.app.toolbar.layout",1,"form-check-input",3,"ngModelChange","ngModel"],["src","./assets/media/misc/layout/toolbar-extended.png","alt","",1,"mw-100"],["type","radio","value","extended","name","model.app.toolbar.layout",1,"form-check-input",3,"ngModelChange","ngModel"],["src","./assets/media/misc/layout/toolbar-reports.png","alt","",1,"mw-100"],["type","radio","value","reports","name","model.app.toolbar.layout",1,"form-check-input",3,"ngModelChange","ngModel"],[1,"card-footer","py-6"],[1,"row"],[1,"col-lg-3"],[1,"col-lg-9"],["type","button",1,"btn","btn-primary","me-2",3,"click","disabled"],[4,"ngIf"],["type","button","id","kt_layout_builder_reset",1,"btn","btn-active-light","btn-color-muted",3,"click","disabled"],[1,"indicator-label"],[1,"indicator-progress"],[1,"spinner-border","spinner-border-sm","align-middle","ms-2"]],template:function(r,o){if(1&r){const l=e.RV6();e.j41(0,"div",1)(1,"div",2)(2,"div",3),e.qSk(),e.j41(3,"svg",4),e.nrm(4,"path",5),e.k0s(),e.joV(),e.nrm(5,"app-keenicon",6),e.k0s(),e.j41(6,"div",7)(7,"p",8),e.EFF(8," The layout builder is to assist your set and configure your preferred project layout specifications and preview it in real-time and export the HTML template with its includable partials of this demo. The downloaded version does not include the assets folder since the layout builder's main purpose is to help to generate the final HTML code without hassle. Layout builder changes don't affect pages with layout wrappers. "),e.k0s()()()(),e.j41(9,"div",9)(10,"div",10)(11,"ul",11)(12,"li",12)(13,"a",13),e.bIt("click",function(){return e.eBV(l),e.Njj(o.setActiveTab("Sidebar"))}),e.EFF(14," Sidebar "),e.k0s()(),e.j41(15,"li",12)(16,"a",13),e.bIt("click",function(){return e.eBV(l),e.Njj(o.setActiveTab("Header"))}),e.EFF(17," Header "),e.k0s()(),e.j41(18,"li",12)(19,"a",13),e.bIt("click",function(){return e.eBV(l),e.Njj(o.setActiveTab("Toolbar"))}),e.EFF(20," Toolbar "),e.k0s()()()(),e.j41(21,"form",14,0),e.bIt("ngSubmit",function(){return e.eBV(l),e.Njj(o.submitPreview())}),e.j41(23,"div",15)(24,"div",16)(25,"div",17)(26,"div",18)(27,"div",19)(28,"h4",20),e.EFF(29,"Fixed"),e.k0s(),e.j41(30,"div",21),e.EFF(31,"Fixed sidebar mode"),e.k0s()(),e.j41(32,"div",22)(33,"div",23)(34,"div",24)(35,"input",25),e.mxI("ngModelChange",function(a){return e.eBV(l),e.DH7(o.model.app.sidebar.default.fixed.desktop,a)||(o.model.app.sidebar.default.fixed.desktop=a),e.Njj(a)}),e.k0s()()()()(),e.nrm(36,"div",26),e.j41(37,"div",18)(38,"div",19)(39,"h4",20),e.EFF(40,"Minimize"),e.k0s(),e.j41(41,"div",21),e.EFF(42,"Sidebar minimize mode"),e.k0s()(),e.j41(43,"div",22)(44,"div",23)(45,"div",23)(46,"input",27),e.mxI("ngModelChange",function(a){return e.eBV(l),e.DH7(o.model.app.sidebar.default.minimize.desktop.enabled,a)||(o.model.app.sidebar.default.minimize.desktop.enabled=a),e.Njj(a)}),e.k0s(),e.j41(47,"label",28),e.EFF(48,"Minimize Toggle"),e.k0s()(),e.j41(49,"div",29)(50,"input",30),e.mxI("ngModelChange",function(a){return e.eBV(l),e.DH7(o.model.app.sidebar.default.minimize.desktop.hoverable,a)||(o.model.app.sidebar.default.minimize.desktop.hoverable=a),e.Njj(a)}),e.k0s(),e.j41(51,"label",31),e.EFF(52,"Hoverable"),e.k0s()(),e.j41(53,"div",29)(54,"input",32),e.mxI("ngModelChange",function(a){return e.eBV(l),e.DH7(o.model.app.sidebar.default.minimize.desktop.default,a)||(o.model.app.sidebar.default.minimize.desktop.default=a),e.Njj(a)}),e.k0s(),e.j41(55,"label",33),e.EFF(56,"Default Minimized"),e.k0s()()()()()(),e.j41(57,"div",17)(58,"div",18)(59,"div",19)(60,"h4",20),e.EFF(61,"Fixed"),e.k0s(),e.j41(62,"div",21),e.EFF(63,"Fixed header mode"),e.k0s()(),e.j41(64,"div",22)(65,"div",23)(66,"div",24)(67,"input",34),e.mxI("ngModelChange",function(a){return e.eBV(l),e.DH7(o.model.app.header.default.fixed.desktop,a)||(o.model.app.header.default.fixed.desktop=a),e.Njj(a)}),e.k0s()()()()(),e.nrm(68,"div",26),e.j41(69,"div",18)(70,"div",19)(71,"h4",20),e.EFF(72,"Content"),e.k0s(),e.j41(73,"div",21),e.EFF(74,"Header content type"),e.k0s()(),e.j41(75,"div",22)(76,"div",35)(77,"input",36),e.mxI("ngModelChange",function(a){return e.eBV(l),e.DH7(o.model.app.header.default.content,a)||(o.model.app.header.default.content=a),e.Njj(a)}),e.k0s(),e.j41(78,"label",37),e.EFF(79,"Menu"),e.k0s()(),e.j41(80,"div",35)(81,"input",38),e.mxI("ngModelChange",function(a){return e.eBV(l),e.DH7(o.model.app.header.default.content,a)||(o.model.app.header.default.content=a),e.Njj(a)}),e.k0s(),e.j41(82,"label",39),e.EFF(83,"Page Title"),e.k0s()()()()(),e.j41(84,"div",17)(85,"div",18)(86,"div",19)(87,"h4",20),e.EFF(88,"Fixed"),e.k0s(),e.j41(89,"div",21),e.EFF(90,"Fixed toolbar mode"),e.k0s()(),e.j41(91,"div",22)(92,"div",22)(93,"div",40)(94,"input",41),e.mxI("ngModelChange",function(a){return e.eBV(l),e.DH7(o.model.app.toolbar.fixed.desktop,a)||(o.model.app.toolbar.fixed.desktop=a),e.Njj(a)}),e.k0s(),e.j41(95,"label",42),e.EFF(96,"Desktop Mode"),e.k0s()(),e.j41(97,"div",23)(98,"input",43),e.mxI("ngModelChange",function(a){return e.eBV(l),e.DH7(o.model.app.toolbar.fixed.mobile,a)||(o.model.app.toolbar.fixed.mobile=a),e.Njj(a)}),e.k0s(),e.j41(99,"label",44),e.EFF(100,"Mobile Mode"),e.k0s()()()()(),e.nrm(101,"div",26),e.j41(102,"div",45)(103,"h4",20),e.EFF(104,"Layout"),e.k0s(),e.j41(105,"div",46),e.EFF(106,"Select a toolbar layout"),e.k0s()(),e.j41(107,"div",47)(108,"label",48)(109,"div",49),e.nrm(110,"img",50),e.k0s(),e.j41(111,"div",51)(112,"input",52),e.mxI("ngModelChange",function(a){return e.eBV(l),e.DH7(o.model.app.toolbar.layout,a)||(o.model.app.toolbar.layout=a),e.Njj(a)}),e.k0s(),e.j41(113,"div",53),e.EFF(114,"Classic"),e.k0s()()(),e.j41(115,"label",48)(116,"div",49),e.nrm(117,"img",54),e.k0s(),e.j41(118,"div",51)(119,"input",55),e.mxI("ngModelChange",function(a){return e.eBV(l),e.DH7(o.model.app.toolbar.layout,a)||(o.model.app.toolbar.layout=a),e.Njj(a)}),e.k0s(),e.j41(120,"div",53),e.EFF(121,"SaaS"),e.k0s()()(),e.j41(122,"label",48)(123,"div",49),e.nrm(124,"img",56),e.k0s(),e.j41(125,"div",51)(126,"input",57),e.mxI("ngModelChange",function(a){return e.eBV(l),e.DH7(o.model.app.toolbar.layout,a)||(o.model.app.toolbar.layout=a),e.Njj(a)}),e.k0s(),e.j41(127,"div",53),e.EFF(128,"Accounting"),e.k0s()()(),e.j41(129,"label",48)(130,"div",49),e.nrm(131,"img",58),e.k0s(),e.j41(132,"div",51)(133,"input",59),e.mxI("ngModelChange",function(a){return e.eBV(l),e.DH7(o.model.app.toolbar.layout,a)||(o.model.app.toolbar.layout=a),e.Njj(a)}),e.k0s(),e.j41(134,"div",53),e.EFF(135,"Extended"),e.k0s()()(),e.j41(136,"label",48)(137,"div",49),e.nrm(138,"img",60),e.k0s(),e.j41(139,"div",51)(140,"input",61),e.mxI("ngModelChange",function(a){return e.eBV(l),e.DH7(o.model.app.toolbar.layout,a)||(o.model.app.toolbar.layout=a),e.Njj(a)}),e.k0s(),e.j41(141,"div",53),e.EFF(142,"Reports"),e.k0s()()()()()()(),e.j41(143,"div",62)(144,"div",63),e.nrm(145,"div",64),e.j41(146,"div",65)(147,"button",66),e.bIt("click",function(){return e.eBV(l),e.Njj(o.submitPreview())}),e.DNE(148,_,3,0,"ng-container",67)(149,v,4,3,"ng-container",67),e.k0s(),e.j41(150,"button",68),e.bIt("click",function(){return e.eBV(l),e.Njj(o.resetPreview())}),e.DNE(151,j,3,0,"ng-container",67)(152,y,4,3,"ng-container",67),e.k0s()()()()()()}2&r&&(e.R7$(13),e.Y8G("ngClass",e.eq3(31,m,"Sidebar"===o.activeTab)),e.R7$(3),e.Y8G("ngClass",e.eq3(33,m,"Header"===o.activeTab)),e.R7$(3),e.Y8G("ngClass",e.eq3(35,m,"Toolbar"===o.activeTab)),e.R7$(6),e.Y8G("ngClass",e.eq3(37,m,"Sidebar"===o.activeTab)),e.R7$(10),e.R50("ngModel",o.model.app.sidebar.default.fixed.desktop),e.R7$(11),e.R50("ngModel",o.model.app.sidebar.default.minimize.desktop.enabled),e.R7$(4),e.R50("ngModel",o.model.app.sidebar.default.minimize.desktop.hoverable),e.R7$(4),e.R50("ngModel",o.model.app.sidebar.default.minimize.desktop.default),e.R7$(3),e.Y8G("ngClass",e.eq3(39,m,"Header"===o.activeTab)),e.R7$(10),e.R50("ngModel",o.model.app.header.default.fixed.desktop),e.R7$(10),e.R50("ngModel",o.model.app.header.default.content),e.R7$(4),e.R50("ngModel",o.model.app.header.default.content),e.R7$(3),e.Y8G("ngClass",e.eq3(41,m,"Toolbar"===o.activeTab)),e.R7$(10),e.R50("ngModel",o.model.app.toolbar.fixed.desktop),e.R7$(4),e.R50("ngModel",o.model.app.toolbar.fixed.mobile),e.R7$(10),e.Y8G("ngClass",e.eq3(43,p,"classic"===o.model.app.toolbar.layout)),e.R7$(4),e.R50("ngModel",o.model.app.toolbar.layout),e.R7$(3),e.Y8G("ngClass",e.eq3(45,p,"saas"===o.model.app.toolbar.layout)),e.R7$(4),e.R50("ngModel",o.model.app.toolbar.layout),e.R7$(3),e.Y8G("ngClass",e.eq3(47,p,"accounting"===o.model.app.toolbar.layout)),e.R7$(4),e.R50("ngModel",o.model.app.toolbar.layout),e.R7$(3),e.Y8G("ngClass",e.eq3(49,p,"extended"===o.model.app.toolbar.layout)),e.R7$(4),e.R50("ngModel",o.model.app.toolbar.layout),e.R7$(3),e.Y8G("ngClass",e.eq3(51,p,"reports"===o.model.app.toolbar.layout)),e.R7$(4),e.R50("ngModel",o.model.app.toolbar.layout),e.R7$(7),e.Y8G("disabled",o.configLoading||o.resetLoading),e.R7$(),e.Y8G("ngIf",!o.configLoading),e.R7$(),e.Y8G("ngIf",o.configLoading),e.R7$(),e.Y8G("disabled",o.configLoading||o.resetLoading),e.R7$(),e.Y8G("ngIf",!o.resetLoading),e.R7$(),e.Y8G("ngIf",o.resetLoading))},dependencies:[u.YU,u.bT,d.qT,d.me,d.Zm,d.Fm,d.BC,d.cb,d.vS,d.cV,h.w],encapsulation:2})}return t})();var M=i(837),F=i(4035),B=i(7470);let R=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=e.$C({type:t});static \u0275inj=e.G2t({imports:[u.MD,d.YN,F.e1,M.n8,B.G,f.iI.forChild([{path:"",component:C}])]})}return t})()}}]);