TWNSP.search={clearMultiChecks:function(){for(var a,b=$("#jsi-switch-wrapper"),c=b.find("input:checkbox").filter(":checked"),d=0,e=c.length;e>d;d++)a=c.eq(d),a.prop("checked",!1).triggerHandler("change"),this.toggleCheckBoxStyle(a[0]);b.find(".jsc-section-23").length||$(document.body).hasClass("jsc-already-hold-condition")?b.find(".jsc-switch-current").hasClass("jsc-section-23")||$(document.body).hasClass("jsc-already-hold-condition")?b.find(".jsc-switch-current").find(".jsc-clear-btn").addClass("jsc-disabled"):this.affixMulti.toggleBtn():this.affixMulti.toggleBtn()},affixMulti:function(){var a=$(window),b=a.height(),c=$(".jsc-bottom-viewport-area"),d=$("#jsi-switch-wrapper"),e=d.find("input:checkbox"),f=d.find(".jsc-fixable-btn-area"),g=d.find(".jsc-active-btn-area"),h=d.find(".jsc-inactive-btn-area");return{isScrolling:!1,detectScroll:function(){setInterval(function(){TWNSP.search.affix.isScrolling&&(TWNSP.search.affix.isScrolling=!1,TWNSP.search.affix.fix())},50)},fix:function(){var a;a=this.isBottomArea()?!1:this.isCheckedExist();var b=$("#jsi-footer");f.closest(".jsc-section-23").length||$(document.body).hasClass("jsc-already-hold-condition")?f.closest(".jsc-switch-current").hasClass("jsc-section-23")||$(document.body).hasClass("jsc-already-hold-condition")?(f.closest(".jsc-switch-current").find(".jsc-clear-btn").toggleClass("jsc-disabled",!a),b.toggleClass("ft-fixed",a)):(f.toggleClass("jsc-fixed",a),b.toggleClass("ft-fixed",a),this.toggleBtn()):($(document.body).find(".btn-blue-area-fix").hasClass("twn-jsc-fixed")||f.toggleClass("jsc-fixed",a),b.toggleClass("ft-fixed",a),this.toggleBtn())},forceFix:function(a){var b=f.filter(function(){return!!$(this).closest(".jsc-switch-current").length}),c=$("#jsi-footer");a?(b.addClass("jsc-fixed"),c.addClass("ft-fixed")):(b.removeClass("jsc-fixed"),c.removeClass("ft-fixed")),this.forceToggleClearBtn(a)},toggleBtn:function(){var a=this.isCheckedExist();$(document.body).find(".btn-blue-area-fix").hasClass("twn-jsc-fixed")||f.toggleClass("jsc-dn",!a),g.toggleClass("jsc-dn",!a),h.toggleClass("jsc-dn",a)},forceToggleClearBtn:function(a){var b=f.filter(function(){return!!$(this).closest(".jsc-switch-current").length}),c=g.filter(function(){return!!$(this).closest(".jsc-switch-current").length}),d=h.filter(function(){return!!$(this).closest(".jsc-switch-current").length});a?(b.removeClass("jsc-dn"),c.removeClass("jsc-dn"),d.addClass("jsc-dn"),b.find(".jsc-clear-btn").addClass("jsc-disabled"),c.find(".jsc-clear-btn").addClass("jsc-disabled")):(b.addClass("jsc-dn"),c.addClass("jsc-dn"),d.removeClass("jsc-dn"),b.find(".jsc-clear-btn").removeClass("jsc-disabled"),c.find(".jsc-clear-btn").removeClass("jsc-disabled"))},isBottomArea:function(){if(c.length){var d=a.scrollTop(),e=d+b,f=c.offset().top;return e>=f}},isCheckedExist:function(){var a=!1;$targetCheckboxes=$(".jsc-switch-current").length?$(".jsc-switch-current").find("input:checkbox"):e;for(var b=0,c=$targetCheckboxes.length;c>b;b++){if($targetCheckboxes.eq(b).prop("checked")){a=!0;break}b===c-1&&(a=!1)}return a}}}(),selectSwitch:function(){var a,b,c=$("#jsi-switch-wrapper").find(".jsc-switch-content");return{change:function(d){var e=$(d),f=e.closest("ul"),g=f.find(".jsc-switch-link"),h=g.index(e);a=e.closest("section"),a.removeClass("jsc-switch-current").addClass("jsc-dn"),b=c.eq(h+1),b.removeClass("jsc-dn").addClass("jsc-switch-current"),b.hasClass("jsc-section-23")&&TWNSP.search.affixMulti.forceFix(!0)},switchBack:function(){TWNSP.search.clearMultiChecks();var c;if(!a&&!b){if(c=$("#jsi-switch-wrapper"),!c.length)return;a=c.find(".jsc-switch-content").eq(0),b=c.find(".jsc-switch-current")}a.addClass("jsc-switch-current").removeClass("jsc-dn"),b.removeClass("jsc-switch-current").addClass("jsc-dn"),b.hasClass("jsc-section-23")&&TWNSP.search.affixMulti.forceFix(!1)}}}(),toggleOption:function(a){var b=$(a),c=b.closest(".jsc-option-toggle-wrapper"),d=b.find("option").filter(":selected").index(),e=c.find(".jsc-option"),f=e.eq(d-1);0===d?e.addClass("jsc-dn"):(e.filter(".jsc-default-select").toggleClass("jsc-dn",0!==d),e.not(f).addClass("jsc-dn"),f.removeClass("jsc-dn")),this.refreshOption(e)},refreshOption:function(a){for(var b=[],c=0,d=a.length;d>c;c++)b[c]=a.eq(c).find("option.jsc-default-selected").prop("selected",!0)},clearChecks:function(){var a,b=$("#jsi-content-area-wrapper"),c=b.find("input:checkbox").filter(":checked"),d=b.find("select");$("#jsi-accordion").hasClass("jsc-close-scroll")&&$("html, body").animate({scrollTop:c.closest(".jsc-toggle-area").parent("li").find("h2").offset().top},100);for(var e=0,f=c.length;f>e;e++)a=c.eq(e),a.prop("checked",!1).triggerHandler("change"),this.toggleCheckBoxStyle(a[0]);for(var g,h=0,i=d.length;i>h;h++)g=d.eq(h),g.find(".jsc-default-selected").prop("selected","selected"),this.toggleOption(g);for(var j=b.find(".jsc-toggle-area").not(".jsc-dn"),k=0,l=j.length;l>k;k++)this.toggleAccordion(j.eq(k).parent().find(".jsc-accordion-trigger")[0]);TWNSP.search.renew.isRenewPage?this.renew.toggleBtn():this.affix.toggleBtn()},toggleCheckBoxStyle:function(a){var b=$(a),c=b.closest("li");c.toggleClass("jsc-accordion-checked",b.prop("checked"))},checkBoxStyleReset:function(){var a=$("body").find("input:checkbox:checked");if($(".jsc-limited-checks-wrapper"),a.length>0){$(".jsc-accordion-checked").removeClass("jsc-accordion-checked"),$(".jsc-check-label-checked").removeClass("jsc-check-label-checked");var b,c,d=a.closest(".jsc-limited-checks-wrapper");if(d.length>0&&(c=d.data("data-limit-num"),d.attr("data-limit-num",c+1)),a.eq(0).append('<input type="checkbox" id="counterChecker" checked class="jsc-dn">'),$("#counterChecker").click().remove(),d.length>0&&d.attr("data-limit-num",c),"pageid-detail-sp"!=$("body").attr("id"))for(var e=0;e<a.length;e++){b=a.eq(e);var f=b.closest(".jsc-linked-checkbox-group");b.hasClass("jsc-linked-checkbox-all")?(TWNSP.search.renew.isRenewPage?f.find(">li").eq(0).addClass("jsc-accordion-checked"):(b.closest(".acc-wrap-checkbox").addClass("jsc-check-label-checked"),f.addClass("jsc-accordion-checked")),TWNSP.search.renew.isRenewPage?f.find(".renew-acc-wrap-min > li").addClass("jsc-accordion-checked").find(".jsc-check-label").addClass("jsc-check-label-checked"):f.find(".acc-wrap-min > li").addClass("jsc-accordion-checked").find(".acc-wrap-checkbox").addClass("jsc-check-label-checked")):b.hasClass("jsc-linked-checkbox")?(TWNSP.search.renew.isRenewPage?b.closest(".jsc-check-label").addClass("jsc-check-label-checked"):b.closest(".acc-wrap-checkbox").addClass("jsc-check-label-checked"),b.closest("li").addClass("jsc-accordion-checked")):b.hasClass("easy-feature-check-position")?b.closest("li").addClass("jsc-accordion-checked"):b.parent().hasClass("search-select-lst")||(b.closest("li").addClass("jsc-accordion-checked"),b.closest(".jsc-check-label").addClass("jsc-check-label-checked"))}}},toggleActivationBtn:function(a){for(var b=$(a),c=b.closest("body"),d=c.find(".jsc-limited-checks-wrapper"),e=d.find("input:checkbox"),f=0,g=e.length;g>f;f++){if(e.eq(f).prop("checked"))return $(".keep-form").submit(),!0;if(f===g-1)return!1}},toggleAccordion:function(a){var b=$(a),c=!b.find(".jsc-arrow").length,d=c?b.find(".jsc-job-arrow"):b.find(".jsc-arrow"),e=b.next("ul");d.hasClass("grey-line")||(TWNSP.search.renew.isRenewPage?(e.toggleClass("jsc-dn"),b.find(".renew-search-close-icon").toggleClass("renew-rotated"),b.find(".renew-acc-hdr-inner").toggleClass("renew-acc-hdr-inner-open"),TWNSP.search.renew.onOffBuleAreaFix()):(d.toggleClass(c?"ico-arrow-up-job ico-arrow-down-job":"ico-arrow-up ico-arrow-down"),e.toggleClass("jsc-dn")))},deleteConfirmAlert:function(){var a="キープリストから削除します。 \nよろしいですか？",b="Web応募済みリストから削除します。 \nよろしいですか？",c="電話済みリストから削除します。 \nよろしいですか？";return $("#jsi-limited-checks-wrapper").hasClass("jsc-app-message")?window.confirm(b):$("#jsi-limited-checks-wrapper").hasClass("jsc-tel-message")?window.confirm(c):window.confirm(a)},alertNoResultError:function(a){var b=$(a),c=b.closest(".jsc-panel-content-wrapper"),d=c.find(".jsc-counter");d.text("0"),window.alert("ヒット件数が0件です")},previousCount:0,canChangeCounter:function(a){var b=$(a),c=b.closest(".jsc-option-toggle-wrapper");if(!c.find(".jsc-option-required-root").data("stored-selection-num")){if(b.hasClass("jsc-option-required-root"))return!1;if(b.hasClass("jsc-option")&&!b.hasClass("jsc-no-empty-value-option")&&b.find(".jsc-default-selected").prop("selected"))return!1}return TWNSP.search.isLimitOver?(TWNSP.search.isLimitOver=!1,!1):!0},countUpCounter:function(a){if(TWNSP.search.canChangeCounter(a)){var b=$(".jsc-hit-counter");if(document.domain){var c=TWNSP.search.ajax.createCheckBoxParam();TWNSP.search.ajax.postParam(c,function(a){TWNSP.search.renew.animateNumber(b,TWNSP.search.previousCount,a.results.resultsAvailable),TWNSP.search.previousCount=a.results.resultsAvailable})}else TWNSP.search.renew.animateNumber(b,0,1234e4)}},emphasizeCounter:function(a){if(!TWNSP.search.renew.isRenewPage){var b=$(a),c=b.closest(".jsc-option-toggle-wrapper");if(!c.find(".jsc-option-required-root").data("stored-selection-num")){if(b.hasClass("jsc-option-required-root"))return;if(b.hasClass("jsc-option")&&!b.hasClass("jsc-no-empty-value-option")&&b.find(".jsc-default-selected").prop("selected"))return}if(TWNSP.search.isLimitOver)return TWNSP.search.isLimitOver=!1,void 0;var d=$(".jsc-hit-counter");d.css({background:"rgba(255,255,240,0.5)","box-shadow":"0 0 10px 0 rgba(255,255,240,1.0)","-webkit-box-shadow":"0 0 10px 0 rgba(255,255,240,1.0)"}),setTimeout(function(){d.css({transition:"background 0.8s ease-out, box-shadow 0.4s ease-out, -webkit-box-shadow 0.4s ease-out","-webkit-transition":"background 0.4s ease-out, box-shadow 0.4s ease-out, -webkit-box-shadow 0.4s ease-out"})},1),setTimeout(function(){d.css({background:"none","box-shadow":"none","-webkit-box-shadow":"none"}),setTimeout(function(){d.css({transition:"none","-webkit-transition":"none"})},400)},401)}},storeSelectedOption:function(a){for(var b=$(a),c=b.closest(".jsc-option-toggle-wrapper"),d=c.find(".jsc-option"),e=0,f=0,g=d.length;g>f;f++)e+=d.eq(f).find("option:selected").index();c.find(".jsc-option-required-root").data("stored-selection-num",e)},accordion:function(){return{toggleNestedAccodion:function(a){var b=$(a),c=b.closest(".jsc-nested-accordion-wrapper"),d=c.find(".jsc-accordion-nested-content");b.hasClass("grey-line")||(b.toggleClass("ico-arrow-up ico-arrow-down"),d.toggleClass("jsc-dn"))}}}(),linkCheckbox:function(){function a(a,b){for(var c,d=0,e=a.length;e>d;d++)c=a.eq(d),c.prop("checked",!b)&&(c.prop("checked",b).triggerHandler("change"),TWNSP.search.toggleCheckBoxStyle(c[0]))}var b,c;return{link:function(a){var d=$(a),e=d.closest(".jsc-linked-checkbox-group"),f=e.find(".jsc-linked-checkbox");b=f.not(".jsc-linked-checkbox-all"),c=f.filter(".jsc-linked-checkbox-all");var g=d.prop("checked"),h=d.hasClass("jsc-linked-checkbox-all");h&&g?(this.checkChildren(!0),this.checkParent(!0),this.toggleAllStatus(!0)):h&&!g?(this.checkParent(!1),this.checkChildren(!1),this.toggleAllStatus(!1)):h||(this.checkParent(this.checkStatus()),this.toggleAllStatus(this.checkStatus())),d.hasClass("jsc-duplicated")&&this.toggleCheckSameId(a,g),h&&f.filter(".jsc-duplicated").length&&this.toggleCheckSameIdFromAll(f,g)},toggleAllStatus:function(a){c.toggleClass("jsc-all-checked",a)},checkParent:function(b){a(c,b)},checkChildren:function(c){a(b,c)},isPreventCheckByLimit:function(a){var b,c,d=a.data("check-id"),e=0;return $(".jsc-linked-checkbox").not(".jsc-linked-checkbox-all").each(function(){b=$(this),b.prop("checked")&&e++,c=b.data("check-id"),c&&c===d&&e++}),e>$(".jsc-linked-check-limited-wrapper").data("limit-num")},isPreventCheckAllByLimit:function(a){var b=$(".jsc-linked-checkbox").not(".jsc-linked-checkbox-all").filter(function(){return $(this).prop("checked")}).length,c=1*$(".jsc-linked-check-limited-wrapper").data("limit-num");return b+a>c},isLimitOver:function(){var a=$("#jsi-content-area-wrapper"),b=a.find(".jsc-linked-checkbox").filter(function(){var a=$(this);return a.prop("checked")&&!a.closest(".jsc-linked-checkbox-group").find(".jsc-linked-checkbox-all").prop("checked")}).length,c=a.find(".jsc-linked-check-limited-wrapper").data("limit-num");return b>c},alertLimitOver:function(){var a=(b.not(":checked"),1*$(".jsc-linked-check-limited-wrapper").data("limit-num")),c="選択できる駅は"+a+"個までです";window.alert(c)},toggleCheckSameId:function(a,d){for(var e,f,g,h=$(a),i=h.data("check-id"),j=$(".jsc-duplicated").not(h).filter(function(){return $(this).data("check-id")===i}),k=j.closest(".jsc-check-label"),l=0,m=j.length;m>l;l++)e=j.eq(l),d?k.addClass("jsc-check-label-checked"):k.removeClass("jsc-check-label-checked"),e.prop("checked",d).triggerHandler("change"),TWNSP.search.toggleCheckBoxStyle(e[0]),f=e.closest(".jsc-linked-checkbox-group"),g=f.find(".jsc-linked-checkbox"),b=g.not(".jsc-linked-checkbox-all"),c=g.filter(".jsc-linked-checkbox-all"),$parentCheckboxesWrap=g.closest(".jsc-all-check-trigger"),this.checkStatus()?$parentCheckboxesWrap.addClass("jsc-check-label-checked"):$parentCheckboxesWrap.removeClass("jsc-check-label-checked"),c.prop("checked",this.checkStatus()).triggerHandler("change"),TWNSP.search.toggleCheckBoxStyle(c[0])},toggleCheckSameIdFromAll:function(a,b){for(var c=a.filter(".jsc-duplicated"),d=0,e=c.length;e>d;d++)this.toggleCheckSameId(c.eq(d)[0],b)},checkStatus:function(){for(var a=!1,c=0,d=b.length;d>c;c++){if(!b.eq(c).prop("checked")){a=!1;break}c===d-1&&(a=!0)}return a},refreshCheckGroup:function(a){a.hasClass("jsc-linked-checkbox")&&a.hasClass("jsc-all-checked")&&a.closest(".jsc-linked-checkbox-group").find(".jsc-linked-checkbox-all").change()}}}(),keepMultiCheck:function(){var a=$(".jsc-limited-checks-wrapper"),b=a.data("limit-num"),c=0,d=$(".jsc-keep-check-counter"),e=a.find("input:checkbox"),f=!0,g="まとめてチェックする",h="まとめてチェックを外す";return e.length<b&&(b=e.length),{multiCheckBox:function(){0===c?($(".jsc-btn-keep-multi").addClass("is-checked").text(h),$(".jsc-btn-multi-check-entry").addClass("is-active")):c>0&&($(".jsc-btn-keep-multi").removeClass("is-checked").text(g),$(".jsc-btn-multi-check-entry").removeClass("is-active"))},check:function(){if(c>=b);else if(b>c){for(var a=$("#jsi-limited-checks-wrapper").find("input:checkbox:not(:checked)"),e=b-c,f=0;e>f;f++)$(a).eq(f).prop("checked",!0);c=b,$(".jsc-keep-fixable-btn-area").addClass("jsc-entry-fixed-slide-in").removeClass("jsc-entry-fixed-slide-out jsc-dn"),$(".jsc-btn-keep-multi").addClass("is-checked").text(h),$(".jsc-btn-multi-check-entry").addClass("is-active"),d.text(c),this.checkAnimation()}},removeChecked:function(){$("input:checkbox").removeAttr("checked"),c=0,$(".jsc-keep-fixable-btn-area").addClass("jsc-entry-fixed-slide-out").removeClass("jsc-entry-fixed-slide-in jsc-dn"),d.text(c)},alertLimitOverChecks:function(){f=!1},checkCount:function(){f?(c=$("input:checkbox:checked").size(),c>0?($(".jsc-keep-fixable-btn-area").addClass("jsc-entry-fixed-slide-in").removeClass("jsc-entry-fixed-slide-out jsc-dn"),$(".jsc-btn-multi-check-entry").addClass("is-active"),c===b?$(".jsc-btn-keep-multi").addClass("is-checked").text(h):$(".jsc-btn-keep-multi").removeClass("is-checked").text(g),d.text(c),this.checkAnimation()):($(".jsc-keep-fixable-btn-area").addClass("jsc-entry-fixed-slide-out").removeClass("jsc-entry-fixed-slide-in jsc-dn"),$(".jsc-btn-multi-check-entry").removeClass("is-active"),d.text(c))):f=!0},checkAnimation:function(){d.css({background:"rgba(255,255,240,0.5)","box-shadow":"0 0 10px 0 rgba(255,255,240,1.0)","-webkit-box-shadow":"0 0 10px 0 rgba(255,255,240,1.0)"}),setTimeout(function(){d.css({transition:"background 0.8s ease-out, box-shadow 0.4s ease-out, -webkit-box-shadow 0.4s ease-out","-webkit-transition":"background 0.4s ease-out, box-shadow 0.4s ease-out, -webkit-box-shadow 0.4s ease-out"})},1),setTimeout(function(){d.css({background:"none","box-shadow":"none","-webkit-box-shadow":"none"}),setTimeout(function(){d.css({transition:"none","-webkit-transition":"none"})},400)},401)}}}(),affix:function(){var a=$(window),b=a.height(),c=$(".jsc-bottom-viewport-area"),d=$("#jsi-content-area-wrapper"),e=d.find("input:checkbox"),f=$("#jsi-fixable-btn-area"),g=$("#jsi-active-btn-area"),h=$("#jsi-inactive-btn-area");return{isScrolling:!1,detectScroll:function(){setInterval(function(){TWNSP.search.affix.isScrolling&&(TWNSP.search.affix.isScrolling=!1,TWNSP.search.affix.fix())},50)},fix:function(){var a;if(!d.find(".jsc-section-23").length){a=this.isBottomArea()?!1:this.isCheckedExist()||this.isSelectedExist();var b=$("#jsi-footer");$(document.body).hasClass("jsc-already-hold-condition")?(f.find(".jsc-clear-btn").toggleClass("jsc-disabled",!a),g.find(".jsc-clear-btn").toggleClass("jsc-disabled",!a),b.find(".jsc-clear-btn").toggleClass("jsc-disabled",!a)):($(document.body).find(".btn-blue-area-fix").hasClass("twn-jsc-fixed")||f.toggleClass("jsc-fixed",a),b.toggleClass("ft-fixed",a),this.toggleBtn())}},toggleBtn:function(){var a=this.isCheckedExist()||this.isSelectedExist(),b=$("#jsi-footer");$(document.body).hasClass("jsc-already-hold-condition")?(f.find(".jsc-clear-btn").toggleClass("jsc-disabled",!a),g.find(".jsc-clear-btn").toggleClass("jsc-disabled",!a),b.find(".jsc-clear-btn").toggleClass("jsc-disabled",!a)):($(document.body).find(".btn-blue-area-fix").hasClass("twn-jsc-fixed")||f.toggleClass("jsc-dn",!a),g.toggleClass("jsc-dn",!a),h.toggleClass("jsc-dn",a))},isBottomArea:function(){if(c.length){var d=a.scrollTop(),e=d+b,f=c.offset().top;return e>=f}},isCheckedExist:function(){for(var a=!1,b=0,c=e.length;c>b;b++){if(e.eq(b).prop("checked")){a=!0;break}b===c-1&&(a=!1)}return a},isSelectedExist:function(){for(var a=!1,b=d.find("select").not(".jsc-option-required-root"),c=0,e=b.length;e>c;c++){if(!b.eq(c).find("option:selected").hasClass("jsc-default-selected")){a=!0;break}c===e-1&&(a=!1)}return a}}}(),alertLimit:function(){return{alertLimitOverChecks:function(a){for(var b=$(a),c=b.closest(".jsc-limited-checks-wrapper"),d=c.find("input:checkbox").not(".jsc-limit-excluded"),e=c.data("limit-num"),f=0,g=0,h=d.length;h>g;g++)if(d.eq(g).prop("checked")&&(f++,f===e+1)){b.prop("checked",!1),TWNSP.search.toggleCheckBoxStyle(b[0]),this.alertSwichMessage(c,e),TWNSP.search.keepMultiCheck.alertLimitOverChecks();break}},alertSwichMessage:function(a,b){var c="選択可能な項目は"+b+"個までです",d="一括応募できるのは最大"+b+"件までとなります",e="選択できる特徴は"+b+"個までです";a.hasClass("jsc-select-feature")?(TWNSP.search.isLimitOver=!0,window.alert(e)):a.hasClass("jsc-select-subscription")?window.alert(d):window.alert(c)}}}(),moreHistory:function(){return{changeDisplay:function(a,b){a.removeClass("jsc-dn"),b.addClass("jsc-dn")}}}(),keepPopup:function(){return{init:function(){this.buildBubble();var a=this;$(window).scroll(function(){var b=10;$(this).scrollTop()>b&&(a.scrollFlg=!0)}),setTimeout("TWNSP.search.keepPopup.timeoutBubble()",this.interval)},timeoutBubble:function(){this.scrollFlg?this.$bubble.css({bottom:"0"}).promise().done(function(){TWNSP.search.keepPopup.destroyBubble()}):setTimeout("TWNSP.search.keepPopup.timeoutBubble()",this.interval)},msg:'気になる求人があったら<span class="bubble-em-msg">キープ</span>を押そう！画面上部のキープボタンからいつでも確認できるよ！',interval:1e3,getTemplate:function(a){var b='<div id="jsi-bookmark-bubble"><div class="bubble-inner"><div class="bubble-img"></div><p>'+a+"</p>"+'<a href="#" class="bubble-close-btn">'+"</a>"+"</div>"+"</div>";return b},attachEvent:function(){this.$closeBtn.on("click",$.proxy(function(a){a.preventDefault(),this.destroyBubble(!0)},this)),this.$bubble.on("webkitTransitionEnd transitionEnd",$.proxy(function(){this.cleanUp()},this))},buildBubble:function(){this.createBubble(),this.setBubbleStyle()},hideBubble:function(){this.$bubble.addClass("readyRemove").css({bottom:this.verticalPos+"px"})},createBubble:function(){$(document.body).append(this.getTemplate(this.msg))},setBubbleStyle:function(){var a=$("#jsi-bookmark-bubble"),b=a.find(".bubble-inner"),c=a.find(".bubble-img"),d=a.find(".bubble-em-msg"),e=a.find(".bubble-close-btn");a.css({position:"fixed",left:0,zIndex:1e3,width:"100%",boxSizing:"border-box",webkitTransition:"0.7s ease-out",display:"none"}),a.css({bottom:0}),b.css({position:"relative",margin:"0 auto",padding:"20px 40px 20px 10px",boxSizing:"border-box",backgroundColor:"rgba(0, 0, 0, 0.7)",webkitBackgroundSize:"100% 8px",minHeight:"88px",color:"#ffffff"}),c.css({"float":"left",width:"55px",height:"55px",margin:"-2px 7px 3px 5px",backgroundColor:"rgba(255, 255, 255, 1)",backgroundImage:'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHIAAAByCAMAAAC4A3VPAAAAWlBMVEX/////wg4DAQUQDhT/zwro6Oj19fUlISQdGRkwLCyAfn46ODnb29tQTU67urpFQUKmpaXWpyaQj49lY2Ourq5xb3DR0dHHxsadnJxZV1iTdjJqVi2zjSZMPiM/BJtvAAAFD0lEQVRo3u2Z2ZKiQBBF8WbXvkGxi/7/bw5qRCuLw0yJb5yO6A4wmmtm5VZFdnBwcHBwcHDwOcznsXcjMfe+Zdm3sbmThBuP31LU2VdpawGoXmvf+rbSutYGkmffg5UEUXv2arSiLvseXkHG6dJxg5h9j5yotLN7Ncrse7RYGuQh7K4imy7kAXn2PboVF+Zwr5dNV9c7Gs0UtSuG/96zXgcJULVj7KBf3NO4VwHWxF5JAKZU0u8nWaNa1CESvtJ1bwgQoa/z0Wy5Y/kLM7/ypiohBQCSTnvL74sJt2O8qkk2sKikIGFUiG3D+DOPdqy3TJiXq0pBBpI54/Oo1jta+SpZA7rtVx5fYr+AtR2pl+ClKotwfPm9pN3JqVUtgHqSoXGt0lVw/HN/2q50CpB1/qwxJGIJ2WQLHPJPpBqfV48MJ9lXdloBAFGteJ9ESlZ6nVedLh+zxj3D9XK46Uq9tmY6KV6txB0yrtQ6Vpb/x5KnBY9H0FrnrWU8oQrXacVbJy+/Q1JJ10ienTxCUob08KnJa1CllTVqEiXLxLnLS7Srgey3Eq5Lnbs6gspXnBY2gpHVoNQVyQOwnJiYhHsnxjJmcwP5QQvJFUS+sF4374JGuWCAsvls3wHU/O2nIy8f8p4ICP7jYU7ALB/CfafrXkgpVVmx37vM9ntMH00PaD61LgZ61PkQBGBePM3ELrNAJ2GaF0EtgOv5cimK0+lUXBzBsGdn3mdjYnsI/2t1AA3F6efO7c+pmMzuep/tF9eg/LdAXItR55dR9foqydROY1ZHiHe/Ec6nm+Cr5nVS/yuYvbawt1bWjoqjiTPJ87TL7bbpaxSiVTiPgnPJC9WzzvXpFFk658qcNYYMhtOKZEHlbLirPtDLSwEQESC1llDFqLgi6Rab20R4NIAazsWlOA8KStHo1jWkYtNiS01y3aHhUvw8OA0EdVqXHGbzQ0wse63C9TJm3W/6DTSsK44h203/lUKaJNEk58cyU7yRvCDOpljFk0LHzTNivHojOR8/jbRpZiKsSywlyXVsmiaJXfNh5rZiYQgQ1kb+jB+dJlnh+k9WDnBdCadgnw5KbSdmDKB/MPKWltwAJX9u9VKLQcQiLd4Wn8qU7GUMNCyxGFC4N+EN1OLkjCdLZk6eL+ct5/6ciXTDuK+ryclQamcmUNjWlETKAP3LrqRNrOslQnQYNpfzTEJQ3z0tq1MlKxibMUWbZhYy2GaM1zTJ5ZmYo8umpDLZyA6S/pbR/F12/tyDuRh/fk5qduTiUiUbKXV0dF3XO90at7xxHdS0SXOhWPpcB4iHkT83nk3lMgQChAkhKAKm3YrJwLNEfIxKFncH3hmFR71R8Eogo/OGcc5ZG+tuVkP67AM0huKslKQRqc6jfnFxQIgNex/qn+0SrJACJJTr+94IiEthgJBvnE902Sf0ENpb9jhE10SCQrd1Ei7thy8pm8m5NiHfLCEu2xMr4DeP0/JdJTsEnnCclopvMk+bRoYdjWQmaImYMfb3d0WO7ycZAJGPyv1fpxfBsh0lqbe3h6qud8G+6+ptVrEdXyKWOvoSBIBWJSNBxnK/F0G8JoxIUes8X1P0DlILgMpsN5q2irUUfPUL+RowPvNBQDbZnnCDcl7SOWu1AUTHH0d/Pct2pSLAlLFl/FF3O/14S9Rrln2LJgYJkFBmREkAJMO4uF+FW18HI24o46J/vCr9Ppzd4dnBwcHBwcHBN/gDGtxAewRxWJsAAAAASUVORK5CYII=")',webkitBackgroundSize:"57px",backgroundPosition:"-1px -1px",backgroundRepeat:"no-repeat no-repeat"}),d.css({fontWeight:"bold",fontSize:"16px",color:"#ffcb00"}),e.css({position:"absolute",display:"block",top:0,right:0,width:"16px",height:"16px",paddingTop:"10px",paddingRight:"6px",border:"8px solid transparent",backgroundImage:"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAALVBMVEXM3fm+1Pfb5/rF2fjw9f23z/aavPOhwfTp8PyTt/L3+v7T4vqMs/K7zP////+qRWzhAAAAXElEQVQIW2O4CwUM996BwVskxtOqd++2rwMyPI+ve31GD8h4Madqz2mwms5jZ/aBGS/mHIDoen3m+DowY8/hOVUgxusz+zqPg7SvPA1UxQfSvu/du0YUK2AMmDMA5H1qhVX33T8AAAAASUVORK5CYII=)",backgroundPosition:"center",backgroundRepeat:"no-repeat no-repeat"});var f=a.outerHeight(),g=this;this.$bubble=a,this.$closeBtn=e,this.verticalPos=-f,setTimeout(function(){a.css({bottom:g.verticalPos+"px",display:"block"}).promise().done(function(){g.attachEvent()})},0)},destroyBubble:function(a){var b=this;a?this.hideBubble():setTimeout(function(){b.hideBubble()},10*this.interval)},cleanUp:function(){this.$bubble.hasClass("readyRemove")&&this.$bubble.remove()},setCookie:function(a){a+="max-age=86400;",a+="path=/;",document.cookie=a},keepCookieFlg:function(){var a,b=document.cookie;keepNum=$("#jsi-kept-num").text(),tagKey=TWNSP.common.pageTagKey(),pageFlg=tagKey.match(/\/joSrchRsltList\//),pageFlg&&(a=b.indexOf("js_keepPopupF",0),-1===a&&"0"===keepNum&&(this.setCookie("js_keepPopupF=1;"),this.init()))}}}(),renew:function(){var a=$("#jsi-blue-area-top"),b=$("#jsi-fixable-btn-area"),c=Math.max($("#jsi-active-btn-area").outerHeight(),$("#jsi-inactive-btn-area").outerHeight()),d=$(window),e=!1,f=15,g=d.height(),h=$(".jsc-bottom-viewport-area"),i=$("#jsi-content-area-wrapper"),j=i.find("input:checkbox"),k=$("#jsi-fixable-btn-area"),l=$("#jsi-active-btn-area"),m=$("#jsi-inactive-btn-area");return{$toggleHistory:$(".jsc-toggle-history li:not(:first-child)"),$toggleHistoryIcon:$(".jsc-search-more-history-lst-area .renew-search-close-icon"),$toggleHistoryMore:$(".jsc-history-more"),$toggleHistoryClose:$(".jsc-history-close"),isRenewPage:$("#jsi-renew-search").length>0,onOffBuleAreaFix:function(){this.isRenewPage&&(d.scrollTop()+window.innerHeight<a.get(0).offsetTop+c+f?e&&(e=!1,b.removeClass("renew-blue-area-fix-dn")):e||(e=!0,b.addClass("renew-blue-area-fix-dn")))},animateNumber:function(a,b,c){$({count:b}).animate({count:c},{duration:200,easing:"linear",progress:function(){var b=String(Math.ceil(this.count)).replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1,");a.text(b)}})},fix:function(){var a;if(!i.find(".jsc-section-23").length){a=this.isBottomArea()?!1:this.isCheckedExist();var b=$("#jsi-footer");$(document.body).hasClass("jsc-already-hold-condition")?(k.find(".jsc-clear-btn").toggleClass("jsc-disabled",!a),l.find(".jsc-clear-btn").toggleClass("jsc-disabled",!a),b.find(".jsc-clear-btn").toggleClass("jsc-disabled",!a)):(k.toggleClass("jsc-fixed",a),b.toggleClass("ft-fixed",a),this.toggleBtn())}},toggleBtn:function(){var a=this.isCheckedExist(),b=$("#jsi-footer");$(document.body).hasClass("jsc-already-hold-condition")?(k.find(".jsc-clear-btn").toggleClass("jsc-disabled",!a),l.find(".jsc-clear-btn").toggleClass("jsc-disabled",!a),b.find(".jsc-clear-btn").toggleClass("jsc-disabled",!a)):(k.toggleClass("jsc-dn",!a),l.toggleClass("jsc-dn",!a),m.toggleClass("jsc-dn",a))},isBottomArea:function(){if(h.length){var a=d.scrollTop(),b=a+g,c=h.offset().top;return b>=c}},isCheckedExist:function(){for(var a=!1,b=0,c=j.length;c>b;b++){if(j.eq(b).prop("checked")){a=!0;break}b===c-1&&(a=!1)}return a}}}(),ajax:function(){return{postParam:function(a,b,c){var d=TWNCMN.listSrchApiUrl+"?"+a+TWNCMN.listSrchApiKey+TWNCMN.listSrchApiFrmt+TWNCMN.listSrchApiLimitNum+"&uacc=03";$.ajax({type:"post",url:d,dataType:"json",success:b,error:c})},createCheckBoxParam:function(){for(var a="",b=$(".jsc-linked-checkbox-group"),c=0;c<b.length;++c){var d=b.eq(c).find(".jsc-linked-checkbox-all:checked");if(d.length>0)a+="&"+d.attr("name")+"="+d.val();else for(var e=b.eq(c).find(".jsc-linked-checkbox:not(.jsc-linked-checkbox-all):checked"),f=0;f<e.length;++f)a+="&"+e.eq(f).attr("name")+"="+e.eq(f).val()}var g=$("form").children("div#hiddenDiv").find("input").not("input[name=page]").not("input[name=ds]").not("input[name=ac]").not("input[name=fw]"),h=g.serialize();h&&(a+="&"+h);var i=$("form").children("div#hiddenDiv").find("input[name=fw]").val();if(i&&(a+="&fw="+i),a){var j=$("#hiddenDiv input[name=ac]").serialize();j&&(a+="&"+j)}return a=a.substr(1)}}}(),searchChangeModal:function(){var a,b,c,d,e=$("#jsi-freeword"),f=$("#jsi-search-modal"),g=$(".jsc-modal-close");return $("html"),{orientationSearchPanel:function(){var a=screen&&screen.orientation&&screen.orientation.angle||window.orientation||0;0!==a%180?(d=$(window).height(),b=229,c=(d-b)/2):(d=$(window).height(),b=229,c=(d-b)/2)},showSearchPanel:function(){a=$(window).scrollTop(),e.clone(!0).appendTo("#jsi-search-modal"),$("#jsi-search-modal .jsc-search-panel-wrap").removeAttr("id").attr("id","jsi-freeword-modal").addClass("jsc-dn"),$(".jsc-keep-navi-wrap").addClass("jsc-freeword-modal-open"),$("#jsi-search-modal, #jsi-freeword-modal, .jsc-search-panel-bg").removeClass("jsc-dn"),g.removeClass("jsc-dn"),$(".jsc-modal-open-body").css({position:"fixed",top:-1*a,width:"100%"}),$("#jsi-freeword-modal").css({display:"block","z-index":"1002",top:c}),$(".jsc-modal-close").css("top",c-37),f.removeClass("jsc-dn"),f.css({opacity:"1","z-index":"1002"}),$(".jsc-btn-freeword-panel").css("z-index","1002"),$("#jsi-btn-to-top").fadeOut(),$("#jsi-freeword-modal").on("click",".jsc-submit-btn",function(){var a=TWNSP.common.isInvalidFreewordForModal();return a?(TWNSP.common.alertFreewordCheck(a),!1):void 0})},removeSearchPanel:function(){$("#jsi-freeword-modal").remove(),$(".keep-navi-wrap").removeClass("jsc-freeword-modal-open"),g.addClass("jsc-dn"),$(".jsc-modal-open-body").css("position","static"),$("html, body").prop("scrollTop",a),f.addClass("jsc-dn").css("opacity","0")},forModalInputFucus:function(){var a=$(window).scrollTop();$("html, body").scrollTop(a),$("#jsi-freeword-modal").css("top",a),g.addClass("jsc-dn")},forModalInputBlur:function(){$("#jsi-freeword-modal").css("top",c),g.removeClass("jsc-dn")}}}(),common:function(){var a=$("#jsi-floating-btn-area-wrapper"),b=$("#jsi-floating-btn-area"),c=Math.max($("#jsi-floating-btn-area").outerHeight()),d=$(window),e=(d.height(),$(".jsc-bottom-viewport-area"),$("#jsi-content-area-wrapper")),f=e.find("input:checkbox"),g=($("#jsi-fixable-btn-area"),$("#jsi-active-btn-area"),$("#jsi-inactive-btn-area"),$(".jsc-option-choice-switcher")),h=$(".jsc-option");return{clearChecks:function(){var a,b=e.find("input:checkbox").filter(":checked"),c=e.find("select");$("#jsi-accordion").hasClass("jsc-close-scroll")&&$("html, body").animate({scrollTop:b.closest(".jsc-toggle-area").parent("li").find("h2").offset().top},100);for(var d=0,f=b.length;f>d;d++)a=b.eq(d),a.prop("checked",!1).triggerHandler("change"),this.toggleCheckBoxStyle(a[0]);for(var i,j=0,k=c.length;k>j;j++)i=c.eq(j),i.find(".jsc-default-selected").prop("selected","selected"),this.toggleOption(i);for(var l=e.find(".jsc-toggle-area").not(".jsc-dn"),m=0,n=l.length;n>m;m++)this.toggleAccordion(l.eq(m).parent().find(".jsc-accordion-trigger")[0]);$("input:radio[name=js-suc]",g).prop("checked",!1),h.addClass("jsc-dn").first().removeClass("jsc-dn"),this.floatingBtnDisplayScroll()},toggleCheckBoxStyle:function(a){var b=$(a),c=b.closest("li");c.toggleClass("jsc-accordion-checked",b.prop("checked"))},toggleOption:function(a){var b=$(a),c=b.closest(".jsc-option-toggle-wrapper"),d=b.find("option").filter(":selected").index(),e=c.find(".jsc-option"),f=e.eq(d-1);0===d?e.addClass("jsc-dn"):(e.filter(".jsc-default-select").toggleClass("jsc-dn",0!==d),e.not(f).addClass("jsc-dn"),f.removeClass("jsc-dn")),this.refreshOption(e)},toggleAccordion:function(a){var b=$(a),c=!b.find(".jsc-arrow").length,d=c?b.find(".jsc-job-arrow"):b.find(".jsc-arrow"),e=b.next("ul");d.hasClass("grey-line")||(TWNSP.search.renew.isRenewPage?(e.toggleClass("jsc-dn"),b.find(".renew-search-close-icon").toggleClass("renew-rotated"),b.find(".renew-acc-hdr-inner").toggleClass("renew-acc-hdr-inner-open"),TWNSP.search.renew.onOffBuleAreaFix()):(d.toggleClass(c?"ico-arrow-up-job ico-arrow-down-job":"ico-arrow-up ico-arrow-down"),e.toggleClass("jsc-dn")))},refreshOption:function(a){for(var b=[],c=0,d=a.length;d>c;c++)b[c]=a.eq(c).find("option.jsc-default-selected").prop("selected",!0)},isCheckedExist:function(){for(var a=!1,b=0,c=f.length;c>b;b++){if(f.eq(b).prop("checked")){a=!0;break}b===c-1&&(a=!1)}return a},isSelectedExist:function(){for(var a=!1,b=e.find("select"),c=0,d=b.length;d>c;c++){if(""!=b.eq(c).find("option:selected").val()){a=!0;break}c===d-1&&(a=!1)}return a},isScrolling:!1,floatingBtnDisplayScroll:function(){var e=this.isCheckedExist()||this.isSelectedExist(),f=d.scrollTop()+window.innerHeight,g=a.get(0).offsetTop+c;$(".jsc-already-hold-condition").length?(b.find(".jsc-search-clear-btn").toggleClass("is-active",e),b.find(".jsc-search-clear-btn").toggleClass("is-disabled",!e),g>f?b.removeClass("jsc-pos-relative"):b.addClass("jsc-pos-relative")):(b.find(".jsc-search-clear-btn, .jsc-search-result-btn").toggleClass("is-active",e),b.find(".jsc-search-clear-btn, .jsc-search-result-btn").toggleClass("is-disabled",!e),e?g>f?b.removeClass("jsc-pos-relative"):b.addClass("jsc-pos-relative"):b.addClass("jsc-pos-relative"))}}}(),localStorage:function(a){var b,c=$(a),d=[],e=14,f=300;return{init:function(a){var e=c.length;d=JSON.parse(localStorage.getItem(a)),this.dataCheck();
for(var f=b-1;f>=0;f--)d[f].expire!==!1&&d[f].expire<(new Date).getTime()&&(d.splice(f,1),localStorage.setItem(a,JSON.stringify(d)),0===d.length&&(d=[],b=0,localStorage.removeItem(a)));for(this.dataCheck(),f=0;b>f;f++)for(var g=0;e>g;g++)d[f].id===String(c.eq(g).data("visited-joid"))&&c.eq(g).addClass("visited-link")},dataCheck:function(){null===d?(d=[],b=0):b=d.length},setExpire:function(a){return(new Date).getTime()+1e3*86400*a},charFormat:function(a){return a.substr(a.indexOf("joid")).split("&")[0].split("=")[1]},setDataJobList:function(a,c,g){var h=String(c);d=JSON.parse(localStorage.getItem(a)),this.dataCheck(),f>b?(d.push({id:h,expire:this.setExpire(e)}),localStorage.setItem(a,JSON.stringify(d)),g.addClass("visited-link")):(d.shift(),d.push({id:h,expire:this.setExpire(e)}),localStorage.setItem(a,JSON.stringify(d)),g.addClass("visited-link"))},setDataDetail:function(a,c){var g=String(this.charFormat(c)),h=!0;if(d=JSON.parse(localStorage.getItem(a)),this.dataCheck(),0===b)d.push({id:g,expire:this.setExpire(e)}),localStorage.setItem(a,JSON.stringify(d));else{for(var i=0;b>i;i++)if(d[i].id===g){h=!1;break}f>b?h&&(d.push({id:g,expire:this.setExpire(e)}),localStorage.setItem(a,JSON.stringify(d))):h&&(d.shift(),d.push({id:g,expire:this.setExpire(e)}),localStorage.setItem(a,JSON.stringify(d)))}}}}("#pageid-job-lst-sp .job-lst-cassette-job")},$(window).on("load",function(){"localStorage"in window&&null!==window.localStorage&&($("#pageid-job-lst-sp").length&&(TWNSP.search.localStorage.init("visited-joid"),$("#pageid-job-lst-sp .job-lst-cassette-job").on("click",function(){var a=$(this);a.hasClass("visited-link")||TWNSP.search.localStorage.setDataJobList("visited-joid",a.data("visited-joid"),a)})),$("#pageid-detail-sp").length&&TWNSP.search.localStorage.setDataDetail("visited-joid",_sc.orgUrl))}),$(window).on("pageshow",function(){TWNSP.search.checkBoxStyleReset()}),$("#jsi-accordion").on("click",".jsc-accordion-trigger",function(a){a.preventDefault()}).on(TWNSP.common.event.touchmove,".jsc-accordion-trigger",function(){TWNSP.common.isTouchDevice&&(TWNSP.common.isTouchMove=!0)}).on(TWNSP.common.event.touchend,".jsc-accordion-trigger",function(a){a.preventDefault(),TWNSP.common.isTouchDevice?(TWNSP.common.isTouchMove||TWNSP.search.toggleAccordion(this),TWNSP.common.isTouchMove=!1):TWNSP.search.toggleAccordion(this)}).on(TWNSP.common.event.touchend,".jsc-accordion-trigger",function(a){($(this).find(".jsc-arrow").hasClass("ico-arrow-up")||$(this).find(".renew-acc-hdr-inner").hasClass("renew-acc-hdr-inner-open"))&&(a.preventDefault(),_sc_trackCustomLink_module("ACCORDION_OPEN"))}),$("#jsi-entry-wrapper").on("click",".jsc-checks-entry",function(a){a.preventDefault(),TWNSP.search.toggleActivationBtn(this)}),$(window).on("scroll",function(){TWNSP.search.affix.isScrolling=!0,TWNSP.search.renew.onOffBuleAreaFix()}).on("orientationchange",function(){TWNSP.search.renew.isRenewPage?TWNSP.search.renew.fix():TWNSP.search.affix.fix()}),$("#jsi-content-area-wrapper").on("change","input:checkbox, select",function(){TWNSP.search.renew.isRenewPage?TWNSP.search.renew.fix():TWNSP.search.affix.fix()}).on("change","input:checkbox",function(){TWNSP.search.renew.isRenewPage?TWNSP.search.renew.onOffBuleAreaFix():TWNSP.search.emphasizeCounter(this)}),$(".jsc-select-feature").on("change","input:checkbox",function(){TWNSP.search.toggleCheckBoxStyle(this)}),$("#jsi-accordion, .jsc-accordion-ul").on("change",".jsc-linked-checkbox",function(){TWNSP.search.linkCheckbox.link(this)}).on("change","input:checkbox",function(){TWNSP.search.toggleCheckBoxStyle(this),TWNSP.search.emphasizeCounter(this)}).on("click",".jsc-nested-accordion-trigger a",function(a){a.preventDefault(),TWNSP.search.accordion.toggleNestedAccodion(this),TWNSP.search.affix.fix()}),$("#jsi-limited-checks-wrapper").on("click",".jsc-delete-cassette",function(a){a.preventDefault(),TWNSP.search.deleteConfirmAlert()&&($("#jsi-limited-checks-wrapper").hasClass("jsc-app-message")?AppDoneListDel($(this).attr("id")):$("#jsi-limited-checks-wrapper").hasClass("jsc-tel-message")?TelDoneListDel($(this).attr("id")):keepListDel($(this).attr("id"),"00"))}).on("change","input:checkbox",function(){TWNSP.search.alertLimit.alertLimitOverChecks(this)}),$("#jsi-option-toggle-wrapper").on("change",".jsc-option-switcher",function(){TWNSP.search.toggleOption(this)}).on("change","input:checkbox, select",function(){TWNSP.search.emphasizeCounter(this)}),TWNSP.search.renew.isRenewPage||$("#jsi-active-btn-area, #jsi-fixable-btn-area").on("click",".jsc-clear-btn",function(a){a.preventDefault()}).on(TWNSP.common.event.touchend,".jsc-clear-btn",function(a){a.preventDefault(),TWNSP.search.clearChecks(),TWNSP.search.emphasizeCounter(this)}),$("#jsi-option-toggle-wrapper").on("change",".jsc-demo-no-result-pattern",function(){TWNSP.search.alertNoResultError(this)}),$("form").on("submit",function(){return TWNSP.search.linkCheckbox.isLimitOver()?(TWNSP.search.linkCheckbox.alertLimitOver(),!1):void 0}).on("change",".jsc-option-toggle-wrapper select",function(){TWNSP.search.storeSelectedOption(this)}),$("#jsi-entry-wrapper").on("click",".jsc-btn-keep-multi",function(){return TWNSP.search.keepMultiCheck.multiCheckBox(),TWNSP.search.keepMultiCheck.check(),!1}).on("click",".jsc-btn-keep-remove.is-checked",function(){return TWNSP.search.keepMultiCheck.removeChecked(),!1}).on("click","input:checkbox",function(){TWNSP.search.keepMultiCheck.checkCount()}),TWNSP.search.keepPopup.keepCookieFlg(),$('button[type="submit"].renew-btn-search').on("click",function(){var a="/joSrchRsltList/?"+TWNSP.search.ajax.createCheckBoxParam();return window.location.href=a,!1}),$(window).on("orientationchange",function(){TWNSP.search.searchChangeModal.orientationSearchPanel()}).trigger("orientationchange"),$(".jsc-btn-search").on("click",function(a){a.preventDefault(),TWNSP.common.showModalOnLoad.showModalStopVer(this),TWNSP.search.searchChangeModal.orientationSearchPanel(),TWNSP.search.searchChangeModal.showSearchPanel()}),$(".jsc-search-panel-bg, .jsc-modal-close, .jsc-jump-link-delay").on("click",function(a){a.preventDefault(),TWNSP.common.showModalOnLoad.closeModalStopVer(this),TWNSP.search.searchChangeModal.removeSearchPanel()}),$("#jsi-search-modal").on("focus",".jsc-freeword-field",function(){TWNSP.search.searchChangeModal.forModalInputFucus()}).on("blur",".jsc-freeword-field",function(){setTimeout(function(){TWNSP.search.searchChangeModal.forModalInputBlur()},500)}),window.onpageshow=function(a){$("#jsi-search-modal").length&&(a.preventDefault(),TWNSP.common.showModalOnLoad.init(),TWNSP.common.showModalOnLoad.closeModalStopVer(),TWNSP.search.searchChangeModal.removeSearchPanel())};