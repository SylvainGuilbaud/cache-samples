/*** Zen Module: ZMdemo_LoadAsync ***/

self._zenClassIdx['http://www.intersystems.com/zen/mojo/demo/loadAsync/baseTemplate'] = 'ZMdemo_LoadAsync_baseTemplate';
self.ZMdemo_LoadAsync_baseTemplate = function(index,id) {
	if (index>=0) {ZMdemo_LoadAsync_baseTemplate__init(this,index,id);}
}

self.ZMdemo_LoadAsync_baseTemplate__init = function(o,index,id) {
	('undefined' == typeof _ZEN_Mojo_Component_contentTemplate__init) ?zenMaster._ZEN_Mojo_Component_contentTemplate__init(o,index,id):_ZEN_Mojo_Component_contentTemplate__init(o,index,id);
}
function ZMdemo_LoadAsync_baseTemplate_serialize(set,s)
{
	var o = this;s[0]='2350274433';s[1]=o.index;s[2]=o.id;s[3]=o.name;s[4]=set.addObject(o.parent,'parent');s[5]=set.addObject(o.composite,'composite');s[6]=o.align;s[7]=o.aux;s[8]=o.containerStyle;s[9]=(o.dragEnabled?1:0);s[10]=(o.dropEnabled?1:0);s[11]=(o.dynamic?1:0);s[12]=o.enclosingClass;s[13]=o.enclosingStyle;s[14]=o.error;s[15]=o.height;s[16]=(o.hidden?1:0);s[17]=o.hint;s[18]=o.hintClass;s[19]=o.hintStyle;s[20]=o.label;s[21]=o.labelClass;s[22]=o.labelDisabledClass;s[23]=o.labelStyle;s[24]=o.onafterdrag;s[25]=o.onbeforedrag;s[26]=o.ondrag;s[27]=o.ondrop;s[28]=o.onhide;s[29]=o.onrefresh;s[30]=o.onshow;s[31]=o.onupdate;s[32]=o.overlayMode;s[33]=o.renderFlag;s[34]=(o.showLabel?1:0);s[35]=o.slice;s[36]=o.title;s[37]=o.tuple;s[38]=o.valign;s[39]=(o.visible?1:0);s[40]=o.width;
}
function ZMdemo_LoadAsync_baseTemplate_getSettings(s)
{
	s['name'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

self.ZMdemo_LoadAsync_baseTemplate_getData = function(key,criteria) {
var data = null;
switch (key) {
case 'home':
data = {};
data.message = 'Nothing loaded';
break;
}
return data;
}

self.ZMdemo_LoadAsync_baseTemplate_getLayout = function(key,criteria) {
var content = null;
switch(key) {
case 'home' :
content = {
children:[
{type:'$header',caption:'Start Page'},
{type:'$button',caption:'Load async',key:'load-async'},
{type:'$span',$content:'=[message]'}
]
};
break;
}
return content;
}

self.ZMdemo_LoadAsync_baseTemplate_onGetContent = function(which,key,criteria) {
console.log(which + ' - ' + key + ' - ' + criteria);
switch (which)
{
case 'layout':
return this.getLayout(key,criteria);
case 'data':
return this.getData(key,criteria);
}
return null;
}

self.ZMdemo_LoadAsync_baseTemplate_onchange = function(key,value,final,docViewId) {
console.log('change ' + key + ' to ' + value);
var view = zen(docViewId);
switch(key) {
}
}

self.ZMdemo_LoadAsync_baseTemplate_onselect = function(key,value,docViewId) {
console.log('select '+key);
var mainView = zen(docViewId);
switch(key) {
case 'load-async':
var notify = function(final){
if (final) {
console.log('done');
$.mobile.loading('hide');
mainView.setDocumentKey('slow-loading',{});
mainView.updateLayout();
}
};
$.mobile.loading('show');
zenPage.getContent('data','slow-loading',{},false,notify);
break;
}
}

self.ZMdemo_LoadAsync_baseTemplate_ReallyRefreshContents = function() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
self.ZMdemo_LoadAsync_baseTemplate__Loader = function() {
	zenLoadClass('_ZEN_Mojo_Component_contentTemplate');
	ZMdemo_LoadAsync_baseTemplate.prototype = zenCreate('_ZEN_Mojo_Component_contentTemplate',-1);
	var p = ZMdemo_LoadAsync_baseTemplate.prototype;
	if (null==p) {return;}
	p.constructor = ZMdemo_LoadAsync_baseTemplate;
	p.superClass = ('undefined' == typeof _ZEN_Mojo_Component_contentTemplate) ? zenMaster._ZEN_Mojo_Component_contentTemplate.prototype:_ZEN_Mojo_Component_contentTemplate.prototype;
	p.__ZENcomponent = true;
	p._serverClass = 'ZMdemo.LoadAsync.baseTemplate';
	p._type = 'baseTemplate';
	p.serialize = ZMdemo_LoadAsync_baseTemplate_serialize;
	p.getSettings = ZMdemo_LoadAsync_baseTemplate_getSettings;
	p.ReallyRefreshContents = ZMdemo_LoadAsync_baseTemplate_ReallyRefreshContents;
	p.getData = ZMdemo_LoadAsync_baseTemplate_getData;
	p.getLayout = ZMdemo_LoadAsync_baseTemplate_getLayout;
	p.onGetContent = ZMdemo_LoadAsync_baseTemplate_onGetContent;
	p.onchange = ZMdemo_LoadAsync_baseTemplate_onchange;
	p.onselect = ZMdemo_LoadAsync_baseTemplate_onselect;
}
/* EOF */