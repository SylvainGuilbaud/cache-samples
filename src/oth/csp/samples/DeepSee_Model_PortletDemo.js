/*** Zen Module: DeepSee_Model_PortletDemo ***/

self._zenClassIdx['http://www.intersystems.com/deepsee/ClockPortlet'] = 'DeepSee_Model_PortletDemo_ClockPortlet';
self.DeepSee_Model_PortletDemo_ClockPortlet = function(index,id) {
	if (index>=0) {DeepSee_Model_PortletDemo_ClockPortlet__init(this,index,id);}
}

self.DeepSee_Model_PortletDemo_ClockPortlet__init = function(o,index,id) {
	('undefined' == typeof _DeepSee_Component_Portlet_abstractPortlet__init) ?zenMaster._DeepSee_Component_Portlet_abstractPortlet__init(o,index,id):_DeepSee_Component_Portlet_abstractPortlet__init(o,index,id);
	o.controller = '';
	o.controllerId = '';
	o.ongetcontroller = '';
	o.onnotifyView = '';
	o.srcparams = '';
}
function DeepSee_Model_PortletDemo_ClockPortlet_serialize(set,s)
{
	var o = this;s[0]='3031171523';s[1]=o.index;s[2]=o.id;s[3]=o.name;s[4]=set.addObject(o.parent,'parent');s[5]=set.addObject(o.composite,'composite');s[6]=o.align;s[7]=o.aux;s[8]=o.containerStyle;s[9]=o.controller;s[10]=o.controllerId;s[11]=(o.dragEnabled?1:0);s[12]=(o.dropEnabled?1:0);s[13]=(o.dynamic?1:0);s[14]=o.enclosingClass;s[15]=o.enclosingStyle;s[16]=o.error;s[17]=o.height;s[18]=(o.hidden?1:0);s[19]=o.hint;s[20]=o.hintClass;s[21]=o.hintStyle;s[22]=o.label;s[23]=o.labelClass;s[24]=o.labelDisabledClass;s[25]=o.labelStyle;s[26]=o.onafterdrag;s[27]=o.onbeforedrag;s[28]=o.ondrag;s[29]=o.ondrop;s[30]=o.ongetcontroller;s[31]=o.onhide;s[32]=o.onnotifyView;s[33]=o.onrefresh;s[34]=o.onshow;s[35]=o.onupdate;s[36]=o.overlayMode;s[37]=o.renderFlag;s[38]=(o.showLabel?1:0);s[39]=o.slice;s[40]=o.srcparams;s[41]=o.title;s[42]=o.tuple;s[43]=o.valign;s[44]=(o.visible?1:0);s[45]=o.width;
}
function DeepSee_Model_PortletDemo_ClockPortlet_getSettings(s)
{
	s['name'] = 'string';
	s['controllerId'] = 'id';
	s['ongetcontroller'] = 'eventHandler';
	s['onnotifyView'] = 'eventHandler';
	s['srcparams'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

self.DeepSee_Model_PortletDemo_ClockPortlet_connectToController = function() {
this.controller = '';
if (!zenIsMissing(this.controllerId)) {
if (this.composite) {
this.controller = this.composite.getChildById(this.controllerId);
}
else {
this.controller = zenPage.getComponentById(this.controllerId);
}
if (this.controller && this.controller.register) {
this.controller.register(this);
}
else {
alert('ZEN: Unable to connect component to dataController (' + this.id + ').');
}
if (this.controller) {
if ('' == this.controller.modelError) {
this.controller.loadModel(false);
}
}
}
}

self.DeepSee_Model_PortletDemo_ClockPortlet_disconnectFromController = function() {
if (this.controller && this.controller.unregister) {
this.controller.unregister(this);
}
this.controller = '';
}

self.DeepSee_Model_PortletDemo_ClockPortlet_getController = function() {
if (this.ongetcontroller) {
return zenInvokeCallbackMethod(this.ongetcontroller,this,'ongetcontroller','view',this);
}
return (null == this.controller || '' == this.controller) ? null : this.controller;
}

self.DeepSee_Model_PortletDemo_ClockPortlet_notifyView = function(reason,data1,data2,data3) {
var ret = true;
if (this.onnotifyView) {
ret = zenInvokeCallbackMethod(this.onnotifyView,this,'onnotifyEvent','reason',reason,'data1',data1,'data2',data2,'data3',data3);
}
if (ret && this.notifyViewHandler) {
this.notifyViewHandler(reason,data1,data2,data3);
}
}

self.DeepSee_Model_PortletDemo_ClockPortlet_sendEventToController = function(reason,data1,data2,data3) {
var controller = this.getController();
if (controller && controller.notifyController) {
controller.notifyController(this,reason,data1,data2,data3);
}
}

self.DeepSee_Model_PortletDemo_ClockPortlet_setControllerId = function(id) {
this.disconnectFromController();
this.controllerId = id;
this.connectToController();
}

self.DeepSee_Model_PortletDemo_ClockPortlet_ReallyRefreshContents = function() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
self.DeepSee_Model_PortletDemo_ClockPortlet__Loader = function() {
	zenLoadClass('_DeepSee_Component_Portlet_abstractPortlet');
	DeepSee_Model_PortletDemo_ClockPortlet.prototype = zenCreate('_DeepSee_Component_Portlet_abstractPortlet',-1);
	var p = DeepSee_Model_PortletDemo_ClockPortlet.prototype;
	if (null==p) {return;}
	p.constructor = DeepSee_Model_PortletDemo_ClockPortlet;
	p.superClass = ('undefined' == typeof _DeepSee_Component_Portlet_abstractPortlet) ? zenMaster._DeepSee_Component_Portlet_abstractPortlet.prototype:_DeepSee_Component_Portlet_abstractPortlet.prototype;
	p.__ZENcomponent = true;
	p._serverClass = 'DeepSee.Model.PortletDemo.ClockPortlet';
	p._type = 'ClockPortlet';
	p.serialize = DeepSee_Model_PortletDemo_ClockPortlet_serialize;
	p.getSettings = DeepSee_Model_PortletDemo_ClockPortlet_getSettings;
	p.ReallyRefreshContents = DeepSee_Model_PortletDemo_ClockPortlet_ReallyRefreshContents;
	p.connectToController = DeepSee_Model_PortletDemo_ClockPortlet_connectToController;
	p.disconnectFromController = DeepSee_Model_PortletDemo_ClockPortlet_disconnectFromController;
	p.getController = DeepSee_Model_PortletDemo_ClockPortlet_getController;
	p.notifyView = DeepSee_Model_PortletDemo_ClockPortlet_notifyView;
	p.sendEventToController = DeepSee_Model_PortletDemo_ClockPortlet_sendEventToController;
	p.setControllerId = DeepSee_Model_PortletDemo_ClockPortlet_setControllerId;
}
/* EOF */