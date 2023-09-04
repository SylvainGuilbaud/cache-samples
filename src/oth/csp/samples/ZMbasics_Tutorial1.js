/*** Zen Module: ZMbasics_Tutorial1 ***/

self._zenClassIdx['http://www.intersystems.com/zen/mojo/ZMTutorial1/Template'] = 'ZMbasics_Tutorial1_Template';
self.ZMbasics_Tutorial1_Template = function(index,id) {
	if (index>=0) {ZMbasics_Tutorial1_Template__init(this,index,id);}
}

self.ZMbasics_Tutorial1_Template__init = function(o,index,id) {
	('undefined' == typeof _ZEN_Mojo_Component_contentTemplate__init) ?zenMaster._ZEN_Mojo_Component_contentTemplate__init(o,index,id):_ZEN_Mojo_Component_contentTemplate__init(o,index,id);
}
function ZMbasics_Tutorial1_Template_serialize(set,s)
{
	var o = this;s[0]='2350274433';s[1]=o.index;s[2]=o.id;s[3]=o.name;s[4]=set.addObject(o.parent,'parent');s[5]=set.addObject(o.composite,'composite');s[6]=o.align;s[7]=o.aux;s[8]=o.containerStyle;s[9]=(o.dragEnabled?1:0);s[10]=(o.dropEnabled?1:0);s[11]=(o.dynamic?1:0);s[12]=o.enclosingClass;s[13]=o.enclosingStyle;s[14]=o.error;s[15]=o.height;s[16]=(o.hidden?1:0);s[17]=o.hint;s[18]=o.hintClass;s[19]=o.hintStyle;s[20]=o.label;s[21]=o.labelClass;s[22]=o.labelDisabledClass;s[23]=o.labelStyle;s[24]=o.onafterdrag;s[25]=o.onbeforedrag;s[26]=o.ondrag;s[27]=o.ondrop;s[28]=o.onhide;s[29]=o.onrefresh;s[30]=o.onshow;s[31]=o.onupdate;s[32]=o.overlayMode;s[33]=o.renderFlag;s[34]=(o.showLabel?1:0);s[35]=o.slice;s[36]=o.title;s[37]=o.tuple;s[38]=o.valign;s[39]=(o.visible?1:0);s[40]=o.width;
}
function ZMbasics_Tutorial1_Template_getSettings(s)
{
	s['name'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

self.ZMbasics_Tutorial1_Template_myGetMainViewLayout = function(key,criteria) {
var myLayoutGraph = {};
myLayoutGraph = {
children: [
{ type: '$header', $content: 'Zen Mojo Tutorial 1'},
{ type: '$p',      $content: 'This page displays some simple text.'},
{ type: '$p',      $content: 'Here is another paragraph.' },
]
}
return myLayoutGraph;
}

self.ZMbasics_Tutorial1_Template_onGetContent = function(providerName,key,criteria) {
var content = null;
switch(providerName) {
case 'mainViewLayout':
content = this.myGetMainViewLayout(key,criteria);
break;
}
return content;
}

self.ZMbasics_Tutorial1_Template_ReallyRefreshContents = function() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
self.ZMbasics_Tutorial1_Template__Loader = function() {
	zenLoadClass('_ZEN_Mojo_Component_contentTemplate');
	ZMbasics_Tutorial1_Template.prototype = zenCreate('_ZEN_Mojo_Component_contentTemplate',-1);
	var p = ZMbasics_Tutorial1_Template.prototype;
	if (null==p) {return;}
	p.constructor = ZMbasics_Tutorial1_Template;
	p.superClass = ('undefined' == typeof _ZEN_Mojo_Component_contentTemplate) ? zenMaster._ZEN_Mojo_Component_contentTemplate.prototype:_ZEN_Mojo_Component_contentTemplate.prototype;
	p.__ZENcomponent = true;
	p._serverClass = 'ZMbasics.Tutorial1.Template';
	p._type = 'Template';
	p.serialize = ZMbasics_Tutorial1_Template_serialize;
	p.getSettings = ZMbasics_Tutorial1_Template_getSettings;
	p.ReallyRefreshContents = ZMbasics_Tutorial1_Template_ReallyRefreshContents;
	p.myGetMainViewLayout = ZMbasics_Tutorial1_Template_myGetMainViewLayout;
	p.onGetContent = ZMbasics_Tutorial1_Template_onGetContent;
}
/* EOF */