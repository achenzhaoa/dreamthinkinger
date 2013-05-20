Ext.define('Ext.app.MySelf',{
  extend:'Ext.panel.Panel',
	requires:['Ext.XTemplate'],
	initComponent:function(){
		this.data = [{
			name:'test.png'},{
			name:'test2.png'
			}];
			
	   this.tpl = new Ext.XTemplate(
	       '<div class="tableLayout">',
				'<div class="leftIcon"></div>',
				'<div class="centerIcon">'
					'<img class="picImg" src="{name}"></img>'
				'</div>',
				'<div class="rightIcon"></div>',
		   '</div>',
		   '<ol class="zero">',
			   '<li><a href="#">1</a><li>',
			   '<li><a href="#">2</a><li>',
			   '<li><a href="#">3</a><li>',
			   '<li><a href="#">4</a><li>',
			   '<li><a href="#">5</a><li>',
			'</ol>'
	   );
	   this.callParent(arguments);
	},
	afterRender:function(){
		this.callParent(arguments);
		this.tpl.overwrite(this.body,this.data[0]);
	}
});
