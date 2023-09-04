/*** Zen Module: ZMdemo_jQM ***/

self._zenClassIdx['http://www.intersystems.com/zen/mojo/demo/jQM/baseTemplate'] = 'ZMdemo_jQM_baseTemplate';
self.ZMdemo_jQM_baseTemplate = function(index,id) {
	if (index>=0) {ZMdemo_jQM_baseTemplate__init(this,index,id);}
}

self.ZMdemo_jQM_baseTemplate__init = function(o,index,id) {
	('undefined' == typeof _ZEN_Mojo_Component_contentTemplate__init) ?zenMaster._ZEN_Mojo_Component_contentTemplate__init(o,index,id):_ZEN_Mojo_Component_contentTemplate__init(o,index,id);
}
function ZMdemo_jQM_baseTemplate_serialize(set,s)
{
	var o = this;s[0]='2350274433';s[1]=o.index;s[2]=o.id;s[3]=o.name;s[4]=set.addObject(o.parent,'parent');s[5]=set.addObject(o.composite,'composite');s[6]=o.align;s[7]=o.aux;s[8]=o.containerStyle;s[9]=(o.dragEnabled?1:0);s[10]=(o.dropEnabled?1:0);s[11]=(o.dynamic?1:0);s[12]=o.enclosingClass;s[13]=o.enclosingStyle;s[14]=o.error;s[15]=o.height;s[16]=(o.hidden?1:0);s[17]=o.hint;s[18]=o.hintClass;s[19]=o.hintStyle;s[20]=o.label;s[21]=o.labelClass;s[22]=o.labelDisabledClass;s[23]=o.labelStyle;s[24]=o.onafterdrag;s[25]=o.onbeforedrag;s[26]=o.ondrag;s[27]=o.ondrop;s[28]=o.onhide;s[29]=o.onrefresh;s[30]=o.onshow;s[31]=o.onupdate;s[32]=o.overlayMode;s[33]=o.renderFlag;s[34]=(o.showLabel?1:0);s[35]=o.slice;s[36]=o.title;s[37]=o.tuple;s[38]=o.valign;s[39]=(o.visible?1:0);s[40]=o.width;
}
function ZMdemo_jQM_baseTemplate_getSettings(s)
{
	s['name'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

self.ZMdemo_jQM_baseTemplate_animationDemo = function(startTime,step,initialWait) {
var stepsTaken = 0;
setTimeout(function() {
var mainView = zen('mainView');
mainView.pageManager.jQueryAnimation = 'fade';
mainView.pushDocument('form-demo',{dataKey:'animation-demo'});
},startTime+(step*stepsTaken));
stepsTaken++;
setTimeout(function() {
var mainView = zen('mainView');
mainView.pageManager.jQueryAnimation = 'pop';
mainView.pushDocument('form-demo',{dataKey:'animation-demo'});
setTimeout(function() {
var mainView = zen('mainView');
mainView.popDocument();
},step/2);
},startTime+(step*stepsTaken)+initialWait);
stepsTaken++;
setTimeout(function() {
var mainView = zen('mainView');
mainView.pageManager.jQueryAnimation = 'flip';
mainView.pushDocument('form-demo',{dataKey:'animation-demo'});
setTimeout(function() {
var mainView = zen('mainView');
mainView.popDocument();
},step/2);
},startTime+(step*stepsTaken)+initialWait);
stepsTaken++;
setTimeout(function() {
var mainView = zen('mainView');
mainView.pageManager.jQueryAnimation = 'turn';
mainView.pushDocument('form-demo',{dataKey:'animation-demo'});
setTimeout(function() {
var mainView = zen('mainView');
mainView.popDocument();
},step/2);
},startTime+(step*stepsTaken)+initialWait);
stepsTaken++;
setTimeout(function() {
var mainView = zen('mainView');
mainView.pageManager.jQueryAnimation = 'flow';
mainView.pushDocument('form-demo',{dataKey:'animation-demo'});
setTimeout(function() {
var mainView = zen('mainView');
mainView.popDocument();
},step/2);
},startTime+(step*stepsTaken)+initialWait);
stepsTaken++;
/*setTimeout(function() {
var mainView = zen('mainView');
mainView.pageManager.jQueryAnimation = 'slidefade';
mainView.pushDocument('form-demo',{dataKey:'animation-demo'});
setTimeout(function() {
var mainView = zen('mainView');
mainView.popDocument();
},step/2);
},startTime+(step*stepsTaken)+initialWait);
stepsTaken++;*/
setTimeout(function() {
var mainView = zen('mainView');
mainView.pageManager.jQueryAnimation = 'slide';
mainView.pushDocument('form-demo',{dataKey:'animation-demo'});
setTimeout(function() {
var mainView = zen('mainView');
mainView.popDocument();
},step/2);
},startTime+(step*stepsTaken)+initialWait);
stepsTaken++;
setTimeout(function() {
var mainView = zen('mainView');
mainView.pageManager.jQueryAnimation = 'slideup';
mainView.pushDocument('form-demo',{dataKey:'animation-demo'});
setTimeout(function() {
var mainView = zen('mainView');
mainView.popAll();
},step/2);
},startTime+(step*stepsTaken)+initialWait);
return startTime+(step*stepsTaken)+initialWait;
}

self.ZMdemo_jQM_baseTemplate_buttonsDemo = function(startTime,step,initialWait) {
var stepsTaken = 0;
setTimeout(function() {
var mainView = zen('mainView');
mainView.pushDocument('buttons-demo',{});
},startTime+(step*stepsTaken));
stepsTaken++;
setTimeout(function() {
var mainView = zen('mainView');
mainView.pushDocument('buttons-icons-demo',{});
},startTime+(step*stepsTaken)+initialWait);
stepsTaken++;
setTimeout(function() {
var mainView = zen('mainView');
mainView.pushDocument('buttons-grouped-demo',{});
},startTime+(step*stepsTaken)+initialWait);
return startTime+(step*stepsTaken)+initialWait;
}

self.ZMdemo_jQM_baseTemplate_checkboxDemo = function(startTime,step,initialWait) {
var stepsTaken = 0;
setTimeout(function() {
var mainView = zen('mainView');
mainView.pushDocument('checkbox-demo',{});
},startTime+(step*stepsTaken));
return startTime+(step*stepsTaken)+initialWait;
}

self.ZMdemo_jQM_baseTemplate_collapsibleDemo = function(startTime,step,initialWait) {
var stepsTaken = 0;
setTimeout(function() {
var mainView = zen('mainView');
mainView.pushDocument('collapsible-demo',{});
},startTime+(step*stepsTaken));
return startTime+(step*stepsTaken)+initialWait;
}

self.ZMdemo_jQM_baseTemplate_collapsiblesetDemo = function(startTime,step,initialWait) {
var stepsTaken = 0;
setTimeout(function() {
var mainView = zen('mainView');
mainView.pushDocument('collapsibleset-demo',{});
},startTime+(step*stepsTaken));
return startTime+(step*stepsTaken)+initialWait;
}

self.ZMdemo_jQM_baseTemplate_footerDemo = function(startTime,step,initialWait) {
var stepsTaken = 0;
setTimeout(function() {
var mainView = zen('mainView');
mainView.pushDocument('footer-demo',{});
},startTime+(step*stepsTaken));
stepsTaken++;
setTimeout(function() {
var mainView = zen('mainView');
mainView.pushDocument('complex-footer-demo',{});
},startTime+(step*stepsTaken)+initialWait);
return startTime+(step*stepsTaken)+initialWait;
}

self.ZMdemo_jQM_baseTemplate_formDemo = function(startTime,step,initialWait) {
var stepsTaken = 0;
setTimeout(function() {
var mainView = zen('mainView');
mainView.pushDocument('form-demo',{});
},startTime+(step*stepsTaken));
stepsTaken++;
setTimeout(function() {
var mainView = zen('mainView');
mainView.setControlValue('text-1','This is some text');
},startTime+(step*stepsTaken)+initialWait);
stepsTaken++;
setTimeout(function() {
var mainView = zen('mainView');
mainView.setControlValue('textarea-1','This is some more text. Let\s start playing around with the other form elements.');
},startTime+(step*stepsTaken)+initialWait);
stepsTaken++;
setTimeout(function() {
var mainView = zen('mainView');
mainView.setControlValue('check-1',true);
},startTime+(step*stepsTaken)+initialWait);
stepsTaken++;
setTimeout(function() {
var mainView = zen('mainView');
mainView.setControlValue('flip-1',1);
},startTime+(step*stepsTaken)+initialWait);
stepsTaken++;
setTimeout(function() {
var mainView = zen('mainView');
mainView.setControlValue('range-1',3333);
},startTime+(step*stepsTaken)+initialWait);
stepsTaken++;
setTimeout(function() {
var mainView = zen('mainView');
mainView.setControlValue('select-1',3);
},startTime+(step*stepsTaken)+initialWait);
return startTime+(step*stepsTaken)+initialWait;
}

self.ZMdemo_jQM_baseTemplate_getData = function(key,criteria) {
var data = {};
switch (key) {
case 'home':
data.sectionHeader = 'It starts here...';
break;
case 'form-demo':
data.sectionHeader = 'Forms';
break;
case 'maps-demo':
data.sectionHeader = 'Google Maps';
data.markers = [
{lat:59.1456566,lng:18.1988525,title:'Stockholm',draggable:true},
{lat:50.110922,lng:8.682127,title:'Frankfurt',draggable:false},
{address:'Paris, France',draggable:true,title:'Paris'}
];
break;
case 'panel-demo':
data.sectionHeader = 'Panels';
break;
case 'themes-demo':
data.sectionHeader = 'Themes';
break;
case 'footer-demo':
data.sectionHeader = 'Footers';
break;
case 'complex-footer-demo':
data.sectionHeader = 'Complex Footers';
break;
case 'simple-navbar-demo':
data.sectionHeader = 'Nav Bar';
break;
case 'icon-navbar-demo':
data.sectionHeader = 'Nav Bar With Icons';
break;
case 'animation-demo':
data.sectionHeader = 'Transitions';
break;
case 'checkbox-demo':
data.sectionHeader = 'Checkboxes';
break;
case 'radiobuttons-demo':
data.sectionHeader = 'Radio Buttons';
break;
case 'buttons-demo':
data.sectionHeader = 'Buttons';
break;
case 'buttons-icons-demo':
data.sectionHeader = 'Icon Buttons';
break;
case 'buttons-grouped-demo':
data.sectionHeader = 'Grouped Buttons';
break;
case 'listview-demo':
data.sectionHeader = 'List View';
data.elements = [
{label:'Audi',key:'Key 1'},
{label:'Acura',key:'Key 2'},
{label:'BMW',key:'Key 3'},
{label:'Honda',key:'Key 4'}
];
break;
case 'listview-filter-demo':
data.sectionHeader = 'List View With Filter';
data.elements = [
{label:'Audi',key:'Key 1'},
{label:'Acura',key:'Key 2'},
{label:'BMW',key:'Key 3'},
{label:'Honda',key:'Key 4'}
];
break;
case 'listview-divider-demo':
data.sectionHeader = 'List View with Dividers';
data.groups = [
{label:'Mail',elements:[{label:'Inbox',count:123},{label:'Outbox',count:2}]},
{label:'Contacts',elements:[{label:'Friends',count:5682},{label:'Work',count:2}]}
];
data.elements = [{label:'Homer Jay Simpson'},{label:'Marjorie "Marge" Simpson'},{label:'Bartholomew JoJo "Bart" Simpson'},{label:'J. Edgar Hoover'}];
break;
case 'listview-format-demo':
data.sectionHeader = 'List View Formats';
break;
case 'collapsible-demo':
data.sectionHeader = 'Collapsibles';
data.elements = [
{label:'More Money!',key:'Key 1'},
{label:'Less work!',key:'Key 2'}
];
break;
case 'collapsibleset-demo':
data.sectionHeader = 'Accordions';
data.elements = [
{label:'More Money!',key:'Key 1'},
{label:'Less work!',key:'Key 2'}
];
break;
case 'table-demo':
data.sectionHeader = 'Table Demo';
data.Stores = [
{Name:'Store 1',Location:'Location 1', Rating:1},
{Name:'Store 2',Location:'Location 2', Rating:2},
{Name:'Store 3',Location:'Location 3', Rating:3},
{Name:'Store 4',Location:'Location 4', Rating:4},
{Name:'Store 5',Location:'Location 5', Rating:5}
];
break;
case '':
data.sectionHeader = '';
break;
}
return data;
}

self.ZMdemo_jQM_baseTemplate_getLayout = function(key,criteria) {
var content = null;
var header = { type: '$header', caption: '=[sectionHeader]', fixed:true};
if (criteria && criteria.dataKey) {
data = zenPage.getContent('data',criteria.dataKey,{});
} else {
data = zenPage.getContent('data',key,{});
}
switch(key) {
case 'home' :
content = {
children:[
header,
{type:'$span',$content:'Let\'s get started.',hidden:true,key:'start-show-label'},
{type:'$button',caption:'Start demo',key:'start-show'},
{type:'$collapsible',dataTheme:'b',label:'... or jump directly',children:[
{type:'$listview',filter:true,key:'listview',children:[
{type:'$listviewitem',label:'Buttons',clickable:true,key:'goto' ,value:'buttons-demo'},
{type:'$listviewitem',label:'Buttons (Icons)',clickable:true,key:'goto' ,value:'buttons-icons-demo'},
{type:'$listviewitem',label:'Buttons (Grouped)',clickable:true,key:'goto' ,value:'buttons-grouped-demo'},
{type:'$listviewitem',label:'Checkboxes',clickable:true,key:'goto' ,value:'checkbox-demo'},
{type:'$listviewitem',label:'Collapsibles',clickable:true,key:'goto' ,value:'collapsible-demo'},
{type:'$listviewitem',label:'Collapsible Set (Accordion)',clickable:true,key:'goto' ,value:'collapsibleset-demo'},
{type:'$listviewitem',label:'Forms',clickable:true,key:'goto' ,value:'form-demo'},
{type:'$listviewitem',label:'Footer',clickable:true,key:'goto' ,value:'footer-demo'},
{type:'$listviewitem',label:'Footer (Complex)',clickable:true,key:'goto' ,value:'complex-footer-demo'},
{type:'$listviewitem',label:'List View',clickable:true,key:'goto' ,value:'listview-demo'},
{type:'$listviewitem',label:'List View (Filter)',clickable:true,key:'goto' ,value:'listview-filter-demo'},
{type:'$listviewitem',label:'List View (Divider)',clickable:true,key:'goto' ,value:'listview-divider-demo'},
{type:'$listviewitem',label:'List View (Format)',clickable:true,key:'goto' ,value:'listview-format-demo'},
{type:'$listviewitem',label:'Google Maps',clickable:true,key:'goto' ,value:'maps-demo'},
{type:'$listviewitem',label:'Navbar',clickable:true,key:'goto' ,value:'simple-navbar-demo'},
{type:'$listviewitem',label:'Navbar (Icons)',clickable:true,key:'goto' ,value:'icon-navbar-demo'},
{type:'$listviewitem',label:'Panel',clickable:true,key:'goto' ,value:'panel-demo'},
{type:'$listviewitem',label:'Radiobuttons',clickable:true,key:'goto' ,value:'radiobuttons-demo'},
{type:'$listviewitem',label:'Themes',clickable:true,key:'goto' ,value:'themes-demo'},
]},
]},
{type:'$popup',key:'going-back',transition:'flip',children:[
{type:'$controlgroup',children:[
{type:'$button',caption:'Let\'s relax a while.'},
{type:'$button',caption:'But this is not the end.'}
]}
]},
{type:'$popup',key:'still-loading',children:[
{type:'$controlgroup',children:[
{type:'$button',caption:'Sorry, still loading.'}
]}
]},
]
};
break;
case 'themes-demo':
content = {
sourceData:data,
children:[
header,
{type:'$form',children:[
{type:'$text',fieldcontain:true,placeHolder:'Enter some text',key:'text-1',label:'Text input:'},
{type:'$textarea',fieldcontain:true,placeHolder:'Enter some text',key:'textarea-1',label:'Text area:'},
{type:'$checkbox',fieldcontain:true,label:'Checkbox',text:'Do you want to select me?',key:'check-1'},
{type:'$select',fieldcontain:true,slider:true,label:'Flip-switch:',key:'flip-1',valueList:[{value:0,text:'off'},{value:1,text:'on'}],value:0},
{type:'$input',inputType:'range',highlight:true,fieldcontain:true,label:'Slider:',key:'range-1',min:100,max:5000,value:2000,text:2000},
{type:'$select',fieldcontain:true,slider:false,label:'Choose shipping method:',key:'select-1',valueList:[{value:0,text:'Standard: 7 days'},{value:1,text:'Rush: 3 days'},{value:2,text:'Express: next day'},{value:3,text:'Overnight'}],value:0},
{type:'$grid',showBox:true,barTheme:'d',children:[
{type:'$button',caption:'Cancel',key:'cancel-form-demo'},
{type:'$button',caption:'Submit',key:'submit-form-demo'}
]},
]},
{type:'$button',caption:'Theme 1',key:'changetheme',value:1},
{type:'$button',caption:'Theme 2',key:'changetheme',value:2},
{type:'$button',caption:'Theme 3',key:'changetheme',value:3},
{type:'$button',caption:'Theme 4',key:'changetheme',value:4},
{type:'$button',caption:'Theme 5',key:'changetheme',value:5},
{type:'$button',caption:'Theme 6',key:'changetheme',value:6}
]
};
break;
case 'maps-demo':
content = {
sourceData:data,
children:[
header,
{type:'$map',id:'map1',width:window.innerWidth,height:(window.innerHeight-96),
zoom:10,centerLat:50.11,centerLng:8.68,address:'Berlin, Germany',mapTypeId:google.maps.MapTypeId.HYBRID,
centerAtUser:true,showMarkerAtCenter:true,centerMarkerTitle:'This is your position',
centerMarkerDraggable:true,value:'=[markers]',children:[
{type:'$marker',lat:'=[lat]',lng:'=[lng]',address:'=[address]',title:'=[title]',draggable:'=[draggable]'},
]}
]
};
break;
case 'form-demo':
content = {
sourceData:data,
children:[
header,
{type:'$form',children:[
{type:'$text',fieldcontain:true,placeHolder:'Enter some text',key:'text-1',label:'Text input:'},
{type:'$textarea',fieldcontain:true,placeHolder:'Enter some text',key:'textarea-1',label:'Text area:'},
{type:'$checkbox',fieldcontain:true,label:'Checkbox',text:'Do you want to select me?',key:'check-1'},
{type:'$select',fieldcontain:true,slider:true,label:'Flip-switch:',key:'flip-1',valueList:[{value:0,text:'off'},{value:1,text:'on'}],value:0},
{type:'$input',inputType:'range',highlight:true,fieldcontain:true,label:'Slider:',key:'range-1',min:100,max:5000,value:2000,text:2000},
{type:'$select',fieldcontain:true,slider:false,label:'Choose shipping method:',key:'select-1',valueList:[{value:0,text:'Standard: 7 days'},{value:1,text:'Rush: 3 days'},{value:2,text:'Express: next day'},{value:3,text:'Overnight'}],value:0},
{type:'$grid',showBox:true,barTheme:'d',children:[
{type:'$button',caption:'Cancel',key:'cancel-form-demo'},
{type:'$button',caption:'Submit',key:'submit-form-demo'}
]},
{type:'$popup',key:'form-popup',children:[
{type:'$controlgroup',children:[
{type:'$button',caption:'Excited? We are just getting started!'},
{type:'$button',caption:'And yes, this is a popup.'}
]}
]}
]
}
]
};
break;
case 'buttons-demo':
content = {
sourceData:data,
children:[
header,
{type:'$form',children:[
{type:'$button',caption:'Standard Button',key:'action-1'},
{type:'$button',caption:'Disabled Button',disabled:true,key:'action-1'},
{type:'$button',caption:'Standard Mini Button',mini:true,key:'action-1'},
{type:'$button',caption:'No Corners',corners:false},
{type:'$button',caption:'No Shadow',shadow:false},
{type:'$button',inline:true,caption:'Inline'},
{type:'$button',inline:true,mini:true,caption:'Inline Mini'},
]}
]
};
break;
case 'buttons-icons-demo':
content = {
sourceData:data,
children:[
header,
{type:'$form',children:[
{type:'$controlgroup',horizontal:true,children:[
{type:'$button',dataiconpos:'notext',dataicon:'bars',caption:'Bars'},
{type:'$button',dataiconpos:'notext',dataicon:'edit'},
{type:'$button',dataiconpos:'notext',dataicon:'arrow-l'},
{type:'$button',dataiconpos:'notext',dataicon:'arrow-r'},
{type:'$button',dataiconpos:'notext',dataicon:'arrow-u'},
{type:'$button',dataiconpos:'notext',dataicon:'arrow-d'},
{type:'$button',dataiconpos:'notext',dataicon:'delete'},
{type:'$button',dataiconpos:'notext',dataicon:'plus'},
{type:'$button',dataiconpos:'notext',dataicon:'minus'},
{type:'$button',dataiconpos:'notext',dataicon:'check'}
]},
{type:'$controlgroup',horizontal:true,children:[
{type:'$button',dataiconpos:'notext',dataicon:'gear'},
{type:'$button',dataiconpos:'notext',dataicon:'refresh'},
{type:'$button',dataiconpos:'notext',dataicon:'forward'},
{type:'$button',dataiconpos:'notext',dataicon:'back'},
{type:'$button',dataiconpos:'notext',dataicon:'grid'},
{type:'$button',dataiconpos:'notext',dataicon:'star'},
{type:'$button',dataiconpos:'notext',dataicon:'alert'},
{type:'$button',dataiconpos:'notext',dataicon:'info'},
{type:'$button',dataiconpos:'notext',dataicon:'home'},
{type:'$button',dataiconpos:'notext',dataicon:'search'}
]},
{type:'$controlgroup',horizontal:true,children:[
{type:'$button',dataicon:'bars',caption:'Bars'},
{type:'$button',dataiconpos:'right',dataicon:'edit',caption:'Edit'},
]},
]}
]
};
break;
case 'buttons-grouped-demo':
content = {
sourceData:data,
children:[
header,
{type:'$form',children:[
{type:'$controlgroup',horizontal:true,children:[
{type:'$button',dataicon:'bars',caption:'Bars'},
{type:'$button',dataiconpos:'right',dataicon:'edit',caption:'Edit'},
]},
{type:'$controlgroup',children:[
{type:'$button',caption:'Yes'},
{type:'$button',caption:'No'},
{type:'$button',caption:'Maybe'}
]},
{type:'$grid',showBox:true,barTheme:'d',children:[
{type:'$button',caption:'Cancel',key:'cancel-form-demo'},
{type:'$button',caption:'Submit',key:'submit-form-demo'}
]},
]}
]
};
break;
case 'footer-demo':
content = {
sourceData:data,
children:[
header,
{type:'$footer',fixed:true,caption:'This is a simple footer',children:[
]}
]
}
break;
case 'complex-footer-demo':
content = {
sourceData:data,
children:[
header,
{type:'$footer',fixed:true,caption:'This is a complex footer',children:[
{type:'$grid',children:[
{type:'$controlgroup',children:[
{type:'$button',mini:true,caption:'Action 1',key:'footer-action-1'},
{type:'$button',mini:true,caption:'Action 2',key:'footer-action-2'},
]},
{type:'$select',mini:true,slider:false,label:'Choose shipping method:',key:'select-1',valueList:[{value:0,text:'Standard: 7 days'},{value:1,text:'Rush: 3 days'},{value:2,text:'Express: next day'},{value:3,text:'Overnight'}],value:0}
]}
]}
]
}
break;
case 'simple-navbar-demo':
content = {
sourceData:data,
children:[
{type:'$header', caption: '=[sectionHeader]', fixed:true, children:[
{type:'$navbar',children:[
{type:'$navbaritem',caption:'One',active:true},
{type:'$navbaritem',caption:'Two'},
{type:'$navbaritem',caption:'Three'},
{type:'$navbaritem',caption:'Four'},
{type:'$navbaritem',caption:'Five'},
{type:'$navbaritem',caption:'Six'}
]}
]},
{type:'$footer',fixed:true,caption:'Footer with simple navbar (theme \'e\')',children:[
{type:'$navbar',children:[
{type:'$navbaritem',dataTheme:'e',caption:'One',active:true},
{type:'$navbaritem',dataTheme:'e',caption:'Two'},
{type:'$navbaritem',dataTheme:'e',caption:'Three'}
]}
]}
]
}
break;
case 'icon-navbar-demo':
content = {
sourceData:data,
children:[
{type:'$header', caption: '=[sectionHeader]', fixed:true, children:[
{type:'$navbar',children:[
{type:'$navbaritem',caption:'One',active:true,icon:'grid'},
{type:'$navbaritem',caption:'Two',icon:'star'},
{type:'$navbaritem',caption:'Three',icon:'gear'},
]}
]},
{type:'$footer',fixed:true,caption:'Footer with simple navbar',children:[
{type:'$navbar',dataiconpos:'right',children:[
{type:'$navbaritem',caption:'One',active:true,icon:'grid'},
{type:'$navbaritem',caption:'Two',icon:'star'},
{type:'$navbaritem',caption:'Three',icon:'gear'},
]}
]}
]
}
break;
case 'panel-demo':
content = {
sourceData:data,
children:[
header,
{type:'$pagecontent',children:[
{type:'$button',caption:'Toogle left pane',key:'toggle-left-pane'},
{type:'$button',caption:'Toogle right pane',key:'toggle-right-pane'},
]},
{type:'$panel',key:'leftPanel',displayMode:'push',children:[
{type:'$controlgroup',children:[
{type:'$span',$content:'This is a panel on the left side'},
{type:'$button',caption:'Action 1'},
{type:'$button',caption:'Action 2'},
{type:'$button',caption:'Action 3'}
]},
]},
{type:'$panel',key:'rightPanel',position:'right',displayMode:'overlay',children:[
{type:'$controlgroup',children:[
{type:'$span',$content:'This is a panel on the right side with a different mode: \'overlay\'.'},
{type:'$button',caption:'Action 1'},
{type:'$button',caption:'Action 2'},
{type:'$button',caption:'Action 3'}
]},
]},
]
}
break;
case 'checkbox-demo':
content = {
sourceData:data,
children:[
header,
{type:'$form',children:[
{type:'$checkbox',label:'Standard Checkbox',key:'check-1'},
{type:'$checkbox',fieldcontain:true,label:'Checkbox',label:'Contained Checkbox',key:'check-1'},
{type:'$checkbox',mini:true,label:'Mini Checkbox',key:'check-1'},
{type:'$checkbox',dataiconpos:'right',label:'Right Icon',key:'check-1'},
{type:'$fieldset',label:'What do you prefer?',children:[
{type:'$checkbox',label:'Men-made',key:'check-1'},
{type:'$checkbox',label:'God-made',key:'check-1'},
]},
{type:'$fieldset',horizontal:true,label:'What do you want most?',children:[
{type:'$checkbox',label:'More money!',key:'check-1'},
{type:'$checkbox',label:'Less work!',key:'check-1'},
]},
]}
]
};
break;
case 'radiobuttons-demo':
content = {
sourceData:data,
children:[
header,
{type:'$form',children:[
{type:'$radio-button',text:'One',name:'radio-1',checked:true,key:'radio-1-one',optionValue:'One'},
{type:'$radio-button',text:'Two',name:'radio-1',key:'radio-1-two',optionValue:'Two'},
{type:'$fieldset',label:'Vertical',children:[
{type:'$radio-button',text:'One',name:'radio-2',checked:true,key:'radio-2-one',optionValue:'One'},
{type:'$radio-button',text:'Two',name:'radio-2',key:'radio-2-two',optionValue:'Two'},
]},
{type:'$fieldset',label:'Horizontal',horizontal:true,children:[
{type:'$radio-button',text:'One',name:'radio-3',checked:true,key:'radio-3-one',optionValue:'One'},
{type:'$radio-button',text:'Two',name:'radio-3',key:'radio-3-two',optionValue:'Two'},
]},
{type:'$fieldset',label:'Vertical Mini',mini:true,children:[
{type:'$radio-button',text:'One',name:'radio-4',checked:true,key:'radio-4-one',optionValue:'One'},
{type:'$radio-button',text:'Two',name:'radio-4',key:'radio-4-two',optionValue:'Two'},
]},
{type:'$fieldset',label:'Vertical Icon right',dataiconpos:'right',children:[
{type:'$radio-button',text:'One',name:'radio-5',checked:true,key:'radio-5-one',optionValue:'One'},
{type:'$radio-button',text:'Two',name:'radio-5',key:'radio-5-two',optionValue:'Two'},
]},
]}
]
};
break;
case 'listview-demo':
content = {
sourceData:data,
children:[
header,
{type:'$form',children:[
{type:'$span',$content:'List View'},
{type:'$listview',children:[
{type:'$listviewitem',label:'Audi'},
{type:'$listviewitem',label:'BMW'}
]},
{type:'$span',$content:'Ordered List View'},
{type:'$listview',ordered:true,children:[
{type:'$listviewitem',label:'Audi'},
{type:'$listviewitem',label:'BMW'}
]},
{type:'$span',$content:'Clickable List View'},
{type:'$listview',value:'=[elements]',children:[
{type:'$listviewitem',label:'=[label]',clickable:true,key:'=[key]'}
]},
{type:'$span',$content:'Inset List View (and custom icons)'},
{type:'$listview',value:'=[elements]',inset:true,children:[
{type:'$listviewitem',label:'=[label]',clickable:true,key:'=[key]',dataicon:'gear'}
]},
]}
]
};
break;
case 'listview-filter-demo':
content = {
sourceData:data,
children:[
header,
{type:'$form',children:[
{type:'$span',$content:'List View with reveal filter',style:'margin-bottom:10px'},
{type:'$listview',value:'=[elements]',inset:true,filter:true,filterplaceholder:'Search for cars...',filterreveal:true,children:[
{type:'$listviewitem',label:'=[label]',clickable:true,key:'=[key]'}
]},
{type:'$span',$content:'List View with filter',style:'margin-bottom:10px'},
{type:'$listview',value:'=[elements]',filter:true,filterplaceholder:'Search for cars...',children:[
{type:'$listviewitem',label:'=[label]',clickable:true,key:'=[key]'}
]},
]}
]
};
break;
case 'listview-divider-demo':
content = {
sourceData:data,
children:[
header,
{type:'$form',children:[
{type:'$span',$content:'List View with Divider (and bubbles)',style:'margin-bottom:10px'},
{type:'$listview',value:'=[groups]',children:[
{type:'$listviewitem',label:'=[label]',divider:true},
{type:'$loop',value:'=[elements]',children:[
{type:'$listviewitem',label:'=[label]',count:'=[count]',clickable:true},
]}
]},
{type:'$span',$content:'List View with filter and autodividers',style:'margin-bottom:10px'},
{type:'$listview',value:'=[elements]',inset:true,filter:true,autodividers:true,children:[
{type:'$listviewitem',label:'=[label]',clickable:true}
]},
]}
]
};
break;
case 'listview-format-demo':
content = {
sourceData:data,
children:[
header,
{type:'$form',children:[
{type:'$span',$content:'Thumbnails and custom content',style:'margin-bottom:10px'},
{type:'$listview',children:[
{type:'$listviewitem',thumbnail:'covers/13152112_s.jpg',key:'money',clickable:true,children:[
{type:'$content',content:'<h2>Money</h2><p>For everyone</p>'}
]},
{type:'$listviewitem',thumbnail:'covers/9105872_s.jpg',key:'city',clickable:true,children:[
{type:'$content',content:'<h2>City</h2><p>Enjoy the skyline</p>'}
]},
]},
{type:'$span',$content:'Formatted content',style:'margin-bottom:10px'},
{type:'$listview',children:[
{type:'$listviewitem',label:'Friday, August 23, 2013',divider:true},
{type:'$listviewitem',clickable:true,children:[
{type:'$content',content:'<h2>The Demo Team</h2><p><strong>You have been invited to a meeting in Boston</strong></p><p>Are you available tomorrow at 10am?</p><p class="ui-li-aside"><strong>6:24</strong>PM</p>'}
]},
{type:'$listviewitem',clickable:true,children:[
{type:'$content',content:'<h2>Coffee House</h2><p><strong>We found a new mixture!</strong></p><p>Let\'s try the new apple-cinnamon coffee with crumble topping.</p> <p class="ui-li-aside"><strong>1:32</strong>PM</p>'}
]},
]}
]}
]
};
break;
case 'collapsible-demo':
content = {
sourceData:data,
children:[
header,
{type:'$form',children:[
{type:'$collapsible',label:'This is collapsible',value:'=[elements]',children:[
{type:'$checkbox',label:'=[label]',key:'=[key]'}
]},
{type:'$collapsible',dataContentTheme:'b',label:'This collapsible uses a theme',value:'=[elements]',children:[
{type:'$checkbox',label:'=[label]',key:'=[key]'}
]},
{type:'$collapsible',dataContentTheme:'d',expanded:true,label:'This themed collapsible is expanded',value:'=[elements]',children:[
{type:'$checkbox',label:'=[label]',key:'=[key]'}
]},
{type:'$collapsible',mini:true,label:'This is a mini collapsible',value:'=[elements]',children:[
{type:'$checkbox',label:'=[label]',key:'=[key]'}
]},
{type:'$collapsible',dataiconpos:'right',collapsedicon:'arrow-d',expandedicon:'arrow-u',label:'Icons',value:'=[elements]',children:[
{type:'$checkbox',label:'=[label]',key:'=[key]'}
]},
{type:'$collapsible',inset:false,label:'Non-Inset',children:[
{type:'$checkbox',label:'More money!',key:'check-1'},
{type:'$checkbox',label:'Less work!',key:'check-1'},
]},
]}
]
};
break;
case 'collapsibleset-demo':
content = {
sourceData:data,
children:[
header,
{type:'$form',children:[
{type:'$collapsibleset',children:[
{type:'$collapsible',label:'Section 1',value:'=[elements]',children:[
{type:'$checkbox',label:'=[label]',key:'=[key]'}
]},
{type:'$collapsible',expanded:true,label:'Section 2',value:'=[elements]',children:[
{type:'$checkbox',label:'=[label]',key:'=[key]'}
]}
]},
{type:'$collapsibleset',inset:false,children:[
{type:'$collapsible',label:'Non-inset Section 1',value:'=[elements]',children:[
{type:'$checkbox',label:'=[label]',key:'=[key]'}
]},
{type:'$collapsible',label:'Non-inset Section 2',value:'=[elements]',children:[
{type:'$checkbox',label:'=[label]',key:'=[key]'}
]}
]},
{type:'$collapsibleset',mini:true,children:[
{type:'$collapsible',mini:true,label:'Mini Section 1',value:'=[elements]',children:[
{type:'$checkbox',mini:true,label:'=[label]',key:'=[key]'}
]},
{type:'$collapsible',mini:true,label:'Mini Section 2',value:'=[elements]',children:[
{type:'$checkbox',mini:true,label:'=[label]',key:'=[key]'}
]}
]},
{type:'$collapsibleset',collapsedicon:'arrow-d',expandedicon:'arrow-u',children:[
{type:'$collapsible',label:'Icon Section 1',value:'=[elements]',children:[
{type:'$checkbox',label:'=[label]',key:'=[key]'}
]},
{type:'$collapsible',label:'Right Icon Section 2',dataiconpos:'right',value:'=[elements]',children:[
{type:'$checkbox',label:'=[label]',key:'=[key]'}
]}
]},
{type:'$collapsibleset',corners:false,children:[
{type:'$collapsible',label:'No Corners Section 1',value:'=[elements]',children:[
{type:'$checkbox',label:'=[label]',key:'=[key]'}
]},
{type:'$collapsible',label:'No Corners Section 2',value:'=[elements]',children:[
{type:'$checkbox',label:'=[label]',key:'=[key]'}
]}
]}
]}
]
};
break;
}
return content;
}

self.ZMdemo_jQM_baseTemplate_listviewDemo = function(startTime,step,initialWait) {
var stepsTaken = 0;
setTimeout(function() {
var mainView = zen('mainView');
mainView.pushDocument('listview-demo',{});
},startTime+(step*stepsTaken));
stepsTaken++;
setTimeout(function() {
var mainView = zen('mainView');
mainView.pushDocument('listview-filter-demo',{});
},startTime+(step*stepsTaken)+initialWait);
stepsTaken++;
setTimeout(function() {
var mainView = zen('mainView');
mainView.pushDocument('listview-divider-demo',{});
},startTime+(step*stepsTaken)+initialWait);
stepsTaken++;
setTimeout(function() {
var mainView = zen('mainView');
mainView.pushDocument('listview-format-demo',{});
},startTime+(step*stepsTaken)+initialWait);
stepsTaken++;
return startTime+(step*stepsTaken)+initialWait;
}

self.ZMdemo_jQM_baseTemplate_navbarDemo = function(startTime,step,initialWait) {
var stepsTaken = 0;
setTimeout(function() {
var mainView = zen('mainView');
mainView.pushDocument('simple-navbar-demo',{});
},startTime+(step*stepsTaken));
stepsTaken++;
setTimeout(function() {
var mainView = zen('mainView');
mainView.pushDocument('icon-navbar-demo',{});
},startTime+(step*stepsTaken)+initialWait);
return startTime+(step*stepsTaken)+initialWait;
}

self.ZMdemo_jQM_baseTemplate_onGetContent = function(which,key,criteria) {
switch (which)
{
case 'layout':
return this.getLayout(key,criteria);
case 'data':
return this.getData(key,criteria);
}
return null;
}

self.ZMdemo_jQM_baseTemplate_onchange = function(key,value,final,docViewId) {
console.log('change ' + key + ' to ' + value);
var view = zen(docViewId);
switch(key) {
}
}

self.ZMdemo_jQM_baseTemplate_onselect = function(key,value,docViewId) {
var mainView = zen(docViewId);
switch(key) {
case 'goto':
mainView.pushDocument(value,{},value,{});
break;
case 'start-show':
mainView.getItemByKey('start-show').$hide();
mainView.getItemByKey('start-show-label').$show();
$.mobile.showPageLoadingMsg("a", "Preparing the demo. Yes this is a loading screen!", false);
var lastTime = 0;
var startTime = 2000;
setTimeout(function() {
$.mobile.hidePageLoadingMsg();
},startTime);
console.log('start forms demo at: '+startTime);
lastTime = this.formDemo(startTime,1200,300);
console.log('finish forms demo at: '+lastTime);
startTime = lastTime + 1400; // 16000
setTimeout(function() {
var mainView = zen('mainView');
mainView.getPluginByLayoutObjectType('$popup').showPopup('form-popup');
},startTime);
setTimeout(function() {
var mainView = zen('mainView');
mainView.getPluginByLayoutObjectType('$popup').closePopup('form-popup');
},startTime+1800);
lastTime = startTime + 1800;
startTime = lastTime + 500;
console.log('start buttons demo at: '+startTime);
lastTime = this.buttonsDemo(startTime,2500,0);
console.log('finish buttons demo at: '+lastTime);
startTime = lastTime + 2500;
console.log('start checkbox demo at: '+startTime);
lastTime = this.checkboxDemo(startTime,2500,0);
console.log('finish checkbox demo at: '+lastTime);
startTime = lastTime + 2500;
console.log('start radiobuttons demo at: '+startTime);
lastTime = this.radiobuttonsDemo(startTime,2500,0);
console.log('finish radiobuttons demo at: '+lastTime);
startTime = lastTime + 2500;
console.log('start collapsible demo at: '+startTime);
lastTime = this.collapsibleDemo(startTime,2500,0);
console.log('finish collapsible demo at: '+lastTime);
startTime = lastTime + 2500;
console.log('start collapsibleset demo at: '+startTime);
lastTime = this.collapsiblesetDemo(startTime,2500,0);
console.log('finish collapsibleset demo at: '+lastTime);
startTime = lastTime + 2500;
console.log('start footer demo at: '+startTime);
lastTime = this.footerDemo(startTime,2500,0);
console.log('finish footer demo at: '+lastTime);
startTime = lastTime + 2500;
console.log('start navbar demo at: '+startTime);
lastTime = this.navbarDemo(startTime,2500,0);
console.log('finish navbar demo at: '+lastTime);
startTime = lastTime + 2500;
setTimeout(function() {
var mainView = zen('mainView');
mainView.popAll();
mainView.getPluginByLayoutObjectType('$popup').showPopup('going-back');
},startTime);
setTimeout(function() {
var mainView = zen('mainView');;
mainView.getPluginByLayoutObjectType('$popup').closePopup('going-back');
},startTime+2000);
lastTime = startTime + 2000;
startTime = lastTime + 1000;
console.log('start panels demo at: '+startTime);
lastTime = this.panelsDemo(startTime,1500,500);
console.log('finish panels demo at: '+lastTime);
startTime = lastTime + 1000;
console.log('start listview demo at: '+startTime);
lastTime = this.listviewDemo(startTime,2500,0);
console.log('finish listview demo at: '+lastTime);
startTime = lastTime + 2500;
console.log('start themes demo at: '+startTime);
lastTime = this.themesDemo(startTime,750,0);
console.log('finish themes demo at: '+lastTime);
startTime = lastTime + 1000;
console.log('start animations demo at: '+startTime);
lastTime = this.animationDemo(startTime,2500,0);
console.log('finish animations demo at: '+lastTime);
break;
case 'toggle-left-pane':
mainView.getPluginByLayoutObjectType('$popup').togglePanel('leftPanel');
break;
case 'toggle-right-pane':
mainView.getPluginByLayoutObjectType('$popup').togglePanel('rightPanel');
break;
case 'changetheme':
switch (value) {
case 1:
mainView.getPluginByName(zenPage._latestjQMVersion).changeTheme('a','c','c');
break;
case 2:
mainView.getPluginByName(zenPage._latestjQMVersion).changeTheme('b','e','e');
break;
case 3:
mainView.getPluginByName(zenPage._latestjQMVersion).changeTheme('c','a','a');
break;
case 4:
mainView.getPluginByName(zenPage._latestjQMVersion).changeTheme('d','b','b');
break;
case 5:
mainView.getPluginByName(zenPage._latestjQMVersion).changeTheme('e','d','d');
break;
case 6:
mainView.getPluginByName(zenPage._latestjQMVersion).changeTheme('c','a','a');
break;
}
}
}

self.ZMdemo_jQM_baseTemplate_panelsDemo = function(startTime,step,initialWait) {
var stepsTaken = 0;
setTimeout(function() {
var mainView = zen('mainView');
mainView.pushDocument('panel-demo',{});
},startTime+(step*stepsTaken));
stepsTaken++;
setTimeout(function() {
var mainView = zen('mainView');
mainView.getPluginByLayoutObjectType('$popup').openPanel('leftPanel');
},startTime+(step*stepsTaken)+initialWait);
stepsTaken++;
setTimeout(function() {
var mainView = zen('mainView');
mainView.getPluginByLayoutObjectType('$popup').closePanel('leftPanel');
},startTime+(step*stepsTaken)+initialWait);
stepsTaken++;
setTimeout(function() {
var mainView = zen('mainView');
mainView.getPluginByLayoutObjectType('$popup').openPanel('rightPanel');
},startTime+(step*stepsTaken)+initialWait);
stepsTaken++;
setTimeout(function() {
var mainView = zen('mainView');
mainView.getPluginByLayoutObjectType('$popup').closePanel('rightPanel');
},startTime+(step*stepsTaken)+initialWait);
return startTime+(step*stepsTaken)+initialWait;
}

self.ZMdemo_jQM_baseTemplate_radiobuttonsDemo = function(startTime,step,initialWait) {
var stepsTaken = 0;
setTimeout(function() {
var mainView = zen('mainView');
mainView.pushDocument('radiobuttons-demo',{});
},startTime+(step*stepsTaken));
return startTime+(step*stepsTaken)+initialWait;
}

self.ZMdemo_jQM_baseTemplate_themesDemo = function(startTime,step,initialWait) {
var stepsTaken = 0;
setTimeout(function() {
var mainView = zen('mainView');
mainView.pushDocument('form-demo',{dataKey:'themes-demo'});
},startTime+(step*stepsTaken));
stepsTaken++;
setTimeout(function() {
var mainView = zen('mainView');
mainView.getPluginByName(zenPage._latestjQMVersion).changeTheme('a','c','c');
},startTime+(step*stepsTaken)+initialWait);
stepsTaken++;
setTimeout(function() {
var mainView = zen('mainView');
mainView.getPluginByName(zenPage._latestjQMVersion).changeTheme('b','e','e');
},startTime+(step*stepsTaken)+initialWait);
stepsTaken++;
setTimeout(function() {
var mainView = zen('mainView');
mainView.getPluginByName(zenPage._latestjQMVersion).changeTheme('c','a','a');
},startTime+(step*stepsTaken)+initialWait);
stepsTaken++;
setTimeout(function() {
var mainView = zen('mainView');
mainView.getPluginByName(zenPage._latestjQMVersion).changeTheme('d','b','b');
},startTime+(step*stepsTaken)+initialWait);
stepsTaken++;
setTimeout(function() {
var mainView = zen('mainView');
mainView.getPluginByName(zenPage._latestjQMVersion).changeTheme('e','d','d');
},startTime+(step*stepsTaken)+initialWait);
stepsTaken++;
setTimeout(function() {
var mainView = zen('mainView');
mainView.getPluginByName(zenPage._latestjQMVersion).changeTheme('c','a','a');
},startTime+(step*stepsTaken)+initialWait);
return startTime+(step*stepsTaken)+initialWait;
}

self.ZMdemo_jQM_baseTemplate_ReallyRefreshContents = function() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
self.ZMdemo_jQM_baseTemplate__Loader = function() {
	zenLoadClass('_ZEN_Mojo_Component_contentTemplate');
	ZMdemo_jQM_baseTemplate.prototype = zenCreate('_ZEN_Mojo_Component_contentTemplate',-1);
	var p = ZMdemo_jQM_baseTemplate.prototype;
	if (null==p) {return;}
	p.constructor = ZMdemo_jQM_baseTemplate;
	p.superClass = ('undefined' == typeof _ZEN_Mojo_Component_contentTemplate) ? zenMaster._ZEN_Mojo_Component_contentTemplate.prototype:_ZEN_Mojo_Component_contentTemplate.prototype;
	p.__ZENcomponent = true;
	p._serverClass = 'ZMdemo.jQM.baseTemplate';
	p._type = 'baseTemplate';
	p.serialize = ZMdemo_jQM_baseTemplate_serialize;
	p.getSettings = ZMdemo_jQM_baseTemplate_getSettings;
	p.ReallyRefreshContents = ZMdemo_jQM_baseTemplate_ReallyRefreshContents;
	p.animationDemo = ZMdemo_jQM_baseTemplate_animationDemo;
	p.buttonsDemo = ZMdemo_jQM_baseTemplate_buttonsDemo;
	p.checkboxDemo = ZMdemo_jQM_baseTemplate_checkboxDemo;
	p.collapsibleDemo = ZMdemo_jQM_baseTemplate_collapsibleDemo;
	p.collapsiblesetDemo = ZMdemo_jQM_baseTemplate_collapsiblesetDemo;
	p.footerDemo = ZMdemo_jQM_baseTemplate_footerDemo;
	p.formDemo = ZMdemo_jQM_baseTemplate_formDemo;
	p.getData = ZMdemo_jQM_baseTemplate_getData;
	p.getLayout = ZMdemo_jQM_baseTemplate_getLayout;
	p.listviewDemo = ZMdemo_jQM_baseTemplate_listviewDemo;
	p.navbarDemo = ZMdemo_jQM_baseTemplate_navbarDemo;
	p.onGetContent = ZMdemo_jQM_baseTemplate_onGetContent;
	p.onchange = ZMdemo_jQM_baseTemplate_onchange;
	p.onselect = ZMdemo_jQM_baseTemplate_onselect;
	p.panelsDemo = ZMdemo_jQM_baseTemplate_panelsDemo;
	p.radiobuttonsDemo = ZMdemo_jQM_baseTemplate_radiobuttonsDemo;
	p.themesDemo = ZMdemo_jQM_baseTemplate_themesDemo;
}
/* EOF */