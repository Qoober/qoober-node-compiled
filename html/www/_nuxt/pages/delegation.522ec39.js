(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{502:function(e,t,l){var content=l(506);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,l(9).default)("696e5e75",content,!0,{sourceMap:!1})},503:function(e,t,l){var content=l(509);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,l(9).default)("a13e3316",content,!0,{sourceMap:!1})},504:function(e,t,l){"use strict";var r={props:["title"],computed:{isTitle:function(){return this.title&&""!=this.title},isBodySlot:function(){return this.$slots.default}}},o=(l(505),l(2)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"block"},[e.isTitle?l("div",{staticClass:"block-head"},[l("div",{staticClass:"title"},[e._v(e._s(e.title))])]):e._e(),e._v(" "),e.isBodySlot?l("div",{staticClass:"block-body"},[e._t("default")],2):e._e(),e._v(" "),e._t("nobody")],2)}),[],!1,null,null,null);t.a=component.exports},505:function(e,t,l){"use strict";var r=l(502);l.n(r).a},506:function(e,t,l){(t=l(8)(!1)).push([e.i,".block{margin:0 0 12px;background:#fff;box-shadow:0 2px 8px rgba(0,0,0,.1);border-radius:6px}.block .block-head{padding:16px;border-bottom:1px solid #e8e8e8}.block .block-head .title{font-size:18px;font-weight:500;color:#3e4346}.block .block-body{padding:16px}",""]),e.exports=t},508:function(e,t,l){"use strict";var r=l(503);l.n(r).a},509:function(e,t,l){(t=l(8)(!1)).push([e.i,".block-stat{background:#fff;box-shadow:0 2px 8px rgba(0,0,0,.1);border-radius:6px;padding:16px;margin:0 0 20px}.block-stat .label{color:#626c72;margin:0 0 16px}.block-stat .value{font-size:20px;line-height:24px;color:#3e4346;font-weight:600}.block-stat .symbol{color:#85ce36}",""]),e.exports=t},511:function(e,t,l){"use strict";var r={props:["label","value","symbol"]},o=(l(508),l(2)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"block-stat"},[l("div",{staticClass:"label"},[e._v(e._s(e.label))]),e._v(" "),l("div",{staticClass:"value"},[e._v("\n    "+e._s(e.value)+" "),l("span",{staticClass:"symbol"},[e._v(e._s(e.symbol))]),e._v(" "),e._t("default")],2)])}),[],!1,null,null,null);t.a=component.exports},567:function(e,t,l){"use strict";l.r(t);l(7);var r=l(0),o=l(504),c=l(511),n=l(266),d=l(267),f=l(45),v=l(20),h={components:{Block:o.a,BlockStat:c.a,FieldAddress:n.a,FieldAmount:d.a,FieldInput:f.a,Button:v.a},middleware:["logged"],data:function(){return{recipient:"",isPublicKey:!1,publicKey:"",publicKeyError:"",amount:"",period:1,secretPhrase:""}},watch:{recipient:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function l(){var data;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:if(""!=e){l.next=2;break}return l.abrupt("return");case 2:return l.prev=2,l.next=5,t.$qoober.account.getInfo(e);case 5:(data=l.sent).publicKey&&""!=data.publicKey?(t.isPublicKey=!1,t.publicKey=data.publicKey):(t.isPublicKey=!0,t.publicKey=""),l.next=12;break;case 9:l.prev=9,l.t0=l.catch(2),console.log(l.t0);case 12:case"end":return l.stop()}}),l,null,[[2,9]])})))()},publicKey:function(e){this.publicKeyError="";var t=this.$qoober.account.getIdFromPublicKey(e,!0);this.recipient!=t&&(this.publicKeyError="Public Key invalid. This key for "+t)}},methods:{submit:function(){var e={recipient:this.recipient,publicKey:this.publicKey,period:1440*this.period,secretPhrase:this.secretPhrase,deadline:1440,feeNQT:0};try{this.$qoober.delegation.send(e)}catch(e){console.log("delegation",e)}}}},y=l(2),component=Object(y.a)(h,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("h1",[e._v("Delegation")]),e._v(" "),l("div",{staticClass:"row"},[l("div",{staticClass:"col-md-4"},[l("Block",{attrs:{title:"Delegation Your Balance"}},[l("FieldAddress",{attrs:{label:"Recipient"},model:{value:e.recipient,callback:function(t){e.recipient=t},expression:"recipient"}}),e._v(" "),e.isPublicKey?l("FieldInput",{attrs:{label:"Public Key",error:e.publicKeyError},model:{value:e.publicKey,callback:function(t){e.publicKey=t},expression:"publicKey"}}):e._e(),e._v(" "),l("FieldInput",{attrs:{label:"Period (days)"},model:{value:e.period,callback:function(t){e.period=t},expression:"period"}}),e._v(" "),l("FieldInput",{attrs:{label:"Secret Phrase"},model:{value:e.secretPhrase,callback:function(t){e.secretPhrase=t},expression:"secretPhrase"}}),e._v(" "),l("Button",{attrs:{text:"Submit",click:e.submit}})],1)],1)])])}),[],!1,null,null,null);t.default=component.exports}}]);