Ext.define('LitApp.view.Home',{
	extend: 'Ext.TabPanel',
	xtype: 'homecard',

	config: {
		title: 'Hjem',
		iconCls: 'home',
		defaults: {
			styleHtmlContent: true
		},
		items : [
			{
				title: 'Om',
				html: 	'<h1>Lykke IT er startet af Michael Lykke</h1><p>Noget mere om Lykke IT</p>'
			},
			{
				title: 'Design',
				html: 'Ja, jeg er jo ikke designer....'
			},
			{
				title: 'Mobil',
				html: 'Men du kan også få et mobilt website...'
			}
		]
	}
});