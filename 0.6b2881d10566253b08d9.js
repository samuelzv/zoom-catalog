(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{IoOh:function(n,t,l){"use strict";l.r(t);var b=l("CcnG"),a=function(){},o=l("t68o"),u=l("pMnS"),e=l("ZYCi"),c=function(){function n(n,t){var l=this;this.route=n,this.router=t,this.catalog=this.route.snapshot.data.catalog,this.navigationSubscription=this.router.events.subscribe(function(n){n instanceof e.d&&l.refreshCatalog()})}return n.prototype.refreshCatalog=function(){this.catalog=this.route.snapshot.data.catalog},n}(),i=b.Sa({encapsulation:0,styles:[[".catalog[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}"]],data:{}});function r(n){return b.jb(0,[(n()(),b.Ua(0,0,null,null,4,"div",[["class","generic-container"]],null,null,null,null,null)),(n()(),b.Ua(1,0,null,null,1,"h1",[["class","generic-page-title"]],null,null,null,null,null)),(n()(),b.ib(2,null,["Catalog #",""])),(n()(),b.Ua(3,0,null,null,1,"div",[["class","catalog"]],null,null,null,null,null)),(n()(),b.Ua(4,0,null,null,0,"img",[["alt",""]],[[8,"src",4]],null,null,null,null))],null,function(n,t){var l=t.component;n(t,2,0,l.catalog.id),n(t,4,0,l.catalog.url)})}var s=b.Qa("zoom-catalog-detail",c,function(n){return b.jb(0,[(n()(),b.Ua(0,0,null,null,1,"zoom-catalog-detail",[],null,null,null,r,i)),b.Ta(1,49152,null,0,c,[e.a,e.l],null,null)],null,null)},{},{},[]),d=l("Ip0R"),p=l("Wf4p"),g=l("eDkP"),f=l("Fzqc"),h=l("o3x0"),v=l("M2Lx"),C=l("t/Na"),y=l("AytR"),j={headers:new C.g({"Content-Type":"application/json"})},S=function(){function n(n){this.http=n}return n.prototype.getCatalog=function(n){return this.http.get(y.a.servicesURL+"/photos/"+n,j)},n}(),k=function(){function n(n){this.catalogsService=n}return n.prototype.resolve=function(n){return this.catalogsService.getCatalog(n.params.id)},n}(),m=l("y4qS"),w=l("dWZg"),U=l("UodH"),M=l("FVSy"),x=l("/dO6"),O=l("4c35"),R=l("qAlS"),q=l("seP3"),z=l("/VYK"),A=l("b716"),F=l("SMsm"),L=l("LC5p"),N=l("0/Q6"),P=l("Nsh5"),Y=l("BHnd"),G=l("8mMr"),H=l("CjO/"),I=function(){},J=l("YSh2");l.d(t,"CatalogsModuleNgFactory",function(){return K});var K=b.Ra(a,[],function(n){return b.ab([b.bb(512,b.k,b.Ga,[[8,[o.a,u.a,s]],[3,b.k],b.A]),b.bb(4608,d.k,d.j,[b.x,[2,d.t]]),b.bb(4608,p.b,p.b,[]),b.bb(4608,g.a,g.a,[g.g,g.c,b.k,g.f,g.d,b.t,b.C,d.c,f.b,[2,d.f]]),b.bb(5120,g.h,g.i,[g.a]),b.bb(5120,h.b,h.c,[g.a]),b.bb(4608,h.d,h.d,[g.a,b.t,[2,d.f],[2,h.a],h.b,[3,h.d],g.c]),b.bb(4608,v.c,v.c,[]),b.bb(4608,S,S,[C.c]),b.bb(4608,k,k,[S]),b.bb(1073742336,d.b,d.b,[]),b.bb(1073742336,m.p,m.p,[]),b.bb(1073742336,f.a,f.a,[]),b.bb(1073742336,p.j,p.j,[[2,p.c]]),b.bb(1073742336,w.b,w.b,[]),b.bb(1073742336,p.t,p.t,[]),b.bb(1073742336,U.c,U.c,[]),b.bb(1073742336,M.d,M.d,[]),b.bb(1073742336,x.e,x.e,[]),b.bb(1073742336,O.f,O.f,[]),b.bb(1073742336,R.d,R.d,[]),b.bb(1073742336,g.e,g.e,[]),b.bb(1073742336,h.j,h.j,[]),b.bb(1073742336,v.d,v.d,[]),b.bb(1073742336,q.d,q.d,[]),b.bb(1073742336,z.c,z.c,[]),b.bb(1073742336,A.b,A.b,[]),b.bb(1073742336,F.b,F.b,[]),b.bb(1073742336,p.k,p.k,[]),b.bb(1073742336,p.r,p.r,[]),b.bb(1073742336,L.a,L.a,[]),b.bb(1073742336,N.c,N.c,[]),b.bb(1073742336,R.b,R.b,[]),b.bb(1073742336,P.h,P.h,[]),b.bb(1073742336,Y.l,Y.l,[]),b.bb(1073742336,G.b,G.b,[]),b.bb(1073742336,H.a,H.a,[]),b.bb(1073742336,e.n,e.n,[[2,e.t],[2,e.l]]),b.bb(1073742336,I,I,[]),b.bb(1073742336,a,a,[]),b.bb(256,x.a,{separatorKeyCodes:[J.f]},[]),b.bb(256,p.f,H.b,[]),b.bb(1024,e.j,function(){return[[{path:"detail/:id",component:c,resolve:{catalog:k}}]]},[])])})}}]);