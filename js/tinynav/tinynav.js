/*! http://tinynav.viljamis.com v1.2 by @viljamis */
!function(e,t,a){e.fn.tinyNav=function(n){var i=e.extend({active:"selected",header:"",indent:"- ",label:""},n);return this.each((function(){a++;var n=e(this),l="tinynav"+a,d=".l_"+l,r=e("<select/>").attr("id",l).addClass("tinynav "+l);if(n.is("ul,ol")){""!==i.header&&r.append(e("<option/>").text(i.header));var o="";n.addClass("l_"+l).find("a").each((function(){var t;for(o+='<option value="'+e(this).attr("href")+'">',t=0;t<e(this).parents("ul, ol").length-1;t++)o+=i.indent;o+=e(this).text()+"</option>"})),r.append(o),i.header||r.find(":eq("+e(d+" li").index(e(d+" li."+i.active))+")").attr("selected",!0),r.change((function(){t.location.href=e(this).val()})),e(d).after(r),i.label&&r.before(e("<label/>").attr("for",l).addClass("tinynav_label "+l+"_label").append(i.label))}}))}}(jQuery,this,0);