(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{685:function(t,e,n){},686:function(t,e,n){},687:function(t,e,n){},824:function(t,e,n){"use strict";var c=n(685);n.n(c).a},825:function(t,e,n){"use strict";var c=n(686);n.n(c).a},826:function(t,e,n){"use strict";var c=n(687);n.n(c).a},860:function(t,e,n){"use strict";n.r(e);n(15);var c={data:function(){return{content:null,text:"我input中的内容，我input中的内容，我input中的内容。"}},mounted:function(){this.content=this.$refs.content}},o=(n(824),n(51)),a=Object(o.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"copy-directive"},[n("section",[n("h3",[t._v("1.复制元素节点")]),t._v(" "),n("div",{ref:"content",staticClass:" copy-directive__content red"},[n("p",[t._v("我是红色的内容")]),t._v(" "),n("p",[t._v("我是红色的内容")]),t._v(" "),n("p",[t._v("我是红色的内容")]),t._v(" "),n("p",[t._v("我是红色的内容")]),t._v(" "),n("p",[t._v("我是红色的内容")])]),t._v(" "),n("el-button",{directives:[{name:"copy",rawName:"v-copy",value:t.content,expression:"content"}],attrs:{type:"primary"}},[t._v("点击复制红色内容")])],1),t._v(" "),n("section",[n("h3",[t._v("2.复制文本")]),t._v(" "),n("div",{staticClass:"copy-directive__content"},[n("el-input",{attrs:{placeholder:"请输入要复制的内容"},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1),t._v(" "),n("el-button",{directives:[{name:"copy",rawName:"v-copy",value:t.text,expression:"text"}],attrs:{type:"primary"}},[t._v("点击复制输入框中的内容")])],1)])},[],!1,null,"59d3b7e4",null).exports,i={props:["content"],methods:{handleCopy:function(){var t=this,e=function(e){var n=window.getSelection();n.rangeCount>0&&n.removeAllRanges();var c=document.createRange();c.selectNode(e),n.addRange(c),document.execCommand("Copy"),c.collapse(!1),t.$message.success("复制成功")};if(content)if(1===this.content.nodeType)e(this.content);else if("string"==typeof this.content){var n=document.createElement("p");n.innerText=this.content,document.body.appendChild(n),e(n),document.body.removeChild(n)}else this.$message.warning("没有可以复制的内容");else this.$message.warning("没有要复制的内容")}}},s={components:{Copy:Object(o.a)(i,function(){var t=this.$createElement;return(this._self._c||t)("el-button",{attrs:{type:"primary"},on:{click:this.handleCopy}},[this._v("复制")])},[],!1,null,null,null).exports},data:function(){return{text:"我是文本我是文本我是文本我是文本我是文本我是文本",content:null}},mounted:function(){this.content=this.$refs.content}},r=(n(825),{name:"Copy",components:{Directive:a,Comp:Object(o.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"copy-comp"},[n("section",[n("div",{ref:"content",staticClass:"content"},[n("h3",[t._v("要复制的内容")]),t._v(" "),n("p",{staticStyle:{"background-color":"yellow"}},[t._v("第一行内容111")]),t._v(" "),n("img",{attrs:{src:"https://picsum.photos/200/200/?random",alt:""}}),t._v(" "),n("p",[t._v("第二行内容222")]),t._v(" "),n("p",[t._v("第三行内容333")])]),t._v(" "),n("copy",{attrs:{content:t.content}})],1),t._v(" "),n("br"),t._v(" "),n("section",[n("p",[t._v(t._s(t.text))]),t._v(" "),n("copy",{attrs:{content:t.text}})],1)])},[],!1,null,"9792f344",null).exports},data:function(){return{activeName:"directive"}}}),l=(n(826),Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-tabs",{attrs:{type:"border-card"},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[n("el-tab-pane",{attrs:{label:"指令方式",name:"directive"}},[n("Directive")],1),t._v(" "),n("el-tab-pane",{attrs:{label:"组件方式",name:"component"}},[n("comp")],1)],1),t._v(" "),n("p",[t._v("#复制完可以到word文档上粘贴查看下效果")]),t._v(" "),n("p",[t._v("有个bug就是：如果触发复制的是el-button，这个按钮紧挨着要复制的元素，且这个按钮后边也跟有一个相邻兄弟元素，那么这个按钮也会被复制下来")]),t._v(" "),n("p",[t._v("把按钮换成任何带有.el-button样式的元素，都会有这个问题")])],1)},[],!1,null,null,null).exports);n.d(e,"default",function(){return l})}}]);