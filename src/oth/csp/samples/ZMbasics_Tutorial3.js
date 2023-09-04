/*** Zen Module: ZMbasics_Tutorial3 ***/

self._zenClassIdx['http://www.intersystems.com/zen/mojo/ZMTutorial3/Template'] = 'ZMbasics_Tutorial3_Template';
self.ZMbasics_Tutorial3_Template = function(index,id) {
	if (index>=0) {ZMbasics_Tutorial3_Template__init(this,index,id);}
}

self.ZMbasics_Tutorial3_Template__init = function(o,index,id) {
	('undefined' == typeof _ZEN_Mojo_Component_contentTemplate__init) ?zenMaster._ZEN_Mojo_Component_contentTemplate__init(o,index,id):_ZEN_Mojo_Component_contentTemplate__init(o,index,id);
}
function ZMbasics_Tutorial3_Template_serialize(set,s)
{
	var o = this;s[0]='2350274433';s[1]=o.index;s[2]=o.id;s[3]=o.name;s[4]=set.addObject(o.parent,'parent');s[5]=set.addObject(o.composite,'composite');s[6]=o.align;s[7]=o.aux;s[8]=o.containerStyle;s[9]=(o.dragEnabled?1:0);s[10]=(o.dropEnabled?1:0);s[11]=(o.dynamic?1:0);s[12]=o.enclosingClass;s[13]=o.enclosingStyle;s[14]=o.error;s[15]=o.height;s[16]=(o.hidden?1:0);s[17]=o.hint;s[18]=o.hintClass;s[19]=o.hintStyle;s[20]=o.label;s[21]=o.labelClass;s[22]=o.labelDisabledClass;s[23]=o.labelStyle;s[24]=o.onafterdrag;s[25]=o.onbeforedrag;s[26]=o.ondrag;s[27]=o.ondrop;s[28]=o.onhide;s[29]=o.onrefresh;s[30]=o.onshow;s[31]=o.onupdate;s[32]=o.overlayMode;s[33]=o.renderFlag;s[34]=(o.showLabel?1:0);s[35]=o.slice;s[36]=o.title;s[37]=o.tuple;s[38]=o.valign;s[39]=(o.visible?1:0);s[40]=o.width;
}
function ZMbasics_Tutorial3_Template_getSettings(s)
{
	s['name'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

self.ZMbasics_Tutorial3_Template_myGetMainViewLayout = function(key,criteria) {
var myLayoutGraph = {};
myLayoutGraph = {
children: [
{ type: '$header', $content: 'Zen Mojo Tutorial 3'},
{ type: '$p'},
{ type: '$button', $content:'Show Person 1', key:'showPerson1'},
{ type: '$p'},
{ type: '$button', $content:'Show Person 2', key:'showPerson2'},
{ type: '$p'},
{ type: '$div', key:'person1',
children:[
{ type: '$p', title:'Name', $content:'=[person1Name]' },
{ type: '$p', title:'Birth Date', $content:'=[person1DOB]' }
]},
{ type: '$div', key:'person2', hidden:true,
children:[
{ type: '$p', title:'Name', $content:'=[person2Name]' },
{ type: '$p', title:'Birth Date', $content:'=[person2DOB]' }
]},
]
}
return myLayoutGraph;
}

self.ZMbasics_Tutorial3_Template_onGetContent = function(providerName,key,criteria) {
var content = null;
switch(providerName) {
case 'mainViewLayout':
content = this.myGetMainViewLayout(key,criteria);
break;
}
return content;
}

self.ZMbasics_Tutorial3_Template_onselect = function(key,value,docViewId) {
console.log('in onselect(), docViewId: '+docViewId+ ' key: ' + key + ' value: ' + value);
if (docViewId=='mainView') {
var person1=zen('mainView').getItemByKey('person1');
var person2=zen('mainView').getItemByKey('person2');
if (key=='showPerson1') {
person1.$show();
person2.$hide();
} else if (key=='showPerson2') {
person1.$hide();
person2.$show();
}
}
}

self.ZMbasics_Tutorial3_Template_ReallyRefreshContents = function() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
self.ZMbasics_Tutorial3_Template__Loader = function() {
	zenLoadClass('_ZEN_Mojo_Component_contentTemplate');
	ZMbasics_Tutorial3_Template.prototype = zenCreate('_ZEN_Mojo_Component_contentTemplate',-1);
	var p = ZMbasics_Tutorial3_Template.prototype;
	if (null==p) {return;}
	p.constructor = ZMbasics_Tutorial3_Template;
	p.superClass = ('undefined' == typeof _ZEN_Mojo_Component_contentTemplate) ? zenMaster._ZEN_Mojo_Component_contentTemplate.prototype:_ZEN_Mojo_Component_contentTemplate.prototype;
	p.__ZENcomponent = true;
	p._serverClass = 'ZMbasics.Tutorial3.Template';
	p._type = 'Template';
	p.serialize = ZMbasics_Tutorial3_Template_serialize;
	p.getSettings = ZMbasics_Tutorial3_Template_getSettings;
	p.ReallyRefreshContents = ZMbasics_Tutorial3_Template_ReallyRefreshContents;
	p.myGetMainViewLayout = ZMbasics_Tutorial3_Template_myGetMainViewLayout;
	p.onGetContent = ZMbasics_Tutorial3_Template_onGetContent;
	p.onselect = ZMbasics_Tutorial3_Template_onselect;
}
/* EOF */