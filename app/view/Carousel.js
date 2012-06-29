Ext.define('LitApp.view.Carousel',{

	extend: 'Ext.carousel.Carousel',
	xtype: 'carouselcard',
	
	config: {
		title: 'Some title',
		defaults: {
			styleHtmlContent: true
		},
		items: [{
			title: 'Item 3',
			html : 'Noget html i element 3'
		},{
			title: 'Item 4',
			html : 'Noget html i element 4'
		}]
	}
});