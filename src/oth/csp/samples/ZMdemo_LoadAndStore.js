/*** Zen Module: ZMdemo_LoadAndStore ***/

self._zenClassIdx['http://www.intersystems.com/zen/mojo/demo/loadStore/loadStoreTemplate'] = 'ZMdemo_LoadAndStore_loadStoreTemplate';
self.ZMdemo_LoadAndStore_loadStoreTemplate = function(index,id) {
	if (index>=0) {ZMdemo_LoadAndStore_loadStoreTemplate__init(this,index,id);}
}

self.ZMdemo_LoadAndStore_loadStoreTemplate__init = function(o,index,id) {
	('undefined' == typeof _ZEN_Mojo_Component_contentTemplate__init) ?zenMaster._ZEN_Mojo_Component_contentTemplate__init(o,index,id):_ZEN_Mojo_Component_contentTemplate__init(o,index,id);
}
function ZMdemo_LoadAndStore_loadStoreTemplate_serialize(set,s)
{
	var o = this;s[0]='2350274433';s[1]=o.index;s[2]=o.id;s[3]=o.name;s[4]=set.addObject(o.parent,'parent');s[5]=set.addObject(o.composite,'composite');s[6]=o.align;s[7]=o.aux;s[8]=o.containerStyle;s[9]=(o.dragEnabled?1:0);s[10]=(o.dropEnabled?1:0);s[11]=(o.dynamic?1:0);s[12]=o.enclosingClass;s[13]=o.enclosingStyle;s[14]=o.error;s[15]=o.height;s[16]=(o.hidden?1:0);s[17]=o.hint;s[18]=o.hintClass;s[19]=o.hintStyle;s[20]=o.label;s[21]=o.labelClass;s[22]=o.labelDisabledClass;s[23]=o.labelStyle;s[24]=o.onafterdrag;s[25]=o.onbeforedrag;s[26]=o.ondrag;s[27]=o.ondrop;s[28]=o.onhide;s[29]=o.onrefresh;s[30]=o.onshow;s[31]=o.onupdate;s[32]=o.overlayMode;s[33]=o.renderFlag;s[34]=(o.showLabel?1:0);s[35]=o.slice;s[36]=o.title;s[37]=o.tuple;s[38]=o.valign;s[39]=(o.visible?1:0);s[40]=o.width;
}
function ZMdemo_LoadAndStore_loadStoreTemplate_getSettings(s)
{
	s['name'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

self.ZMdemo_LoadAndStore_loadStoreTemplate_getLayout = function(key,criteria) {
var content = null;
switch(key) {
case 'home' :
content = {
children:[
{type:'$header',caption:'=[sectionHeader]'},
{type:'$listview',value:'=[personList]',filter:true,children:[
{type:'$listviewitem',key:'drill-person',value:'=[id]',label:'=[name]',content:'=[ssn]',clickable:true,labelNoWrapper:false}
]}
]
};
break;
case 'show-person' :
content = {
children:[
{type:'$header',caption:'=[sectionHeader]'},
{type:'$form',children:[
{type:'$text',placeHolder:$$$Text('Name'),value:'=[name]',fieldcontain:true,label:$$$Text('Name:'),key:'person-name'},
{type:'$text',placeHolder:$$$Text('SSN'),value:'=[ssn]',fieldcontain:true,label:$$$Text('SSN:'),key:'person-ssn'},
{type:'$text',placeHolder:$$$Text('Home City'),value:'=[home.city]',fieldcontain:true,label:$$$Text('Home City:'),key:'person-home-city'},
]},
{type:'$footer',children:[
{type:'$grid',showBox:true,barTheme:'d',children:[
{type:'$button',dataTheme:'a',caption:'Save',key:'save-person',value:'=[id]'}
]}
]}
]
};
break;
}
return content;
}

self.ZMdemo_LoadAndStore_loadStoreTemplate_onGetContent = function(which,key,criteria) {
switch (which)
{
case 'layout':
return this.getLayout(key,criteria);
case 'data':
}
return null;
}

self.ZMdemo_LoadAndStore_loadStoreTemplate_onchange = function(key,value,final,docViewId) {
console.log('change ' + key + ' to ' + value);
var view = zen(docViewId);
switch(key) {
}
}

self.ZMdemo_LoadAndStore_loadStoreTemplate_onselect = function(key,value,docViewId) {
console.log('select '+key);
var mainView = zen(docViewId);
var realKey = key.split(':')[0];
switch(realKey) {
case 'drill-person':
mainView.pushDocument('show-person',{id:value},'show-person',{id:value});
break;
case 'save-person':
var name = mainView.getControlValue('person-name');
var ssn = mainView.getControlValue('person-ssn');
var homecity = mainView.getControlValue('person-home-city');
var response = zenPage.submitData('save-person',{id:value,name:name,ssn:ssn,home:{city:homecity}});
if (response && response.error) {
alert(response.errorMsg);
}
zenPage.getContentProvider().invalidate('data','home');
zenPage.getContentProvider().invalidate('data','show-person');
mainView.popDocument(true,true);
break;
}
}

self.ZMdemo_LoadAndStore_loadStoreTemplate_ReallyRefreshContents = function() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
self.ZMdemo_LoadAndStore_loadStoreTemplate__Loader = function() {
	zenLoadClass('_ZEN_Mojo_Component_contentTemplate');
	ZMdemo_LoadAndStore_loadStoreTemplate.prototype = zenCreate('_ZEN_Mojo_Component_contentTemplate',-1);
	var p = ZMdemo_LoadAndStore_loadStoreTemplate.prototype;
	if (null==p) {return;}
	p.constructor = ZMdemo_LoadAndStore_loadStoreTemplate;
	p.superClass = ('undefined' == typeof _ZEN_Mojo_Component_contentTemplate) ? zenMaster._ZEN_Mojo_Component_contentTemplate.prototype:_ZEN_Mojo_Component_contentTemplate.prototype;
	p.__ZENcomponent = true;
	p._serverClass = 'ZMdemo.LoadAndStore.loadStoreTemplate';
	p._type = 'loadStoreTemplate';
	p.serialize = ZMdemo_LoadAndStore_loadStoreTemplate_serialize;
	p.getSettings = ZMdemo_LoadAndStore_loadStoreTemplate_getSettings;
	p.ReallyRefreshContents = ZMdemo_LoadAndStore_loadStoreTemplate_ReallyRefreshContents;
	p.getLayout = ZMdemo_LoadAndStore_loadStoreTemplate_getLayout;
	p.onGetContent = ZMdemo_LoadAndStore_loadStoreTemplate_onGetContent;
	p.onchange = ZMdemo_LoadAndStore_loadStoreTemplate_onchange;
	p.onselect = ZMdemo_LoadAndStore_loadStoreTemplate_onselect;
}
/* EOF */