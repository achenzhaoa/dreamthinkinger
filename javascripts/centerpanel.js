/**
 * @class Ext.app.CenterPanel
 * @extends Object
 */
 
 Ext.define('Ext.app.CenterPanel',{
  extend:'Ext.panel.Panel',
	requires:[],
	initComponent:function(){
		Ext.apply(this,{
			layout:{
				type:'table',
				columns:3,
				border:false,
				frame:false
			},
			defaults:{
				xtype:'panel',
				width:130,
				height:130,
				border:true,
				frame:true
			},
			items:[{
				title:'test1'
			},{
				title:'test2'
			},{
				title:'test3'
			},{
				title:'test4'
			},{
				title:'test5'
			},{
				title:'test6'
			}]
		});
		this.callParent(arguments);
	}
 });
