function scGetMltV(a,b,c,d){for(var e,f=a.split("&"),g=new RegExp("^"+b+"="),h=0;h<f.length;h++)f[h].match(g)&&(e?e.length+d<100&&(e=e+":"+f[h].substring(c)):e=f[h].substring(c));return e}function scUrlMltV(a,b){for(var c,d=sc_pathname.indexOf(a),e=sc_pathname.substring(d).split("_"),f=0;f<e.length;f++)e[f].match(/([a-z]+)(.*)/)&&RegExp.$1==a&&(c?c.length+b<100&&(c=c+":"+e[f+1]):c=e[f+1]);return c}function scGetMltVRid(a,b,c,d){for(var e,f=a.split("&"),g=0;g<f.length;g++)f[g].match(b)&&(e?e.length+d<100&&(e=e+",;"+f[g].substring(c)):e=f[g].substring(c),_sc.pageName.indexOf("0501_0103")>-1&&(e+=";1;0"));return e}function setScEvents(a){s.linkTrackVars="events",s.linkTrackEvents=a,s.events=a,s.tl(this,"o",a)}s.prop51=_sc.prop51?_sc.prop51:"",s.prop51=s.prop51.replace(/\|$/,""),s.prop52=s.prop51?'D=c51+" : "+pageName':"D=pageName",s.prop51&&(s.events=s.apl(s.events,"event42",",")),s.pageType=_sc.pageType?_sc.pageType:"",s.prop31=_sc.prop31?_sc.prop31:"",s.eVar31=s.prop31?"D=c31":"",s.prop32=_sc.prop32?_sc.prop32:"",s.eVar32=s.prop32?"D=c32":"",s.eVar33=_sc.eVar33?_sc.eVar33:"",s.eVar39=_sc.eVar39?_sc.eVar39:"",s.eVar57=_sc.eVar57?_sc.eVar57:"",s.prop57=s.eVar57?"D=v57":"",s.eVar58=_sc.eVar58?_sc.eVar58:"",s.prop58=s.eVar58?"D=v58":"",s.eVar59=_sc.eVar59?_sc.eVar59:"",s.prop59=s.eVar59?"D=v59":"",s.eVar60="1"==_sc.eVar60?"ON":"0"==_sc.eVar60?"OFF":"",s.prop60=s.eVar60&&_sc.pageName.indexOf("0501_0103")>-1?"D=v60":"",s.eVar62=_sc.eVar62?_sc.eVar62:"",s.eVar6=_sc.eVar6?_sc.eVar6:"",s.eVar44=_sc.eVar44?_sc.eVar44:"",s.eVar45=_sc.eVar45?_sc.eVar45:"",s.eVar46=_sc.eVar46?_sc.eVar46:"",s.eVar47=_sc.eVar47?_sc.eVar47:"",s.prop73=_sc.prop73?_sc.prop73:"",s.eVar73=s.prop73?"D=c73":"",s.prop54=_sc.prop54?_sc.prop54:"",s.eVar54=s.prop54?"D=c54":"",s.prop62=_sc.prop62?_sc.prop62:"",s.eVar64=_sc.eVar64?_sc.eVar64:"",s.prop68=_sc.prop68?_sc.prop68:"",s.eVar68=_sc.eVar68?_sc.eVar68:"",s.eVar69=_sc.eVar69?_sc.eVar69:"",s.prop69=_sc.prop69?_sc.prop69:"",s.prop74=_sc.prop74?_sc.prop74:"",s.prop75=_sc.prop75?_sc.prop75:"",s.eVar75=_sc.eVar75?_sc.eVar75:"",s.eVar74=_sc.eVar74?_sc.eVar74:"",s.eVar78=_sc.eVar78?_sc.eVar78:"",s.eVar79=_sc.eVar79?_sc.eVar79:"",s.eVar82=_sc.eVar82?_sc.eVar82:"",s.eVar84=_sc.eVar84?_sc.pageName+">"+_sc.eVar84:"",s.eVar93=_sc.eVar93?_sc.eVar93:"",s.eVar94=_sc.eVar94?_sc.eVar94:"",s.eVar97=_sc.eVar97?_sc.eVar97:"",s.eVar98=_sc.eVar98?_sc.eVar98:"",s.eVar99=_sc.eVar99?_sc.eVar99:"",s.prop1=_sc.prop1?_sc.prop1:"",s.prop56=_sc.prop56?_sc.prop56:"";var scStructureUrl=location.href;s.prop8=scStructureUrl,s.eVar8="D=c8",sc_pathname=scURLBuf.pathname.toLowerCase();var params={};if(s.prop12||(s.prop12=s.getQueryParam("lac","",scURLBuf.url),s.eVar12=s.prop12?"D=c12":"",s.prop12&&(params.lac=1)),s.prop13||(s.prop13=s.getQueryParam("ac","",scURLBuf.url),s.eVar13=s.prop13?"D=c13":"",s.prop13&&(params.ac=1)),s.prop14||(s.prop14=s.getQueryParam("mac","",scURLBuf.url),s.eVar14=s.prop14?"D=c14":"",s.prop14&&(params.mac=1)),s.prop15||(s.prop15=s.getQueryParam("sac","",scURLBuf.url),scURLBuf.search.match(/\W{1}((sac=[a-zA-Z0-9].*&?)+)/)&&(s.prop15=scGetMltV(RegExp.$1,"sac",4,5),s.eVar15=s.prop15?"D=c15":"",s.prop15&&(params.sac=s.prop15.split(":").length))),s.prop16||(s.prop16=s.getQueryParam("xsac","",scURLBuf.url),scURLBuf.search.match(/\W{1}((xsac=[a-zA-Z0-9].*&?)+)/)&&(s.prop16=scGetMltV(RegExp.$1,"xsac",5,5),s.eVar16=s.prop16?"D=c16":"",s.prop16&&(params.xsac=s.prop16.split(":").length))),s.prop19||scURLBuf.search.match(/\W{1}((jc=[a-zA-Z0-9]{3}&?)+)/)&&(s.prop19=scGetMltV(RegExp.$1,"jc",3,3),s.eVar19=s.prop19?"D=c19":"",s.prop19&&(params.jc=s.prop19.split(":").length)),s.prop20||scURLBuf.search.match(/\W{1}((jmc=[a-zA-Z0-9]{5}&?)+)/)&&(s.prop20=scGetMltV(RegExp.$1,"jmc",4,5),s.eVar20=s.prop20?"D=c20":"",s.prop20&&(params.jmc=s.prop20.split(":").length)),s.prop50||(s.prop50=s.getQueryParam("tdc","",scURLBuf.url),s.prop50&&(params.tdc=1)),s.prop17||scURLBuf.search.match(/\W{1}((lc=[a-zA-Z0-9]{6}&?)+)/)&&(s.prop17=scGetMltV(RegExp.$1,"lc",3,6),s.eVar17=s.prop17?"D=c17":"",s.prop17&&(params.lc=s.prop17.split(":").length)),s.prop18||scURLBuf.search.match(/\W{1}((sc=[a-zA-Z0-9]{5}&?)+)/)&&(s.prop18=scGetMltV(RegExp.$1,"sc",3,5),s.eVar18=s.prop18?"D=c18":"",s.prop18&&(params.sc=s.prop18.split(":").length)),s.prop25||scURLBuf.search.match(/\W{1}fw=([^&;]+)/)&&(s.prop25=decodeURIComponent(RegExp.$1),s.eVar25=s.prop25?"D=c25":"",s.prop25&&(params.fw=1)),s.prop21||scURLBuf.search.match(/\W{1}((prc=[a-zA-Z0-9]{4}&?)+)/)&&(s.prop21=scGetMltV(RegExp.$1,"prc",4,4),s.eVar21=s.prop21?"D=c21":"",s.prop21&&(params.prc=s.prop21.split(":").length)),s.eVar34||(s.eVar34=s.getQueryParam("thw_id","",scStructureUrl)),s.prop22||(s.prop22=s.getQueryParam("emc","",scURLBuf.url),scURLBuf.search.match(/\W{1}((emc=[a-zA-Z0-9].*&?)+)/)&&(s.prop22=scGetMltV(RegExp.$1,"emc",4,2),s.eVar22=s.prop22?"D=c22":"",s.prop22&&(params.emc=s.prop22.split(":").length))),s.prop23||(s.prop23=s.getQueryParam("suc","",scURLBuf.url),s.eVar23=s.prop23?"D=c23":"",s.prop23&&(params.suc=1)),s.prop24||(s.prop24=s.getQueryParam("slc","",scURLBuf.url),s.eVar24=s.prop24?"D=c24":"",s.prop24&&(params.slc=1)),s.prop63||(s.prop63=s.getQueryParam("page","",scURLBuf.url),s.eVar63=s.prop63?"D=c63":"",s.prop63&&(params.page=1)),!s.prop27){var uvc=s.getQueryParam("uvc","",scURLBuf.url),uvcc=s.getQueryParam("uvcc","",scURLBuf.url);uvc&&uvcc&&(s.prop27=uvc+"_"+uvcc,s.eVar27=s.prop27?"D=c27":"",s.prop27&&(params.uvc=1,params.uvcc=1))}if(s.prop28||(s.prop28=s.getQueryParam("fcc","",scURLBuf.url),s.eVar28=s.prop28?"D=c28":"",s.prop28&&(params.fcc=1)),s.prop26||(s.prop26=s.getQueryParam("kwd","",scURLBuf.url),s.eVar26=s.prop26?"D=c26":"",s.prop26&&(params.kwd=1)),s.prop29||(s.prop29=s.getQueryParam("brdc","",scURLBuf.url),s.eVar29=s.prop29?"D=c29":"",s.prop29&&(params.brdc=1)),_sc.pageName.indexOf("0301_0101")>-1&&!s.prop45){s.prop45="";for(key in params)s.prop45+=key+":"+params[key]+"|";s.prop45=s.prop45.replace(/\|$/,"")}s.prop30||(s.prop30=s.getQueryParam("clc","",scURLBuf.url),s.eVar30=s.prop30?"D=c30":""),s.prop5||(s.prop5=s.c_r("visitor_id2"),s.eVar5=s.prop5?"D=c5":"");var sc_products;if(s.products||(_sc.products?sc_products=_sc.products:scURLBuf.search.match(/\W{1}((joid=[a-zA-Z0-9]{8}&?)+)/)&&(sc_products=";"+scGetMltVRid(RegExp.$1,"joid",5,8)),s.products=sc_products),!s.prop61&&_sc.pageName.indexOf("0501_0103")>-1&&_sc.products&&(s.prop61=s.eVar61=_sc.products.split(",").length),_sc.pageName.indexOf("0101_0101")>-1?s.prop9="TOP":_sc.pageName.indexOf("0102_")>-1?s.prop9="AREA_TOP":_sc.pageName.indexOf("0103_")>-1?s.prop9="KEN_TOP":_sc.pageName.indexOf("0201_")>-1?s.prop9="SEARCH":_sc.pageName.indexOf("0202_")>-1?s.prop9="SEARCH":_sc.pageName.indexOf("0203_")>-1?s.prop9="SEARCH":_sc.pageName.indexOf("0204_")>-1?s.prop9="SEARCH":_sc.pageName.indexOf("0301_")>-1?s.prop9="LIST":_sc.pageName.indexOf("0401_")>-1?s.prop9="DET":_sc.pageName.indexOf("0501_0101")>-1?s.prop9="INPUT":_sc.pageName.indexOf("0501_0102")>-1?s.prop9="CONFIRMATION":_sc.pageName.indexOf("0501_0103")>-1&&(s.prop9="COMPLETION"),s.prop9&&(s.prop44="D=c9"),_sc.pageName.indexOf("通常版")>-1?s.eVar43="normal":_sc.pageName.indexOf("社員版")>-1&&(s.eVar43="shain"),s.prop67||(s.prop67=s.getQueryParam("svos","",scURLBuf.url),s.prop67||(s.prop67=s.getQueryParam("svos","",s.d.URL)),s.eVar67=s.prop67?"D=c67":""),s.prop48||sc_pathname.match(/\/magazine(\/[\w-]+)?(\/[\w-]+)?(\/[\w-]+)?(\/[\w-]+)?\??.*/)&&(s.prop48=RegExp.$1+RegExp.$2+RegExp.$3+RegExp.$4),s.prop48&&!s.eVar48&&(s.eVar48=s.prop48),s.prop48&&!s.eVar86&&(s.eVar86=s.prop48),!s.prop47&&location.pathname.match(/^\/kw\//)){var si_urlSrc=scStructureUrl.indexOf(/kw/);s.prop47=decodeURIComponent(scStructureUrl.substr(si_urlSrc)),s.eVar4=s.prop47?"D=c47":""}if(_sc.pageName.indexOf("0101_0101")>-1)s.events=s.apl(s.events,"event21,event22",",");else if(_sc.pageName.indexOf("0102_0101")>-1)s.events=s.apl(s.events,"event23,event24",",");else if(_sc.pageName.indexOf("0103_0101")>-1)s.events=s.apl(s.events,"event25,event26",",");else if(_sc.pageName.indexOf("0301_0101")>-1)s.events=s.apl(s.events,"event1,event2",","),_sc.event33&&(s.events=s.apl(s.events,_sc.event33,","));else if(_sc.pageName.indexOf("0401_0101")>-1)s.events=s.apl(s.events,"prodView,event3,event4",",");else if(_sc.pageName.indexOf("0404_0101")>-1)s.events=s.apl(s.events,"event13,event14",",");else if(_sc.pageName.indexOf("0501_0101")>-1)s.events=s.apl(s.events,"scCheckout,event5,event6",",");else if(_sc.pageName.indexOf("0501_0102")>-1)s.events=s.apl(s.events,"event7,event8",",");else if(_sc.pageName.indexOf("0501_0103")>-1){s.events=s.apl(s.events,"purchase,event9,event10,event12",",");var unit=s.prop61?s.prop61:1;if(s.events=s.apl(s.events,"event11="+unit,","),_sc.purchaseID&&(s.purchaseID=_sc.purchaseID),_sc.products){for(var e31=e32=0,p=_sc.products.split(","),i=0;i<p.length;i++){var c=p[i].split(";");"51"==c[0]||"52"==c[0]?e32++:e31++}s.events=s.apl(s.events,"event31="+e31,","),s.events=s.apl(s.events,"event32="+e32,",")}}else _sc.pageName.indexOf("0601_0101")>-1?s.events=s.apl(s.events,"event27,event28",","):_sc.pageName.indexOf("0601_0102")>-1?s.events=s.apl(s.events,"event19,event20",","):_sc.pageName.indexOf("0703_0101")>-1&&_sc.event53&&(s.events=s.apl(s.events,_sc.event53,","));_sc.event109&&(s.events=s.apl(s.events,_sc.event109,",")),_sc.event95&&(s.events=s.apl(s.events,_sc.event95,",")),_sc.event96&&(s.events=s.apl(s.events,_sc.event96,",")),_sc.event97&&(s.events=s.apl(s.events,_sc.event97,",")),_sc.event105&&(s.events=s.apl(s.events,_sc.event105,",")),_sc.event106&&(s.events=s.apl(s.events,_sc.event106,",")),_sc.event52&&(s.events=s.apl(s.events,_sc.event52,","));var s_rid=s.c_r("s_rid");if(s_rid&&(_sc.event54&&(s.events=s.apl(s.events,_sc.event54+":"+s_rid,",")),_sc.event55&&(s.events=s.apl(s.events,_sc.event55+":"+s_rid,","))),document.querySelector(".js-keepBadge-event")&&(s.events=s.apl(s.events,"event61",",")),_sc.event41&&(s.events=s.apl(s.events,_sc.event41,",")),_sc.event50&&(s.events=s.apl(s.events,_sc.event50,",")),_sc.event62&&(s.events=s.apl(s.events,_sc.event62,",")),_sc.event63&&(s.events=s.apl(s.events,_sc.event63,",")),_sc.event64&&(s.events=s.apl(s.events,_sc.event64,",")),_sc.event65&&(s.events=s.apl(s.events,_sc.event65,",")),_sc.event66&&(s.events=s.apl(s.events,_sc.event66,",")),_sc.event67&&(s.events=s.apl(s.events,_sc.event67,",")),_sc.event138&&(s.events=s.apl(s.events,_sc.event138,",")),_sc.event139&&(s.events=s.apl(s.events,_sc.event139,",")),_sc.event140&&(s.events=s.apl(s.events,_sc.event140,",")),_sc.event141&&(s.events=s.apl(s.events,_sc.event141,",")),_sc.pageName.indexOf("0301_0101")>-1){var popular_features=s.getQueryParam("popular_features","",scStructureUrl);popular_features&&(s.prop55="SCS0301_0101>popular_features-"+popular_features)}try{kzs("activateSiteCatalyst")}catch(e){}var s_code=s.t();s_code&&document.write(s_code);