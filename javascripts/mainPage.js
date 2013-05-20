/**
 * @class Ext.app.Portal
 * @extends Object
 * The topest class
 */
Ext.define('Ext.app.Portal',{
    extend:'Ext.panel.Panel',
  requires:[
		'Ext.app.Toolbar',
		'Ext.app.CenterPanel'
	],
	initComponent:function(){
		Ext.apply(this,{
			layout:{
			  type:'border',
			  padding:'0 5 5 5',
			  margin:'0 10 0 10'
			},
			items:[
			  Ext.create('Ext.app.Toolbar',{
				region:'north'
			  }),
			  Ext.create('Ext.app.CenterPanel',{
				region:'center'
			  })
			]
		});
		this.callParent(arguments);
	},
	
});
