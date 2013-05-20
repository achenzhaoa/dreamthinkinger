/**
 * @class Ext.app.Toolbar
 * @extends Object
 */
 
 Ext.define('Ext.app.Toolbar',{
  extend:'Ext.container.Container',
	requires:[],
	initComponent:function(){
	   Ext.apply(this,{
		  height:30,
		  html:'Home'
	   });
	   this.callParent(arguments);
	}
 
 });
