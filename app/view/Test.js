Ext.define('LitApp.view.Test',{
	extend: 'Ext.TabPanel',
	xtype: 'testcard',

	requires: [
		'LitApp.view.Carousel'
	],

	config: {
		title: 'Test',
		iconCls: 'photo',

		defaults: {
			styleHtmlContent: true
		},

		items : [{
			xtype: 'carouselcard'
		},{
			title: 'Item 2',
			html: 'Her er bare noget statisk indhold'
		}]
	}
});