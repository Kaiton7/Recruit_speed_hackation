function movetopositon(a,b){var c=new google.maps.LatLng(a,b),d=new google.maps.LatLng(TWNCMN.lat,TWNCMN.lon),e={zoom:15,center:c,mapTypeId:google.maps.MapTypeId.ROADMAP},f=new google.maps.Map(document.getElementById("jsi-map-area"),e);new google.maps.Marker({position:d,map:f,title:""})}function getHtml(a,b){var c=document.getElementById(b);TWNCMN.ajax.getHtml(a,c)}function getJson(a,b,c){var d=document.getElementById(b);TWNCMN.ajax.getJson(a,d,c)}function getJsonAll(a,b,c){var d=document.getElementById(b);TWNCMN.ajax.getJsonAll(a,d,c)}function checkJbSrch(a){var b="",c="",d="",e="";if("1"===a)return $(".twn-contents-job-wrap").find(".jbNum").html("--"),void 0;$targetList=$("ul#jsi-accordion").children("li"),$targetList.each(function(){$(this).find("input[name=jmc]").size()===$(this).find("input[name=jmc]:checked").size()||0===$(this).find("input[name=jmc]:checked").size()&&0!==$(this).find("input[name=jc]:checked").size()?c+="&"+$(this).find("input[name=jc]").serialize():0!==$(this).find("input[name=jmc]:checked").size()&&(d+="&"+$(this).find("input[name=jmc]").serialize())}),c&&d?b=d+"&"+c:c?b=c:d&&(b=d),$hidden=$("#hiddenDiv input[name!=ac][name!=fw]");var f=$("#hiddenDiv input[name=fw]").val(),g=$("#hiddenDiv input[name=ac]").serialize();if(e=$hidden.serialize(),e&&(b+="&"+e),f&&(b+="&fw="+f),b&&g&&(b+="&"+g),0==b.indexOf("&",0)&&(b=b.replace(/^&/,"")),!b)return $(".twn-contents-job-wrap").find(".jbNum").html("--"),void 0;var h=b+TWNCMN.listSrchApiKey+TWNCMN.listSrchApiFrmt+TWNCMN.listSrchApiLimitNum+"&uacc=03";TWNCMN.ajax.getAPIJson(TWNCMN.listSrchApiUrl,h,".jbNum")}function setCookie(a){var b=getExpire();a+="expires="+b+";",a+="path=/;",document.cookie=a}function setSessionCookie(a){a+="path=/;",document.cookie=a}function delCookie(a){var b=new Date;b.setTime(0),a+="=;",a+="expires="+b+";",a+="path=/;",document.cookie=a}function getExpire(){var a=new Date;a.setTime(a.getTime()+31536e7);var b=a.toGMTString();return b}function setCookieUserAccCtgryCd(a){var b,c=$(a),d=c.data("user-acc-ctgry-cd");(d||"01"===d||"03"===d)&&(b="uacc="+d+";",setCookie(b))}function setCookieStVal(a){var b;a&&(b="st="+a+";",setSessionCookie(b))}function checkAppNm(){"アプリ"==$("input[name='useSrvc']:checked").val()?$("#divAppNm").removeClass("jsc-dn"):$("#divAppNm").addClass("jsc-dn")}function setFwSrchStVal(){var a=$("body #form-freeword").val();a.match(/^[0-9]{8}$/)?setCookieStVal("08"):setCookieStVal("04")}function keepListReg(a,b){var c="/keepListReg?joid="+a+"&procid="+b,d="jsi-kept-num",e="count";getJson(c,d,e)}function keepListDel(a,b){var c="/keepListReg?joid="+a+"&procid="+b,d="jsi-kept-num";TWNCMN.ajax.getRedirect(c,d)}function AppDoneListDel(a){var b="/appDoneUpd?appHisSeqNoTxt="+a;TWNCMN.ajax.getRedirect(b)}function TelDoneListDel(a){var b="/telDoneListReg?joid="+a+"&procid=00";TWNCMN.ajax.getRedirect(b)}function telDoneListReg(a,b){var c="/telDoneListReg?joid="+a+"&procid="+b;getJson(c)}function latestCheck(a,b,c,d,e){var f=TWNCMN.latestCheckApiKey+TWNCMN.latestCheckApiFrmt+"&joid="+a+"&date="+b,g=TWNCMN.latestCheckApiUrl;return TWNCMN.ajax.updateStatusCheck.getStatus(g,f)?(d.preventDefault(),TWNSP.detail.updateConfModal.getTxtAdd(e),TWNSP.common.showModalOnLoad.showModal(e),_sc_trackCustomLink_notTransition("phone_call_error"),void 0):(telDoneListReg(a,c),void 0)}function delay(a){for(var b=(new Date).getTime(),c=(new Date).getTime();b+a>c;)c=(new Date).getTime()}function getNaviTimeApi(a){var b=$(a),c=b.data("rqmtid"),d=b.data("ctgrycd"),e=b.data("ttlseqno"),f=b.data("addrseqno"),g="/NrstStnInfoGet?rqmtId="+c+"&mapTtlCtgryCd="+d+"&mapTtlSeqNo="+e+"&mapAddrSeqNo="+f,h="#jsi-navi-nrst";TWNCMN.lat=b.data("lat"),TWNCMN.lon=b.data("lon"),TWNCMN.common.ajax.getJsonNavi(g,h)}window.TWNCMN=TWNCMN||{};var TWNCMN=window.TWNCMN;TWNCMN.common={ajax:{getHtml:function(a,b){$.ajax({type:"get",url:a,dataType:"html",success:function(a){b.html(a)},error:function(){alert("データの読み込みに失敗しました。")}})},getJsonNavi:function(a,b){$.ajax({type:"get",url:a,dataType:"json",success:function(a){for(var c="",d=0;d<a.length;d++){var e,f=a[d].latitu,g=a[d].longit;if($("#pageid-detail-sp").length>0){var h=d+1,i="SELECT_NEAR_STATION_"+parseInt(h,10);e='<li><a href="javascript: void(0);" onclick="movetopositon('+f+","+g+");_sc_trackCustomLink_notTransition('"+i+"');\">"}else e='<li><a href="javascript: void(0);" onclick="movetopositon('+f+","+g+')">';var j=e+a[d].stnNm+a[d].alongNm+" "+a[d].nrstExit+"(約"+a[d].oFTime+"分)"+"</a></li>";c+=j}$(b).html(c)}})}},stationGeoSearch:function(){return{onSucceced:function(a){var b=a.coords,c=String(b.latitude).replace(".","X"),d=String(b.longitude).replace(".","X"),e=StationGeoSearch.url,f=StationGeoSearch.ac;location.href=-1===e.indexOf("?")?e+"?ac="+f+"&lat="+c+"&lng="+d:-1===e.indexOf("ac=")?e+"&ac="+f+"&lat="+c+"&lng="+d:e+"&lat="+c+"&lng="+d},onErrored:function(){TWNSP.common.stationGeoSearchModal.fadeInModal()},options:{timeout:5e3}}}()},TWNCMN.ajax={getHtml:function(a,b){$.ajax({type:"get",url:a,dataType:"html",success:function(a){b.innerHTML=a}})},getAPIJson:function(a,b,c){var d=0;b.indexOf("slc=")>=0&&d++,b.indexOf("suc=")>=0&&d++,1==d&&(b=b.replace(/.slc=\d+/g,""),b=b.replace(/.suc=\d+/g,"")),b.indexOf("&&")>=0&&(b=b.replace("&&","&")),$.ajax({type:"get",data:b,url:a,dataType:"json",success:function(a){var b=a.results.resultsAvailable.toString().replace(/([\d]+?)(?=(?:\d{3})+$)/g,function(a){return a+","});$(c).hasClass("easyNum")&&"0"!==$(c)[0].innerHTML&&"0"===b&&alert("選択した条件でヒットする求人がありません"),$(c).html(b)}})},getJson:function(a,b,c){$.ajax({type:"get",url:a,dataType:"json",success:function(a){for(key in a)c==key&&(b.innerHTML=a[key])}})},getJsonAll:function(a,b,c){$.ajax({type:"get",url:a,dataType:"json",success:function(a){b.innerHTML="";for(key in a)b.innerHTML+=a[key]+c}})},getRedirect:function(a,b){$.ajax({type:"get",url:a,dataType:"json",success:function(a){for(key in a)if(null!=a.error&&""!=a.error)$(b).html(a.error);else if(null!=a.url&&""!=a.url){window.location.href=a.url;break}}})},updateStatusCheck:function(){var a=!1;return{getStatus:function(b,c){return $.ajax({type:"post",url:b,data:c,dataType:"json",async:!1,timeout:1e3}).then(function(b){a=TWNCMN.ajax.updateStatusCheck.isErrorStatusCheck(b)?!0:!1},function(){a=!1}),a},isErrorStatusCheck:function(b){return a="ERROR"===b.results.status&&"E20001"===b.results.errorInfo[0].code?!0:!1}}}()},$(".twn-contents-job-wrap #jsi-active-btn-area, #jsi-fixable-btn-area").on("click",".jsc-clear-btn",function(a){a.preventDefault()}).on(TWNSP.common.event.touchend,".jsc-clear-btn",function(a){if(!$(".renew-contents-area-wrap").length){a.preventDefault();var b="",c="";$hidden=$("#hiddenDiv input[name!=ac][name!=fw]");var d=$("#hiddenDiv input[name=fw]").val(),e=$("#hiddenDiv input[name=ac]").serialize();if(c=$hidden.serialize(),c&&(b+="&"+c),d&&(b+="&fw="+d),b&&e&&(b+="&"+e),0==b.indexOf("&",0)&&(b=b.replace(/^&/,"")),!b)return $(".twn-contents-job-wrap").find(".jbNum").html("--"),void 0;var f=b+TWNCMN.listSrchApiKey+TWNCMN.listSrchApiFrmt+TWNCMN.listSrchApiLimitNum+"&uacc=03";TWNCMN.ajax.getAPIJson(TWNCMN.listSrchApiUrl,f,".jbNum")}}),$("#jsi-accordion").on("change","input[name=jc]:checkbox",function(){if(!$(".renew-contents-area-wrap").length){var a,b="",c="",d="",e="";$targetli=$(this).parents("ul.jsc-toggle-area").parent("li");var f=$(this).is(":checked");a=f?$("ul#jsi-accordion").children("li"):$("ul#jsi-accordion").children("li").not($targetli),a.each(function(){$(this).find("input[name=jc]").is(":checked")?c+="&"+$(this).find("input[name=jc]").serialize():$(this).find("input[name=jmc]").is(":checked")&&(d+="&"+$(this).find("input[name=jmc]").serialize())}),c&&d?b=d+"&"+c:c?b=c:d&&(b=d),$hidden=$("form").children("div#hiddenDiv").find("input").not("input[name=page]").not("input[name=ds]").not("input[name=ac]").not("input[name=fw]");var g=$("form").children("div#hiddenDiv").find("input[name=fw]").val(),h=$("#hiddenDiv input[name=ac]").serialize();if(e=$hidden.serialize(),e&&(b+="&"+e),g&&(b+="&fw="+g),b&&h&&(b+="&"+h),0==b.indexOf("&",0)&&(b=b.replace(/^&/,"")),!b)return $(".twn-contents-job-wrap").find(".jbNum").html("--"),void 0;var i=b+TWNCMN.listSrchApiKey+TWNCMN.listSrchApiFrmt+TWNCMN.listSrchApiLimitNum+"&uacc=03";TWNCMN.ajax.getAPIJson(TWNCMN.listSrchApiUrl,i,".jbNum")}}).on("change","input[name=jmc]:checkbox",function(){if(!$(".renew-contents-area-wrap").length){var a="",b="",c="",d="",e=$(this).is(":checked");$targetList=$("ul#jsi-accordion").children("li"),$targetli=$(this).parents("ul.jsc-toggle-area").parent("li"),$checkedList=$(this).parents(".acc-wrap-min"),$targetList=$targetList.not($targetli),e?$checkedList.find("input[name=jmc]:checked").size()===$checkedList.find("input[name=jmc]").size()?b="jc="+$checkedList.parents(".jsc-toggle-area").find("input[name=jc]").val():c=$checkedList.find("input[name=jmc]").serialize():c=$targetli.find("input[name=jmc]").serialize(),$targetList.each(function(){$(this).find("input[name=jc]").is(":checked")?b+="&"+$(this).find("input[name=jc]").serialize():$(this).find("input[name=jmc]").is(":checked")&&(c+="&"+$(this).find("input[name=jmc]").serialize())}),b&&c?a=c+"&"+b:b?a=b:c&&(a=c),$hidden=$("form").children("div#hiddenDiv").find("input").not("input[name=page]").not("input[name=ds]").not("input[name=ac]").not("input[name=fw]");var f=$("form").children("div#hiddenDiv").find("input[name=fw]").val(),g=$("#hiddenDiv input[name=ac]").serialize();if(d=$hidden.serialize(),d&&(a+="&"+d),f&&(a+="&fw="+f),a&&g&&(a+="&"+g),0==a.indexOf("&",0)&&(a=a.replace(/^&/,"")),!a)return $(".twn-contents-job-wrap").find(".jbNum").html("--"),void 0;var h=a+TWNCMN.listSrchApiKey+TWNCMN.listSrchApiFrmt+TWNCMN.listSrchApiLimitNum+"&uacc=03";TWNCMN.ajax.getAPIJson(TWNCMN.listSrchApiUrl,h,".jbNum")}}),$(window).on("load",function(){if(window.location.pathname.indexOf("/railwaySelect/")>0||"/alongRailSrch/"===window.location.pathname){var a=TWNCMN.common.stationGeoSearch;$(".station-geo-search-btn").on("click",function(){navigator.geolocation?navigator.geolocation.getCurrentPosition(a.onSucceced,a.onErrored,a.options):a.onErrored()})}}),$("div.jbt-srch-btn").on("click",".btn-search",function(){$jcVals=$('.contents-area-wrap input[name="jc"]');for(var a=$jcVals.length,b="",c=0;a>c;c++){var d=$jcVals[c];if($jc=$(d),$jc.is(":checked"))b+=""===b?$jc.serialize():"&"+$jc.serialize();else{var e=$jc.parents(".jsc-linked-checkbox-group").find(".acc-wrap-min"),f=e.find("input").length,g=e.find("input:checked");f==g.length?b+=""===b?$jc.serialize():"&"+$jc.serialize():0!=g.length&&(b+=""===b?g.serialize():"&"+g.serialize())}}var h=$("#hiddenDiv input[name!=fw]").serialize(),i=$("#hiddenDiv input[name=fw]").val();h&&i?b+="&"+h+"&fw="+i:h?b+="&"+h:i&&(b+="&fw="+i),0==b.indexOf("&",0)&&(b=b.replace(/^&/,""));var j="/joSrchRsltList/?"+b;return window.location.href=j,!1}),$("#tw-jsc-btn-check-submit").one("click",function(){$("form").submit()}),$("#jsi-freeword").on("click",".jsc-submit-btn",function(){var a=$("#form-freeword").val();a&&(a=encodeURIComponent(a),pUrl="/"+$("#textfield001").val()+"&fw="+a,TWNCMN.ajax.getRedirect(pUrl,$("#jsi-freeword .error-txt")))}),$(".research-wrap form").on("submit",function(){var a=$(this).find("input[name!=fw]").serialize(),b=$(this).find("input[name=fw]").val(),c=encodeURIComponent(b);if(b&&a)a+="&fw="+c;else{if(!b)return;a="fw="+c}return location.href=this.action+"?"+a,!1}),$("#jsi-detail-modal-wrapper").on("click","#jsi-around-station",function(a){a.preventDefault()}).on(TWNSP.common.event.touchend,"#jsi-around-station",function(){if(TWNSP.common.isTouchDevice){if(!TWNSP.common.isTouchMove){if(0!==$("#jsi-navi-nrst").html().length)return;getNaviTimeApi(this)}}else{if(0!==$("#jsi-navi-nrst").html().length)return;getNaviTimeApi(this)}}),$(".jsc-recommend-cookie a").on("click",function(){var a=$(this).data("st-param");setCookieStVal(a)}).css("cursor","pointer"),$(".jsc-pc-device").on("click",function(){setCookieUserAccCtgryCd($(this).find("a"))}).css("cursor","pointer"),$(".jsc-btn-combine-inner").on("click",function(a){return a.preventDefault(),$(".jodet-form").submit(),!1});