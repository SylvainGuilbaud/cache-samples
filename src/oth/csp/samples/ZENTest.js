/*** Zen Module: ZENTest ***/

self._zenClassIdx['http://www.intersystems.com/zentest/customClass'] = 'ZENTest_customClass';
self.ZENTest_customClass = function(index,id) {
	if (index>=0) {ZENTest_customClass__init(this,index,id);}
}

self.ZENTest_customClass__init = function(o,index,id) {
	('undefined' == typeof _ZEN_Component_object__init) ?zenMaster._ZEN_Component_object__init(o,index,id):_ZEN_Component_object__init(o,index,id);
}
function ZENTest_customClass_serialize(set,s)
{
	var o = this;s[0]='3874650476';s[1]=o.index;s[2]=o.id;s[3]=o.name;s[4]=set.addObject(o.parent,'parent');s[5]=set.addObject(o.composite,'composite');s[6]=o.aux;s[7]=o.onupdate;s[8]=o.renderFlag;s[9]=o.tuple;s[10]=(o.visible?1:0);
}
function ZENTest_customClass_getSettings(s)
{
	s['name'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

self.ZENTest_customClass_test = function() {
alert('Hello from customClass.');
}
self.ZENTest_customClass__Loader = function() {
	zenLoadClass('_ZEN_Component_object');
	ZENTest_customClass.prototype = zenCreate('_ZEN_Component_object',-1);
	var p = ZENTest_customClass.prototype;
	if (null==p) {return;}
	p.constructor = ZENTest_customClass;
	p.superClass = ('undefined' == typeof _ZEN_Component_object) ? zenMaster._ZEN_Component_object.prototype:_ZEN_Component_object.prototype;
	p.__ZENcomponent = true;
	p._serverClass = 'ZENTest.customClass';
	p._type = 'customClass';
	p.serialize = ZENTest_customClass_serialize;
	p.getSettings = ZENTest_customClass_getSettings;
	p.test = ZENTest_customClass_test;
}

self._zenClassIdx['http://www.intersystems.com/zentest/customSVGComponent'] = 'ZENTest_customSVGComponent';
self.ZENTest_customSVGComponent = function(index,id) {
	if (index>=0) {ZENTest_customSVGComponent__init(this,index,id);}
}

self.ZENTest_customSVGComponent__init = function(o,index,id) {
	('undefined' == typeof _ZEN_SVGComponent_svgComponent__init) ?zenMaster._ZEN_SVGComponent_svgComponent__init(o,index,id):_ZEN_SVGComponent_svgComponent__init(o,index,id);
	o.style = '';
}
function ZENTest_customSVGComponent_serialize(set,s)
{
	var o = this;s[0]='238867053';s[1]=o.index;s[2]=o.id;s[3]=o.name;s[4]=set.addObject(o.parent,'parent');s[5]=set.addObject(o.composite,'composite');s[6]=o.aux;s[7]=(o.boundless?1:0);s[8]=o.height;s[9]=(o.hidden?1:0);s[10]=o.onclick;s[11]=o.onupdate;s[12]=o.position;s[13]=o.preserveAspectRatio;s[14]=o.renderFlag;s[15]=o.style;s[16]=o.tuple;s[17]=o.viewBoxHeight;s[18]=o.viewBoxWidth;s[19]=(o.visible?1:0);s[20]=o.width;s[21]=o.x;s[22]=o.y;
}
function ZENTest_customSVGComponent_getSettings(s)
{
	s['name'] = 'string';
	s['style'] = 'style';
	this.invokeSuper('getSettings',arguments);
}

self.ZENTest_customSVGComponent_renderContents = function() {
var rect = this.document.createElementNS(SVGNS,'rect');
rect.setAttribute('id',this.makeId('rect'));
rect.setAttribute('class','customSVGComponent');
rect.setAttribute('x',0);
rect.setAttribute('y',0);
rect.setAttribute('width',this.width);
rect.setAttribute('height',this.height);
rect.setAttribute('style',this.style);
this.svgGroup.appendChild(rect);
}

self.ZENTest_customSVGComponent_setProperty = function(property,value,value2) {
switch(property) {
case 'style':
this[property] = value;
var el = this.findSVGElement('rect');
if (el) {
el.setAttribute(property,value);
}
break;
case 'width':
case 'height':
var el = this.findSVGElement('rect');
if (el) {
el.setAttribute(property,value);
}
return this.invokeSuper('setProperty',arguments);
default:
return this.invokeSuper('setProperty',arguments);
}
return true;
}
self.ZENTest_customSVGComponent__Loader = function() {
	zenLoadClass('_ZEN_SVGComponent_svgComponent');
	ZENTest_customSVGComponent.prototype = zenCreate('_ZEN_SVGComponent_svgComponent',-1);
	var p = ZENTest_customSVGComponent.prototype;
	if (null==p) {return;}
	p.constructor = ZENTest_customSVGComponent;
	p.superClass = ('undefined' == typeof _ZEN_SVGComponent_svgComponent) ? zenMaster._ZEN_SVGComponent_svgComponent.prototype:_ZEN_SVGComponent_svgComponent.prototype;
	p.__ZENcomponent = true;
	p._serverClass = 'ZENTest.customSVGComponent';
	p._type = 'customSVGComponent';
	p.serialize = ZENTest_customSVGComponent_serialize;
	p.getSettings = ZENTest_customSVGComponent_getSettings;
	p.renderContents = ZENTest_customSVGComponent_renderContents;
	p.setProperty = ZENTest_customSVGComponent_setProperty;
}

self._zenClassIdx['http://www.intersystems.com/zentest/customComponent'] = 'ZENTest_customComponent';
self.ZENTest_customComponent = function(index,id) {
	if (index>=0) {ZENTest_customComponent__init(this,index,id);}
}

self.ZENTest_customComponent__init = function(o,index,id) {
	('undefined' == typeof _ZEN_Component_control__init) ?zenMaster._ZEN_Component_control__init(o,index,id):_ZEN_Component_control__init(o,index,id);
	o.message = 'Custom Component';
}
function ZENTest_customComponent_serialize(set,s)
{
	var o = this;s[0]='2037280945';s[1]=o.index;s[2]=o.id;s[3]=o.name;s[4]=set.addObject(o.parent,'parent');s[5]=set.addObject(o.composite,'composite');s[6]=o.align;s[7]=o.aux;s[8]=o.clientType;s[9]=o.containerStyle;s[10]=o.controlClass;s[11]=o.controlStyle;s[12]=o.dataBinding;s[13]=(o.disabled?1:0);s[14]=(o.dragEnabled?1:0);s[15]=(o.dropEnabled?1:0);s[16]=(o.dynamic?1:0);s[17]=o.enclosingClass;s[18]=o.enclosingStyle;s[19]=o.error;s[20]=o.height;s[21]=(o.hidden?1:0);s[22]=o.hint;s[23]=o.hintClass;s[24]=o.hintStyle;s[25]=(o.invalid?1:0);s[26]=o.invalidMessage;s[27]=o.label;s[28]=o.labelClass;s[29]=o.labelDisabledClass;s[30]=o.labelStyle;s[31]=o.message;s[32]=o.onafterdrag;s[33]=o.onbeforedrag;s[34]=o.onblur;s[35]=o.onchange;s[36]=o.onclick;s[37]=o.ondblclick;s[38]=o.ondrag;s[39]=o.ondrop;s[40]=o.onfocus;s[41]=o.onhide;s[42]=o.onkeydown;s[43]=o.onkeypress;s[44]=o.onkeyup;s[45]=o.onmousedown;s[46]=o.onmouseout;s[47]=o.onmouseover;s[48]=o.onmouseup;s[49]=o.onrefresh;s[50]=o.onshow;s[51]=o.onsubmit;s[52]=o.ontouchend;s[53]=o.ontouchmove;s[54]=o.ontouchstart;s[55]=o.onupdate;s[56]=o.onvalidate;s[57]=o.originalValue;s[58]=o.overlayMode;s[59]=(o.readOnly?1:0);s[60]=o.renderFlag;s[61]=(o.required?1:0);s[62]=o.requiredMessage;s[63]=(o.showLabel?1:0);s[64]=o.slice;s[65]=o.tabIndex;s[66]=o.title;s[67]=o.tuple;s[68]=o.valign;s[69]=('boolean'==typeof o.value?(o.value?1:0):o.value);s[70]=(o.visible?1:0);s[71]=o.width;
}
function ZENTest_customComponent_getSettings(s)
{
	s['name'] = 'string';
	s['message'] = 'caption';
	this.invokeSuper('getSettings',arguments);
}

self.ZENTest_customComponent_ReallyRefreshContents = function() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
self.ZENTest_customComponent__Loader = function() {
	zenLoadClass('_ZEN_Component_control');
	ZENTest_customComponent.prototype = zenCreate('_ZEN_Component_control',-1);
	var p = ZENTest_customComponent.prototype;
	if (null==p) {return;}
	p.constructor = ZENTest_customComponent;
	p.superClass = ('undefined' == typeof _ZEN_Component_control) ? zenMaster._ZEN_Component_control.prototype:_ZEN_Component_control.prototype;
	p.__ZENcomponent = true;
	p._serverClass = 'ZENTest.customComponent';
	p._type = 'customComponent';
	p.serialize = ZENTest_customComponent_serialize;
	p.getSettings = ZENTest_customComponent_getSettings;
	p.ReallyRefreshContents = ZENTest_customComponent_ReallyRefreshContents;
}

self._zenClassIdx['http://www.intersystems.com/zentest/customTable'] = 'ZENTest_customTable';
self.ZENTest_customTable = function(index,id) {
	if (index>=0) {ZENTest_customTable__init(this,index,id);}
}

self.ZENTest_customTable__init = function(o,index,id) {
	('undefined' == typeof _ZEN_Component_tablePane__init) ?zenMaster._ZEN_Component_tablePane__init(o,index,id):_ZEN_Component_tablePane__init(o,index,id);
	o.OnCreateResultSet = ''; // encrypted
	o.OnExecuteResultSet = ''; // encrypted
	o.columnName = '';
	o.countRows = '0';
	o.groupByClause = '';
	o.invalidMessage = 'Invalid Date';
	o.maxRows = '100';
	o.msgNoResult = 'No Results';
	o.orderByClause = '';
	o.queryClass = ''; // encrypted
	o.queryName = '';
	o.sql = ''; // encrypted
	o.tableName = ''; // encrypted
	o.whereClause = '';
}
function ZENTest_customTable_serialize(set,s)
{
	var o = this;s[0]='1035744322';s[1]=o.index;s[2]=o.id;s[3]=o.name;s[4]=set.addObject(o.parent,'parent');s[5]=set.addObject(o.composite,'composite');s[6]=o.OnCreateResultSet;s[7]=o.OnExecuteResultSet;s[8]=o.align;s[9]=(o.autoExecute?1:0);s[10]=o.aux;s[11]=o.bodyHeight;s[12]=o.caption;s[13]=o.cellSpacing;s[14]=(o.clearSnapshot?1:0);s[15]=o.columnName;s[16]=set.serializeList(o,o.columns,true,'columns');s[17]=set.serializeList(o,o.conditions,true,'conditions');s[18]=o.containerStyle;s[19]=o.countRows;s[20]=o.currColumn;s[21]=o.currPage;s[22]=o.dataSource;s[23]=(o.dragEnabled?1:0);s[24]=(o.dropEnabled?1:0);s[25]=(o.dynamic?1:0);s[26]=(o.enableToggleSelect?1:0);s[27]=o.enclosingClass;s[28]=o.enclosingStyle;s[29]=o.error;s[30]=o.extraColumnWidth;s[31]=(o.filtersDisabled?1:0);s[32]=(o.fixedHeaders?1:0);s[33]=o.groupByClause;s[34]=(o.hasFocus?1:0);s[35]=o.headerLayout;s[36]=o.height;s[37]=(o.hidden?1:0);s[38]=o.hint;s[39]=o.hintClass;s[40]=o.hintStyle;s[41]=(o.initialExecute?1:0);s[42]=o.invalidMessage;s[43]=o.label;s[44]=o.labelClass;s[45]=o.labelDisabledClass;s[46]=o.labelStyle;s[47]=o.lastFilter;s[48]=o.lastUpdate;s[49]=o.maxRows;s[50]=o.msgNoResult;s[51]=(o.multiSelect?1:0);s[52]=(o.nowrap?1:0);s[53]=o.onafterdrag;s[54]=o.onbeforedrag;s[55]=o.ondblclick;s[56]=o.ondrag;s[57]=o.ondrop;s[58]=o.onheaderClick;s[59]=o.onhide;s[60]=o.onkeypress;s[61]=o.onmouseoverClass;s[62]=o.onmultiselect;s[63]=o.onrefresh;s[64]=o.onselectrow;s[65]=o.onshow;s[66]=o.onunselectrow;s[67]=o.onupdate;s[68]=o.orderByClause;s[69]=o.overlayMode;s[70]=o.pageSize;s[71]=set.serializeList(o,o.parameters,true,'parameters');s[72]=o.queryClass;s[73]=o.queryName;s[74]=(o.refreshRequired?1:0);s[75]=o.renderFlag;s[76]=o.rowCount;s[77]=(o.rowSelect?1:0);s[78]=o.selectedIndex;s[79]=o.selectedRows;s[80]=(o.showFilters?1:0);s[81]=(o.showLabel?1:0);s[82]=o.showQuery;s[83]=(o.showRowNumbers?1:0);s[84]=(o.showRowSelector?1:0);s[85]=(o.showValueInTooltip?1:0);s[86]=(o.showZebra?1:0);s[87]=o.slice;s[88]=o.snapshotId;s[89]=o.sortOrder;s[90]=o.sql;s[91]=o.tableName;s[92]=o.title;s[93]=o.tuple;s[94]=(o.unlockSession?1:0);s[95]=(o.useKeys?1:0);s[96]=(o.useSnapshot?1:0);s[97]=o.valign;s[98]=('boolean'==typeof o.value?(o.value?1:0):o.value);s[99]=o.valueColumn;s[100]=(o.visible?1:0);s[101]=o.whereClause;s[102]=o.width;
}
function ZENTest_customTable_getSettings(s)
{
	s['name'] = 'string';
	s['columnName'] = 'string';
	s['countRows'] = 'integer';
	s['groupByClause'] = 'string';
	s['maxRows'] = 'integer';
	s['orderByClause'] = 'string';
	s['queryClass'] = 'className';
	s['queryName'] = 'classMember:QUERY';
	s['sql'] = 'sql';
	s['tableName'] = 'string';
	s['whereClause'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

self.ZENTest_customTable_FetchRowFromSnapshot = function(pIndex,pID,pRow,pCurrColumn,pSortOrder) {
	return zenClassMethod(this,'FetchRowFromSnapshot','L,L,L,L,L','BOOLEAN',arguments);
}

self.ZENTest_customTable_ReallyRefreshContents = function() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
self.ZENTest_customTable__Loader = function() {
	zenLoadClass('_ZEN_Component_tablePane');
	ZENTest_customTable.prototype = zenCreate('_ZEN_Component_tablePane',-1);
	var p = ZENTest_customTable.prototype;
	if (null==p) {return;}
	p.constructor = ZENTest_customTable;
	p.superClass = ('undefined' == typeof _ZEN_Component_tablePane) ? zenMaster._ZEN_Component_tablePane.prototype:_ZEN_Component_tablePane.prototype;
	p.__ZENcomponent = true;
	p._serverClass = 'ZENTest.customTable';
	p._type = 'customTable';
	p.serialize = ZENTest_customTable_serialize;
	p.getSettings = ZENTest_customTable_getSettings;
	p.FetchRowFromSnapshot = ZENTest_customTable_FetchRowFromSnapshot;
	p.ReallyRefreshContents = ZENTest_customTable_ReallyRefreshContents;
}
/* EOF */