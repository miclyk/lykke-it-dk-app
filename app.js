Ext.Loader.setConfig({
	enabled: true,
	paths: {
  		'Ext': 'touch/src'
	}
});

Ext.application({
    views: [
        'Main'
    ],
    name: 'LitApp',

    launch: function() {

        Ext.Viewport.add({
        	xclass:'LitApp.view.Main'
        });
    }

});
