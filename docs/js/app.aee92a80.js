(function(e){function t(t){for(var r,c,s=t[0],i=t[1],u=t[2],p=0,d=[];p<s.length;p++)c=s[p],o[c]&&d.push(o[c][0]),o[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(t);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,s=1;s<n.length;s++){var i=n[s];0!==o[i]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/pwgen/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=i;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"02b8":function(e,t,n){"use strict";var r=n("fa54"),o=n.n(r);o.a},"1d09":function(e,t,n){"use strict";var r=n("21ec"),o=n.n(r);o.a},"21ec":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header"),n("Generate",{attrs:{msg:"Click to generate"}})],1)},a=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"generate"}},[n("div",{attrs:{id:"generator"}},[n("h2",[e._v("Generate easy-to-remember passwords!")]),n("input",{attrs:{type:"text",id:"pw-output",placeholder:"Click generate below",contenteditable:"true",readonly:"false"},domProps:{value:e.password.join("")}}),n("button",{on:{click:e.generatePassword}},[e._v("Generate")]),n("button",{on:{click:e.copyPassword}},[e._v(e._s(e.copyText))]),n("p",[e._v("Here's how you can easily remember your password")]),n("span",{attrs:{id:"words"}},[e._v(e._s(e.password.join(" ")))])])])},s=[],i=(n("4917"),n("bc3a")),u=n.n(i),l={name:"Generate",data:function(){return{common:[],password:[],copied:!0,copyText:"Copy"}},methods:{fetchPassword:function(){var e=this,t="https://raw.githubusercontent.com/dariusk/corpora/master/data/words/common.json";u.a.get(t).then(function(t){e.common=t.data.commonWords}).catch(function(e){console.log("Fetch error: ".concat(e))})},generatePassword:function(e){e.preventDefault();var t=Math.floor(99*Math.random()),n=["!","@","$","&","#","?"],r=n[Math.floor(Math.random()*n.length)],o="",a=[];while(a.length<4)o=this.common[Math.floor(Math.random()*this.common.length)],o.length>3&&o.length<8&&a.push(o);a[0]=a[0].charAt(0).toUpperCase()+a[0].substr(1),a.push(t,r),this.password=a,this.copyText="Copy"},copyPassword:function(){var e=document.getElementById("pw-output");if(navigator.userAgent.match(/ipad|ipod|iphone/i)){var t=e.contentEditable,n=e.readOnly;e.contentEditable=!0,e.readOnly=!1;var r=document.createRange();r.selectNodeContents(e);var o=window.getSelection();o.removeAllRanges(),o.addRange(r),e.setSelectionRange(0,999999),e.contentEditable=t,e.readOnly=n}e.focus(),e.select(),document.execCommand("copy"),this.copyText="Copied";var a=this;setTimeout(function(){a.copyText="Copy"},2e3)}},created:function(){this.fetchPassword()}},p=l,d=(n("02b8"),n("2877")),f=Object(d["a"])(p,c,s,!1,null,"5f260ba2",null),h=f.exports,m=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},v=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("h1",[e._v("pwgen")]),n("a",{attrs:{href:"https://github.com/sadmansh/pwgen",target:"+_blank"}},[e._v("Fork on GitHub")])])}],b={name:"Header"},g=b,y=(n("1d09"),Object(d["a"])(g,m,v,!1,null,"711cf58c",null)),w=y.exports,_={name:"app",components:{Generate:h,Header:w}},x=_,O=(n("5c0b"),Object(d["a"])(x,o,a,!1,null,null,null)),j=O.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(j)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("5e27"),o=n.n(r);o.a},"5e27":function(e,t,n){},fa54:function(e,t,n){}});
//# sourceMappingURL=app.aee92a80.js.map