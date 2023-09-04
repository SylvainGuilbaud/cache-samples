/*** Zen Module: ZMdemo_bootstrap ***/

self._zenClassIdx['http://www.intersystems.com/zen/mojo/demo/bootstrap/baseTemplate'] = 'ZMdemo_bootstrap_baseTemplate';
self.ZMdemo_bootstrap_baseTemplate = function(index,id) {
	if (index>=0) {ZMdemo_bootstrap_baseTemplate__init(this,index,id);}
}

self.ZMdemo_bootstrap_baseTemplate__init = function(o,index,id) {
	('undefined' == typeof _ZEN_Mojo_Component_contentTemplate__init) ?zenMaster._ZEN_Mojo_Component_contentTemplate__init(o,index,id):_ZEN_Mojo_Component_contentTemplate__init(o,index,id);
}
function ZMdemo_bootstrap_baseTemplate_serialize(set,s)
{
	var o = this;s[0]='2350274433';s[1]=o.index;s[2]=o.id;s[3]=o.name;s[4]=set.addObject(o.parent,'parent');s[5]=set.addObject(o.composite,'composite');s[6]=o.align;s[7]=o.aux;s[8]=o.containerStyle;s[9]=(o.dragEnabled?1:0);s[10]=(o.dropEnabled?1:0);s[11]=(o.dynamic?1:0);s[12]=o.enclosingClass;s[13]=o.enclosingStyle;s[14]=o.error;s[15]=o.height;s[16]=(o.hidden?1:0);s[17]=o.hint;s[18]=o.hintClass;s[19]=o.hintStyle;s[20]=o.label;s[21]=o.labelClass;s[22]=o.labelDisabledClass;s[23]=o.labelStyle;s[24]=o.onafterdrag;s[25]=o.onbeforedrag;s[26]=o.ondrag;s[27]=o.ondrop;s[28]=o.onhide;s[29]=o.onrefresh;s[30]=o.onshow;s[31]=o.onupdate;s[32]=o.overlayMode;s[33]=o.renderFlag;s[34]=(o.showLabel?1:0);s[35]=o.slice;s[36]=o.title;s[37]=o.tuple;s[38]=o.valign;s[39]=(o.visible?1:0);s[40]=o.width;
}
function ZMdemo_bootstrap_baseTemplate_getSettings(s)
{
	s['name'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

self.ZMdemo_bootstrap_baseTemplate_getLayout = function(key,criteria) {
var content = null;
switch(key) {
case 'home' :
content = {children:[{type:'$div', cssClass:'headerDiv navbar-fixed-top',children:[{type:'$text',cssClass:'header',content:'=[sectionHeader]'}]},
{type:'$gridSystem',cssClass:'main-grid',children:[{type:'$gridColumn',md:'4',
children:[{type:'$listGroup',linked:'true',value:'=[employeeList1]',
children:[{type:'$listGroupItem',key:'drill-employee',linked:'true',iconRight:'true',icon:'menu-right',id:'=[id]',value:'=[id]',label:'=[name]',content:'=[title]'}]
}]
},
{type:'$gridColumn',md:'4',
children:[{type:'$listGroup',linked:'true',value:'=[employeeList2]',
children:[{type:'$listGroupItem',key:'drill-employee',linked:'true',iconRight:'true',icon:'menu-right',id:'=[id]',value:'=[id]',label:'=[name]',content:'=[title]'}]
}]
},
{type:'$gridColumn',md:'4',
children:[{type:'$listGroup',linked:'true',value:'=[employeeList3]',
children:[{type:'$listGroupItem',key:'drill-employee',linked:'true',iconRight:'true',icon:'menu-right',id:'=[id]',value:'=[id]',label:'=[name]',content:'=[title]'}]
}]
}]
}]
}
break;
case 'show-employee' :
content = {children:[{type:'$div', cssClass:'headerDiv navbar-fixed-top',
children:[{type:'$button',icon:'menu-left',content:' ',key:'back',theme:'primary'},
{type:'$text',cssClass:'header',content:'=[sectionHeader]'}]
},
{type:'$form',cssClass:'main-grid',id:'detail-form',horizontal:'true',
children:[{type:'$formGroup',children:[{type:'$input',colSize:'sm',offset:'1',label:'Name',id:'employee-name',key:'employee-name',value:'=[name]'}]},
{type:'$formGroup',children:[{type:'$input',colSize:'sm',offset:'1',label:'Title',id:'employee-title',key:'employee-title',value:'=[title]'}]},
{type:'$formGroup',children:[{type:'$input',colSize:'sm',offset:'1',label:'Home City',id:'employee-home-city',key:'employee-home-city',value:'=[home.city]'}]},
{type:'$formGroup',children:[{type:'$button',colSize:'sm',offset:'1',content:'save',dataToggle:'modal',dataTarget:'#myModal',value:'myModal',theme:'primary'},
{type:'$modal',id:'myModal',tabindex:'-1',size:'sm',role:'dialog',ariaLabel:'myModalLabel',ariaHidden:'true',label:'Do you want to save it?',
headerClass:'modal-footer',children:[{type:'$button',theme:'default',dataDismiss:'modal',content:'cancel'},
{type:'$button',theme:'primary',content:'save',key:'save-employee',value:'=[id]'}]}]}
]}]}
break;
}
return content;
}

self.ZMdemo_bootstrap_baseTemplate_onGetContent = function(which,key,criteria) {
console.log(which + ' - ' + key + ' - ' + criteria);
switch (which)
{
case 'layout':
return this.getLayout(key,criteria);
case 'data':
}
return null;
}

self.ZMdemo_bootstrap_baseTemplate_onchange = function(key,value,final,docViewId) {
console.log('change ' + key + ' to ' + value);
var view = zen(docViewId);
switch(key) {
}
}

self.ZMdemo_bootstrap_baseTemplate_onselect = function(key,value,docViewId) {
console.log('select '+key);
var mainView = zen(docViewId);
var realKey = key.split(':')[0];
switch(realKey) {
case 'drill-employee':
mainView.pushDocument('show-employee',{id:value},'show-employee',{id:value});
break;
case 'save-employee':
var name = mainView.getControlValue('employee-name');
var title = mainView.getControlValue('employee-title');
var homecity = mainView.getControlValue('employee-home-city');
var profile = {id:value,name:name,title:title,homecity:homecity};
var response = zenPage.submitData('save-employee',profile);
if (response && response.error) {
alert(response.errorMsg);
}
zenPage.getContentProvider().invalidate('data','home');
zenPage.getContentProvider().invalidate('data','show-employee');
$('#myModal').modal('hide');
mainView.popDocument(true,true);
break;
case 'back':
mainView.popDocument(true,true);
break;
}
}

self.ZMdemo_bootstrap_baseTemplate_ReallyRefreshContents = function() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
self.ZMdemo_bootstrap_baseTemplate__Loader = function() {
	zenLoadClass('_ZEN_Mojo_Component_contentTemplate');
	ZMdemo_bootstrap_baseTemplate.prototype = zenCreate('_ZEN_Mojo_Component_contentTemplate',-1);
	var p = ZMdemo_bootstrap_baseTemplate.prototype;
	if (null==p) {return;}
	p.constructor = ZMdemo_bootstrap_baseTemplate;
	p.superClass = ('undefined' == typeof _ZEN_Mojo_Component_contentTemplate) ? zenMaster._ZEN_Mojo_Component_contentTemplate.prototype:_ZEN_Mojo_Component_contentTemplate.prototype;
	p.__ZENcomponent = true;
	p._serverClass = 'ZMdemo.bootstrap.baseTemplate';
	p._type = 'baseTemplate';
	p.serialize = ZMdemo_bootstrap_baseTemplate_serialize;
	p.getSettings = ZMdemo_bootstrap_baseTemplate_getSettings;
	p.ReallyRefreshContents = ZMdemo_bootstrap_baseTemplate_ReallyRefreshContents;
	p.getLayout = ZMdemo_bootstrap_baseTemplate_getLayout;
	p.onGetContent = ZMdemo_bootstrap_baseTemplate_onGetContent;
	p.onchange = ZMdemo_bootstrap_baseTemplate_onchange;
	p.onselect = ZMdemo_bootstrap_baseTemplate_onselect;
}

self._zenClassIdx['http://www.intersystems.com/zen/mojo/demo/bootstrap/baseTemplateServerSide'] = 'ZMdemo_bootstrap_baseTemplateServerSide';
self.ZMdemo_bootstrap_baseTemplateServerSide = function(index,id) {
	if (index>=0) {ZMdemo_bootstrap_baseTemplateServerSide__init(this,index,id);}
}

self.ZMdemo_bootstrap_baseTemplateServerSide__init = function(o,index,id) {
	('undefined' == typeof _ZEN_Mojo_Component_contentTemplate__init) ?zenMaster._ZEN_Mojo_Component_contentTemplate__init(o,index,id):_ZEN_Mojo_Component_contentTemplate__init(o,index,id);
}
function ZMdemo_bootstrap_baseTemplateServerSide_serialize(set,s)
{
	var o = this;s[0]='2350274433';s[1]=o.index;s[2]=o.id;s[3]=o.name;s[4]=set.addObject(o.parent,'parent');s[5]=set.addObject(o.composite,'composite');s[6]=o.align;s[7]=o.aux;s[8]=o.containerStyle;s[9]=(o.dragEnabled?1:0);s[10]=(o.dropEnabled?1:0);s[11]=(o.dynamic?1:0);s[12]=o.enclosingClass;s[13]=o.enclosingStyle;s[14]=o.error;s[15]=o.height;s[16]=(o.hidden?1:0);s[17]=o.hint;s[18]=o.hintClass;s[19]=o.hintStyle;s[20]=o.label;s[21]=o.labelClass;s[22]=o.labelDisabledClass;s[23]=o.labelStyle;s[24]=o.onafterdrag;s[25]=o.onbeforedrag;s[26]=o.ondrag;s[27]=o.ondrop;s[28]=o.onhide;s[29]=o.onrefresh;s[30]=o.onshow;s[31]=o.onupdate;s[32]=o.overlayMode;s[33]=o.renderFlag;s[34]=(o.showLabel?1:0);s[35]=o.slice;s[36]=o.title;s[37]=o.tuple;s[38]=o.valign;s[39]=(o.visible?1:0);s[40]=o.width;
}
function ZMdemo_bootstrap_baseTemplateServerSide_getSettings(s)
{
	s['name'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

self.ZMdemo_bootstrap_baseTemplateServerSide_onGetContent = function(which,key,criteria) {
return null;
}

self.ZMdemo_bootstrap_baseTemplateServerSide_onchange = function(key,value,final,docViewId) {
console.log('change ' + key + ' to ' + value);
var view = zen(docViewId);
switch(key) {
}
}

self.ZMdemo_bootstrap_baseTemplateServerSide_onselect = function(key,value,docViewId) {
console.log('select '+key);
var mainView = zen(docViewId);
var realKey = key.split(':')[0];
switch(realKey) {
case 'drill-employee':
mainView.pushDocument('show-employee',{id:value},'show-employee',{id:value});
break;
case 'save-employee':
var name = mainView.getControlValue('employee-name');
var title = mainView.getControlValue('employee-title');
var homecity = mainView.getControlValue('employee-home-city');
var profile = {id:value,name:name,title:title,homecity:homecity};
var response = zenPage.submitData('save-employee',profile);
if (response && response.error) {
alert(response.errorMsg);
}
zenPage.getContentProvider().invalidate('data','home');
zenPage.getContentProvider().invalidate('data','show-employee');
$('#myModal').modal('hide');
mainView.popDocument(true,true);
break;
case 'back':
mainView.popDocument(true,true);
break;
}
}

self.ZMdemo_bootstrap_baseTemplateServerSide_ReallyRefreshContents = function() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
self.ZMdemo_bootstrap_baseTemplateServerSide__Loader = function() {
	zenLoadClass('_ZEN_Mojo_Component_contentTemplate');
	ZMdemo_bootstrap_baseTemplateServerSide.prototype = zenCreate('_ZEN_Mojo_Component_contentTemplate',-1);
	var p = ZMdemo_bootstrap_baseTemplateServerSide.prototype;
	if (null==p) {return;}
	p.constructor = ZMdemo_bootstrap_baseTemplateServerSide;
	p.superClass = ('undefined' == typeof _ZEN_Mojo_Component_contentTemplate) ? zenMaster._ZEN_Mojo_Component_contentTemplate.prototype:_ZEN_Mojo_Component_contentTemplate.prototype;
	p.__ZENcomponent = true;
	p._serverClass = 'ZMdemo.bootstrap.baseTemplateServerSide';
	p._type = 'baseTemplateServerSide';
	p.serialize = ZMdemo_bootstrap_baseTemplateServerSide_serialize;
	p.getSettings = ZMdemo_bootstrap_baseTemplateServerSide_getSettings;
	p.ReallyRefreshContents = ZMdemo_bootstrap_baseTemplateServerSide_ReallyRefreshContents;
	p.onGetContent = ZMdemo_bootstrap_baseTemplateServerSide_onGetContent;
	p.onchange = ZMdemo_bootstrap_baseTemplateServerSide_onchange;
	p.onselect = ZMdemo_bootstrap_baseTemplateServerSide_onselect;
}
/* EOF */