/*** Zen Module: ZMdemo_html5 ***/

self._zenClassIdx['http://www.intersystems.com/zen/mojo/demo/html5/baseTemplate'] = 'ZMdemo_html5_baseTemplate';
self.ZMdemo_html5_baseTemplate = function(index,id) {
	if (index>=0) {ZMdemo_html5_baseTemplate__init(this,index,id);}
}

self.ZMdemo_html5_baseTemplate__init = function(o,index,id) {
	('undefined' == typeof _ZEN_Mojo_Component_contentTemplate__init) ?zenMaster._ZEN_Mojo_Component_contentTemplate__init(o,index,id):_ZEN_Mojo_Component_contentTemplate__init(o,index,id);
}
function ZMdemo_html5_baseTemplate_serialize(set,s)
{
	var o = this;s[0]='2350274433';s[1]=o.index;s[2]=o.id;s[3]=o.name;s[4]=set.addObject(o.parent,'parent');s[5]=set.addObject(o.composite,'composite');s[6]=o.align;s[7]=o.aux;s[8]=o.containerStyle;s[9]=(o.dragEnabled?1:0);s[10]=(o.dropEnabled?1:0);s[11]=(o.dynamic?1:0);s[12]=o.enclosingClass;s[13]=o.enclosingStyle;s[14]=o.error;s[15]=o.height;s[16]=(o.hidden?1:0);s[17]=o.hint;s[18]=o.hintClass;s[19]=o.hintStyle;s[20]=o.label;s[21]=o.labelClass;s[22]=o.labelDisabledClass;s[23]=o.labelStyle;s[24]=o.onafterdrag;s[25]=o.onbeforedrag;s[26]=o.ondrag;s[27]=o.ondrop;s[28]=o.onhide;s[29]=o.onrefresh;s[30]=o.onshow;s[31]=o.onupdate;s[32]=o.overlayMode;s[33]=o.renderFlag;s[34]=(o.showLabel?1:0);s[35]=o.slice;s[36]=o.title;s[37]=o.tuple;s[38]=o.valign;s[39]=(o.visible?1:0);s[40]=o.width;
}
function ZMdemo_html5_baseTemplate_getSettings(s)
{
	s['name'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

self.ZMdemo_html5_baseTemplate_getData = function(key,criteria) {
/* The default value is an empty JS object, so it won't go to the server. */
var data = {};
switch (key) {
case 'home':
/* This data structure described the menu on the left pane. */
data = {
menus:[
{title:'Basic HTML Elements',items:[
{class:'divMenuItem',title:'Text',image:'deepsee/ds2_text_44.png',triggers:'show-text-demo'},
{class:'divMenuItem',title:'Table',image:'deepsee/ds2_dialpad_44.png',triggers:'show-table-demo'}
]},
{title:'Form Elements',items:[
{class:'divMenuItem',title:'Form',image:'deepsee/ds2_gear_44.png',triggers:'show-form-demo'}
]},
{title:'Embedded Media',items:[
{class:'divMenuItem',title:'Video',image:'deepsee/ds2_glasses_44.png',triggers:'show-video-demo'}
]}
]
}
break;
case 'table-demo':
case 'form-demo':
case 'selected-person':
/* Some parts of the demo need server-side data, null has to be returned here. */
data = null;
break;
}
return data;
}

self.ZMdemo_html5_baseTemplate_getLayout = function(key,criteria) {
var layout = {};
switch (key) {
/* Initial (empty) content for the inner document view. */
case 'empty':
layout = {
children: [
{type:'$ContentPane',children:[
]}
]
};
break;
/*
This is the only layout definition for the outer document view.
Defines header, left menu and empty placeholder for inner content.
*/
case 'home':
layout = {
children: [
{type:'$BorderContainer',key:'top-container',design:'headline',liveSplitters:true,style:'width:100%;height:100%',children:[
{type:'$ContentPane',region:'top',children:[
{type:'$div',$content:'ZEN Mojo / HTML5 Plugin Demo',cssClass:'contentHeader'}
]},
{type:'$AccordionContainer',region:'leading',style:'width:33%;max-width:300px;',splitter:true,value:'=[menus]',children:[
{type:'$ContentPane',key:'menu-pane',title:'=[title]',value:'=[items]',children:[
/* Menu items built from pure HTML elements */
{type:'$div',cssClass:'=[class]',key:'show-menu-item',value:'=[triggers]',children:[
{type:'$img',src:'=[image]',cssClass:'imageMenuItem'},
{type:'$div',$content:'=[title]',cssClass:'titleMenuItem'}
]}
]}
]},
{type:'$StackContainer',key:'content',region:'center',style:'width:100%;height:100%',children:[
/* This is the- initially empty- placeholder for the inner document view. */
{type:'$ContentPane',key:'content-pane',layoutkey:'empty',documentkey:'empty',children:[
]}
]}
]}
]};
break;
/* Inner content layouts, triggered by left menu items. */
case 'text-demo':
layout = {
children:[
{type:'$h1',children:[
{type:'$span',$content:'HTML Text Formatting with ZEN '},
{type:'$del',$content:'Mobile'},
{type:'$span',$content:' '},
{type:'$ins',$content:'Mojo'}
]},
{type:'$h2',$content:'Phrase Tags'},
{type:'$em',$content:'This is an emphasized text'},
{type:'$br'},
{type:'$dfn',$content:'A definition term'},
{type:'$br'},
{type:'$strong',$content:'Important text with strong style'},
{type:'$br'},
{type:'$code',$content:'This is a piece of computer code'},
{type:'$br'},
{type:'$samp',$content:'Sample output from computer program'},
{type:'$br'},
{type:'$kbd',$content:'Text from keyboard input:'},
{type:'$span',$content:' '},
{type:'$var',$content:'myVariable'}
]
}
break;
case 'table-demo':
layout = {
children:[
{type:'$table',cssClass:'tableDemo',children:[
{type:'$caption',$content:'=[caption]'},
{type:'$colgroup',children:[
{type:'$loop',value:'=[cols]',children:[
{type:'$col',style: '=[style]'}
]}
]},
{type:'$thead',children:[
{type:'$tr',children:[
{type:'$loop',value:'=[cols]',children:[
{type:'$th',$content:'=[header]'}
]}
]}
]},
{type:'$tbody',children:[
{type:'$loop',value:'=[rows]',children:[
{type:'$tr',children:[
{type:'$td',$content:'=[ssn]'},
{type:'$td',$content:'=[name]'},
{type:'$td',$content:'=[dob]'}
]}
]}
]},
{type:'$tfoot',children:[
{type:'$tr',children:[
{type:'$td',$content:''},
{type:'$td',$content:'Total # of rows:'},
{type:'$td',style:'text-align:right;',$content:'=[rows.length]'},
]}
]}
]}
]
}
break;
case 'form-demo':
layout = {
children:[
{type:'$datalist',key:'person-namelist',children:[
{type:'$loop',value:'=[options]',children:[
{type:'$option',value:'=[name]'}
]}
]},
{type:'$form',children:[
{type:'$fieldset',children:[
{type:'$legend',$content:'Search by name'},
/* The list attribute refers the 'key' and not the 'id' of the $datalist above! */
{type:'$input',inputType:'search',autocomplete:'on',list:'person-namelist',key:'person-search'},
{type:'$input',inputType:'button',value:'Go',key:'select-person'}
]},
{
type:'$label',$content:'* Some HTML5 input types may behave differently, based on your browser- and device type!',
style:'font-size:.8em;color:rgb(53,107,141);'
},
{type:'$fieldset',children:[
{type:'$legend',$content:'Selected person'},
{type:'$table',cssClass:'tPerson',children:[
{type:'$tr',children:[
{type:'$td',children:[
{type:'$label',$content:'ID:'}
]},
{type:'$td',children:[
{
type:'$input',inputType:'number',value:'=[person.id]',key:'person-id',
style:'width:5em;'
}
]}
]},
{type:'$tr',children:[
{type:'$td',children:[
{type:'$label',$content:'Name:'}
]},
{type:'$td',children:[
{type:'$input',inputType:'text',value:'=[person.name]',key:'person-name'}
]}
]},
{type:'$tr',children:[
{type:'$td',children:[
{type:'$label',$content:'D.of birth:'}
]},
{type:'$td',children:[
{type:'$input',inputType:'date',value:'=[person.dob]',key:'person-dob'}
]}
]},
{type:'$tr',children:[
{type:'$td',children:[
{type:'$label',$content:'Age:'}
]},
{type:'$td',children:[
/* CSS-customzied slider, see ZMDemo.html5.HomePage for style definition */
{type:'$input',inputType:'range',min:0,max:130,value:'=[person.age]',key:'person-age-range'},
{
type:'$input',inputType:'number',min:0,max:130,value:'=[person.age]',key:'person-age-nr',
style:'width:3em;'
}
]}
]},
{type:'$tr',children:[
{type:'$td',children:[
{type:'$label',$content:'Fav.color:'}
]},
{type:'$td',children:[
{type:'$input',inputType:'color',value:'=[person.favcolor]',key:'person-favcolor'}
]}
]}
]}
]}
]}
]
}
break;
case 'video-demo':
layout = {
children:[
{
type:'$embed',key:'video',mimeType:'application/x-shockwave-flash',
src:'http://c.brightcove.com/services/viewer/federated_f9?&amp;playerID=97820443001&amp;playerKey=AQ%252E%252E%2CAAAAFSasgmk%252E%2C99hiZNTvp0-cMF21gnQrIHdNOBZG7qZy&amp;isVid=true&amp;dynamicStreaming=true&amp;%40videoPlayer=3547030825001&amp;htmlFallback=true&amp;debuggerID=&amp;startTime=1415196805935',
width:486,height:412,
$extra:{
allowScriptAccess:'always',
allowFullScreen:false,			/* Change this to true, in order to enable full-screen mode */
quality:'high',
seamlessTabbing:false,
swliveconnect:true,
wmode:'transparent'
}
},
{type:'$div',style:'padding:10px;display:block;',children:[
{type:'$button',$content:'Show',key:'show-video'},
{type:'$button',$content:'Hide',key:'hide-video'}
]}
]
}
break;
/* End of inner content layouts, triggered by left menu items. */
}
return layout;
}

self.ZMdemo_html5_baseTemplate_onGetContent = function(which,key,criteria) {
var content = null;
switch (which) {
case 'data':
content = this.getData(key, criteria);
break;
case 'layout':
content = this.getLayout(key, criteria);
break;
}
return content;
}

self.ZMdemo_html5_baseTemplate_onchange = function(key,value,final,docViewId) {
var view = zen(docViewId);
var realKey = key.split(':')[0];
switch(realKey) {
case 'person-age-range':
/* The slider automatically changes the corresponding number input, too */
view.getItemByKey('person-age-nr').$setValue(view.getItemByKey('person-age-range').$getValue());
break;
case 'person-age-nr':
/* The number input automatically changes the corresponding slider, too */
view.getItemByKey('person-age-range').$setValue(view.getItemByKey('person-age-nr').$getValue());
break;
}
}

self.ZMdemo_html5_baseTemplate_onselect = function(key,value,docViewId) {
var view = zen(docViewId);
var realKey = key.split(':')[0];
switch(realKey) {
case 'show-menu-item':
var menuKey = value.substr(5);
this.selectMenuItem(key);
this.selectContentPane(menuKey, {}, menuKey, {}, false);
break;
case 'select-person':
var name = view.getItemByKey('person-search').$getValue();
view.getSourceData().person = zenPage.getContent('data', 'selected-person', {"name": name});
view.updateLayout();
break;
case 'show-video':
view.getItemByKey('video').$show();
break;
case 'hide-video':
view.getItemByKey('video').$hide();
break;
default:
console.log('Select: key=\'' + key + '\', value=\'' + value + '\'');
break;
}
}

self.ZMdemo_html5_baseTemplate_pageShow = function(key) {
if (key == 'home') {
var view = zen('mainView');
var plugin = view.getPluginByLayoutObjectType('$ContentPane');
var cp = view.getItemByKey('content-pane');
if (!cp.$dojoItem.$documentView) {
plugin.injectDocumentViewIntoContentPane(zen('centerView'), 'content-pane');
}
}
}

self.ZMdemo_html5_baseTemplate_selectContentPane = function(layoutkey,layoutcriteria,documentkey,documentcriteria,push) {
var view = zen('centerView');
if (push) {
view.pushDocument(layoutkey, layoutcriteria, documentkey, documentcriteria);
}
else {
view.setLayoutKey(layoutkey, layoutcriteria);
view.setDocumentKey(documentkey, documentcriteria);
view.updateLayout();
}
}

self.ZMdemo_html5_baseTemplate_selectMenuItem = function(menukey) {
var item = zenPage._selectedItem;
if (item) {
item.$setAttribute('cssClass', item.$getAttribute('cssClass').replace(new RegExp('(\\s|^)divMenuItemSelected(\\s|$)'), ' '));
zenPage._selectedItem = null;
}
item = zen('mainView').getItemByKey(menukey);
item.$setAttribute('cssClass', item.$getAttribute('cssClass') + ' divMenuItemSelected');
zenPage._selectedItem = item;
}

self.ZMdemo_html5_baseTemplate_ReallyRefreshContents = function() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
self.ZMdemo_html5_baseTemplate__Loader = function() {
	zenLoadClass('_ZEN_Mojo_Component_contentTemplate');
	ZMdemo_html5_baseTemplate.prototype = zenCreate('_ZEN_Mojo_Component_contentTemplate',-1);
	var p = ZMdemo_html5_baseTemplate.prototype;
	if (null==p) {return;}
	p.constructor = ZMdemo_html5_baseTemplate;
	p.superClass = ('undefined' == typeof _ZEN_Mojo_Component_contentTemplate) ? zenMaster._ZEN_Mojo_Component_contentTemplate.prototype:_ZEN_Mojo_Component_contentTemplate.prototype;
	p.__ZENcomponent = true;
	p._serverClass = 'ZMdemo.html5.baseTemplate';
	p._type = 'baseTemplate';
	p.serialize = ZMdemo_html5_baseTemplate_serialize;
	p.getSettings = ZMdemo_html5_baseTemplate_getSettings;
	p.ReallyRefreshContents = ZMdemo_html5_baseTemplate_ReallyRefreshContents;
	p.getData = ZMdemo_html5_baseTemplate_getData;
	p.getLayout = ZMdemo_html5_baseTemplate_getLayout;
	p.onGetContent = ZMdemo_html5_baseTemplate_onGetContent;
	p.onchange = ZMdemo_html5_baseTemplate_onchange;
	p.onselect = ZMdemo_html5_baseTemplate_onselect;
	p.pageShow = ZMdemo_html5_baseTemplate_pageShow;
	p.selectContentPane = ZMdemo_html5_baseTemplate_selectContentPane;
	p.selectMenuItem = ZMdemo_html5_baseTemplate_selectMenuItem;
}
/* EOF */