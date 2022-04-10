window.Modernizr=function(e,t,n){function r(e,t){var n=e.charAt(0).toUpperCase()+e.substr(1);return o((e+" "+h.join(n+" ")+n).split(" "),t)}function o(e,t){for(var r in e)if(f[e[r]]!==n)return"pfx"!=t||e[r];return!1}function i(e,t){return typeof e===t}function a(e){f.cssText=e}var s,c,l={},u=t.documentElement,d=(t.head||t.getElementsByTagName("head")[0],"modernizr"),p=t.createElement(d),f=p.style,m=(Object.prototype.toString," -webkit- -moz- -o- -ms- -khtml- ".split(" ")),h="Webkit Moz O ms Khtml".split(" "),g={},y=[],v=function(e,n,r,o){var i,a,s,c=t.createElement("div");if(parseInt(r,10))for(;r--;)(s=t.createElement("div")).id=o?o[r]:d+(r+1),c.appendChild(s);return i=["&shy;","<style>",e,"</style>"].join(""),c.id=d,c.innerHTML+=i,u.appendChild(c),a=n(c,e),c.parentNode.removeChild(c),!!a},b={}.hasOwnProperty;for(var E in c=i(b,n)||i(b.call,n)?function(e,t){return t in e&&i(e.constructor.prototype[t],n)}:function(e,t){return b.call(e,t)},g.rgba=function(){return a("background-color:rgba(150,255,150,.5)"),function(e,t){return!!~(""+e).indexOf("rgba")}(f.backgroundColor)},g.boxshadow=function(){return r("boxShadow")},g.csstransitions=function(){return r("transitionProperty")},g)c(g,E)&&(s=E.toLowerCase(),l[s]=g[E](),y.push((l[s]?"":"no-")+s));return l.addTest=function(e,t){if("object"==typeof e)for(var r in e)c(e,r)&&l.addTest(r,e[r]);else{if(e=e.toLowerCase(),l[e]!==n)return;t="boolean"==typeof t?t:!!t(),u.className+=" "+(t?"":"no-")+e,l[e]=t}return l},a(""),p=null,e.attachEvent&&function(){var e=t.createElement("div");return e.innerHTML="<elem></elem>",1!==e.childNodes.length}()&&function(e,t){function r(e){for(var t=-1;++t<c;)e.createElement(s[t])}e.iepp=e.iepp||{};var o,i=e.iepp,a=i.html5elements||"abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",s=a.split("|"),c=s.length,l=new RegExp("(^|\\s)("+a+")","gi"),u=new RegExp("<(/*)("+a+")","gi"),d=/^\s*[\{\}]\s*$/,p=new RegExp("(^|[^\\n]*?\\s)("+a+")([^\\n]*)({[\\n\\w\\W]*?})","gi"),f=t.createDocumentFragment(),m=t.documentElement,h=m.firstChild,g=t.createElement("body"),y=t.createElement("style"),v=/print|all/;i.getCSS=function(e,t){if(e+""===n)return"";for(var r,o=-1,a=e.length,s=[];++o<a;)(r=e[o]).disabled||(t=r.media||t,v.test(t)&&s.push(i.getCSS(r.imports,t),r.cssText),t="all");return s.join("")},i.parseCSS=function(e){for(var t,n=[];null!=(t=p.exec(e));)n.push(((d.exec(t[1])?"\n":t[1])+t[2]+t[3]).replace(l,"$1.iepp_$2")+t[4]);return n.join("\n")},i.writeHTML=function(){var e=-1;for(o=o||t.body;++e<c;)for(var n=t.getElementsByTagName(s[e]),r=n.length,i=-1;++i<r;)n[i].className.indexOf("iepp_")<0&&(n[i].className+=" iepp_"+s[e]);f.appendChild(o),m.appendChild(g),g.className=o.className,g.id=o.id,g.innerHTML=o.innerHTML.replace(u,"<$1font")},i._beforePrint=function(){y.styleSheet.cssText=i.parseCSS(i.getCSS(t.styleSheets,"all")),i.writeHTML()},i.restoreHTML=function(){g.innerHTML="",m.removeChild(g),m.appendChild(o)},i._afterPrint=function(){i.restoreHTML(),y.styleSheet.cssText=""},r(t),r(f),i.disablePP||(h.insertBefore(y,h.firstChild),y.media="print",y.className="iepp-printshim",e.attachEvent("onbeforeprint",i._beforePrint),e.attachEvent("onafterprint",i._afterPrint))}(e,t),l._version="2.0.6",l._prefixes=m,l._domPrefixes=h,l.mq=function(t){return e.matchMedia?matchMedia(t).matches:(v("@media "+t+" { #"+d+" { position: absolute; } }",(function(t){n="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position})),n);var n},l.testProp=function(e){return o([e])},l.testAllProps=r,l.testStyles=v,u.className=u.className.replace(/\bno-js\b/,"")+" js "+y.join(" "),l}(this,this.document),function(e,t){function n(){y(!0)}if(e.respond={},respond.update=function(){},respond.mediaQueriesSupported=t,!t){var r,o,i=e.document,a=i.documentElement,s=[],c=[],l=[],u={},d=i.getElementsByTagName("head")[0]||a,p=d.getElementsByTagName("link"),f=[],m=function(){for(var t,n,r,o,i=p,a=i.length,s=0;s<a;s++)n=(t=i[s]).href,r=t.media,o=t.rel&&"stylesheet"===t.rel.toLowerCase(),n&&o&&!u[n]&&(/^([a-zA-Z]+?:(\/\/)?(www\.)?)/.test(n)&&n.replace(RegExp.$1,"").split("/")[0]!==e.location.host?u[n]=!0:f.push({href:n,media:r}));h()},h=function(){if(f.length){var e=f.shift();v(e.href,(function(t){g(t,e.href,e.media),u[e.href]=!0,h()}))}},g=function(e,t,n){var r,o,i,a,l,u=e.match(/@media[^\{]+\{([^\{\}]+\{[^\}\{]+\})+/gi),d=u&&u.length||0,p=function(e){return e.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,"$1"+t+"$2$3")},f=!d&&n,m=0;for((t=t.substring(0,t.lastIndexOf("/"))).length&&(t+="/"),f&&(d=1);m<d;m++)for(r=0,f?(o=n,c.push(p(e))):(o=u[m].match(/@media ([^\{]+)\{([\S\s]+?)$/)&&RegExp.$1,c.push(RegExp.$2&&p(RegExp.$2))),l=(a=o.split(",")).length;r<l;r++)i=a[r],s.push({media:i.match(/(only\s+)?([a-zA-Z]+)(\sand)?/)&&RegExp.$2,rules:c.length-1,minw:i.match(/\(min\-width:[\s]*([\s]*[0-9]+)px[\s]*\)/)&&parseFloat(RegExp.$1),maxw:i.match(/\(max\-width:[\s]*([\s]*[0-9]+)px[\s]*\)/)&&parseFloat(RegExp.$1)});y()},y=function(e){var t="clientWidth",n=a[t],u="CSS1Compat"===i.compatMode&&n||i.body[t]||n,f={},m=i.createDocumentFragment(),h=p[p.length-1],g=(new Date).getTime();if(e&&r&&g-r<30)clearTimeout(o),o=setTimeout(y,30);else{for(var v in r=g,s){var b=s[v];(!b.minw&&!b.maxw||(!b.minw||b.minw&&u>=b.minw)&&(!b.maxw||b.maxw&&u<=b.maxw))&&(f[b.media]||(f[b.media]=[]),f[b.media].push(c[b.rules]))}for(var v in l)l[v]&&l[v].parentNode===d&&d.removeChild(l[v]);for(var v in f){var E=i.createElement("style"),x=f[v].join("\n");E.type="text/css",E.media=v,E.styleSheet?E.styleSheet.cssText=x:E.appendChild(i.createTextNode(x)),m.appendChild(E),l.push(E)}d.insertBefore(m,h.nextSibling)}},v=function(e,t){var n=b();if(n){if(n.open("GET",e,!0),n.onreadystatechange=function(){4==n.readyState&&(200==n.status||304==n.status)&&t(n.responseText)},4==n.readyState)return;n.send()}},b=function(){for(var e=!1,t=[function(){return new ActiveXObject("Microsoft.XMLHTTP")},function(){return new XMLHttpRequest}],n=t.length;n--;){try{e=t[n]()}catch(e){continue}break}return function(){return e}}();m(),respond.update=m,e.addEventListener?e.addEventListener("resize",n,!1):e.attachEvent&&e.attachEvent("onresize",n)}}(this,Modernizr.mq("only all")),function(e,t,n){function r(e){return!e||"loaded"==e||"complete"==e}function o(){for(var e=1,t=-1;h.length-++t&&(!h[t].s||(e=h[t].r)););e&&i()}function i(){var e=h.shift();g=1,e?e.t?p((function(){"c"==e.t?function(e){var n,r=t.createElement("link");if(r.href=e.s,r.rel="stylesheet",r.type="text/css",e.e||!x&&!y)r.onload=function(){n||(n=1,p((function(){o()}),0))},e.e&&r.onload();else{var i=function(e){p((function(){if(!n)try{e.sheet.cssRules.length?(n=1,o()):i(e)}catch(t){1e3==t.code||"security"==t.message||"denied"==t.message?(n=1,p((function(){o()}),0)):i(e)}}),0)};i(r)}p((function(){n||(n=1,o())}),u.errorTimeout),!e.e&&f.parentNode.insertBefore(r,f)}(e):function(e){var n,i=t.createElement("script");i.src=e.s,i.onreadystatechange=i.onload=function(){!n&&r(i.readyState)&&(n=1,o(),i.onload=i.onreadystatechange=null)},p((function(){n||(n=1,o())}),u.errorTimeout),e.e?i.onload():f.parentNode.insertBefore(i,f)}(e)}),0):(e(),o()):g=0}function a(e,n,a,s,c,l){function d(){!y&&r(m.readyState)&&(E.r=y=1,!g&&o(),m.onload=m.onreadystatechange=null,p((function(){b.removeChild(m)}),0))}var m=t.createElement(e),y=0,E={t:a,s:n,e:l};m.src=m.data=n,!v&&(m.style.display="none"),m.width=m.height="0","object"!=e&&(m.type=a),m.onload=m.onreadystatechange=d,"img"==e?m.onerror=d:"script"==e&&(m.onerror=function(){E.e=E.r=1,i()}),h.splice(s,0,E),b.insertBefore(m,v?null:f),p((function(){y||(b.removeChild(m),E.r=E.e=y=1,o())}),u.errorTimeout)}function s(e,t,n){var r="c"==t?T:S;return g=0,t=t||"j",L(e)?a(r,e,t,this.i++,0,n):(h.splice(this.i++,0,e),1==h.length&&i()),this}function c(){var e=u;return e.loader={load:s,i:0},e}var l,u,d=t.documentElement,p=e.setTimeout,f=t.getElementsByTagName("script")[0],m={}.toString,h=[],g=0,y="MozAppearance"in d.style,v=y&&!!t.createRange().compareNode,b=v?d:f.parentNode,E=e.opera&&"[object Opera]"==m.call(e.opera),x="webkitAppearance"in d.style,w=x&&"async"in t.createElement("script"),S=y?"object":E||w?"img":"script",T=x?"img":S,C=Array.isArray||function(e){return"[object Array]"==m.call(e)},M=function(e){return Object(e)===e},L=function(e){return"string"==typeof e},N=function(e){return"[object Function]"==m.call(e)},j=[],$={};u=function(e){function t(e,t,n,r,o){var i=function(e){var t,n,r=e.split("!"),o=j.length,i=r.pop(),a=r.length,s={url:i,origUrl:i,prefixes:r};for(n=0;n<a;n++)(t=$[r[n]])&&(s=t(s));for(n=0;n<o;n++)s=j[n](s);return s}(e),a=i.autoCallback;if(!i.bypass){if(t&&(t=N(t)?t:t[e]||t[r]||t[e.split("/").pop().split("?")[0]]),i.instead)return i.instead(e,t,n,r,o);n.load(i.url,i.forceCSS||!i.forceJS&&/css$/.test(i.url)?"c":void 0,i.noexec),(N(t)||N(a))&&n.load((function(){c(),t&&t(i.origUrl,o,r),a&&a(i.origUrl,o,r)}))}}function n(e,n){function r(e){if(L(e))t(e,c,n,0,i);else if(M(e))for(o in e)e.hasOwnProperty(o)&&t(e[o],c,n,o,i)}var o,i=!!e.test,a=i?e.yep:e.nope,s=e.load||e.both,c=e.callback;r(a),r(s),e.complete&&n.load(e.complete)}var r,o,i=this.yepnope.loader;if(L(e))t(e,0,i,0);else if(C(e))for(r=0;r<e.length;r++)o=e[r],L(o)?t(o,0,i,0):C(o)?u(o):M(o)&&n(o,i);else M(e)&&n(e,i)},u.addPrefix=function(e,t){$[e]=t},u.addFilter=function(e){j.push(e)},u.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",l=function(){t.removeEventListener("DOMContentLoaded",l,0),t.readyState="complete"},0)),e.yepnope=c()}(this,this.document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};